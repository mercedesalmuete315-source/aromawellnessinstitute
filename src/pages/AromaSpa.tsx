import { useEffect, useState } from "react";
import { Leaf, Flower2, Waves, Sparkles, MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const palette = {
  bg: "#0d1f17",
  surface: "#13291f",
  cream: "#f5ead6",
  gold: "#c9a96a",
  jade: "#3f8567",
  coral: "#e07a5f",
};

const services = [
  { icon: Leaf, name: "Hilot Tropical", price: "₱899", time: "60 min", desc: "Traditional Filipino healing massage with warm coconut oil and banana leaves." },
  { icon: Flower2, name: "Sampaguita Aromatherapy", price: "₱1,200", time: "75 min", desc: "Signature blend of jasmine, ylang-ylang, and lemongrass essential oils." },
  { icon: Waves, name: "Volcanic Stone Therapy", price: "₱1,500", time: "90 min", desc: "Heated basalt stones from Mt. Mayon ease deep muscle tension." },
  { icon: Sparkles, name: "Mango Sugar Glow", price: "₱1,100", time: "60 min", desc: "Tropical body scrub with mango pulp, brown sugar, and coconut cream." },
];

const packages = [
  { name: "Island Escape", duration: "2 hours", price: "₱1,999", includes: ["Foot ritual", "Hilot massage", "Herbal tea"] },
  { name: "Paradise Retreat", duration: "3 hours", price: "₱2,899", includes: ["Body scrub", "Aromatherapy", "Facial", "Refreshments"] },
  { name: "Tropical Honeymoon", duration: "4 hours", price: "₱5,499", includes: ["Couples massage", "Flower bath", "Champagne", "Private cabana"] },
];

export default function AromaSpa() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: palette.bg, color: palette.cream, fontFamily: "'Inter', sans-serif" }} className="min-h-screen">
      {/* Nav */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(13,31,23,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${palette.gold}33` : "1px solid transparent",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <Flower2 size={22} style={{ color: palette.gold }} />
            <span style={{ fontFamily: "'Cormorant Garamond', serif", color: palette.cream }} className="text-xl tracking-widest">
              AROMA TROPICAL
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            {["Services", "Packages", "About", "Visit"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{ color: palette.cream }} className="hover:opacity-70 transition">
                {l}
              </a>
            ))}
          </div>
          <a
            href="#visit"
            className="px-5 py-2 text-sm rounded-full transition hover:scale-105"
            style={{ background: palette.gold, color: palette.bg }}
          >
            Book Now
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 20% 30%, ${palette.jade}55 0%, transparent 50%), radial-gradient(circle at 80% 70%, ${palette.coral}33 0%, transparent 50%), ${palette.bg}`,
          }}
        />
        {/* Floating leaves */}
        {[...Array(6)].map((_, i) => (
          <Leaf
            key={i}
            size={40 + i * 8}
            className="absolute opacity-10 animate-pulse"
            style={{
              top: `${10 + i * 13}%`,
              left: `${5 + i * 15}%`,
              color: palette.jade,
              animationDuration: `${4 + i}s`,
              transform: `rotate(${i * 40}deg)`,
            }}
          />
        ))}
        <div className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span style={{ background: palette.gold }} className="h-px w-12" />
              <span style={{ color: palette.gold }} className="text-xs tracking-[0.3em]">EST. 2014 · PHILIPPINES</span>
            </div>
            <h1
              style={{ fontFamily: "'Cormorant Garamond', serif", color: palette.cream }}
              className="text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 font-light"
            >
              Escape into
              <br />
              <em style={{ color: palette.gold }} className="italic">tropical</em> stillness.
            </h1>
            <p className="text-lg max-w-md mb-10" style={{ color: `${palette.cream}cc` }}>
              A sanctuary of indigenous rituals, hand-blended oils, and time-honored Filipino healing — minutes from the city, worlds away.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="px-8 py-4 rounded-full text-sm tracking-wide transition hover:scale-105"
                style={{ background: palette.gold, color: palette.bg }}
              >
                Explore Treatments
              </a>
              <a
                href="#visit"
                className="px-8 py-4 rounded-full text-sm tracking-wide border transition hover:bg-white/5"
                style={{ borderColor: `${palette.cream}44`, color: palette.cream }}
              >
                Reserve a Cabana
              </a>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div
              className="aspect-[3/4] rounded-[2rem] relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${palette.jade}, ${palette.surface})`,
                boxShadow: `0 40px 80px -20px ${palette.jade}66`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Flower2 size={200} style={{ color: `${palette.gold}55` }} />
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-xs tracking-[0.3em] mb-2" style={{ color: palette.gold }}>SIGNATURE RITUAL</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl">Sampaguita Bloom</div>
              </div>
            </div>
            <div
              className="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl backdrop-blur-md"
              style={{ background: `${palette.cream}11`, border: `1px solid ${palette.gold}44` }}
            >
              <div className="text-xs tracking-widest" style={{ color: palette.gold }}>★★★★★</div>
              <div className="text-sm mt-1">2,400+ guests · Loved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 px-6" style={{ background: palette.surface }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span style={{ color: palette.gold }} className="text-xs tracking-[0.3em]">OUR TREATMENTS</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl font-light mt-4">
              Rituals of <em style={{ color: palette.gold }}>renewal</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="p-8 rounded-3xl transition hover:-translate-y-1 group"
                style={{ background: palette.bg, border: `1px solid ${palette.gold}22` }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition"
                    style={{ background: `${palette.jade}33` }}
                  >
                    <s.icon size={26} style={{ color: palette.gold }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl">{s.name}</h3>
                      <span style={{ color: palette.gold }} className="text-lg">{s.price}</span>
                    </div>
                    <div className="text-xs tracking-widest mb-3" style={{ color: `${palette.cream}77` }}>
                      <Clock size={12} className="inline mr-1.5 -mt-0.5" />
                      {s.time}
                    </div>
                    <p style={{ color: `${palette.cream}cc` }} className="text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span style={{ color: palette.gold }} className="text-xs tracking-[0.3em]">CURATED EXPERIENCES</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl font-light mt-4">
              Spa <em style={{ color: palette.gold }}>journeys</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((p, i) => (
              <div
                key={p.name}
                className="p-10 rounded-3xl relative overflow-hidden"
                style={{
                  background: i === 1 ? `linear-gradient(160deg, ${palette.jade}, ${palette.surface})` : palette.surface,
                  border: `1px solid ${palette.gold}33`,
                }}
              >
                {i === 1 && (
                  <span
                    className="absolute top-6 right-6 text-[10px] tracking-widest px-3 py-1 rounded-full"
                    style={{ background: palette.gold, color: palette.bg }}
                  >
                    MOST LOVED
                  </span>
                )}
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl mb-2">{p.name}</h3>
                <p className="text-xs tracking-widest mb-6" style={{ color: `${palette.cream}88` }}>{p.duration}</p>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", color: palette.gold }} className="text-5xl mb-6">
                  {p.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex items-center gap-3 text-sm" style={{ color: `${palette.cream}dd` }}>
                      <Leaf size={14} style={{ color: palette.gold }} />
                      {inc}
                    </li>
                  ))}
                </ul>
                <a
                  href="#visit"
                  className="block text-center py-3 rounded-full text-sm tracking-wide transition hover:opacity-80"
                  style={{
                    background: i === 1 ? palette.gold : "transparent",
                    color: i === 1 ? palette.bg : palette.cream,
                    border: `1px solid ${i === 1 ? palette.gold : `${palette.cream}44`}`,
                  }}
                >
                  Reserve
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6" style={{ background: palette.surface }}>
        <div className="max-w-5xl mx-auto text-center">
          <span style={{ color: palette.gold }} className="text-xs tracking-[0.3em]">OUR STORY</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl font-light mt-4 mb-8">
            Born of the <em style={{ color: palette.gold }}>islands</em>
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: `${palette.cream}cc` }}>
            Aroma Tropical Spa was founded on a simple belief: that the healing wisdom of our archipelago — the leaves, the oils, the gentle hands of the Hilot — belongs in the heart of every Filipino's week. We blend our own oils from coconut, pili, and native blossoms, and train every therapist in the lineage of traditional touch.
          </p>
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            {[
              ["10+", "Years of bliss"],
              ["18", "Trained therapists"],
              ["100%", "Natural oils"],
            ].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", color: palette.gold }} className="text-5xl mb-2">{n}</div>
                <div className="text-xs tracking-widest" style={{ color: `${palette.cream}88` }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span style={{ color: palette.gold }} className="text-xs tracking-[0.3em]">VISIT US</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl font-light mt-4 mb-8">
              Find your <em style={{ color: palette.gold }}>quiet</em>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} style={{ color: palette.gold }} className="mt-1" />
                <div>
                  <div className="text-sm tracking-widest mb-1" style={{ color: `${palette.cream}88` }}>ADDRESS</div>
                  <div>Aroma Wellness Institute, Philippines</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={20} style={{ color: palette.gold }} className="mt-1" />
                <div>
                  <div className="text-sm tracking-widest mb-1" style={{ color: `${palette.cream}88` }}>HOURS</div>
                  <div>Daily · 10:00 AM – 10:00 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={20} style={{ color: palette.gold }} className="mt-1" />
                <div>
                  <div className="text-sm tracking-widest mb-1" style={{ color: `${palette.cream}88` }}>RESERVATIONS</div>
                  <div>+63 (2) 8888-7777</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="p-10 rounded-3xl"
            style={{ background: palette.surface, border: `1px solid ${palette.gold}33` }}
          >
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl mb-6">Reserve your ritual</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you — we will confirm your reservation shortly."); }}>
              <input
                required
                placeholder="Full name"
                className="w-full px-4 py-3 rounded-xl bg-transparent border outline-none focus:border-[color:var(--gold)]"
                style={{ borderColor: `${palette.cream}33`, color: palette.cream }}
              />
              <input
                required
                placeholder="Mobile number"
                className="w-full px-4 py-3 rounded-xl bg-transparent border outline-none"
                style={{ borderColor: `${palette.cream}33`, color: palette.cream }}
              />
              <select
                required
                className="w-full px-4 py-3 rounded-xl bg-transparent border outline-none"
                style={{ borderColor: `${palette.cream}33`, color: palette.cream, background: palette.surface }}
              >
                <option style={{ background: palette.bg }}>Select treatment</option>
                {services.map((s) => <option key={s.name} style={{ background: palette.bg }}>{s.name}</option>)}
                {packages.map((p) => <option key={p.name} style={{ background: palette.bg }}>{p.name}</option>)}
              </select>
              <input
                type="datetime-local"
                required
                className="w-full px-4 py-3 rounded-xl bg-transparent border outline-none"
                style={{ borderColor: `${palette.cream}33`, color: palette.cream }}
              />
              <button
                type="submit"
                className="w-full py-3 rounded-full text-sm tracking-widest transition hover:opacity-90"
                style={{ background: palette.gold, color: palette.bg }}
              >
                REQUEST RESERVATION
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t text-center text-sm" style={{ borderColor: `${palette.gold}22`, color: `${palette.cream}88` }}>
        <Flower2 size={24} style={{ color: palette.gold }} className="mx-auto mb-4" />
        <p>© {new Date().getFullYear()} Aroma Tropical Spa · A sanctuary by Aroma Wellness Institute</p>
      </footer>

      {/* Messenger Float */}
      <a
        href="https://www.facebook.com/ofelia.ats"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition z-50"
        style={{ background: palette.gold, color: palette.bg }}
        aria-label="Chat on Messenger"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
