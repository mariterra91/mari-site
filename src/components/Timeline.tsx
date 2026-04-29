import { motion } from 'framer-motion';
import { Section } from './Section';

const journey = [
  {
    period: '2015 – 2016',
    location: 'Iceland',
    role: 'A high-energy household',
    description:
      'Caring for four children, including twins. We were often independent, exploring the Icelandic nature together. We remain close friends to this day.',
  },
  {
    period: '2017',
    location: 'Stockholm',
    role: 'Specialized infant care',
    description:
      'Providing specialized care for a 4-month-old infant alongside 5-year-old twins. Focusing on early milestones and gentle routines.',
  },
  {
    period: '2018',
    location: 'Åre',
    role: 'High-support needs',
    description:
      'A loving but demanding environment, caring for a newborn and a toddler with ADHD. We fostered a relationship that continues to this day.',
  },
  {
    period: '2021 – 2022',
    location: 'Nordic Light Nannies',
    role: 'Newborn & Night Specialist',
    description:
      'Supporting families during those first critical weeks. Specialized night care for twins, helping parents find their rhythm.',
  },
];

export const Timeline = () => {
  return (
    <Section id="journey" className="!max-w-6xl px-6 md:px-8">
      <div className="max-w-3xl mb-16 md:mb-32">
        <span className="block serif italic text-xl md:text-2xl text-accent-primary mb-3 md:mb-4">
          The path that led me here
        </span>
        <h2 className="text-4xl md:text-6xl text-text-primary leading-[1.15] md:leading-[1.1]">
          Twenty years of stories, <br className="hidden sm:block" />
          <span className="italic serif">not just jobs.</span>
        </h2>
      </div>

      <div className="space-y-16 md:space-y-32">
        {journey.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse text-left md:text-right' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full md:w-1/3">
              <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-40 block mb-1 md:mb-2">
                {item.location}
              </span>
              <span className="text-xl md:text-2xl font-serif italic text-accent-primary leading-none">
                {item.period}
              </span>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl md:text-4xl mb-4 md:mb-6 font-serif leading-tight">
                {item.role}
              </h3>
              <p className="text-lg md:text-2xl opacity-80 leading-relaxed serif text-balance">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Continuing the story note */}
      <motion.div
        className="mt-24 md:mt-48 p-8 md:p-12 bg-secondary-tint/50 border border-border-subtle rounded-sm text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-lg md:text-xl serif italic opacity-70">
          ...and many more families in Brazil and Sweden who I’ve had the honor
          to support as a household partner and nanny.
        </p>
      </motion.div>
    </Section>
  );
};
