import { DOWNLOAD_URLS } from '../lib/insforge'
import SupportSection from './SupportSection'

interface Props {
  email: string
  emailSent: boolean
}

export default function SuccessState({ email, emailSent }: Props) {
  return (
    <div>
      <div className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
          ✅
        </div>
        <h3 className="mt-4 text-2xl font-bold text-gray-900">You're all set</h3>
        <p className="mt-2 text-sm text-gray-600">
          {emailSent
            ? <>We've also sent a copy of the downloads and install steps to <strong>{email}</strong>.</>
            : <>Grab your downloads below. (We couldn't email a copy to <strong>{email}</strong> right now — the links below still work.)</>}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <a
          href={DOWNLOAD_URLS.plugin}
          download
          className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lift transition hover:bg-brand-700"
        >
          ⬇ Download Plugin (.zip)
        </a>
        <a
          href={DOWNLOAD_URLS.guide}
          download
          className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-semibold text-gray-800 shadow-card transition hover:border-gray-300"
        >
          ⬇ Download Guide (PDF)
        </a>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-6 text-sm leading-relaxed text-gray-700">
        <p className="font-semibold text-gray-900">To install the plugin on Claude:</p>
        <ul className="mt-2 list-disc pl-5">
          <li>
            Upload the <code className="rounded bg-white px-1.5 py-0.5 text-xs">networking.zip</code>{' '}
            file attached under <strong>Customize &rarr; Plugins &rarr; Add &rarr; Upload a plugin</strong>.
          </li>
        </ul>
        <p className="mt-4 font-semibold text-gray-900">To install the plugin on ChatGPT:</p>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            In <strong>ChatGPT Desktop</strong>: Go to Settings &gt; Import, select Claude Code or
            Claude Cowork as your source, and pick the instructions, skills, or plugins you want to
            bring over.
          </li>
          <li>
            In <strong>Codex CLI</strong>: Type <code className="rounded bg-white px-1.5 py-0.5 text-xs">/import</code>{' '}
            to pull your project-level configurations and connected tools directly into your active
            workspace.
          </li>
        </ul>
      </div>

      <SupportSection />
    </div>
  )
}
