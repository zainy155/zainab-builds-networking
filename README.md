# Networking — landing page

Marketing site for **Networking**, a Claude Code / Codex CLI plugin by Build by Zainab
that researches companies and contacts through the lens of *why* you're reaching out
(job search, prospecting, partnerships, fundraising, or hiring).

The page pitches the plugin, collects a lead through a short form (name, email, business
title, WhatsApp number), and on submission unlocks a panel with the plugin download, the
PDF guide, install instructions for Claude and ChatGPT, and an optional tipping section.

## Tech stack

- TanStack Start (React 19) + Vite 7
- Tailwind CSS 4
- Netlify Database (Postgres) via Drizzle ORM, for storing form submissions
- Resend (optional) for emailing a copy of the downloads
- Deployed on Netlify

## Running locally

```bash
npm install
netlify dev
```

`netlify dev` is preferred over `npm run dev` because it emulates the Netlify Database
connection and server functions the same way production does.

## Environment variables

Set these in the Netlify UI (or a local `.env`) if you want the confirmation email to
actually send — without them the form still works and still saves to the database, the
email step is just skipped:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL` (optional, defaults to a Resend sandbox address)

## Project layout

See `AGENTS.md` for a full breakdown of the directory structure and the lead-capture flow.
