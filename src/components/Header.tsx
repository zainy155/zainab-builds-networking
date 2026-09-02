export default function Header() {
  const scrollToForm = () => {
    document.getElementById('get-plugin')?.scrollIntoView({ behavior: 'smooth' })
  }

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
          <a href="#features" className="transition hover:text-gray-900">Features</a>
          <a href="#how-it-works" className="transition hover:text-gray-900">How it works</a>
        </nav>
        <button
          onClick={scrollToForm}
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-brand-700"
        >
          Get the plugin
        </button>
      </div>
    </header>
  )
}
