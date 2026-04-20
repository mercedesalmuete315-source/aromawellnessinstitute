import { useEffect, useState } from "react";
import { Flower2, Truck, HeartHandshake, Facebook, Instagram, ArrowRight, Menu, X } from "lucide-react";
import { toast } from "sonner";
import heroBouquet from "@/assets/florist/hero-bouquet.jpg";
import serviceWedding from "@/assets/florist/service-wedding.jpg";
import serviceGift from "@/assets/florist/service-gift.jpg";
import serviceEvent from "@/assets/florist/service-event.jpg";
import newsletterBorder from "@/assets/florist/newsletter-border.jpg";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const Florist = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Welcome to the bloom! 🌸", { description: "You'll hear from us soon." });
    setEmail("");
  };

  return (
    <main id="home" className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-md shadow-petal py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <Flower2 className="text-primary" size={26} />
            <span className="font-serif-soft text-2xl tracking-wide text-foreground">
              Bloom <span className="font-script text-primary text-3xl leading-none">&amp;</span> Petals
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-9">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-xs uppercase tracking-[0.18em] text-foreground/75 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#services"
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] bg-primary text-primary-foreground px-5 py-3 rounded-full hover:bg-primary/90 transition-colors shadow-soft"
          >
            Order Now <ArrowRight size={14} />
          </a>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-background/95 backdrop-blur border-t border-border mt-3">
            <ul className="container flex flex-col py-4 gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm uppercase tracking-[0.18em] text-foreground/80"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <a
                href="#services"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center items-center bg-primary text-primary-foreground px-5 py-3 rounded-full text-xs uppercase tracking-[0.18em]"
              >
                Order Now
              </a>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero */}
      <header className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blush/40 via-background to-cream" />
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary mb-6">
              <span className="h-px w-10 bg-primary" /> Fresh • Handcrafted • Local
            </span>
            <h1 className="font-serif-soft text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-5">
              Beautiful <em className="font-script text-primary not-italic text-6xl md:text-7xl lg:text-8xl">flower</em>
              <br /> Arrangements & Bouquets
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-9 leading-relaxed">
              Fresh flowers delivered to your door — thoughtfully sourced and lovingly arranged for life's
              sweetest moments.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm uppercase tracking-[0.18em] hover:bg-primary/90 transition-all shadow-soft hover:-translate-y-0.5"
              >
                Shop Bouquets <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-7 py-4 rounded-full text-sm uppercase tracking-[0.18em] hover:border-primary hover:text-primary transition-colors"
              >
                Get a Quote
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
              <div>
                <div className="font-serif-soft text-3xl text-foreground">12+</div>
                Years in bloom
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-serif-soft text-3xl text-foreground">5k+</div>
                Happy clients
              </div>
              <div className="h-10 w-px bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <div className="font-serif-soft text-3xl text-foreground">24h</div>
                Delivery
              </div>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-blush/60 blur-3xl -z-10" />
            <div className="absolute -bottom-8 -right-4 w-56 h-56 rounded-full bg-primary/30 blur-3xl -z-10" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-soft">
              <img
                src={heroBouquet}
                alt="Bouquet of pink roses, white peonies, peach ranunculus and baby's breath in a rustic vase"
                width={1536}
                height={1024}
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border shadow-petal rounded-2xl px-5 py-4 flex items-center gap-3 animate-float">
              <div className="bg-primary/15 text-primary rounded-full p-2">
                <Flower2 size={20} />
              </div>
              <div>
                <div className="font-serif-soft text-lg leading-none">Seasonal Picks</div>
                <div className="text-xs text-muted-foreground mt-1">In bloom this week</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Icons */}
      <section className="py-16 md:py-20 bg-cream/60" id="about">
        <div className="container grid md:grid-cols-3 gap-8">
          {[
            { icon: Flower2, title: "Custom Designs", text: "Bespoke arrangements for any occasion" },
            { icon: Truck, title: "Same Day Delivery", text: "Fast & reliable flower delivery" },
            { icon: HeartHandshake, title: "Event Services", text: "Weddings, events & more" },
          ].map((f) => (
            <div
              key={f.title}
              className="group bg-card rounded-2xl p-8 border border-border/60 hover:shadow-soft hover:-translate-y-1 transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blush/60 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <f.icon size={24} />
              </div>
              <h3 className="font-serif-soft text-2xl mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 md:py-28" id="services">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-primary">What we do</span>
            <h2 className="font-serif-soft text-4xl md:text-5xl mt-3 mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg">We create floral magic for every occasion.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: serviceWedding,
                title: "Wedding Flowers",
                desc: "Stunning floral designs for your special day.",
                cta: "Learn More",
              },
              {
                img: serviceGift,
                title: "Gift Bouquets",
                desc: "Beautiful bouquets for any celebration.",
                cta: "Shop Now",
              },
              {
                img: serviceEvent,
                title: "Corporate & Events",
                desc: "Floral décor for businesses & events.",
                cta: "Get a Quote",
              },
            ].map((s) => (
              <article
                key={s.title}
                className="group bg-card rounded-3xl overflow-hidden border border-border/60 hover:shadow-soft transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-serif-soft text-2xl mb-2">{s.title}</h3>
                  <p className="text-muted-foreground mb-5">{s.desc}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-primary hover:gap-3 transition-all"
                  >
                    {s.cta} <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="py-20 bg-blush/25" id="gallery">
        <div className="container grid md:grid-cols-3 gap-4">
          <img src={serviceWedding} alt="Bridal bouquet" loading="lazy" className="rounded-2xl h-64 w-full object-cover" />
          <img src={serviceGift} alt="Gift bouquet" loading="lazy" className="rounded-2xl h-64 w-full object-cover md:translate-y-8" />
          <img src={serviceEvent} alt="Event arrangement" loading="lazy" className="rounded-2xl h-64 w-full object-cover" />
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-24 overflow-hidden" id="contact">
        <img
          src={newsletterBorder}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-x-0 bottom-0 w-full opacity-70 pointer-events-none"
        />
        <div className="container relative text-center max-w-xl mx-auto">
          <h2 className="font-serif-soft text-4xl md:text-5xl mb-3">Join Our Newsletter</h2>
          <p className="text-muted-foreground mb-8">Get the latest floral offers & updates!</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-full bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm uppercase tracking-[0.18em] hover:bg-primary/90 transition-colors shadow-soft"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Flower2 size={22} className="text-primary" />
            <span className="font-serif-soft text-xl">Bloom & Petals</span>
          </div>
          <ul className="flex flex-wrap gap-6 text-sm text-background/70">
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
          </ul>
          <div className="flex gap-3">
            {[Facebook, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="container mt-8 text-center text-xs text-background/50">
          © {new Date().getFullYear()} Bloom & Petals — Made with love.
        </div>
      </footer>
    </main>
  );
};

export default Florist;
