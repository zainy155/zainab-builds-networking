import { COUNTRY_CODES } from '../data/country-codes'

export function CountryCodeSelect({
  value,
  onChange,
  id,
}: {
  value: string
  onChange: (value: string) => void
  id: string
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Country code"
      className="h-11 shrink-0 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-700 transition hover:border-gray-300 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
    >
      {COUNTRY_CODES.map((c) => (
        <option key={c.code} value={c.dial}>
          {c.flag} {c.dial}
        </option>
      ))}
    </select>
  )
}
