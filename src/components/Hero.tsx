import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="min-h-screen w-full relative flex items-center overflow-hidden pt-32 pb-16 md:py-0">
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block serif italic text-lg md:text-2xl text-accent-primary mb-4 md:mb-6">
              A personal portfolio by Mariane
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl mb-8 text-text-primary leading-[1] md:leading-[0.9] tracking-tight text-balance">
              Care that feels like <br className="hidden sm:block" />
              <span className="italic serif text-accent-primary">home.</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-end">
              <div>
                <p className="text-lg md:text-2xl opacity-90 leading-relaxed mb-10 serif text-balance">
                  Twenty years of professional expertise met with the intuition
                  and warmth of a mother’s heart. I help families find peace of
                  mind through nurturing, nature-led childcare.
                </p>
                <motion.a
                  href="mailto:contact@mari.com"
                  className="inline-flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                >
                  <span className="w-8 md:w-12 h-[1px] bg-accent-primary transition-all group-hover:w-16" />
                  <span className="font-serif text-lg md:text-xl italic text-accent-primary underline underline-offset-8">
                    Start a conversation
                  </span>
                </motion.a>
              </div>
              <div className="hidden md:block">
                <p className="text-sm uppercase tracking-[0.2em] opacity-40 mb-2">
                  Based in
                </p>
                <p className="text-lg font-semibold tracking-wide">
                  Stockholm, Sweden
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Atmospheric Background Element */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 opacity-15 md:opacity-40 pointer-events-none"
      >
        <img
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80"
          alt="Sunlit nursery"
          className="w-full h-full object-cover blur-sm md:blur-none sepia-[20%] md:sepia-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-bg-neutral via-bg-neutral/80 md:via-bg-neutral/50 to-bg-neutral/40 md:to-transparent" />
      </motion.div>
    </div>
  );
};
