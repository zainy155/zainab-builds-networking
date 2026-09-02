import { useState } from 'react'
import type { FormEvent } from 'react'
import PhoneInput from './PhoneInput'
import SuccessState from './SuccessState'
import type { LeadFormData, SubmitLeadResponse } from '../lib/types'

const FUNCTION_URL = `${import.meta.env.VITE_INSFORGE_URL}/functions/submit-lead`

const initialForm: LeadFormData = {
  name: '',
  email: '',
  businessTitle: '',
  whatsappCountryCode: '+971',
  whatsappNumber: '',
}

export default function LeadCaptureCard() {
  const [form, setForm] = useState<LeadFormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [result, setResult] = useState<{ email: string; emailSent: boolean } | null>(null)

  const update = (field: keyof LeadFormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage(null)

    try {
      const submitData = {
        name: form.name,
        email: form.email,
        businessTitle: form.businessTitle,
        whatsappCountryCode: form.whatsappNumber ? form.whatsappCountryCode : '+000',
        whatsappNumber: form.whatsappNumber || 'N/A',
      }

      const res = await fetch(FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      })
      const data: SubmitLeadResponse = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setResult({ email: form.email, emailSent: data.emailSent })
      setStatus('idle')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="get-plugin" className="bg-gradient-to-b from-white via-brand-50 to-accent-50 py-24">
      <div className="mx-auto max-w-xl px-6">
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lift sm:p-10">
          {result ? (
            <SuccessState email={result.email} emailSent={result.emailSent} />
          ) : (
            <>
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Get the Networking plugin
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Free download. Tell us a bit about you and we'll send it straight over.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Jane Doe"
                    className="h-11 w-full rounded-lg border border-gray-200 px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder="jane@company.com"
                    className="h-11 w-full rounded-lg border border-gray-200 px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Business Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.businessTitle}
                    onChange={update('businessTitle')}
                    placeholder="e.g. Head of Sales, Founder, Recruiter"
                    className="h-11 w-full rounded-lg border border-gray-200 px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    WhatsApp Number
                  </label>
                  <PhoneInput
                    countryCode={form.whatsappCountryCode}
                    number={form.whatsappNumber}
                    onCountryCodeChange={(v) => setForm((f) => ({ ...f, whatsappCountryCode: v }))}
                    onNumberChange={(v) => setForm((f) => ({ ...f, whatsappNumber: v }))}
                  />
                </div>

                {status === 'error' && errorMessage && (
                  <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-2 flex h-12 w-full items-center justify-center rounded-xl bg-brand-600 text-sm font-semibold text-white shadow-lift transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Submitting…' : 'Get instant access'}
                </button>
                <p className="text-center text-xs text-gray-400">
                  We'll only use this to send you the plugin and occasional updates.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
