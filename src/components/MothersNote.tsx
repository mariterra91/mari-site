import { motion } from 'framer-motion';

export const MothersNote = () => {
  return (
    <section className="py-section">
      <div className="container mx-auto px-8">
        <motion.div
          className="bg-accent-primary text-white rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center shadow-[0_30px_60px_oklch(0.25_0.08_30_/_0.15)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="p-8 md:p-16 lg:p-16">
            <span className="block text-[1.2rem] mb-8 opacity-90 serif italic">
              A Mother's Perspective
            </span>
            <blockquote className="text-[2rem] md:text-[3rem] lg:text-[3rem] leading-tight mb-8 text-balance serif">
              "Becoming a mother has been my greatest teacher, providing me with
              deeper empathy and even sharper instincts for the needs of both
              children and parents."
            </blockquote>
            <p className="text-[1.1rem] opacity-80 max-w-[50ch]">
              Since Feb 2023, following the birth of my daughter Anna, I’ve
              returned to my career with a profound understanding of what it
              means to trust someone with your child’s world.
            </p>
          </div>
          <div className="h-full min-h-[300px] md:min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
              alt="Warm, intimate care"
              className="w-full h-full object-cover sepia-[20%] contrast-[1.1]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
