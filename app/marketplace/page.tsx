import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Seal } from '@/components/ui/Seal'
import { RoadmapBadge } from '@/components/ui/RoadmapBadge'
import { RequestForm } from '@/components/RequestForm'

export const metadata: Metadata = {
  title: 'Verified Marketplace',
  description: 'Buy and sell properties with proof, not promises. Listings only earn a Trust badge after verification is complete.',
}

const SELLER_JOURNEY = ['List Property', 'Submit Documents', 'Identity Verification', 'Property Verification', 'Risk Review', 'Verified Listing', 'Buyer Enquiries']
const BUYER_JOURNEY = ['Search', 'Compare', 'View Trust Score', 'Review Documents', 'Request Verification', 'Make Offer', 'Secure Transaction']

const LISTING_BADGES = [
  'Owner Verified', 'Property Verified', 'Title Reviewed', 'Survey / Location Checked',
  'EC Checked', 'Loan / Mortgage Checked', 'Dispute Search Completed', 'Documents Reviewed',
]

export default function MarketplacePage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="pt-14 pb-14 sm:pt-20 sm:pb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold mb-4">Service 02 — Verified Marketplace</p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight max-w-2xl text-balance text-ink font-medium">
            Buy and sell with proof, not promises.
          </h1>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-ink-soft">
            Verification comes before the listing. A property only earns a Trust badge once ownership, title,
            encumbrances, and the rest have actually been checked.
          </p>
          <div className="mt-6"><RoadmapBadge label="Marketplace listings launching soon — join early access below" /></div>
        </Container>
      </section>

      {/* The key difference */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl text-ink font-medium mb-8 text-center">The difference is what backs the listing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-line-strong bg-bg-sunken p-6 sm:p-7">
              <p className="text-[10.5px] font-semibold uppercase tracking-wide text-ink-faint mb-3">A typical listing</p>
              <p className="text-[17px] text-ink-soft italic">&ldquo;Plot for sale — ₹75 lakh.&rdquo;</p>
            </div>
            <div className="rounded-2xl border-2 border-gold bg-bg-elevated p-6 sm:p-7" style={{ boxShadow: 'var(--shadow-card)' }}>
              <p className="text-[10.5px] font-semibold uppercase tracking-wide text-gold mb-3">A PropertyJaanch listing</p>
              <p className="text-[17px] text-ink font-medium mb-2">Verified Plot — ₹75 lakh</p>
              <p className="text-[13px] text-ink-soft mb-3">Trust Score: 94/100</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[12.5px] text-ink-soft">
                {['Ownership', 'Title', 'EC', 'Survey', 'Loan', 'Documents'].map(x => (
                  <span key={x} className="inline-flex items-center gap-1"><Seal size={12} /> {x}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-[13.5px] text-ink-soft max-w-xl mx-auto">
            Trust becomes part of the product, not a claim you have to take on faith.
          </p>
        </Container>
      </section>

      {/* Journeys */}
      <section className="py-16 sm:py-20 bg-bg-sunken border-y border-line">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <JourneyCard title="Seller journey" steps={SELLER_JOURNEY} />
            <JourneyCard title="Buyer journey" steps={BUYER_JOURNEY} />
          </div>
        </Container>
      </section>

      {/* Listing badges */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl text-ink font-medium mb-2">Every verified listing shows</h2>
          <p className="text-[14px] text-ink-soft mb-8 max-w-xl">The same checklist, every time — so comparing two listings means comparing what was actually verified, not just asking price.</p>
          <div className="flex flex-wrap gap-3">
            {LISTING_BADGES.map(b => (
              <span key={b} className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-bg-elevated px-4 py-2 text-[13px] font-medium text-ink-soft">
                <Seal size={14} /> {b}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Request form */}
      <section className="py-16 sm:py-20 bg-bg-sunken border-y border-line">
        <Container className="max-w-2xl">
          <h2 className="font-display text-2xl text-ink font-medium mb-2">Get early access</h2>
          <p className="text-[14px] text-ink-soft mb-8">
            Listings aren&apos;t live yet — tell us whether you&apos;re looking to buy or sell, and we&apos;ll reach out
            as we open the marketplace.
          </p>
          <RequestForm
            service="Verified Marketplace — early access"
            ctaLabel="Request Early Access"
            fields={[
              { name: 'name', label: 'Your name', placeholder: 'Full name' },
              { name: 'contact', label: 'Email or phone', placeholder: 'How should we reach you?' },
              { name: 'interest', label: 'I’m looking to', placeholder: 'Buy / Sell / Both' },
            ]}
          />
        </Container>
      </section>
    </>
  )
}

function JourneyCard({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="rounded-2xl bg-bg-elevated border border-line p-6 sm:p-7" style={{ boxShadow: 'var(--shadow-card)' }}>
      <h3 className="font-display text-lg text-ink mb-5">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-full bg-navy-tint text-navy px-3 py-1.5 text-[12.5px] font-medium">{step}</span>
            {i < steps.length - 1 && <span className="text-ink-faint text-sm" aria-hidden="true">&rarr;</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
