export const Footer = () => {
  return (
    <footer className="bg-ink text-cream py-20 text-center">
      <div className="container max-w-3xl">
        <p className="font-script text-5xl md:text-6xl text-gold-light mb-6">
          With love,
        </p>
        <p className="font-display text-3xl md:text-4xl tracking-[0.15em]">
          EMMA &amp; LIAM
        </p>
        <div className="mx-auto mt-8 divider-ornate max-w-xs">
          <span className="text-gold-light">✦</span>
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.4em] text-cream/60">
          #EmmaLiamForever
        </p>
        <p className="mt-12 text-xs text-cream/40">
          June 25, 2026 · Davao City, Philippines
        </p>
      </div>
    </footer>
  );
};
