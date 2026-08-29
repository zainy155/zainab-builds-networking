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
    <section className="mt-14 rounded-2xl border border-[#e4ddf0] bg-[#fbf9fc] p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-1">
        <Heart size={18} className="text-[#9483bb]" />
        <h3 className="font-display text-lg font-semibold text-[#241f33]">
          Support the Developer
        </h3>
      </div>
      <p className="text-sm text-[#5c5468] mb-6 max-w-md">
        Networking is built and maintained by one person. If it saved you a research
        afternoon, a tip keeps new skills shipping.
      </p>

      <a
        href={PAYPAL_BASE}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-[#241f33] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
      >
        <Coffee size={16} />
        Buy Me a Coffee
      </a>

      <div className="mt-7">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#8b8296] mb-3">
          Pledge a custom amount
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {QUICK_AMOUNTS.map((amount) => (
            <a
              key={amount}
              href={pledgeUrl(amount)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#d9d0e6] bg-white px-4 py-1.5 text-sm font-semibold text-[#6f5a99] transition hover:border-[#9483bb] hover:bg-[#f4f1f9]"
            >
              ${amount}
            </a>
          ))}
        </div>
        <div className="flex gap-2 max-w-xs">
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#8b8296]">
              $
            </span>
            <input
              type="number"
              min="1"
              inputMode="decimal"
              placeholder="Custom"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full rounded-lg border border-[#d9d0e6] bg-white py-2 pl-6 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#9483bb]"
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
            className="rounded-lg bg-[#9bbfc7] px-4 py-2 text-sm font-semibold text-[#1c3a40] transition hover:bg-[#84acb5] disabled:opacity-50"
          >
            Pledge
          </a>
        </div>
      </div>
    </section>
  )
}
