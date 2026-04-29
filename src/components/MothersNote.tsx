import { motion } from 'framer-motion';

export const MothersNote = () => {
  return (
    <section className="py-20 md:py-48 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block serif italic text-xl md:text-2xl text-accent-primary mb-8 md:mb-12">
                Dear Parents,
              </span>
              <blockquote className="text-3xl md:text-5xl leading-[1.2] md:leading-[1.15] mb-8 md:mb-12 serif text-text-primary text-balance">
                "Becoming a mother has been my greatest teacher. It gave me a
                new depth of empathy and a sharper instinct for the silent needs
                of a child."
              </blockquote>
              <div className="max-w-xl">
                <p className="text-lg md:text-xl opacity-80 leading-relaxed mb-6 md:mb-8 serif">
                  Since the birth of my daughter Anna in 2023, my perspective on
                  childcare has shifted from purely professional to deeply
                  personal. I know exactly what it feels like to hand over your
                  world to someone else.
                </p>
                <p className="text-lg md:text-xl opacity-80 leading-relaxed serif">
                  That understanding is what I bring to your home. Not just
                  twenty years of specialist knowledge, but the heartbeat and
                  intuition of a mother who cares for yours as if they were her
                  own.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="md:col-span-5 relative pt-8 md:pt-12">
            <motion.div
              initial={{ opacity: 0, scale: 1.05, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl ring-4 md:ring-8 ring-white"
            >
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
                alt="Mariane and Anna"
                className="w-full h-full object-cover sepia-[15%] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-accent-primary/5 mix-blend-overlay" />
            </motion.div>

            {/* Hand-drawn style decorative element */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-24 md:w-32 h-24 md:h-32 border-l border-b border-accent-primary/30 rounded-bl-2xl md:rounded-bl-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
