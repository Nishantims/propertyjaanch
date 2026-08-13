import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Seal } from '@/components/ui/Seal'
import { StatusPill } from '@/components/ui/StatusPill'
import { RoadmapBadge } from '@/components/ui/RoadmapBadge'

const BUYER_WORRIES = [
  'Is the seller the real owner?',
  'Is the title clean?',
  'Is there a loan on the property?',
  'Is there an encumbrance?',
  'Is there a dispute?',
  'Are the boundaries correct?',
  'Are the documents genuine and consistent?',
  'Will I actually get what I paid for?',
]

const SELLER_WORRIES = [
  'Is the buyer genuine?',
  'Does the buyer actually have the funds?',
  'Will payment be delayed?',
  'Will the buyer back out after I’ve spent time and money?',
  'How do I safely complete the transaction?',
]

const SERVICES = [
  {
    href: '/trust-check',
    title: 'Property Trust Check',
    tagline: 'Know before you buy.',
    text: 'Independent verification of ownership, title, encumbrances, loans, disputes, boundaries, and available government records — turned into one plain-language report.',
    cta: 'Verify a Property',
  },
  {
    href: '/marketplace',
    title: 'Verified Marketplace',
    tagline: 'Buy and sell with proof, not promises.',
    text: 'Listings only get a Trust badge after their verification is complete — so what you’re browsing already has real information behind it, not just a seller’s word.',
    cta: 'Explore Verified Listings',
  },
  {
    href: '/secure-transaction',
    title: 'Secure Transaction',
    tagline: 'Protect both sides of the deal.',
    text: 'A structured transaction workflow built around a regulated escrow arrangement, so money only moves when the agreed conditions are actually met.',
    cta: 'See How It Works',
  },
]

const TRUST_CHECKLIST = [
  'Ownership', 'Title Documents', 'Survey', 'Boundaries', 'Encumbrance',
  'Loan / Mortgage', 'Litigation Search', 'Land Use', 'Documents',
]

