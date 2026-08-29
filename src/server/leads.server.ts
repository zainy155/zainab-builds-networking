import { db } from "../../db/index.js";
import { leads } from "../../db/schema.js";

export interface LeadInput {
  name: string;
  email: string;
  businessTitle: string;
  whatsappCountryCode: string;
  whatsappNumber: string;
  emailConsent: boolean;
  whatsappConsent: boolean;
}

export async function saveLead(input: LeadInput) {
  const [row] = await db
    .insert(leads)
    .values({
      name: input.name,
      email: input.email,
      businessTitle: input.businessTitle,
      whatsappCountryCode: input.whatsappCountryCode,
      whatsappNumber: input.whatsappNumber,
      emailConsent: input.emailConsent,
      whatsappConsent: input.whatsappConsent,
    })
    .returning();
  return row;
}

function siteOrigin() {
  return process.env.URL || process.env.DEPLOY_PRIME_URL || "https://superb-mochi-bc0bf5.netlify.app";
}

export async function sendDownloadEmail(to: string, name: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log(`[email] RESEND_API_KEY not configured — skipped sending download email to ${to}`);
    return { sent: false };
  }

  const origin = siteOrigin();
  const zipUrl = `${origin}/downloads/networking.zip`;
  const guideUrl = `${origin}/downloads/networking-plugin-guide.pdf`;

  const html = `
    <div style="font-family: Manrope, Arial, sans-serif; color: #2b2438; max-width: 560px; margin: 0 auto;">
      <h2 style="color: #6f5a99;">Your Networking plugin is ready, ${escapeHtml(name)}</h2>
      <p>Thanks for grabbing the Networking plugin for Claude. Here are your files:</p>
      <p>
        <a href="${zipUrl}" style="display:inline-block;background:#9483BB;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;margin-right:8px;">Download Plugin (.zip)</a>
        <a href="${guideUrl}" style="display:inline-block;background:#9BBFC7;color:#2b2438;padding:10px 18px;border-radius:8px;text-decoration:none;">Download Guide (PDF)</a>
      </p>
      <h3>To install the plugin on Claude:</h3>
      <ul>
        <li>Upload the networking.zip file attached under Customize &rarr; Plugins &rarr; Add &rarr; Upload a plugin.</li>
      </ul>
      <h3>To install the plugin on ChatGPT:</h3>
      <ul>
        <li>In ChatGPT Desktop: Go to Settings &gt; Import, select Claude Code or Claude Cowork as your source, and pick the instructions, skills, or plugins you want to bring over.</li>
        <li>In Codex CLI: Type /import to pull your project-level configurations and connected tools directly into your active workspace.</li>
      </ul>
      <p style="color:#6b6478;font-size:13px;margin-top:32px;">Sent by Build by Zainab</p>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL || "Build by Zainab <onboarding@resend.dev>",
      to,
      subject: "Your Networking plugin download + install guide",
      html,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`[email] Resend request failed (${res.status}): ${body}`);
    return { sent: false };
  }

  return { sent: true };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
