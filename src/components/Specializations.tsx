import { motion } from 'framer-motion';
import { Section } from './Section';

const specs = [
  {
    title: 'Newborn & Infant Care',
    description:
      'Specialized support for the most delicate stages of life, from feeding to development.',
  },
  {
    title: 'Twin & Multi-Child',
    description:
      'Experienced in managing high-energy households and multiple children simultaneously.',
  },
  {
    title: 'Sleep Support',
    description:
      'Night specialist expertise helping families establish healthy, restful sleep rhythms.',
  },
  {
    title: 'Montessori Philosophy',
    description:
      'Encouraging independence and motor skills through nature-led, curious play.',
  },
  {
    title: 'Household Logistics',
    description:
      'Home organization, basic cooking, and pet care to make your home life smoother.',
  },
  {
    title: 'Deep Empathy',
    description:
      'A blend of 20 years of expertise and the firsthand understanding of a mother.',
  },
];

export const Specializations = () => {
  return (
    <Section id="specializations" className="!max-w-7xl px-6 md:px-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-6 md:gap-8">
        <div className="max-w-2xl">
          <span className="block serif italic text-xl md:text-2xl text-accent-primary mb-3 md:mb-4">
            A specialized approach
          </span>
          <h2 className="text-display-3 text-text-primary">
            Areas of dedicated <br className="hidden sm:block" />
            <span className="italic serif">expertise.</span>
          </h2>
        </div>
        <p className="text-lg md:text-xl text-text-primary/75 max-w-sm serif italic lg:text-right">
          Every family is a world of its own. I adapt my skills to fit your
          rhythm and needs perfectly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-12 md:gap-y-16">
        {specs.map((spec, index) => (
          <motion.div
            key={spec.title}
            className={`flex gap-6 md:gap-8 items-start ${index % 2 !== 0 ? 'lg:pt-16' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (index % 2) * 0.2 }}
          >
            <div className="flex-shrink-0 font-serif italic text-3xl md:text-4xl text-accent-primary/70 pt-1">
              {String(index + 1).padStart(2, '0')}.
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4 font-serif italic text-accent-primary leading-tight">
                {spec.title}
              </h3>
              <p className="text-base md:text-lg text-text-primary/85 leading-relaxed max-w-md serif">
                {spec.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Visual Break / Separator */}
      <div className="mt-16 md:mt-24 flex justify-center">
        <div className="w-px h-16 md:h-24 bg-gradient-to-b from-accent-primary/20 to-transparent" />
      </div>
    </Section>
  );
};
