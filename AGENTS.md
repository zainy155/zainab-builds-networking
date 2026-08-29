# AGENTS.md

Overview of this codebase for AI agents and developers picking up the project.

## What this is

Marketing landing page for **Networking**, a Claude Code / Codex CLI plugin built by Build
by Zainab. The page pitches the plugin, captures leads through a form, and on submission
unlocks a download + install-instructions panel plus an optional tipping section.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19, file-based routing) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4, custom CSS variables in `src/styles.css` |
| Database | Netlify Database (Postgres) via Drizzle ORM |
| Email | Resend API (optional — see Environment Variables) |
| Deployment | Netlify |

## Directory structure

```
db/
  schema.ts            # Drizzle schema — the `leads` table
  index.ts             # Drizzle client (Netlify Database adapter)
netlify/database/migrations/  # Auto-applied SQL migrations, generated via drizzle-kit
src/
  routes/
    __root.tsx         # Root HTML shell, fonts, meta tags
    index.tsx          # The landing page: nav, hero, intent strip, features, footer
  components/
    LeadCaptureCard.tsx  # The form + success-state switch
    SuccessPanel.tsx     # Downloads + install instructions + support section
    SupportSection.tsx   # "Support the Developer" tipping UI
    CountryCodeSelect.tsx  # WhatsApp country-code <select>
  server/
    leads.functions.ts   # createServerFn: submitLead (POST)
    leads.server.ts      # DB insert + Resend email helper
  data/
    country-codes.ts   # Dial codes shown in the WhatsApp field
public/
  downloads/          # networking.zip and the PDF guide, served as static files
  brand/              # Build by Zainab logo
```

## How the lead flow works

1. `LeadCaptureCard` collects name, email, business title, and a WhatsApp number
   (country-code select + digits).
2. Submitting calls the `submitLead` server function (`src/server/leads.functions.ts`),
   which validates input with Zod, inserts a row into the `leads` table, and attempts to
   send a follow-up email via Resend.
3. On success, the card swaps to `SuccessPanel`: two download buttons (pointing at the
   static files in `public/downloads/`), the Claude/ChatGPT install instructions, and the
   `SupportSection` tipping component.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | No | Enables the "email a copy of the downloads" step. Without it, the submission still saves to the database and the success panel still shows — the email send is skipped and logged. |
| `RESEND_FROM_EMAIL` | No | Overrides the "from" address used for that email. |

## Database

Schema lives in `db/schema.ts` (a single `leads` table). Any schema change needs a new
migration via `npx drizzle-kit generate --name <description>` — Netlify applies migrations
automatically on deploy, they are never run by hand.

## Conventions

- Components are function components in PascalCase files under `src/components/`.
- Brand colors are `#9483bb` (plum) and `#9bbfc7` (seafoam), used as literal hex values in
  Tailwind classes rather than a theme config — kept intentional and easy to grep.
- Headings use the "Space Grotesk" display font (`.font-display` / `h1`–`h3`), body copy
  uses "Manrope".

## Local development

```bash
npm run dev      # vite dev, port 3000
```

Use the Netlify CLI (`netlify dev`) instead when you need the database, server functions,
and static asset serving to behave exactly as they do in production.
