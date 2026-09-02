import { useState } from 'react'

const QUICK_AMOUNTS = [10, 20, 50, 100]

const PAYPAL_ME_URL = 'https://paypal.me/buildsbyzainab'

export default function SupportSection() {
  const [amount, setAmount] = useState<number | null>(null)
  const [custom, setCustom] = useState('')

  const effectiveAmount = custom ? Number(custom) : amount
  const pledgeHref = effectiveAmount ? `${PAYPAL_ME_URL}/${effectiveAmount}USD` : PAYPAL_ME_URL

  return (
    <div className="mt-10 rounded-2xl border border-gray-100 bg-gray-50 p-6">
      <h3 className="text-base font-semibold text-gray-900">Support the Developer</h3>
      <p className="mt-1 text-sm text-gray-600">
        This plugin is free. If it saved you time, a tip goes a long way — totally optional.
      </p>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start">
        <a
          href={PAYPAL_ME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#0070BA] px-5 py-3 text-sm font-bold text-white shadow-card transition hover:bg-[#005ea6]"
        >
          <span aria-hidden>💙</span> Tip Me on PayPal
        </a>

        <div className="flex-1 rounded-xl border border-gray-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Pledge a custom amount
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {QUICK_AMOUNTS.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => {
                  setAmount(a)
                  setCustom('')
                }}
                className={`rounded-lg border px-3.5 py-1.5 text-sm font-semibold transition ${
                  amount === a && !custom
                    ? 'border-brand-600 bg-brand-600 text-white'
                    : 'border-gray-200 text-gray-700 hover:border-brand-300'
                }`}
              >
                ${a}
              </button>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                $
              </span>
              <input
                type="number"
                min={1}
                placeholder="Custom amount"
                value={custom}
                onChange={(e) => {
                  setCustom(e.target.value)
                  setAmount(null)
                }}
                className="h-10 w-full rounded-lg border border-gray-200 pl-6 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <a
              href={pledgeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-brand-600 px-4 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Pledge
            </a>
          </div>
          <p className="mt-2 text-xs text-gray-400">Checkout via PayPal.</p>
        </div>
      </div>
    </div>
  )
}
