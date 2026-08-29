import { useState, type FormEvent, type ReactNode } from 'react'
import { ArrowRight, Loader2 } from 'lucide-react'
import { CountryCodeSelect } from './CountryCodeSelect'
import { SuccessPanel } from './SuccessPanel'
import { submitLead } from '../server/leads.functions'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function LeadCaptureCard() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [businessTitle, setBusinessTitle] = useState('')
  const [countryCode, setCountryCode] = useState('+1')
  const [whatsapp, setWhatsapp] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  if (status === 'success') {
    return (
      <div
        id="get-plugin"
        className="rounded-3xl border border-[#e4ddf0] bg-white p-6 sm:p-9 shadow-[0_30px_60px_-30px_rgba(94,73,140,0.35)]"
      >
        <SuccessPanel email={email} />
      </div>
    )
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')
    try {
      await submitLead({
        data: {
          name,
          email,
          businessTitle,
          whatsappCountryCode: countryCode,
          whatsappNumber: whatsapp,
        },
      })
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong sending that — check your details and try again.')
    }
  }

  return (
    <div
      id="get-plugin"
      className="rounded-3xl border border-[#e4ddf0] bg-white p-6 sm:p-9 shadow-[0_30px_60px_-30px_rgba(94,73,140,0.35)]"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-[#9483bb] mb-2">
        Free download
      </p>
      <h3 className="font-display text-2xl font-bold text-[#241f33] mb-1">
        Get the Networking plugin
      </h3>
      <p className="text-sm text-[#5c5468] mb-6">
        Tell us where to send it — the plugin, the guide, and install steps land in your
        inbox instantly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Full name" htmlFor="lead-name">
          <input
            id="lead-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Amara Okafor"
            className="w-full rounded-lg border border-[#d9d0e6] bg-[#fbf9fc] px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#9483bb]"
          />
        </Field>

        <Field label="Work email" htmlFor="lead-email">
          <input
            id="lead-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="amara@foundry.co"
            className="w-full rounded-lg border border-[#d9d0e6] bg-[#fbf9fc] px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#9483bb]"
          />
        </Field>

        <Field label="Business title" htmlFor="lead-title">
          <input
            id="lead-title"
            required
            value={businessTitle}
            onChange={(e) => setBusinessTitle(e.target.value)}
            placeholder="Head of Partnerships"
            className="w-full rounded-lg border border-[#d9d0e6] bg-[#fbf9fc] px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#9483bb]"
          />
        </Field>

        <Field label="WhatsApp number" htmlFor="lead-whatsapp">
          <div className="flex">
            <CountryCodeSelect value={countryCode} onChange={setCountryCode} id="lead-country" />
            <input
              id="lead-whatsapp"
              required
              inputMode="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value.replace(/[^0-9 ]/g, ''))}
              placeholder="712 345 678"
              className="w-full rounded-r-lg border border-[#d9d0e6] bg-[#fbf9fc] px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#9483bb] focus:z-10"
            />
          </div>
        </Field>

        {status === 'error' && (
          <p className="text-sm text-[#a33a3a]" role="alert">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#241f33] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send me the plugin <ArrowRight size={16} />
            </>
          )}
        </button>
        <p className="text-center text-xs text-[#8b8296]">
          No spam. Just the plugin, the guide, and occasional feature notes.
        </p>
      </form>
    </div>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold text-[#4a4356]">
        {label}
      </label>
      {children}
    </div>
  )
}
