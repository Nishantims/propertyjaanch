import Link from 'next/link'
import { Seal } from './ui/Seal'

export function Logo({ size = 22 }: { size?: number }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2 shrink-0">
      <Seal size={size} />
      <span className="font-display text-[19px] font-medium leading-none text-ink">
        Property<span className="text-gold">Jaanch</span>
      </span>
    </Link>
  )
}
