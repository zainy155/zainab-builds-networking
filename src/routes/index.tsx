import { createFileRoute } from '@tanstack/react-router'
import { LeadCaptureCard } from '../components/LeadCaptureCard'

export const Route = createFileRoute('/')({
  component: Home,
})

const FEATURES = [
  {
    icon: '🏢',
    tint: 'bg-brand-50',
    title: 'Research any company',
    description:
      'Point it at a company and get a momentum read: what triggered the moment, who owns the budget or the decision, and whether now is the right time to reach out.',
  },
  {
    icon: '🧭',
    tint: 'bg-accent-100',
    title: 'Map the right people',
    description:
      'It maps the people inside a target department and turns their public activity into concrete engagement tips — never guessed emails, never drafted messages.',
  },
  {
    icon: '🎯',
    tint: 'bg-brand-50',
    title: 'Shaped by your intent',
    description:
      'Job search, client prospecting, partner BD, investor outreach, or talent sourcing — five presets ship in, and anything you describe in your own words works too.',
  },
  {
    icon: '🔁',
    tint: 'bg-accent-100',
    title: 'Gets sharper every run',
    description:
      'Tell it what missed the mark in plain language and it drafts a scoped, testable rule from the correction — narrow rules that age well, not blanket instructions.',
  },
  {
    icon: '🧠',
    tint: 'bg-brand-50',
    title: 'Remembers who you are',
    description:
      'Drop your CV or a note on what you sell into the project, and every brief gets judged against your actual background instead of listing signals and leaving the call to you.',
  },
  {
    icon: '📄',
    tint: 'bg-accent-100',
    title: 'A brief you can act on',
    description:
      'Every run returns a fast chat answer plus a timestamped Word document — judge it in chat, keep the document, share it with your team.',
  },
]

const STEPS = [
  {
    title: 'Install in seconds',
    description: 'Upload the plugin in Claude, or import it in ChatGPT Desktop / Codex CLI.',
  },
  {
    title: 'Pick your intent',
    description:
      'Job search, client prospecting, partner BD, investor outreach, talent sourcing — or describe your own.',
  },
  {
    title: 'Start a run',
    description: '"Research Acme Corp for client prospecting, engineering team, Dubai office."',
  },
  {
    title: 'Get a brief, keep the doc',
    description: 'A chat answer first, then a timestamped Word document named for the subject.',
  },
]

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <BrandBanner />
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
          <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-[36rem] rounded-full bg-brand-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -top-16 right-1/4 h-80 w-[32rem] rounded-full bg-accent-300/40 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 text-center sm:pt-28">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-card">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Built for Claude, ChatGPT &amp; Codex
            </div>
            <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Know exactly who to talk to
              <span className="block text-brand-600">before you send the first message</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Networking is an AI skill pack that researches a company, maps the people inside
              it, and turns their public activity into engagement tips — for job search, client
              prospecting, partnerships, investor outreach, or talent sourcing. It reads
              what&apos;s public. It never posts, messages, or writes your outreach for you.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#get-plugin"
                className="w-full rounded-xl bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lift transition hover:bg-brand-700 sm:w-auto"
              >
                Get the plugin — free
              </a>
              <a
                href="#how-it-works"
                className="w-full rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-gray-700 transition hover:border-gray-300 sm:w-auto"
              >
                See how it works
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Two-minute setup · Works in Claude, ChatGPT Desktop &amp; Codex CLI
            </p>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              What you get
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to reach out well-informed
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${f.tint}`}
                >
                  {f.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-20 bg-gray-50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                How it works
              </h2>
              <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                From install to insight in one prompt
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <div key={s.title}>
                  <div className="text-3xl font-bold text-accent-300">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead capture */}
        <section
          id="get-plugin"
          className="scroll-mt-20 bg-gradient-to-b from-white via-brand-50 to-accent-50 py-24"
        >
          <div className="mx-auto max-w-xl px-6">
            <LeadCaptureCard />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function BrandBanner() {
  return (
    <div className="w-full bg-white pt-6">
      <svg
        viewBox="0 0 1140 210"
        className="mx-auto w-full max-w-3xl px-6"
        role="img"
        aria-label="Builds By Zainab"
      >
        <defs>
          <path id="brand-arc" d="M 20 190 Q 570 20 1120 190" fill="none" />
        </defs>
        <text fill="#5B1A3A" fontSize="92" style={{ fontFamily: 'Yellowtail, cursive' }}>
          <textPath href="#brand-arc" startOffset="50%" textAnchor="middle">
            Builds By Zainab
          </textPath>
        </text>
      </svg>
    </div>
  )
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
            N
          </div>
          <span className="text-base font-semibold text-gray-900">Networking</span>
          <span className="ml-1 rounded-full bg-accent-100 px-2 py-0.5 text-xs font-medium text-accent-700">
            Claude Plugin
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 sm:flex">
          <a href="#features" className="transition hover:text-gray-900">
            Features
          </a>
          <a href="#how-it-works" className="transition hover:text-gray-900">
            How it works
          </a>
        </nav>
        <a
          href="#get-plugin"
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-brand-700"
        >
          Get the plugin
        </a>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-500 sm:flex-row">
        <span>© 2026 Networking Plugin. Built for Claude, ChatGPT &amp; Codex.</span>
        <span>Reads what&apos;s public. Never posts, messages, or writes your outreach.</span>
      </div>
    </footer>
  )
}
