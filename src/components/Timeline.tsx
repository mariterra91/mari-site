import { motion } from 'framer-motion';
import { Section } from './Section';

const journey = [
  {
    period: '2015 – 2016',
    location: 'Iceland',
    role: 'Au Pair',
    description:
      'Caretaker for four children, including 22-month-old twins. Managed a high-energy household independently.',
  },
  {
    period: '2017 – 2017',
    location: 'Stockholm, Sweden',
    role: 'Au Pair',
    description:
      'Specialized care for a 4-month-old infant and 5-year-old twins.',
  },
  {
    period: '2018 – 2018',
    location: 'Åre, Sweden',
    role: 'Au Pair',
    description:
      'Caring for a newborn and a 2-year-old with high-support needs (ADHD).',
  },
  {
    period: '2021 – 2022',
    location: 'Stockholm, Sweden',
    role: 'Newborn & Night Specialist',
    description:
      'Served as a Night Nanny for 6-week-old twins, transitioning to daycare and overnight shifts.',
  },
  {
    period: '2023 – Present',
    location: 'Stockholm, Sweden',
    role: 'Motherhood & Swedish Language',
    description:
      "Dedicated focus on my daughter Anna's development and mastering the Swedish language.",
  },
];

export const Timeline = () => {
  return (
    <Section id="journey">
      <div className="text-center mb-16">
        <span className="block text-[1.2rem] text-accent-primary mb-2 serif italic">
          My Professional Journey
        </span>
        <h2 className="text-5xl text-text-primary">Two Decades of Care</h2>
      </div>

      <div className="relative max-w-[800px] mx-auto py-8">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border-subtle" />

        {journey.map((item, index) => (
          <motion.div
            key={index}
            className="relative pl-12 mb-12 last:mb-0"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            {/* Dot */}
            <div className="absolute left-[-4px] top-2 w-[9px] h-[9px] bg-accent-primary rounded-full shadow-[0_0_0_4px_var(--color-bg-neutral),0_0_0_5px_var(--color-border-subtle)]" />

            <div className="timeline-content">
              <span className="block text-[0.9rem] font-semibold text-accent-primary mb-1">
                {item.period}
              </span>
              <h3 className="text-2xl mb-1">{item.role}</h3>
              <span className="block text-[0.9rem] opacity-60 mb-4">
                {item.location}
              </span>
              <p className="text-[1.1rem] opacity-80 max-w-[65ch]">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
