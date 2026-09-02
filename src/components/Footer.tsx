export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-500 sm:flex-row">
        <span>© {new Date().getFullYear()} Networking Plugin. Built for Claude, ChatGPT &amp; Codex.</span>
        <span>Reads what's public. Never posts, messages, or writes your outreach.</span>
      </div>
    </footer>
  )
}
