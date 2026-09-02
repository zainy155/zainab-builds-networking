const FEATURES = [
  {
    title: 'Research any company',
    description:
      'Point it at a company and get a momentum read: what triggered the moment, who owns the budget or the decision, and whether now is the right time to reach out.',
    icon: '🏢',
  },
  {
    title: 'Map the right people',
    description:
      'It maps the people inside a target department and turns their public activity into concrete engagement tips — never guessed emails, never drafted messages.',
    icon: '🧭',
  },
  {
    title: 'Shaped by your intent',
    description:
      'Job search, client prospecting, partner BD, investor outreach, or talent sourcing — five presets ship in, and anything you describe in your own words works too.',
    icon: '🎯',
  },
  {
    title: 'Gets sharper every run',
    description:
      'Tell it what missed the mark in plain language and it drafts a scoped, testable rule from the correction — narrow rules that age well, not blanket instructions.',
    icon: '🔁',
  },
  {
    title: 'Remembers who you are',
    description:
      'Drop your CV or a note on what you sell into the project, and every brief gets judged against your actual background instead of listing signals and leaving the call to you.',
    icon: '🧠',
  },
  {
    title: 'A brief you can act on',
    description:
      'Every run returns a fast chat answer plus a timestamped Word document — judge it in chat, keep the document, share it with your team.',
    icon: '📄',
  },
]

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          What you get
        </h2>
        <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to reach out well-informed
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${
                i % 2 === 0 ? 'bg-brand-50' : 'bg-accent-100'
              }`}
            >
              {f.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
