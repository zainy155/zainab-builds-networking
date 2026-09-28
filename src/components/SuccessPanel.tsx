import { Download, FileText, MailCheck } from 'lucide-react'
import { SupportSection } from './SupportSection'

export function SuccessPanel({ email, emailSent }: { email: string; emailSent: boolean }) {
  return (
    <div className="rise-in">
      {emailSent && (
        <div className="mb-6 flex items-center gap-2 rounded-lg bg-[#eef7f2] px-4 py-3 text-sm text-[#2f5c45]">
          <MailCheck size={18} className="shrink-0" />
          <span>
            A copy of these downloads and install steps was sent to <strong>{email}</strong>.
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold text-gray-900 mb-1">
        You&apos;re in — grab your files
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Everything you need to run Networking inside Claude or ChatGPT.
      </p>

      <div className="grid gap-3 sm:grid-cols-2 mb-8">
        <a
          href="/downloads/networking.zip"
          download
          className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5"
        >
          <Download size={17} />
          Download Plugin (.zip)
        </a>
        <a
          href="/downloads/networking-plugin-guide.pdf"
          download
          className="flex items-center justify-center gap-2 rounded-xl bg-accent-300 px-5 py-3.5 text-sm font-semibold text-accent-700 shadow-card transition-transform hover:-translate-y-0.5"
        >
          <FileText size={17} />
          Download Guide (PDF)
        </a>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 text-sm text-gray-700 leading-relaxed">
        <p className="font-semibold text-gray-900 mb-2">To install the plugin on Claude:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>
            Upload the networking.zip file attached under Customize → Plugins → Add →
            Upload a plugin.
          </li>
        </ul>
        <p className="font-semibold text-gray-900 mb-2">To install the plugin on ChatGPT:</p>
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
