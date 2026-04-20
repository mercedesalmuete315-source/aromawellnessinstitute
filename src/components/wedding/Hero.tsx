import heroImage from "@/assets/hero-couple.jpg";

export const Hero = () => {
  return (
    <header id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Emma and Liam embracing under a floral arch at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-cream/10 to-cream/80" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-6 pb-16 pt-32">
        <p className="font-script text-3xl md:text-4xl text-gold animate-fade-up [animation-delay:0.1s]">
          Save the Date
        </p>

        <div className="my-6 divider-ornate w-full max-w-xs animate-fade-up [animation-delay:0.3s]">
          <span className="text-gold text-xl">✦</span>
        </div>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.95] text-ink animate-fade-up [animation-delay:0.4s]">
          Emma
          <span className="block font-script text-5xl md:text-6xl lg:text-7xl text-blush-deep -my-2 md:-my-4">
            &amp;
          </span>
          Liam
        </h1>

        <p className="mt-8 max-w-xl font-serif italic text-lg md:text-xl text-ink/75 animate-fade-up [animation-delay:0.6s]">
          Together with their families, invite you to celebrate their love.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-10 text-xs uppercase tracking-[0.3em] text-ink/80 animate-fade-up [animation-delay:0.8s]">
          <span>June 25, 2026</span>
          <span className="hidden sm:block w-px h-4 bg-gold/50" />
          <span>Davao City</span>
        </div>

        <a
          href="#rsvp"
          className="mt-12 inline-flex items-center gap-3 bg-ink text-cream px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-gold transition-colors duration-500 animate-fade-up [animation-delay:1s]"
        >
          RSVP Now
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
};
