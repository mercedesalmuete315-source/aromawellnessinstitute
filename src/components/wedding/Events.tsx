import ceremony from "@/assets/ceremony.jpg";
import reception from "@/assets/reception.jpg";
import dresscode from "@/assets/dresscode.jpg";

const events = [
  {
    img: ceremony,
    alt: "Elegant chapel interior with floral aisle",
    label: "The Ceremony",
    time: "3:00 PM",
    title: "San Pedro Cathedral",
    detail: "San Pedro Street, Davao City",
  },
  {
    img: reception,
    alt: "Garden reception with string lights and floral centerpieces",
    label: "The Reception",
    time: "6:00 PM",
    title: "Marco Polo Grand Ballroom",
    detail: "Cocktails, dinner & dancing",
  },
  {
    img: dresscode,
    alt: "Blush gown and champagne suit flat lay",
    label: "Dress Code",
    time: "Formal",
    title: "Garden Elegance",
    detail: "Blush · Cream · Champagne · Sage",
  },
];

export const Events = () => {
  return (
    <section id="events" className="py-28 md:py-40 bg-cream">
      <div className="container max-w-6xl">
        <div className="text-center mb-20">
          <p className="font-script text-3xl text-gold mb-3">The Details</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink">A Day to Remember</h2>
          <div className="mx-auto mt-6 divider-ornate max-w-xs">
            <span className="text-gold">✦</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {events.map((e) => (
            <article key={e.label} className="group">
              <div className="overflow-hidden mb-6 shadow-petal">
                <img
                  src={e.img}
                  alt={e.alt}
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{e.label}</p>
                <h3 className="font-display text-2xl md:text-3xl text-ink mb-2">{e.title}</h3>
                <p className="font-serif italic text-blush-deep">{e.time}</p>
                <p className="text-sm text-ink/70 mt-2">{e.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
