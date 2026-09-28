import { useState, type FormEvent, type ReactNode } from 'react'
import { Loader2 } from 'lucide-react'
import { CountryCodeSelect } from './CountryCodeSelect'
import { SuccessPanel } from './SuccessPanel'
import { submitLead } from '../server/leads.functions'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const INPUT =
  'h-11 w-full rounded-lg border border-gray-200 px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100'

const CARD = 'rounded-3xl border border-gray-100 bg-white p-8 shadow-lift sm:p-10'

export function LeadCaptureCard() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [businessTitle, setBusinessTitle] = useState('')
  const [countryCode, setCountryCode] = useState('+971')
  const [whatsapp, setWhatsapp] = useState('')
  const [emailConsent, setEmailConsent] = useState(false)
  const [whatsappConsent, setWhatsappConsent] = useState(false)
  const [website, setWebsite] = useState('')
  const [renderedAt] = useState(() => Date.now())
  const [status, setStatus] = useState<Status>('idle')
  const [emailSent, setEmailSent] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  if (status === 'success') {
    return (
      <div className={CARD}>
        <SuccessPanel email={email} emailSent={emailSent} />
      </div>
    )
  }

  const hasWhatsapp = whatsapp.trim().length > 0

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')
    try {
      const result = await submitLead({
        data: {
          name,
          email,
          businessTitle,
          whatsappCountryCode: countryCode,
          whatsappNumber: whatsapp.trim(),
          emailConsent,
          whatsappConsent: hasWhatsapp && whatsappConsent,
          website,
          renderedAt,
        },
      })
      setEmailSent(Boolean(result?.emailSent))
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong sending that. Check your details and try again.')
    }
  }

  return (
    <div className={CARD}>
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Get the Networking plugin
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Free download. Tell us a bit about you and we&apos;ll send it straight over.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        {/* Honeypot: hidden from people, filled by bots */}
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        />

        <Field label="Name" htmlFor="lead-name" required>
          <input
            id="lead-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className={INPUT}
          />
        </Field>

        <Field label="Email" htmlFor="lead-email" required>
          <input
            id="lead-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@company.com"
            className={INPUT}
          />
        </Field>

        <Field label="Business Title" htmlFor="lead-title" required>
          <input
            id="lead-title"
            required
            value={businessTitle}
            onChange={(e) => setBusinessTitle(e.target.value)}
            placeholder="e.g. Head of Sales, Founder, Recruiter"
            className={INPUT}
          />
        </Field>

        <Field label="WhatsApp Number" htmlFor="lead-whatsapp">
          <div className="flex gap-2">
            <CountryCodeSelect value={countryCode} onChange={setCountryCode} id="lead-country" />
            <input
              id="lead-whatsapp"
              type="tel"
              inputMode="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value.replace(/[^0-9 ]/g, ''))}
              placeholder="50 123 4567"
              className={`${INPUT} flex-1`}
            />
          </div>
        </Field>

        <div className="space-y-2 pt-1">
          <ConsentCheckbox
            id="lead-email-consent"
            checked={emailConsent}
            onChange={setEmailConsent}
            label="I agree to let Builds By Zainab reach out to me via email regarding more of her products and services."
          />
          {hasWhatsapp && (
            <ConsentCheckbox
              id="lead-whatsapp-consent"
              checked={whatsappConsent}
              onChange={setWhatsappConsent}
              label="I agree to let Builds By Zainab reach out to me via WhatsApp regarding more of her products and services."
            />
          )}
        </div>

        {status === 'error' && (
          <p className="text-sm text-red-600" role="alert">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-600 text-sm font-semibold text-white shadow-lift transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Sending…
            </>
          ) : (
            'Get instant access'
          )}
        </button>
        <p className="text-center text-xs text-gray-400">
          We&apos;ll only use this to send you the plugin and occasional updates.
        </p>
      </form>
    </div>
  )
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  )
}

function ConsentCheckbox({
  id,
  checked,
  onChange,
  label,
}: {
  id: string
  checked: boolean
  onChange: (value: boolean) => void
  label: string
}) {
  return (
    <label htmlFor={id} className="flex items-start gap-2.5 text-xs text-gray-600">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 accent-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
      <span>{label}</span>
    </label>
  )
}
