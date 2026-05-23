import { motion } from 'framer-motion';
import { Section } from './Section';

export const Philosophy = () => {
  return (
    <Section id="philosophy" className="!max-w-6xl px-6 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left Side: Editorial Typography & Copy */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block serif italic text-xl md:text-2xl text-accent-primary mb-3 md:mb-4">
              My Philosophy
            </span>
            <h2 className="text-display-3 text-text-primary mb-8 text-balance">
              Nurturing independence <br className="hidden sm:block" />
              <span className="italic serif">through curiosity.</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl opacity-90 leading-relaxed serif text-balance">
              <p>
                I believe in building lasting, trust-based relationships. My
                goal is to make your home life smoother and your child’s world
                safer, richer, and more fun.
              </p>
              <p>
                I advocate for the Montessori approach, encouraging a level of
                independence that enriches a child's self-esteem, confidence,
                and motor skills. By inviting children to participate in daily
                tasks, we cultivate self-reliance naturally.
              </p>
              <p>
                I love going on adventures and being outdoors—whether that’s
                jumping in autumn leaves or playing in Stockholm’s parks. When
                indoors, I enjoy arts and crafts, cooking, and baking with the
                children, finding that engaging with a child's genuine interests
                is the most effective path to bonding.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Editorial Staggered Image Layout (Kinfolk-inspired) */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6 relative pt-8 lg:pt-0">
          <motion.div
            className="flex flex-col gap-3 md:gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[3/4] w-full rounded-sm overflow-hidden border border-border-subtle bg-secondary-tint/40">
              <img
                src="/pics/montessori-art.webp"
                alt="A child painting a rainbow with watercolors"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div>
              <span className="block text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-40 mb-1">
                Creativity
              </span>
              <p className="font-serif italic text-sm md:text-base text-accent-primary">
                Arts, crafts & indoor play
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3 md:gap-4 pt-12 md:pt-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[3/4] w-full rounded-sm overflow-hidden border border-border-subtle bg-secondary-tint/40">
              <img
                src="/pics/nature-childcare.webp"
                alt="A young child lying on green grass surrounded by daisies"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div>
              <span className="block text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-40 mb-1">
                Nature
              </span>
              <p className="font-serif italic text-sm md:text-base text-accent-primary">
                Outdoor learning & growth
              </p>
            </div>
          </motion.div>

          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-accent-primary/20 rounded-tr-3xl -z-10" />
        </div>
      </div>
    </Section>
  );
};
