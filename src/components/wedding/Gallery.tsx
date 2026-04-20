import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: g1, alt: "Engagement ring on blush silk", span: "row-span-2" },
  { src: g2, alt: "Couple traveling in Paris", span: "" },
  { src: g3, alt: "Intimate forehead-touch portrait", span: "" },
  { src: g4, alt: "Bridal bouquet of peonies and roses", span: "" },
  { src: g5, alt: "Couple dancing under string lights", span: "row-span-2" },
  { src: g6, alt: "Wedding invitation with wax seal", span: "" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-28 md:py-40 bg-background">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <p className="font-script text-3xl text-gold mb-3">Sweet Moments</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink">Captured Memories</h2>
          <div className="mx-auto mt-6 divider-ornate max-w-xs">
            <span className="text-gold">✦</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[260px] gap-3 md:gap-4">
          {photos.map((p, i) => (
            <div key={i} className={`overflow-hidden ${p.span} shadow-petal group`}>
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
