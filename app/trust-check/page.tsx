import { PagePhoto } from '@/components/ui/PagePhoto'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Seal } from '@/components/ui/Seal'
import { StatusPill } from '@/components/ui/StatusPill'
import { RoadmapBadge } from '@/components/ui/RoadmapBadge'
import { RequestForm } from '@/components/RequestForm'

export const metadata: Metadata = {
  title: 'Property Trust Check',
  description: 'A complete pre-purchase verification service for buyers — ownership, title, encumbrances, loans, disputes, boundaries, and more, turned into one plain-language Property Trust Report.',
}

const WHAT_WE_VERIFY = [
  'Ownership and seller identity',
  'Title / document chain',
  'Survey number and property area',
  'Plot / location and physical boundaries',
  'Encumbrance Certificate',
  'Existing loans / mortgages',
  'Available litigation / dispute checks',
  'Government restrictions and land-use information',
  'Layout / development approvals, where applicable',
  'Property tax and other available records',
  'Document consistency and missing documents',
]

const SAMPLE_CHECKS = [
  { label: 'Ownership', result: 'Verified' },
  { label: 'Title Documents', result: 'Reviewed' },
  { label: 'Survey', result: 'Verified' },
  { label: 'Boundaries', result: 'Survey Recommended' },
  { label: 'Encumbrance', result: 'No issue identified' },
  { label: 'Loan / Mortgage', result: 'Checked' },
  { label: 'Litigation', result: 'Search completed' },
  { label: 'Land Use', result: 'Reviewed' },
  { label: 'Documents', result: '1 document pending' },
]

const STATUS_LEVELS: { status: 'green' | 'amber' | 'red'; text: string }[] = [
  { status: 'green', text: 'Nothing material was flagged in what we could verify — reasonable to move forward, subject to your own final checks.' },
  { status: 'amber', text: 'One or more items need resolving first — a missing document, a recommended survey, a query that needs an answer before proceeding.' },
  { status: 'red', text: 'A material issue was identified — a dispute, a restriction, or a document inconsistency serious enough that we recommend not proceeding as-is.' },
]

export default function TrustCheckPage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="pt-14 pb-14 sm:pt-20 sm:pb-16 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-center">
          <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold mb-4">Service 01 — Property Trust Check</p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight max-w-2xl text-balance text-ink font-medium">
            Is this property safe to buy?
          </h1>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-ink-soft">
            A complete pre-purchase verification service for buyers. We check what can actually be checked, tell you
            plainly what we found, and are equally clear about what still needs a lawyer, surveyor, or government
            authority.
          </p>
          <div className="mt-6"><RoadmapBadge label="Automated scoring in development — checks below are run manually today" /></div>
          </div>
          <PagePhoto src="/images/page-trust-check.webp" alt="House keys resting on property documents and charts" className="max-w-md mx-auto lg:max-w-none" />
        </Container>
      </section>

      {/* What we verify */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl text-ink font-medium mb-8">What we verify</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
            {WHAT_WE_VERIFY.map(item => (
              <div key={item} className="flex items-start gap-2.5">
                <Seal size={17} />
                <span className="text-[14px] text-ink-soft leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sample report */}
      <section className="py-16 sm:py-20 bg-bg-sunken border-y border-line">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 items-start">
          <div>
            <h2 className="font-display text-2xl text-ink font-medium mb-4">A report you can actually read</h2>
            <p className="text-[14.5px] leading-relaxed text-ink-soft max-w-md">
              Instead of dozens of raw documents, you get one Property Trust Report — every check, what was found,
              and a final status. This is a sample, so you know exactly what to expect.
            </p>
            <div className="mt-5"><RoadmapBadge label="Sample report — illustrative" /></div>
          </div>

          <div className="rounded-2xl bg-bg-elevated border border-line p-6 sm:p-7" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="flex items-center justify-between mb-5">
              <p className="font-display text-lg text-ink">Property Trust Report</p>
              <p className="font-display text-2xl text-gold font-variant-tabular">91<span className="text-sm text-ink-faint">/100</span></p>
            </div>
            <div className="divide-y divide-line">
              {SAMPLE_CHECKS.map(c => (
                <div key={c.label} className="flex items-center justify-between py-2.5 text-[13.5px]">
                  <span className="text-ink-soft">{c.label}</span>
                  <span className="text-ink font-medium text-right">{c.result}</span>
                </div>
              ))}
            </div>
            <div className="mt-5"><StatusPill status="green" /></div>
          </div>
        </Container>
      </section>

      {/* Status levels */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl text-ink font-medium mb-8">What the final status means</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STATUS_LEVELS.map(s => (
              <div key={s.status} className="rounded-2xl border border-line bg-bg-elevated p-6" style={{ boxShadow: 'var(--shadow-card)' }}>
                <StatusPill status={s.status} />
                <p className="mt-4 text-[13.5px] leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-line-strong bg-bg-sunken p-6">
            <p className="text-[13.5px] leading-relaxed text-ink-soft">
              Every report clearly distinguishes between <span className="text-ink font-medium">records we verified directly</span>,{' '}
              <span className="text-ink font-medium">information that could not be independently confirmed</span>, and{' '}
              <span className="text-ink font-medium">matters that require a qualified lawyer, surveyor, or government authority</span> —
              never presented as a single flat &ldquo;yes.&rdquo;
            </p>
          </div>
        </Container>
      </section>

      {/* Request form */}
      <section className="py-16 sm:py-20 bg-bg-sunken border-y border-line">
        <Container className="max-w-2xl">
          <h2 className="font-display text-2xl text-ink font-medium mb-2">Verify a property</h2>
          <p className="text-[14px] text-ink-soft mb-8">Tell us about the property and we&apos;ll get started.</p>
          <RequestForm service="Property Trust Check" ctaLabel="Request a Trust Check" />
        </Container>
      </section>
    </>
  )
}
