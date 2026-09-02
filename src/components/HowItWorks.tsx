const STEPS = [
  {
    step: '01',
    title: 'Install in seconds',
    description: 'Upload the plugin in Claude, or import it in ChatGPT Desktop / Codex CLI.',
  },
  {
    step: '02',
    title: 'Pick your intent',
    description:
      'Job search, client prospecting, partner BD, investor outreach, talent sourcing — or describe your own.',
  },
  {
    step: '03',
    title: 'Start a run',
    description: '"Research Acme Corp for client prospecting, engineering team, Dubai office."',
  },
  {
    step: '04',
    title: 'Get a brief, keep the doc',
    description: 'A chat answer first, then a timestamped Word document named for the subject.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-24">
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
          {STEPS.map((s) => (
            <div key={s.step}>
              <div className="text-3xl font-bold text-accent-300">{s.step}</div>
              <h3 className="mt-2 text-base font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
