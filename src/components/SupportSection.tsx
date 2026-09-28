import { useState } from 'react'
import { Coffee, Heart } from 'lucide-react'

const PAYPAL_BASE = 'https://paypal.me/buildsbyzainab'
const QUICK_AMOUNTS = [10, 20, 50, 100]

export function SupportSection() {
  const [customAmount, setCustomAmount] = useState('')

  const pledgeUrl = (amount: string | number) => {
    const clean = String(amount).trim()
    if (!clean) return PAYPAL_BASE
    return `${PAYPAL_BASE}/${encodeURIComponent(clean)}`
  }

  return (
    <section className="mt-14 rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-1">
        <Heart size={18} className="text-brand-500" />
        <h3 className="text-lg font-semibold text-gray-900">
          Support the Developer
        </h3>
      </div>
      <p className="text-sm text-gray-600 mb-6 max-w-md">
        Networking is built and maintained by one person. If it saved you a research
        afternoon, a tip keeps new skills shipping.
      </p>

      <a
        href={PAYPAL_BASE}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
      >
        <Coffee size={16} />
        Buy Me a Coffee
      </a>

      <div className="mt-7">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
          Pledge a custom amount
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {QUICK_AMOUNTS.map((amount) => (
            <a
              key={amount}
              href={pledgeUrl(amount)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 transition hover:border-brand-300 hover:bg-brand-50"
            >
              ${amount}
            </a>
          ))}
        </div>
        <div className="flex gap-2 max-w-xs">
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
              $
            </span>
            <input
              type="number"
              min="1"
              inputMode="decimal"
              placeholder="Custom"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-6 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
          </div>
          <a
            href={pledgeUrl(customAmount)}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!customAmount}
            onClick={(e) => {
              if (!customAmount) e.preventDefault()
            }}
            className="rounded-lg bg-accent-300 px-4 py-2 text-sm font-semibold text-accent-700 transition hover:bg-accent-100 disabled:opacity-50"
          >
            Pledge
          </a>
        </div>
      </div>
    </section>
  )
}
