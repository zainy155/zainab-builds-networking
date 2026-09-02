export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('get-plugin')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="absolute -top-24 left-1/4 h-96 w-[36rem] rounded-full bg-brand-200/40 blur-3xl" />
      <div className="absolute -top-16 right-1/4 h-80 w-[32rem] rounded-full bg-accent-300/40 blur-3xl" />
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
          Networking is an AI skill pack that researches a company, maps the people inside it, and
          turns their public activity into engagement tips — for job search, client prospecting,
          partnerships, investor outreach, or talent sourcing. It reads what's public. It never
          posts, messages, or writes your outreach for you.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={scrollToForm}
            className="w-full rounded-xl bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lift transition hover:bg-brand-700 sm:w-auto"
          >
            Get the plugin — free
          </button>
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
  )
}
