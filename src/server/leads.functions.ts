import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { saveLead, sendDownloadEmail } from "./leads.server.js";

const LeadSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  businessTitle: z.string().min(1).max(200),
  whatsappCountryCode: z.string().min(1).max(6),
  whatsappNumber: z.string().min(4).max(20),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator(LeadSchema)
  .handler(async ({ data }) => {
    await saveLead(data);
    const emailResult = await sendDownloadEmail(data.email, data.name);
    return { ok: true, emailSent: emailResult.sent };
  });
