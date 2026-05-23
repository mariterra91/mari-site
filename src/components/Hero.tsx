import { motion } from 'framer-motion';
import { InstagramIcon } from './icons/InstagramIcon';

export const Hero = () => {
  return (
    <div className="min-h-screen w-full relative flex items-center overflow-hidden pt-24 pb-12 md:py-0">
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
            <h1 className="text-display-1 mb-8 text-text-primary text-balance font-serif">
              Quiet competence <br className="hidden sm:block" />
              <span className="italic text-accent-primary">for your home.</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-end">
              <div>
                <p className="text-lg md:text-xl leading-relaxed mb-10 serif text-balance text-text-primary/90">
                  A unique blend of twenty years of professional nanny
                  experience and the firsthand understanding of a mother.
                  Supporting Stockholm families with dedicated, nature-led care.
                </p>
                <div className="flex flex-wrap items-center gap-8 md:gap-12">
                  <motion.a
                    href="mailto:contact@mari.com"
                    className="inline-flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-4 rounded-sm"
                    whileHover={{ x: 10 }}
                  >
                    <span className="w-8 md:w-12 h-[1px] bg-accent-primary transition-all group-hover:w-16" />
                    <span className="font-serif text-lg md:text-xl italic text-accent-primary underline underline-offset-8">
                      Start a conversation
                    </span>
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/marinanny26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-accent-primary/85 hover:text-accent-primary transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-4 rounded-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <InstagramIcon size={20} />
                    <span className="font-serif italic text-lg md:text-xl underline underline-offset-8 decoration-transparent hover:decoration-accent-primary transition-all">
                      Instagram
                    </span>
                  </motion.a>
                </div>
              </div>
              <div className="hidden md:block">
                <p className="text-sm uppercase tracking-[0.2em] text-text-primary/60 mb-2">
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
          src="/pics/active-childcare.webp"
          alt="Mariane playing with children in a Stockholm park"
          fetchPriority="high"
          decoding="sync"
          className="w-full h-full object-cover blur-sm md:blur-none sepia-[20%] md:sepia-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-bg-neutral via-bg-neutral/80 md:via-bg-neutral/50 to-bg-neutral/40 md:to-transparent" />
      </motion.div>
    </div>
  );
};
