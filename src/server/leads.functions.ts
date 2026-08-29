import { getRequestIP } from "@tanstack/react-start/server";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { checkRateLimit } from "./rate-limit.js";
import { saveLead, sendDownloadEmail } from "./leads.server.js";

const LeadSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  businessTitle: z.string().min(1).max(200),
  whatsappCountryCode: z.string().min(1).max(6),
  whatsappNumber: z.string().min(4).max(20),
  emailConsent: z.boolean().default(false),
  whatsappConsent: z.boolean().default(false),
  // Honeypot: real users never see or fill this field. Bots that auto-fill every
  // input trip it, so a non-empty value is treated as spam.
  website: z.string().max(200).optional().default(""),
  // Timestamp (ms) captured when the form first rendered client-side, used to
  // reject submissions that arrive faster than a human could plausibly fill the form.
  renderedAt: z.number().optional(),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator(LeadSchema)
  .handler(async ({ data }) => {
    // Honeypot tripped — pretend success so the bot doesn't learn to avoid this field.
    if (data.website) {
      return { ok: true, emailSent: false };
    }

    // Filled in under 1.5s — no human fills a 4-field form that fast.
    if (typeof data.renderedAt === "number" && Date.now() - data.renderedAt < 1500) {
      return { ok: true, emailSent: false };
    }

    const ip = getRequestIP({ xForwardedFor: true }) || "unknown";

    const ipLimit = await checkRateLimit(`ip:${ip}`, { max: 5, windowMs: 15 * 60 * 1000 });
    const emailLimit = await checkRateLimit(`email:${data.email.toLowerCase()}`, {
      max: 3,
      windowMs: 60 * 60 * 1000,
    });
    if (!ipLimit.allowed || !emailLimit.allowed) {
      throw new Error("Too many requests — please try again later.");
    }

    await saveLead({
      name: data.name,
      email: data.email,
      businessTitle: data.businessTitle,
      whatsappCountryCode: data.whatsappCountryCode,
      whatsappNumber: data.whatsappNumber,
      emailConsent: data.emailConsent,
      whatsappConsent: data.whatsappConsent,
    });
    const emailResult = await sendDownloadEmail(data.email, data.name);
    return { ok: true, emailSent: emailResult.sent };
  });
