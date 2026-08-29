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
      className="h-full shrink-0 rounded-l-lg border border-r-0 border-[#d9d0e6] bg-[#f4f1f9] px-2 text-sm font-medium text-[#241f33] focus:outline-none focus:ring-2 focus:ring-[#9483bb] focus:z-10"
    >
      {COUNTRY_CODES.map((c) => (
        <option key={c.code} value={c.dial}>
          {c.flag} {c.dial}
        </option>
      ))}
    </select>
  )
}