const PARTNER_ROLES = [
  'Banks / Escrow Providers', 'Property Lawyers', 'Licensed Surveyors',
  'Document Verification Professionals', 'Valuers', 'Registration Professionals',
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_-10%,var(--navy-tint),transparent_55%)]" />
        <Container className="pt-16 pb-16 sm:pt-24 sm:pb-24">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold mb-5">
            <Seal size={14} /> For property buyers &amp; sellers in India
          </p>
          <h1 className="font-display text-[2.6rem] sm:text-6xl leading-[1.05] max-w-3xl text-balance text-ink font-medium">
            Real estate you can trust.
          </h1>
          <p className="mt-6 max-w-xl text-[16.5px] sm:text-lg leading-relaxed text-ink-soft">
            Verify the property. Know the risks. Secure the transaction — before you sign anything.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/trust-check" className="inline-flex items-center rounded-full bg-navy-fixed px-7 py-3.5 text-[14px] font-semibold text-white hover:opacity-90 transition-opacity">
              Verify a Property
            </Link>
            <Link href="/marketplace" className="inline-flex items-center rounded-full border border-line-strong bg-bg-elevated px-7 py-3.5 text-[14px] font-semibold text-ink hover:border-gold-soft hover:text-gold transition-colors">
              Find Verified Property
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Why we exist ────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionEyebrow>Why we exist</SectionEyebrow>
          <h2 className="font-display text-2xl sm:text-[2rem] text-ink font-medium max-w-2xl text-balance">
            Indian real estate has a trust problem — not a listings problem.
          </h2>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <WorryCard title="What buyers worry about" items={BUYER_WORRIES} />
            <WorryCard title="What sellers worry about" items={SELLER_WORRIES} />
          </div>
          <div className="mt-8 rounded-2xl bg-navy-fixed px-6 py-6 sm:px-8 sm:py-7 text-white">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-gold-soft mb-2">Our answer</p>
            <p className="font-display text-xl sm:text-2xl leading-snug text-balance">
              Independent verification, transparent property information, and a secure transaction workflow.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 3 services ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-bg-sunken border-y border-line">
        <Container>
          <SectionEyebrow>What we do</SectionEyebrow>
          <h2 className="font-display text-2xl sm:text-[2rem] text-ink font-medium max-w-2xl text-balance">
            Three services. One trust ecosystem.
          </h2>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => (
              <div key={s.href} className="flex flex-col rounded-2xl bg-bg-elevated border border-line p-7" style={{ boxShadow: 'var(--shadow-card)' }}>
                <Seal size={26} />
                <h3 className="font-display text-lg text-ink mt-4 mb-1">{s.title}</h3>
                <p className="text-[13px] font-semibold text-gold mb-3">{s.tagline}</p>
                <p className="text-[13.5px] leading-relaxed text-ink-soft flex-1">{s.text}</p>
                <Link href={s.href} className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-navy hover:text-gold transition-colors">
                  {s.cta} <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Trust profile example ───────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <div>
            <SectionEyebrow>Every property gets a profile</SectionEyebrow>
            <h2 className="font-display text-2xl sm:text-[2rem] text-ink font-medium text-balance">
              One record. Every check. In plain language.
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-ink-soft max-w-md">
              Instead of interpreting dozens of documents yourself, a verified property gets a single Property Trust Profile —
              what was checked, what was found, and a clear status you can actually act on.
            </p>
            <div className="mt-5"><RoadmapBadge label="Illustrative example — scoring engine in development" /></div>
          </div>

          <div className="rounded-2xl bg-bg-elevated border border-line p-6 sm:p-7" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="text-[10.5px] font-semibold uppercase tracking-wide text-ink-faint">Property ID</p>
                <p className="font-display text-base text-ink">PROP-IN-4471028</p>
              </div>
              <div className="text-right">
                <p className="text-[10.5px] font-semibold uppercase tracking-wide text-ink-faint">Trust Score</p>
                <p className="font-display text-3xl text-gold font-variant-tabular leading-none">94<span className="text-base text-ink-faint">/100</span></p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 mb-5">
              {TRUST_CHECKLIST.map(item => (
                <div key={item} className="flex items-center gap-2">
                  <Seal size={15} />
                  <span className="text-[13px] text-ink-soft">{item}</span>
                </div>
              ))}
            </div>
            <StatusPill status="green" />
          </div>
        </Container>
      </section>

      {/* ── How it works ─────────────────────────────────────────── */}
      <section id="how-it-works" className="py-16 sm:py-24 bg-bg-sunken border-y border-line scroll-mt-20">
        <Container>
          <SectionEyebrow>How it works</SectionEyebrow>
          <h2 className="font-display text-2xl sm:text-[2rem] text-ink font-medium max-w-2xl text-balance">
            Enter from either side — buyer or seller.
          </h2>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <FlowCard title="Buyer" steps={['Search', 'Verify', 'Review', 'Secure Funds', 'Register']} />
            <FlowCard title="Seller" steps={['List', 'Verify', 'Match', 'Secure Payment', 'Complete']} />
            <FlowCard title="Transaction" steps={['Property', 'Due Diligence', 'Agreement', 'Escrow', 'Registration']} />
          </div>
        </Container>
      </section>

      {/* ── Trust guarantee ─────────────────────────────────────── */}
      <section id="trust-guarantee" className="py-16 sm:py-24 scroll-mt-20">
        <Container>
          <SectionEyebrow>Our trust guarantee</SectionEyebrow>
          <h2 className="font-display text-2xl sm:text-[2rem] text-ink font-medium max-w-2xl text-balance">
            We promise what we can actually deliver — nothing more.
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <GuaranteeCard
              title="On verification"
              text="We make the available property information transparent, perform defined verification checks, identify risks, and provide a structured transaction process. We tell you clearly what we verified, what we couldn't, and what needs a qualified lawyer, surveyor, or government authority."
            />
            <GuaranteeCard
              title="On escrow"
              text="Funds are held and released according to the agreed escrow terms, through a designated regulated escrow provider — not PropertyJaanch itself. Release depends on predefined conditions being met, not a request from either side."
              badge
            />
          </div>
        </Container>
      </section>

      {/* ── Trust partners ──────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-bg-sunken border-y border-line">
        <Container>
          <SectionEyebrow>Trust partners</SectionEyebrow>
          <h2 className="font-display text-2xl sm:text-[2rem] text-ink font-medium text-balance">
            The professional network we&apos;re building.
          </h2>
          <p className="mt-2 text-[14.5px] text-ink-soft max-w-xl">
            PropertyJaanch is designed as the technology layer connecting buyers and sellers to the professionals a
            real transaction actually needs.
          </p>
          <div className="mt-4"><RoadmapBadge label="Partnerships in progress" /></div>
          <div className="mt-8 flex flex-wrap gap-3">
            {PARTNER_ROLES.map(role => (
              <span key={role} className="rounded-full border border-line-strong bg-bg-elevated px-4 py-2 text-[13px] font-medium text-ink-soft">
                {role}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <Container className="rounded-3xl bg-navy-fixed px-6 py-14 sm:px-14 sm:py-16 text-center text-white">
          <h2 className="font-display text-2xl sm:text-[2.1rem] font-medium text-balance max-w-xl mx-auto">
            Buying or selling property? Start with what&apos;s actually true about it.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/trust-check" className="inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-[14px] font-semibold text-ink-on-gold hover:bg-gold-soft transition-colors">
              Verify a Property
            </Link>
            <Link href="/contact" className="inline-flex items-center rounded-full border border-white/30 px-7 py-3.5 text-[14px] font-semibold text-white hover:bg-white/10 transition-colors">
              Talk to Us
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold mb-3">{children}</p>
}

function WorryCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl bg-bg-elevated border border-line p-6 sm:p-7" style={{ boxShadow: 'var(--shadow-card)' }}>
      <h3 className="font-display text-base text-ink mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {items.map(item => (
          <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-ink-soft leading-snug">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function FlowCard({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="rounded-2xl bg-bg-elevated border border-line p-6 sm:p-7" style={{ boxShadow: 'var(--shadow-card)' }}>
      <h3 className="font-display text-base text-ink mb-5">{title}</h3>
      <div className="flex flex-col">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy-tint text-navy text-[12px] font-semibold shrink-0">{i + 1}</span>
              {i < steps.length - 1 && <span className="w-px flex-1 min-h-[14px] bg-line-strong" />}
            </div>
            <span className="text-[13.5px] text-ink-soft py-1.5">{step}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function GuaranteeCard({ title, text, badge }: { title: string; text: string; badge?: boolean }) {
  return (
    <div className="rounded-2xl bg-bg-elevated border border-line p-6 sm:p-7" style={{ boxShadow: 'var(--shadow-card)' }}>
      <div className="flex items-center gap-2.5 mb-3">
        <h3 className="font-display text-base text-ink">{title}</h3>
        {badge && <RoadmapBadge label="Requires licensed partner" />}
      </div>
      <p className="text-[13.5px] leading-relaxed text-ink-soft">{text}</p>
    </div>
  )
}
