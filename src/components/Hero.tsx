import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center overflow-hidden pt-16">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:text-left"
        >
          <span className="block uppercase tracking-widest text-[0.8rem] mb-4 text-accent-primary font-semibold">
            Professional Private Nanny
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl mb-6 text-text-primary text-balance">
            The Gold Standard of <br />
            <span className="italic serif">Nurturing Care.</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-80 mx-auto md:mx-0">
            Mariane — A career nanny with over two decades of experience,
            blending Brazilian warmth with Scandinavian nature-led values.
          </p>
          <motion.a
            href="mailto:contact@mari.com"
            className="inline-block px-10 py-5 bg-accent-primary text-white font-serif text-lg rounded-[4px] transition-colors hover:bg-[oklch(0.4_0.08_30)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl shadow-black/5 max-w-[500px] mx-auto md:max-w-none"
        >
          <img
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80"
            alt="Serene, soft-lit interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-neutral via-transparent to-transparent opacity-20" />
        </motion.div>
      </div>
    </div>
  );
};
