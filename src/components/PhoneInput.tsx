import { useState, useRef, useEffect } from 'react'
import { COUNTRY_CODES } from '../lib/countryCodes'

interface Props {
  countryCode: string
  number: string
  onCountryCodeChange: (v: string) => void
  onNumberChange: (v: string) => void
}

export default function PhoneInput({ countryCode, number, onCountryCodeChange, onNumberChange }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const selected = COUNTRY_CODES.find((c) => c.dial === countryCode) ?? COUNTRY_CODES[0]

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <div className="flex gap-2">
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-11 items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-700 transition hover:border-gray-300 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span>{selected.flag}</span>
          <span>{selected.dial}</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gray-400">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {open && (
          <ul
            role="listbox"
            className="absolute z-20 mt-1 max-h-64 w-64 overflow-y-auto rounded-lg border border-gray-100 bg-white py-1 shadow-lift"
          >
            {COUNTRY_CODES.map((c) => (
              <li key={`${c.name}-${c.dial}`}>
                <button
                  type="button"
                  onClick={() => {
                    onCountryCodeChange(c.dial)
                    setOpen(false)
                  }}
                  className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-gray-700 hover:bg-brand-50"
                >
                  <span>{c.flag}</span>
                  <span className="flex-1 truncate">{c.name}</span>
                  <span className="text-gray-400">{c.dial}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <input
        type="tel"
        inputMode="tel"
        placeholder="50 123 4567"
        value={number}
        onChange={(e) => onNumberChange(e.target.value.replace(/[^\d\s]/g, ''))}
        className="h-11 flex-1 rounded-lg border border-gray-200 px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
    </div>
  )
}
