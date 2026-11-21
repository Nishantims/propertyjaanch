import Image from 'next/image'
import { blurProps } from '@/lib/blur'

// The photo beside a page heading (owner, 2026-11-21: images on every page, in the site's design). Same treatment
// as the homepage hero photo: rounded, hairline border, card shadow, a light navy fade at the foot.
export function PagePhoto({ src, alt, priority = true, className = '' }: { src: string; alt: string; priority?: boolean; className?: string }) {
  return (
    <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-line ${className}`} style={{ boxShadow: 'var(--shadow-card)' }}>
      <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" {...blurProps(src)} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1730]/40 via-transparent to-transparent" />
    </div>
  )
}
