import Link from 'next/link'
import { Logo } from './Logo'
import { Container } from './ui/Container'

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-sunken mt-24">
      <Container className="py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-[13.5px] leading-relaxed text-ink-soft max-w-[26ch]">
              Verify the property. Verify the parties. Secure the money. Complete the transaction.
            </p>
          </div>

          <FooterColumn title="Services">
            <FooterLink href="/trust-check">Property Trust Check</FooterLink>
            <FooterLink href="/marketplace">Verified Marketplace</FooterLink>
            <FooterLink href="/secure-transaction">Secure Transaction</FooterLink>
          </FooterColumn>

          <FooterColumn title="Company">
            <FooterLink href="/#how-it-works">How It Works</FooterLink>
            <FooterLink href="/#trust-guarantee">Our Trust Guarantee</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </FooterColumn>

          <FooterColumn title="Get in touch">
            <a href="mailto:contact@market-reports.com" className="text-[13.5px] font-medium text-navy hover:text-gold transition-colors break-all">
              contact@market-reports.com
            </a>
          </FooterColumn>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-[12px] text-ink-faint">© {new Date().getFullYear()} PropertyJaanch, operated by Quintessence Analytics Pvt Ltd. All rights reserved.</p>
          <p className="text-[12px] text-ink-faint max-w-2xl sm:text-right">
            PropertyJaanch is under active development. Verification checks reflect what has been independently confirmed at the time of the check — always verify independently before making a final decision. See each service page for what is live today versus in development.
          </p>
        </div>
      </Container>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint mb-3.5">{title}</h3>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[13.5px] text-ink-soft hover:text-ink transition-colors">
      {children}
    </Link>
  )
}
