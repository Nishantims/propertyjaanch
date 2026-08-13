'use client'

import { useState } from 'react'

interface Props {
  service: string
  ctaLabel: string
  fields?: { name: string; label: string; placeholder: string; type?: string }[]
}

const DEFAULT_FIELDS = [
  { name: 'name', label: 'Your name', placeholder: 'Full name' },
  { name: 'contact', label: 'Email or phone', placeholder: 'How should we reach you?' },
  { name: 'property', label: 'Property location', placeholder: 'e.g. Survey no., village/locality, city' },
]

// No backend exists for this yet, so this builds a real mailto: with the
// form contents rather than pretending to submit somewhere — a form that
// silently does nothing on submit would be worse than no form at all.
export function RequestForm({ service, ctaLabel, fields = DEFAULT_FIELDS }: Props) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [notes, setNotes] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const bodyLines = [
      ...fields.map(f => `${f.label}: ${values[f.name] || '(not provided)'}`),
      `Notes: ${notes || '(none)'}`,
    ]
    const subject = encodeURIComponent(`${service} — request via PropertyJaanch`)
    const body = encodeURIComponent(bodyLines.join('\n'))
    window.location.href = `mailto:contact@market-reports.com?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-bg-elevated border border-line p-6 sm:p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map(f => (
          <label key={f.name} className={f.name === 'property' ? 'sm:col-span-2 block' : 'block'}>
            <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-faint mb-1.5">{f.label}</span>
            <input
              type={f.type ?? 'text'}
              required
              placeholder={f.placeholder}
              value={values[f.name] ?? ''}
              onChange={e => setValues(v => ({ ...v, [f.name]: e.target.value }))}
              className="w-full rounded-lg border border-line-strong bg-bg px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink-faint focus:outline-none focus:border-gold"
            />
          </label>
        ))}
        <label className="sm:col-span-2 block">
          <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-faint mb-1.5">Anything else we should know? (optional)</span>
          <textarea
            rows={3}
            placeholder="Documents you already have, timeline, specific concerns…"
            value={notes}
            onChange={e => setNotes(e.target.value)}
            className="w-full rounded-lg border border-line-strong bg-bg px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink-faint focus:outline-none focus:border-gold resize-none"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 inline-flex items-center rounded-full bg-navy-fixed px-7 py-3 text-[14px] font-semibold text-white hover:opacity-90 transition-opacity"
      >
        {ctaLabel}
      </button>
      <p className="mt-3 text-[12px] text-ink-faint">Opens your email app addressed to contact@market-reports.com with these details filled in.</p>
    </form>
  )
}
