export const Footer = () => {
  return (
    <footer className="py-section bg-secondary-tint border-t border-border-subtle">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 mb-16">
          <div className="footer-cta">
            <h2 className="text-[2.5rem] md:text-[4rem] mb-6 leading-tight serif italic">
              Ready to support your family.
            </h2>
            <p className="text-[1.2rem] mb-10 opacity-80">
              I look forward to helping your family by doing what I love most.
              Let’s schedule a call to discuss your specific needs.
            </p>
            <a
              href="mailto:contact@mari.com"
              className="inline-block px-10 py-5 bg-accent-primary text-white font-serif text-lg rounded-[4px] transition-colors hover:bg-[oklch(0.4_0.08_30)]"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h4 className="font-sans font-semibold mb-4">
                Service Agreement
              </h4>
              <p className="text-[0.9rem] opacity-60">
                A formal service agreement will be drawn up and signed by both
                parties before we begin, outlining hours, duties, and notice
                periods.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-[0.9rem] opacity-70 font-semibold">
              <span>Mariane — Professional Private Nanny</span>
              <span>Stockholm, Sweden</span>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border-subtle text-center text-[0.8rem] opacity-40">
          <p>© 2026 Mariane. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
