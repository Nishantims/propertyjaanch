import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { RoadmapBadge } from '@/components/ui/RoadmapBadge'
import { RequestForm } from '@/components/RequestForm'

export const metadata: Metadata = {
  title: 'Secure Transaction',
  description: 'Don’t release the money until the agreed conditions are met. A structured transaction workflow built around a regulated escrow arrangement.',
}

const FLOW = [
  'Buyer & Seller Agree',
  'Digital Transaction Agreement',
  'Property Verification Completed',
  'Buyer Places Funds into Regulated Escrow Arrangement',
  'Seller Completes Agreed Conditions',
  'Registration / Transfer Milestone Completed',
  'Required Documents Confirmed',
  'Escrow Releases Funds',
  'Transaction Completed',
]

const BUYER_CONDITIONS = [
  'Required documents submitted',
  'Verification completed',
  'Seller obligations fulfilled',
  'Loan release / NOC completed, where applicable',
  'Registration milestone completed',
  'Buyer-approved contractual conditions satisfied',
]

export default function SecureTransactionPage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="pt-14 pb-14 sm:pt-20 sm:pb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold mb-4">Service 03 — Secure Transaction</p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight max-w-2xl text-balance text-ink font-medium">
            Don&apos;t release the money until the agreed conditions are met.
          </h1>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-ink-soft">
            This service protects both buyer and seller during the transaction — a structured workflow built around a
            regulated escrow arrangement, so funds move only when what was agreed actually happens.
          </p>
          <div className="mt-6"><RoadmapBadge label="Requires a licensed escrow / payment partner — not yet connected" /></div>
          <div className="mt-6 max-w-xl rounded-xl border border-line-strong bg-bg-sunken p-5">
            <p className="text-[13px] leading-relaxed text-ink-soft">
              PropertyJaanch does not hold customer money itself. Funds are designed to sit with a regulated bank or
              payment/escrow provider, with PropertyJaanch acting as the transaction workflow and verification layer —
              the exact structure will be finalized with that partner and legal counsel before it goes live.
            </p>
          </div>
        </Container>
      </section>

      {/* Flow */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl">
          <h2 className="font-display text-2xl text-ink font-medium mb-8">How a transaction moves</h2>
          <div className="flex flex-col">
            {FLOW.map((step, i) => (
              <div key={step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-white text-[13px] font-semibold">{i + 1}</span>
                  {i < FLOW.length - 1 && <span className="w-px flex-1 min-h-[22px] bg-line-strong" />}
                </div>
                <p className="pb-6 pt-1 text-[14.5px] text-ink-soft">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Protections */}
      <section className="py-16 sm:py-20 bg-bg-sunken border-y border-line">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-bg-elevated border border-line p-6 sm:p-7" style={{ boxShadow: 'var(--shadow-card)' }}>
              <h3 className="font-display text-lg text-ink mb-3">Buyer protection</h3>
              <p className="text-[13.5px] text-ink-soft mb-4">Money is not released simply because the seller requests it. Release depends on predefined conditions, such as:</p>
              <ul className="space-y-2">
                {BUYER_CONDITIONS.map(c => (
                  <li key={c} className="flex items-start gap-2 text-[13px] text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" /> {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-bg-elevated border border-line p-6 sm:p-7" style={{ boxShadow: 'var(--shadow-card)' }}>
              <h3 className="font-display text-lg text-ink mb-3">Seller protection</h3>
              <p className="text-[13.5px] text-ink-soft mb-4">The seller can see, in the workflow, that:</p>
              <p className="rounded-lg bg-navy-tint text-navy text-[13.5px] font-medium px-4 py-3 mb-4">
                &ldquo;Buyer funds have been secured in the agreed escrow arrangement.&rdquo;
              </p>
              <p className="text-[13px] text-ink-soft">
                This reduces the seller&apos;s concern that the buyer may waste time without having funds actually
                available.
              </p>
            </div>

            <div className="rounded-2xl bg-bg-elevated border border-line p-6 sm:p-7" style={{ boxShadow: 'var(--shadow-card)' }}>
              <h3 className="font-display text-lg text-ink mb-3">Dispute protection</h3>
              <p className="text-[13.5px] text-ink-soft mb-4">If an agreed condition isn&apos;t satisfied, the transaction status becomes:</p>
              <p className="rounded-lg bg-status-amber-tint text-status-amber text-[13.5px] font-semibold px-4 py-3 mb-4 text-center">
                TRANSACTION — HOLD
              </p>
              <p className="text-[13px] text-ink-soft">
                Funds remain subject to the agreed escrow terms and dispute-resolution mechanism, rather than being
                automatically released to either party.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Request form */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl">
          <h2 className="font-display text-2xl text-ink font-medium mb-2">Secure my transaction</h2>
          <p className="text-[14px] text-ink-soft mb-8">
            Tell us about the deal you&apos;re working on and we&apos;ll walk you through what&apos;s available today.
          </p>
          <RequestForm service="Secure Transaction" ctaLabel="Talk to Us About This Deal" />
        </Container>
      </section>
    </>
  )
}
