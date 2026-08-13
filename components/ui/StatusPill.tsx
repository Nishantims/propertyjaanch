type Status = 'green' | 'amber' | 'red'

const STATUS_COPY: Record<Status, string> = {
  green: 'Suitable to Proceed',
  amber: 'Proceed After Resolution',
  red: 'Do Not Proceed',
}

export function StatusPill({ status, label }: { status: Status; label?: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-semibold"
      style={{
        background: `var(--status-${status}-tint)`,
        color: `var(--status-${status})`,
      }}
    >
      <span className="h-2 w-2 rounded-full" style={{ background: `var(--status-${status})` }} />
      {label ?? STATUS_COPY[status]}
    </span>
  )
}
