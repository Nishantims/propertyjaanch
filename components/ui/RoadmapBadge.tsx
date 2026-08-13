// Consistent, honest labeling for capabilities that are the product vision
// but not live yet (the numeric Trust Score engine, real escrow with a
// licensed payment partner) — shown in full so the site sells the complete
// picture, but never presented as already operational.
export function RoadmapBadge({ label = 'In development' }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-bg-sunken px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-ink-faint">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.2 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </span>
  )
}
