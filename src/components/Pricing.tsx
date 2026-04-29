import { motion } from 'framer-motion';
import { Section } from './Section';
import { Info, CheckCircle2 } from 'lucide-react';

export const Pricing = () => {
  return (
    <Section id="pricing">
      <div className="text-center mb-16">
        <span className="block text-[1.2rem] text-accent-primary mb-2 serif italic">
          Transparent Rates
        </span>
        <h2 className="text-5xl text-text-primary">Investment in Care</h2>
      </div>

      <div className="max-w-[900px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-12 bg-white rounded-lg border border-border-subtle relative">
            <h3 className="text-2xl mb-8 text-accent-primary">
              Shifts under 6h
            </h3>
            <div className="flex justify-between items-center py-4 border-b border-border-subtle">
              <span className="text-[1rem] opacity-70">Daytime (07–18)</span>
              <span className="text-xl font-semibold">
                190 SEK <small className="text-[0.8rem] opacity-50">/hr</small>
              </span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-border-subtle">
              <span className="text-[1rem] opacity-70">Night & Weekends</span>
              <span className="text-xl font-semibold">
                250 SEK <small className="text-[0.8rem] opacity-50">/hr</small>
              </span>
            </div>
            <p className="mt-6 text-[0.85rem] opacity-50 italic">
              * Minimum 3-hour shift
            </p>
          </div>

          <div className="p-12 bg-secondary-tint rounded-lg border border-accent-primary relative">
            <h3 className="text-2xl mb-8 text-accent-primary">Shifts of 6h+</h3>
            <div className="flex justify-between items-center py-4 border-b border-border-subtle">
              <span className="text-[1rem] opacity-70">Daytime (07–18)</span>
              <span className="text-xl font-semibold">
                175 SEK <small className="text-[0.8rem] opacity-50">/hr</small>
              </span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-border-subtle">
              <span className="text-[1rem] opacity-70">Night & Weekends</span>
              <span className="text-xl font-semibold">
                225 SEK <small className="text-[0.8rem] opacity-50">/hr</small>
              </span>
            </div>
            <span className="absolute top-4 right-4 bg-accent-primary text-white px-3 py-1 rounded-full text-[0.75rem] font-semibold">
              Best for full-time
            </span>
          </div>
        </div>

        <motion.div
          className="bg-text-primary/[0.03] border border-dashed border-border-subtle rounded-lg p-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6 text-accent-primary">
            <Info size={20} />
            <h4 className="font-sans font-semibold text-[1.1rem]">
              Understanding the RUT Deduction (2026)
            </h4>
          </div>
          <div className="rut-content">
            <p className="text-[1.05rem] mb-6 opacity-80">
              Families in Sweden only pay <strong>50% of the labor cost</strong>{' '}
              directly. The deduction is applied automatically via my invoicing.
            </p>
            <ul className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <li className="flex items-center gap-2 text-[0.95rem] opacity-70">
                <CheckCircle2 size={16} className="text-accent-primary" />
                <span>
                  <strong>Annual Cap:</strong> 75k SEK/adult.
                </span>
              </li>
              <li className="flex items-center gap-2 text-[0.95rem] opacity-70">
                <CheckCircle2 size={16} className="text-accent-primary" />
                <span>
                  <strong>Eligibility:</strong> Children to age 13.
                </span>
              </li>
              <li className="flex items-center gap-2 text-[0.95rem] opacity-70">
                <CheckCircle2 size={16} className="text-accent-primary" />
                <span>
                  <strong>Process:</strong> Secure e-payment.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
