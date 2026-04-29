export const Footer = () => {
  return (
    <footer className="py-20 md:py-32 border-t border-border-subtle bg-bg-neutral relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-16 md:gap-32">
          <div className="max-w-2xl">
            <span className="block serif italic text-xl md:text-2xl text-accent-primary mb-6 md:mb-8">
              A final note
            </span>
            <h2 className="text-3xl md:text-6xl text-text-primary leading-[1.2] md:leading-[1.1] mb-10 md:mb-12 font-serif italic">
              I look forward to helping your family by doing what I love most.
            </h2>
            <div className="flex flex-wrap gap-10 md:gap-12">
              <div>
                <p className="text-[10px] md:text-sm uppercase tracking-[0.2em] opacity-40 mb-3 md:mb-4">
                  Direct contact
                </p>
                <a
                  href="mailto:contact@mari.com"
                  className="text-xl md:text-3xl font-serif italic text-accent-primary underline underline-offset-8 decoration-accent-primary/30 hover:decoration-accent-primary transition-all"
                >
                  contact@mari.com
                </a>
              </div>
              <div>
                <p className="text-[10px] md:text-sm uppercase tracking-[0.2em] opacity-40 mb-3 md:mb-4">
                  Location
                </p>
                <p className="text-xl md:text-3xl font-serif italic text-text-primary">
                  Stockholm, Sweden
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="max-w-xs p-6 md:p-8 border border-accent-primary/20 rounded-sm bg-secondary-tint/20">
              <h4 className="font-serif italic text-lg md:text-xl mb-3 md:mb-4 text-accent-primary">
                The Service Agreement
              </h4>
              <p className="text-sm opacity-60 leading-relaxed serif">
                To ensure a clear and professional relationship, a formal
                agreement will be signed outlining hours, duties, and notice
                periods.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-32 pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] md:text-sm opacity-30 serif italic text-center md:text-left">
            © 2026 Mariane. All rights reserved.
          </p>
          <div className="flex gap-6 md:gap-8 text-[10px] md:text-sm opacity-30 serif italic">
            <span>Portfolio & CV</span>
            <span>Professional Private Nanny</span>
          </div>
        </div>
      </div>

      {/* Subtle decorative wash */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-accent-primary/5 blur-[120px] -z-0" />
    </footer>
  );
};
