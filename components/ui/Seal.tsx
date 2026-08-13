// The recurring "verified" mark used across the site — a literal seal/stamp
// shape (matches the brand's core promise: an independent check, stamped)
// rather than a generic checkmark icon, so it reads as a mark of
// verification rather than just "done."
export function Seal({ size = 20, tone = 'gold' }: { size?: number; tone?: 'gold' | 'muted' }) {
  const color = tone === 'gold' ? 'var(--gold)' : 'var(--ink-faint)'
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.5l2.1 1.6 2.6-.4 1 2.4 2.4 1-.4 2.6 1.6 2.1-1.6 2.1.4 2.6-2.4 1-1 2.4-2.6-.4L12 21.5l-2.1-1.6-2.6.4-1-2.4-2.4-1 .4-2.6L2.7 12l1.6-2.1-.4-2.6 2.4-1 1-2.4 2.6.4L12 2.5z"
        fill={color}
        opacity="0.16"
      />
      <path
        d="M12 2.5l2.1 1.6 2.6-.4 1 2.4 2.4 1-.4 2.6 1.6 2.1-1.6 2.1.4 2.6-2.4 1-1 2.4-2.6-.4L12 21.5l-2.1-1.6-2.6.4-1-2.4-2.4-1 .4-2.6L2.7 12l1.6-2.1-.4-2.6 2.4-1 1-2.4 2.6.4L12 2.5z"
        stroke={color}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path d="M8.3 12.3l2.4 2.4 5-5.2" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
