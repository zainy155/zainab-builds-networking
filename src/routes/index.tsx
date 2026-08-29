import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  Compass,
  FileStack,
  Radar,
  Sparkles,
  UserSearch,
} from 'lucide-react'
import { LeadCaptureCard } from '../components/LeadCaptureCard'

export const Route = createFileRoute('/')({
  component: Home,
})

const INTENTS = [
  { name: 'Job search', question: 'Is this a good moment to pursue this team, and who decides?' },
  { name: 'Client prospecting', question: 'Is this a live opportunity, what triggered it, and who owns the budget?' },
  { name: 'Partner BD', question: 'What partnership shape fits how they already partner, and is the slot taken?' },
  { name: 'Investor outreach', question: 'Does the thesis fit, are they deploying, and is there a conflict?' },
  { name: 'Talent sourcing', question: 'Is this team stable or loosening, and where is the movable talent?' },
]

const FEATURES = [
  {
    icon: <Radar size={22} />,
    title: 'Company momentum mapping',
    description:
      "Runs /networking:research-companies to surface hiring velocity, funding signals, and a ranked people map for the account you're chasing.",
  },
  {
    icon: <UserSearch size={22} />,
    title: 'Contact-level engagement tips',
    description:
      '/networking:research-contacts turns public activity on a named person into specific things worth mentioning when you reach out.',
  },
  {
    icon: <Compass size={22} />,
    title: 'Intent-framed everywhere',
    description:
      'Five presets ship out of the box, and free-form intents get their own derived profile — the plugin states it back before it runs.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Learns your preferences',
    description:
      '/networking:feedback teaches the plugin what to do differently, and your last intent becomes the remembered default.',
  },
  {
    icon: <FileStack size={22} />,
    title: 'Chat answer + a doc you keep',
    description:
      'Every run produces a fast chat read plus a timestamped .docx, headered with the intent that produced it.',
  },
]

function Home() {
  return (
    <div className="min-h-screen relative">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-16 pb-24 sm:pt-20">
        <div
          className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle, #9483bb, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute top-40 left-[-15%] h-[380px] w-[380px] rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #9bbfc7, transparent 70%)' }}
        />

        <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="rise-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e4ddf0] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#6f5a99]">
              A Claude Code &amp; Codex CLI plugin
            </span>
            <h1 className="font-display mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-[#241f33] sm:text-6xl">
              Know the room
              <br />
              before you <span className="text-[#8b6fb3]">walk in.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#4a4356]">
              Networking maps a company&apos;s momentum and the people inside it, then hands
              you engagement tips shaped by <em>why</em> you&apos;re reaching out — job
              search, prospecting, partnerships, fundraising, or hiring.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#get-plugin"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#241f33] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Get the plugin free <ArrowRight size={16} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-[#d9d0e6] bg-white px-7 py-3.5 text-sm font-semibold text-[#241f33] transition hover:border-[#9483bb]"
              >
                See what it does
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#5c5468]">
              <span>5 built-in intents</span>
              <span className="text-[#d9d0e6]">·</span>
              <span>3 skills</span>
              <span className="text-[#d9d0e6]">·</span>
              <span>Docs you keep</span>
            </div>
          </div>

          <div className="rise-in [animation-delay:120ms]">
            <LeadCaptureCard />
          </div>
        </div>
      </section>

      {/* Intent strip */}
      <section className="border-y border-[#e4ddf0] bg-white/60 py-10 px-4">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wide text-[#8b8296]">
            Same company, different lens
          </p>
          <div className="flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-5 sm:gap-4 sm:overflow-visible">
            {INTENTS.map((intent) => (
              <div
                key={intent.name}
                className="min-w-[220px] rounded-xl border border-[#e4ddf0] bg-[#fbf9fc] p-4 sm:min-w-0"
              >
                <p className="mb-1.5 text-sm font-semibold text-[#6f5a99]">{intent.name}</p>
                <p className="text-xs leading-relaxed text-[#5c5468]">{intent.question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#9483bb]">
              What&apos;s inside
            </p>
            <h2 className="font-display text-3xl font-bold text-[#241f33] sm:text-4xl">
              Built for the ten minutes before a call
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className={`rounded-2xl border border-[#e4ddf0] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(94,73,140,0.35)] ${
                  i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#f4f1f9] text-[#6f5a99]">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#241f33]">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-[#5c5468]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function Nav() {
  return (
    <header className="relative z-10 flex items-center justify-between px-4 py-6 sm:px-8">
      <div className="flex items-center gap-2">
        <span className="font-display text-lg font-bold text-[#241f33]">Networking</span>
        <span className="rounded-full bg-[#f4f1f9] px-2.5 py-0.5 text-[11px] font-semibold text-[#6f5a99]">
          for Claude
        </span>
      </div>
      <a
        href="#get-plugin"
        className="rounded-lg border border-[#d9d0e6] bg-white px-4 py-2 text-sm font-semibold text-[#241f33] transition hover:border-[#9483bb]"
      >
        Get the plugin
      </a>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#e4ddf0] px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <img
          src="/brand/build-by-zainab-logo.png"
          alt="Build by Zainab"
          className="h-8 w-auto opacity-90"
        />
        <p className="text-xs text-[#8b8296]">
          &copy; 2026 Build by Zainab. Networking is an independent plugin, not affiliated
          with Anthropic or OpenAI.
        </p>
      </div>
    </footer>
  )
}
