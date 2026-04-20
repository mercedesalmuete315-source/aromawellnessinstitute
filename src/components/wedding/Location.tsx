export const Location = () => {
  return (
    <section id="location" className="py-28 md:py-40 bg-cream">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-script text-3xl text-gold mb-3">Find Us</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink">The Venue</h2>
          <div className="mx-auto mt-6 divider-ornate max-w-xs">
            <span className="text-gold">✦</span>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2 text-center md:text-left space-y-4">
            <h3 className="font-display text-3xl text-ink">Marco Polo Davao</h3>
            <p className="font-serif italic text-lg text-ink/75">
              C.M. Recto Street, Davao City, Philippines
            </p>
            <p className="text-sm text-ink/70 leading-relaxed">
              Nestled in the heart of the city, our reception venue offers an unforgettable
              setting under the stars — just a short drive from the cathedral.
            </p>
            <a
              href="https://maps.google.com/?q=Marco+Polo+Davao"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 mt-4 border border-gold text-gold px-8 py-3 text-xs uppercase tracking-[0.3em] hover:bg-gold hover:text-primary-foreground transition-colors"
            >
              Get Directions →
            </a>
          </div>

          <div className="md:col-span-3 overflow-hidden shadow-soft">
            <iframe
              title="Marco Polo Davao map"
              src="https://www.google.com/maps?q=Marco+Polo+Davao&output=embed"
              loading="lazy"
              className="w-full h-[420px] grayscale-[30%] contrast-95"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
