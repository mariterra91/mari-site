import { motion } from 'framer-motion';
import { Section } from './Section';
import { Baby, Users, Moon, LayoutGrid, Heart, Trees } from 'lucide-react';

const specs = [
  {
    title: 'Newborn & Infant Care',
    description:
      'Specialized support for the most delicate stages of life, from feeding to development.',
    icon: Baby,
  },
  {
    title: 'Twin & Multi-Child',
    description:
      'Experienced in managing high-energy households and multiple children simultaneously.',
    icon: Users,
  },
  {
    title: 'Sleep Support',
    description:
      'Night specialist expertise helping families establish healthy, restful sleep rhythms.',
    icon: Moon,
  },
  {
    title: 'Montessori Philosophy',
    description:
      'Encouraging independence and motor skills through nature-led, curious play.',
    icon: Trees,
  },
  {
    title: 'Household Logistics',
    description:
      'Home organization, basic cooking, and pet care to make your home life smoother.',
    icon: LayoutGrid,
  },
  {
    title: 'Deep Empathy',
    description:
      'A blend of 20 years of expertise and the firsthand understanding of a mother.',
    icon: Heart,
  },
];

export const Specializations = () => {
  return (
    <Section id="specializations">
      <div className="text-center mb-16">
        <span className="block text-[1.2rem] text-accent-primary mb-2 serif italic">
          Expertise & Care
        </span>
        <h2 className="text-5xl text-text-primary">My Specializations</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specs.map((spec, index) => (
          <motion.div
            key={index}
            className="p-12 bg-secondary-tint rounded-lg transition-all border border-border-subtle hover:translate-y-[-5px] hover:shadow-[0_10px_30px_oklch(0.25_0.02_70_/_0.05)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-12 h-12 bg-white text-accent-primary flex items-center justify-center rounded-full mb-8 shadow-[0_4px_10px_oklch(0.25_0.02_70_/_0.05)]">
              <spec.icon size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl mb-4">{spec.title}</h3>
            <p className="text-[1rem] opacity-80 leading-relaxed">
              {spec.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
