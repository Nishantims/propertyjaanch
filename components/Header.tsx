'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import { Container } from './ui/Container'

const NAV = [
  { href: '/trust-check', label: 'Property Trust Check' },
  { href: '/marketplace', label: 'Verified Marketplace' },
  { href: '/secure-transaction', label: 'Secure Transaction' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map(item => (
            <Link key={item.href} href={item.href} className="text-[13.5px] font-medium text-ink-soft hover:text-ink transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/trust-check"
            className="inline-flex items-center rounded-full bg-navy-fixed px-5 py-2.5 text-[13px] font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Verify a Property
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 5l14 14M19 5L5 19" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            )}
          </button>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-line bg-bg-elevated">
          <Container className="flex flex-col py-3">
            {NAV.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] font-medium text-ink border-b border-line last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/trust-check"
              onClick={() => setOpen(false)}
              className="mt-4 mb-1 inline-flex items-center justify-center rounded-full bg-navy-fixed px-5 py-3 text-[14px] font-semibold text-white"
            >
              Verify a Property
            </Link>
          </Container>
        </div>
      )}
    </header>
  )
}
