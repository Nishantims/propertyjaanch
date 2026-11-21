import { PagePhoto } from '@/components/ui/PagePhoto'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Seal } from '@/components/ui/Seal'
import { RequestForm } from '@/components/RequestForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Have a property to verify, list, or a transaction to secure? Get in touch with PropertyJaanch.',
}

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-start">
        <div className="min-w-0 max-w-2xl">
        <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold mb-4">
          <Seal size={14} /> Contact us
        </p>
        <h1 className="font-display text-4xl sm:text-5xl leading-tight text-balance text-ink font-medium">
          Let&apos;s talk about your property.
        </h1>
        <p className="mt-5 text-[15.5px] leading-relaxed text-ink-soft">
          Whether it&apos;s a Property Trust Check, listing a property, or a transaction you&apos;d like secured — write to
          us directly, or use the form below and we&apos;ll get back to you.
        </p>

        <a
          href="mailto:contact@market-reports.com"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy-fixed px-6 py-3 text-[14px] font-semibold text-white hover:opacity-90 transition-opacity"
        >
          contact@market-reports.com
        </a>

        <div className="mt-12">
          <RequestForm
            service="General Enquiry"
            ctaLabel="Send Message"
            fields={[
              { name: 'name', label: 'Your name', placeholder: 'Full name' },
              { name: 'contact', label: 'Email or phone', placeholder: 'How should we reach you?' },
              { name: 'topic', label: 'What is this about?', placeholder: 'e.g. Trust Check, Marketplace, Secure Transaction' },
            ]}
          />
        </div>
        </div>
        <div className="hidden lg:block lg:sticky lg:top-28">
          <PagePhoto src="/images/page-contact.webp" alt="A marble reception lobby with warm lighting" />
        </div>
      </Container>
    </section>
  )
}
