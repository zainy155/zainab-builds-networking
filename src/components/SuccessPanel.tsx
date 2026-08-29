import { Download, FileText, MailCheck } from 'lucide-react'
import { SupportSection } from './SupportSection'

export function SuccessPanel({ email }: { email: string }) {
  return (
    <div className="rise-in">
      <div className="mb-6 flex items-center gap-2 rounded-lg bg-[#eef7f2] px-4 py-3 text-sm text-[#2f5c45]">
        <MailCheck size={18} className="shrink-0" />
        <span>
          A copy of these downloads and install steps was sent to <strong>{email}</strong>.
        </span>
      </div>

      <h3 className="font-display text-2xl font-bold text-[#241f33] mb-1">
        You&apos;re in — grab your files
      </h3>
      <p className="text-sm text-[#5c5468] mb-6">
        Everything you need to run Networking inside Claude or ChatGPT.
      </p>

      <div className="grid gap-3 sm:grid-cols-2 mb-8">
        <a
          href="/downloads/networking.zip"
          download
          className="flex items-center justify-center gap-2 rounded-xl bg-[#9483bb] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(148,131,187,0.6)] transition-transform hover:-translate-y-0.5"
        >
          <Download size={17} />
          Download Plugin (.zip)
        </a>
        <a
          href="/downloads/networking-plugin-guide.pdf"
          download
          className="flex items-center justify-center gap-2 rounded-xl bg-[#9bbfc7] px-5 py-3.5 text-sm font-semibold text-[#1c3a40] shadow-[0_10px_24px_-8px_rgba(155,191,199,0.6)] transition-transform hover:-translate-y-0.5"
        >
          <FileText size={17} />
          Download Guide (PDF)
        </a>
      </div>

      <div className="rounded-2xl border border-[#e4ddf0] bg-white p-5 sm:p-6 text-sm text-[#3c3548] leading-relaxed">
        <p className="font-semibold text-[#241f33] mb-2">To install the plugin on Claude:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>
            Upload the networking.zip file attached under Customize → Plugins → Add →
            Upload a plugin.
          </li>
        </ul>
        <p className="font-semibold text-[#241f33] mb-2">To install the plugin on ChatGPT:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            In ChatGPT Desktop: Go to Settings &gt; Import, select Claude Code or Claude
            Cowork as your source, and pick the instructions, skills, or plugins you want to
            bring over.
          </li>
          <li>
            In Codex CLI: Type /import to pull your project-level configurations and
            connected tools directly into your active workspace.
          </li>
        </ul>
      </div>

      <SupportSection />
    </div>
  )
}
