import { motion } from 'framer-motion';
import { FileText, Shield, Sparkles } from 'lucide-react';
import { Section } from './Section';

export const Pricing = () => {
  return (
    <Section id="pricing" className="!max-w-5xl px-6 md:px-8">
      <div className="text-center mb-12 md:mb-16">
        <span className="block serif italic text-xl md:text-2xl text-accent-primary mb-3 md:mb-4">
          Services & Engagement
        </span>
        <h2 className="text-display-3 text-text-primary">
          Pricing & Payment terms.
        </h2>
      </div>

      {/* Main Rate Callout (Bespoke Editorial Card) */}
      <div className="mb-16 p-8 md:p-12 border border-border-subtle bg-secondary-tint/30 rounded-sm text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-text-primary/65 block mb-4">
            Hourly Rate
          </span>
          <p className="font-serif italic text-4xl md:text-6xl text-accent-primary mb-4">
            225 SEK – 275 SEK
          </p>
          <p className="text-base md:text-lg text-text-primary/80 serif italic mb-6">
            Including VAT, after the Swedish RUT deduction.
          </p>
          <div className="w-12 h-[1px] bg-accent-primary/30 mx-auto mb-6" />
          <p className="text-base md:text-lg text-text-primary/95 serif leading-relaxed max-w-lg mx-auto">
            Pricing is determined individually based on your family’s specific
            needs, scheduling, and the scope of the assignment.
          </p>
        </div>
        {/* Subtle decorative wash */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/5 to-transparent pointer-events-none" />
      </div>

      {/* Logistic Details (3-Column Editorial Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-b border-border-subtle pb-16 mb-16">
        <div className="flex flex-col gap-4">
          <div className="w-10 h-10 rounded-full bg-secondary-tint text-accent-primary flex items-center justify-center border border-border-subtle">
            <Shield size={18} strokeWidth={1.5} />
          </div>
          <h3 className="font-serif italic text-xl text-accent-primary">
            F-Tax Registered
          </h3>
          <p className="text-sm md:text-base text-text-primary/85 leading-relaxed serif">
            I am registered for F-tax (F-skatt), operating as a fully
            independent professional service provider.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-10 h-10 rounded-full bg-secondary-tint text-accent-primary flex items-center justify-center border border-border-subtle">
            <FileText size={18} strokeWidth={1.5} />
          </div>
          <h3 className="font-serif italic text-xl text-accent-primary">
            Monthly Invoicing
          </h3>
          <p className="text-sm md:text-base text-text-primary/85 leading-relaxed serif">
            Payment is made in arrears. At the end of each month, I provide a
            detailed timesheet for your approval before issuing the invoice.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-10 h-10 rounded-full bg-secondary-tint text-accent-primary flex items-center justify-center border border-border-subtle">
            <Sparkles size={18} strokeWidth={1.5} />
          </div>
          <h3 className="font-serif italic text-xl text-accent-primary">
            Seamless Administration
          </h3>
          <p className="text-sm md:text-base text-text-primary/85 leading-relaxed serif">
            I handle all administrative filings with Skatteverket regarding
            taxes, VAT, and the RUT deduction process to keep things effortless
            for you.
          </p>
        </div>
      </div>

      {/* RUT Guidelines & Info */}
      <motion.div
        className="max-w-3xl mx-auto text-center px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="block text-[10px] md:text-xs uppercase tracking-[0.25em] text-text-primary/65 mb-4">
          How RUT Works
        </span>
        <p className="text-xl md:text-2xl serif leading-relaxed text-text-primary/95 mb-8">
          Through the RUT system, families in Sweden only pay{' '}
          <span className="text-accent-primary font-serif italic">
            50% of the labor cost
          </span>{' '}
          directly. I handle the deduction automatically on each invoice.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left border-t border-border-subtle pt-8 md:pt-12">
          <div>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-text-primary/65 block mb-2">
              Annual Cap
            </span>
            <p className="serif text-sm md:text-base text-text-primary/85">
              75,000 SEK per adult, per year. For a couple, that is a combined
              limit of 150,000 SEK.
            </p>
          </div>
          <div>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-text-primary/65 block mb-2">
              Eligibility
            </span>
            <p className="serif text-sm md:text-base text-text-primary/85">
              Applicable for children up to Grade 7 (usually age 13), provided
              within or near your home.
            </p>
          </div>
          <div>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-text-primary/65 block mb-2">
              Process
            </span>
            <p className="serif text-sm md:text-base text-text-primary/85">
              Paid electronically (bank transfer/swish) to ensure a secure,
              digital trail for Skatteverket.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
