import { motion } from 'framer-motion';
import { Section } from './Section';
import { Info } from 'lucide-react';

export const Pricing = () => {
  return (
    <Section id="pricing" className="!max-w-5xl px-6 md:px-8">
      <div className="text-center mb-16 md:mb-24">
        <span className="block serif italic text-xl md:text-2xl text-accent-primary mb-3 md:mb-4">
          Services & Investment
        </span>
        <h2 className="text-4xl md:text-6xl text-text-primary leading-tight">
          A transparent partnership.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
        <div className="p-8 md:p-12 border border-border-subtle relative bg-white/50 rounded-sm">
          <h3 className="text-xl md:text-2xl mb-6 md:mb-8 font-serif italic text-accent-primary underline underline-offset-8">
            Casual & Occasional
          </h3>
          <p className="text-[10px] md:text-sm opacity-50 mb-6 md:mb-8 uppercase tracking-[0.2em]">
            Shifts under 6 hours
          </p>

          <div className="space-y-4 md:space-y-6">
            <div className="flex justify-between items-end border-b border-border-subtle pb-3 md:pb-4">
              <span className="serif text-base md:text-lg">
                Daytime (07–18)
              </span>
              <span className="text-xl md:text-2xl font-serif italic">
                190 SEK{' '}
                <small className="text-xs md:text-sm opacity-40">/hr</small>
              </span>
            </div>
            <div className="flex justify-between items-end border-b border-border-subtle pb-3 md:pb-4">
              <span className="serif text-base md:text-lg">
                Night & Weekends
              </span>
              <span className="text-xl md:text-2xl font-serif italic">
                250 SEK{' '}
                <small className="text-xs md:text-sm opacity-40">/hr</small>
              </span>
            </div>
          </div>
          <p className="mt-6 md:mt-8 text-xs md:text-sm opacity-40 italic serif">
            * Minimum 3-hour shift to ensure quality care.
          </p>
        </div>

        <div className="p-8 md:p-12 border border-accent-primary/30 relative bg-secondary-tint/30 rounded-sm">
          <h3 className="text-xl md:text-2xl mb-6 md:mb-8 font-serif italic text-accent-primary underline underline-offset-8">
            Full Days & Support
          </h3>
          <p className="text-[10px] md:text-sm opacity-50 mb-6 md:mb-8 uppercase tracking-[0.2em]">
            Shifts of 6+ hours
          </p>

          <div className="space-y-4 md:space-y-6">
            <div className="flex justify-between items-end border-b border-border-subtle pb-3 md:pb-4">
              <span className="serif text-base md:text-lg">
                Daytime (07–18)
              </span>
              <span className="text-xl md:text-2xl font-serif italic">
                175 SEK{' '}
                <small className="text-xs md:text-sm opacity-40">/hr</small>
              </span>
            </div>
            <div className="flex justify-between items-end border-b border-border-subtle pb-3 md:pb-4">
              <span className="serif text-base md:text-lg">
                Night & Weekends
              </span>
              <span className="text-xl md:text-2xl font-serif italic">
                225 SEK{' '}
                <small className="text-xs md:text-sm opacity-40">/hr</small>
              </span>
            </div>
          </div>
          <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-accent-primary text-white px-3 py-1 rounded-full text-[10px] md:text-xs serif italic">
            Recommended
          </div>
        </div>
      </div>

      <motion.div
        className="max-w-3xl mx-auto text-center px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 mb-6 md:mb-8 text-accent-primary px-4 md:px-6 py-1.5 md:py-2 border border-accent-primary/20 rounded-full">
          <Info
            size={16}
            className="md:w-[18px] md:h-[18px]"
            strokeWidth={1.5}
          />
          <span className="serif italic text-sm md:text-base">
            About the Swedish RUT Deduction
          </span>
        </div>
        <p className="text-xl md:text-2xl serif leading-relaxed opacity-90 mb-8 md:mb-12">
          Through the RUT system, families in Sweden only pay{' '}
          <span className="text-accent-primary font-serif italic">
            50% of the labor cost
          </span>{' '}
          directly. I handle all the administration, ensuring your invoice
          reflects the deduction automatically.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left border-t border-border-subtle pt-8 md:pt-12">
          <div>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-40 block mb-1 md:mb-2">
              Annual Cap
            </span>
            <p className="serif text-sm md:text-base">
              75,000 SEK per adult, per year. For a couple, that’s 150,000 SEK.
            </p>
          </div>
          <div>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-40 block mb-1 md:mb-2">
              Eligibility
            </span>
            <p className="serif text-sm md:text-base">
              Available for children up to age 13, provided in your home.
            </p>
          </div>
          <div>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-40 block mb-1 md:mb-2">
              Process
            </span>
            <p className="serif text-sm md:text-base">
              Transparent invoicing with a digital trail for Skatteverket.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
