import { useEffect, useState } from "react";
import { Sparkles, Scissors, Hand, Wind, Flower2, Heart, MapPin, Phone, Mail, Star, Check, Menu, X } from "lucide-react";
import heroImg from "@/assets/ladyboss-hero.jpg";
import lashesImg from "@/assets/ladyboss-lashes.jpg";
import hairImg from "@/assets/ladyboss-hair.jpg";
import nailsImg from "@/assets/ladyboss-nails.jpg";
import rebondImg from "@/assets/ladyboss-rebond.jpg";
import wellnessImg from "@/assets/ladyboss-wellness.jpg";

const palette = {
  bg: "#fdf6f3",
  cream: "#fbeee6",
  ink: "#2a1a1f",
  blush: "#f4c2c2",
  rose: "#e8a4b8",
  gold: "#c9a96a",
  goldDark: "#a67c3a",
  rosegold: "#b76e79",
  charcoal: "#3d2a32",
};

const services = [
  {
    icon: Sparkles,
    title: "Lash Extensions",
    tag: "Signature",
    desc: "Enhance your natural beauty with elegant, long-lasting lash extensions tailored to your eye shape.",
    img: lashesImg,
  },
  {
    icon: Scissors,
    title: "Hair Styling & Haircut",
    tag: "Trending",
    desc: "Modern, trendy, and personalized hairstyles crafted for every occasion and personality.",
    img: hairImg,
  },
  {
    icon: Hand,
    title: "Nail Arts & Nail Care",
    tag: "Pampering",
    desc: "Stylish nail art designs and luxurious nail treatments that turn heads wherever you go.",
    img: nailsImg,
  },
  {
    icon: Wind,
    title: "Hair Rebond & Straightening",
    tag: "Pro Treatment",
    desc: "Achieve smooth, silky, mirror-shine hair with our professional rebonding and keratin treatments.",
    img: rebondImg,
  },
  {
    icon: Flower2,
    title: "Beauty & Wellness",
    tag: "Self-care",
    desc: "Relax, refresh, and feel your absolute best with our holistic beauty and wellness rituals.",
    img: wellnessImg,
  },
  {
    icon: Heart,
    title: "Bridal & Glam",
    tag: "Special Day",
    desc: "Complete bridal beauty packages — hair, makeup, nails and skin — for your most beautiful day.",
    img: hairImg,
  },
];

const reasons = [
  "Professional & Friendly Staff",
  "Affordable Beauty Packages",
  "Premium Quality Products",
  "Comfortable & Relaxing Ambiance",
  "Customer Satisfaction Guaranteed",
  "Trusted by Koronadal's Lady-Bosses",
];

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
];

const LadyBoss = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Lady-Boss Beauty & Wellness Hub — Koronadal City";
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main style={{ background: palette.bg, color: palette.ink, fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Italiana&family=Pinyon+Script&family=Inter:wght@300;400;500;600&display=swap');
        .lb-display { font-family: 'Italiana', serif; letter-spacing: 0.04em; }
        .lb-script { font-family: 'Pinyon Script', cursive; }
        .lb-serif { font-family: 'Cormorant Garamond', serif; }
        @keyframes lb-fade-up { from { opacity:0; transform: translateY(28px);} to {opacity:1; transform:translateY(0);} }
        @keyframes lb-ken-burns { 0% { transform: scale(1) translate(0,0);} 50% { transform: scale(1.12) translate(-1.5%, -1%);} 100% { transform: scale(1) translate(0,0);} }
        @keyframes lb-shimmer { 0% { background-position: -200% 0;} 100% { background-position: 200% 0;} }
        @keyframes lb-float { 0%,100% { transform: translateY(0) rotate(0);} 50% { transform: translateY(-14px) rotate(4deg);} }
        @keyframes lb-pulse-ring { 0% { box-shadow: 0 0 0 0 rgba(183,110,121,.45);} 100% { box-shadow: 0 0 0 22px rgba(183,110,121,0);} }
        @keyframes lb-marquee { 0% { transform: translateX(0);} 100% { transform: translateX(-50%);} }
        .lb-fade-up { animation: lb-fade-up 1s cubic-bezier(.2,.7,.2,1) both; }
        .lb-kb { animation: lb-ken-burns 16s ease-in-out infinite; }
        .lb-float { animation: lb-float 7s ease-in-out infinite; }
        .lb-pulse { animation: lb-pulse-ring 2s infinite; }
        .lb-shimmer-text {
          background: linear-gradient(90deg, ${palette.goldDark} 0%, #f3d9a4 25%, ${palette.gold} 50%, #f3d9a4 75%, ${palette.goldDark} 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: lb-shimmer 6s linear infinite;
        }
        .lb-card { transition: all .6s cubic-bezier(.2,.7,.2,1); }
        .lb-card:hover { transform: translateY(-8px); }
        .lb-card:hover .lb-card-img { transform: scale(1.08); }
        .lb-card-img { transition: transform 1.2s cubic-bezier(.2,.7,.2,1); }
        .lb-btn-primary {
          background: linear-gradient(135deg, ${palette.rosegold}, ${palette.rose});
          color: white;
          transition: all .4s ease;
          box-shadow: 0 10px 30px -10px ${palette.rosegold}80;
        }
        .lb-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 18px 40px -12px ${palette.rosegold}aa; }
        .lb-btn-outline {
          border: 1px solid ${palette.gold};
          color: ${palette.goldDark};
          transition: all .4s ease;
        }
        .lb-btn-outline:hover { background: ${palette.gold}; color: white; }
        .lb-divider::before, .lb-divider::after {
          content:''; flex:1; height:1px;
          background: linear-gradient(90deg, transparent, ${palette.gold}80, transparent);
        }
        .lb-divider { display:flex; align-items:center; gap:1rem; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          padding: scrolled ? "14px 0" : "22px 0",
          background: scrolled ? "rgba(253,246,243,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? `1px solid ${palette.gold}30` : "1px solid transparent",
          transition: "all .5s ease",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#top" style={{ display: "flex", flexDirection: "column", lineHeight: 1, textDecoration: "none" }}>
            <span className="lb-script" style={{ fontSize: 28, color: palette.rosegold }}>Lady-Boss</span>
            <span className="lb-display" style={{ fontSize: 10, letterSpacing: "0.4em", color: palette.goldDark, marginTop: 2 }}>BEAUTY · WELLNESS</span>
          </a>
          <ul style={{ display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0 }} className="hidden md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: palette.ink, textDecoration: "none", opacity: 0.8 }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#visit" className="lb-btn-primary hidden md:inline-flex" style={{ padding: "12px 26px", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", textDecoration: "none", borderRadius: 999 }}>
            Book Now
          </a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "transparent", border: "none", color: palette.ink, cursor: "pointer" }} aria-label="Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden" style={{ background: palette.bg, padding: "20px 24px", borderTop: `1px solid ${palette.gold}30` }}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "12px 0", fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", color: palette.ink, textDecoration: "none" }}>
                {l.label}
              </a>
            ))}
            <a href="#visit" onClick={() => setMenuOpen(false)} className="lb-btn-primary" style={{ display: "inline-block", marginTop: 12, padding: "12px 26px", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", textDecoration: "none", borderRadius: 999 }}>Book Now</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <header id="top" style={{ position: "relative", minHeight: "100vh", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <img src={heroImg} alt="Lady-Boss luxury salon interior" className="lb-kb" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(135deg, ${palette.bg}f0 0%, ${palette.bg}80 35%, ${palette.cream}40 65%, ${palette.rose}50 100%)`,
          }} />
          <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 80% 20%, ${palette.gold}30, transparent 50%)` }} />
        </div>

        {/* floating ornaments */}
        <div className="lb-float" style={{ position: "absolute", top: "18%", left: "8%", color: palette.gold, opacity: 0.5 }} aria-hidden>
          <Sparkles size={28} />
        </div>
        <div className="lb-float" style={{ position: "absolute", bottom: "22%", right: "12%", color: palette.rosegold, opacity: 0.6, animationDelay: "2s" }} aria-hidden>
          <Flower2 size={36} />
        </div>

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
          <div style={{ maxWidth: 820 }} className="lb-fade-up">
            <div className="lb-divider" style={{ maxWidth: 320, marginBottom: 24 }}>
              <span className="lb-script" style={{ color: palette.rosegold, fontSize: 24 }}>est. Koronadal</span>
            </div>
            <h1 className="lb-display" style={{ fontSize: "clamp(48px, 9vw, 128px)", lineHeight: 0.95, margin: 0, color: palette.ink, fontWeight: 400 }}>
              Beauty <span className="lb-script" style={{ color: palette.rosegold, fontSize: "0.6em", display: "inline-block", margin: "0 -.1em" }}>starts</span> Here.
            </h1>
            <p className="lb-serif" style={{ fontStyle: "italic", fontSize: "clamp(18px, 2.2vw, 24px)", color: palette.charcoal, marginTop: 28, maxWidth: 620, lineHeight: 1.5 }}>
              Confidence, elegance and self-care in one address — your one-stop sanctuary for beauty &amp; wellness in Koronadal City.
            </p>
            <div style={{ display: "flex", gap: 16, marginTop: 44, flexWrap: "wrap" }}>
              <a href="#visit" className="lb-btn-primary" style={{ padding: "18px 38px", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", textDecoration: "none", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 12 }}>
                Book Appointment <span>→</span>
              </a>
              <a href="#services" className="lb-btn-outline" style={{ padding: "18px 38px", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", textDecoration: "none", borderRadius: 999 }}>
                Explore Services
              </a>
            </div>
            <div style={{ display: "flex", gap: 40, marginTop: 56, flexWrap: "wrap" }}>
              {[
                { n: "1000+", l: "Happy Lady-Bosses" },
                { n: "5★", l: "Salon Rating" },
                { n: "10+", l: "Signature Services" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="lb-display" style={{ fontSize: 36, color: palette.rosegold }}>{s.n}</div>
                  <div style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: palette.charcoal, opacity: 0.7, marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* marquee */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, overflow: "hidden", borderTop: `1px solid ${palette.gold}40`, background: `${palette.cream}90`, backdropFilter: "blur(10px)" }}>
          <div style={{ display: "flex", whiteSpace: "nowrap", animation: "lb-marquee 38s linear infinite" }}>
            {[...Array(2)].flatMap((_, i) =>
              ["Lashes", "Hair", "Nails", "Rebond", "Wellness", "Bridal Glam", "Makeup", "Spa"].map((w) => (
                <span key={`${i}-${w}`} className="lb-display" style={{ padding: "20px 32px", fontSize: 18, color: palette.goldDark, letterSpacing: "0.3em", display: "inline-flex", alignItems: "center", gap: 24 }}>
                  ✦ {w.toUpperCase()}
                </span>
              ))
            )}
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <section id="services" style={{ padding: "140px 24px", position: "relative" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <p className="lb-script" style={{ color: palette.rosegold, fontSize: 32, margin: 0 }}>Our Services</p>
            <h2 className="lb-display" style={{ fontSize: "clamp(40px, 6vw, 72px)", margin: "8px 0 0", color: palette.ink }}>
              Crafted for <span className="lb-shimmer-text">every Lady-Boss</span>
            </h2>
            <div className="lb-divider" style={{ maxWidth: 280, margin: "28px auto 0" }}>
              <span style={{ color: palette.gold }}>✦</span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28 }}>
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <article key={s.title} className="lb-card" style={{
                  background: "white",
                  borderRadius: 24,
                  overflow: "hidden",
                  border: `1px solid ${palette.gold}25`,
                  boxShadow: `0 20px 60px -30px ${palette.rosegold}40`,
                }}>
                  <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden", background: palette.cream }}>
                    <img src={s.img} alt={s.title} loading="lazy" className="lb-card-img lb-kb" style={{ width: "100%", height: "100%", objectFit: "cover", animationDelay: `${i * 1.5}s` }} />
                    <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, transparent 50%, ${palette.ink}80 100%)` }} />
                    <span style={{
                      position: "absolute", top: 16, left: 16, padding: "6px 14px",
                      background: `${palette.bg}f0`, backdropFilter: "blur(10px)",
                      borderRadius: 999, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase",
                      color: palette.rosegold, fontWeight: 500,
                    }}>{s.tag}</span>
                    <div style={{ position: "absolute", bottom: 14, right: 14, width: 44, height: 44, borderRadius: "50%", background: palette.bg, display: "flex", alignItems: "center", justifyContent: "center", color: palette.rosegold }}>
                      <Icon size={20} />
                    </div>
                  </div>
                  <div style={{ padding: "28px 26px 32px" }}>
                    <h3 className="lb-display" style={{ fontSize: 26, margin: 0, color: palette.ink }}>{s.title}</h3>
                    <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.65, color: palette.charcoal, opacity: 0.78 }}>{s.desc}</p>
                    <a href="#visit" style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: palette.rosegold, textDecoration: "none" }}>
                      Book this <span>→</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <p style={{ textAlign: "center", marginTop: 56, fontSize: 14, color: palette.charcoal, opacity: 0.7, fontStyle: "italic" }} className="lb-serif">
            …and a lot more beauty treatments waiting for you ✦
          </p>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" style={{ padding: "140px 24px", background: `linear-gradient(180deg, ${palette.cream} 0%, ${palette.bg} 100%)` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 80, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: 24, overflow: "hidden", boxShadow: `0 40px 100px -40px ${palette.rosegold}60` }}>
              <img src={hairImg} alt="Lady-Boss salon" loading="lazy" className="lb-kb" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{
              position: "absolute", bottom: -30, right: -10, width: 180, height: 180,
              background: palette.bg, borderRadius: "50%",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              border: `1px solid ${palette.gold}50`,
              boxShadow: `0 20px 50px -20px ${palette.rosegold}40`,
            }}>
              <Star size={20} style={{ color: palette.gold, fill: palette.gold }} />
              <div className="lb-display" style={{ fontSize: 32, color: palette.ink, marginTop: 4 }}>5.0</div>
              <div style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: palette.charcoal, opacity: 0.7 }}>Loved Locally</div>
            </div>
          </div>

          <div>
            <p className="lb-script" style={{ color: palette.rosegold, fontSize: 32, margin: 0 }}>Why Choose Us</p>
            <h2 className="lb-display" style={{ fontSize: "clamp(36px, 5vw, 60px)", margin: "8px 0 24px", color: palette.ink }}>
              The Lady-Boss difference.
            </h2>
            <p className="lb-serif" style={{ fontSize: 18, fontStyle: "italic", color: palette.charcoal, opacity: 0.85, lineHeight: 1.6 }}>
              We blend skill, warmth and quality into every experience — so you leave glowing, inside and out.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0", display: "grid", gap: 14 }}>
              {reasons.map((r) => (
                <li key={r} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", background: "white", borderRadius: 14, border: `1px solid ${palette.gold}20` }}>
                  <span style={{ width: 28, height: 28, borderRadius: "50%", background: palette.rose, color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Check size={14} />
                  </span>
                  <span style={{ fontSize: 15, color: palette.ink }}>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GALLERY / VIDEO STRIP */}
      <section id="gallery" style={{ padding: "140px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p className="lb-script" style={{ color: palette.rosegold, fontSize: 32, margin: 0 }}>Moments</p>
            <h2 className="lb-display" style={{ fontSize: "clamp(36px, 5vw, 60px)", margin: "8px 0 0", color: palette.ink }}>
              A look inside the hub
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "240px 240px", gap: 16 }} className="hidden md:grid">
            <div style={{ gridRow: "1 / 3", overflow: "hidden", borderRadius: 20 }}>
              <img src={heroImg} alt="Salon interior" loading="lazy" className="lb-kb" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ overflow: "hidden", borderRadius: 20 }}>
              <img src={lashesImg} alt="Lashes" loading="lazy" className="lb-kb" style={{ width: "100%", height: "100%", objectFit: "cover", animationDelay: "1s" }} />
            </div>
            <div style={{ overflow: "hidden", borderRadius: 20 }}>
              <img src={nailsImg} alt="Nails" loading="lazy" className="lb-kb" style={{ width: "100%", height: "100%", objectFit: "cover", animationDelay: "2s" }} />
            </div>
            <div style={{ overflow: "hidden", borderRadius: 20 }}>
              <img src={rebondImg} alt="Rebond" loading="lazy" className="lb-kb" style={{ width: "100%", height: "100%", objectFit: "cover", animationDelay: "3s" }} />
            </div>
            <div style={{ overflow: "hidden", borderRadius: 20 }}>
              <img src={wellnessImg} alt="Wellness" loading="lazy" className="lb-kb" style={{ width: "100%", height: "100%", objectFit: "cover", animationDelay: "4s" }} />
            </div>
          </div>
          {/* mobile gallery */}
          <div className="md:hidden" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[heroImg, lashesImg, nailsImg, rebondImg, wellnessImg, hairImg].map((img, i) => (
              <div key={i} style={{ aspectRatio: "1/1", overflow: "hidden", borderRadius: 16 }}>
                <img src={img} alt="" loading="lazy" className="lb-kb" style={{ width: "100%", height: "100%", objectFit: "cover", animationDelay: `${i}s` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: "0 24px" }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          background: `linear-gradient(135deg, ${palette.rosegold}, ${palette.rose} 60%, ${palette.gold})`,
          borderRadius: 32, padding: "80px 40px", textAlign: "center", color: "white", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -40, left: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.12)" }} />
          <div style={{ position: "absolute", bottom: -60, right: -60, width: 260, height: 260, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
          <Sparkles size={40} style={{ opacity: 0.85, position: "relative" }} />
          <h2 className="lb-display" style={{ fontSize: "clamp(36px, 5vw, 64px)", margin: "16px 0 12px", position: "relative", color: "white" }}>
            Be Beautiful. Be Confident. <br/><span className="lb-script">Be a Lady-Boss.</span>
          </h2>
          <p className="lb-serif" style={{ fontStyle: "italic", fontSize: 18, opacity: 0.92, maxWidth: 540, margin: "0 auto", position: "relative" }}>
            Book your appointment today and let us bring out your natural beauty.
          </p>
          <a href="#visit" style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            marginTop: 36, padding: "18px 42px", borderRadius: 999,
            background: "white", color: palette.rosegold,
            fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", textDecoration: "none", fontWeight: 600,
            position: "relative",
          }}>
            Reserve Your Glow <span>→</span>
          </a>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" style={{ padding: "140px 24px 100px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p className="lb-script" style={{ color: palette.rosegold, fontSize: 32, margin: 0 }}>Visit Us</p>
            <h2 className="lb-display" style={{ fontSize: "clamp(36px, 5vw, 60px)", margin: "8px 0 0", color: palette.ink }}>Come glow with us</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 40 }}>
            {[
              { icon: MapPin, title: "Location", lines: ["Posadas Street cor. Morrow Street", "Koronadal City"] },
              { icon: Phone, title: "Contact", lines: ["0951-258-7178", "0917-703-2288"] },
              { icon: Mail, title: "Email", lines: ["ladybossbeautyandwellnesshub@gmail.com"] },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} style={{ background: "white", padding: 32, borderRadius: 20, border: `1px solid ${palette.gold}25`, textAlign: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: palette.cream, color: palette.rosegold, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                    <Icon size={22} />
                  </div>
                  <div style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: palette.goldDark, marginBottom: 10 }}>{c.title}</div>
                  {c.lines.map((l) => (
                    <div key={l} className="lb-serif" style={{ fontSize: 16, color: palette.ink, lineHeight: 1.6, wordBreak: "break-word" }}>{l}</div>
                  ))}
                </div>
              );
            })}
          </div>

          <div style={{ borderRadius: 24, overflow: "hidden", border: `1px solid ${palette.gold}30`, boxShadow: `0 30px 80px -40px ${palette.rosegold}50` }}>
            <iframe
              title="Lady-Boss Koronadal map"
              src="https://www.google.com/maps?q=Posadas+Street+Morrow+Street+Koronadal+City&output=embed"
              loading="lazy"
              style={{ width: "100%", height: 400, border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: palette.ink, color: palette.cream, padding: "70px 24px 30px", textAlign: "center" }}>
        <div className="lb-script" style={{ fontSize: 44, color: palette.rose }}>Lady-Boss</div>
        <div className="lb-display" style={{ fontSize: 12, letterSpacing: "0.5em", color: palette.gold, marginTop: 4 }}>BEAUTY · WELLNESS · HUB</div>
        <p className="lb-serif" style={{ fontStyle: "italic", opacity: 0.7, marginTop: 22, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
          Koronadal City's one-stop destination for beauty and wellness.
        </p>
        <div style={{ marginTop: 36, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.4 }}>
          © {new Date().getFullYear()} Lady-Boss Beauty & Wellness Hub
        </div>
      </footer>

      {/* Floating call button */}
      <a
        href="tel:+639512587178"
        aria-label="Call Lady-Boss"
        className="lb-pulse"
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 60,
          width: 60, height: 60, borderRadius: "50%",
          background: `linear-gradient(135deg, ${palette.rosegold}, ${palette.rose})`,
          color: "white", display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 14px 40px -10px ${palette.rosegold}aa`, textDecoration: "none",
        }}
      >
        <Phone size={22} />
      </a>
    </main>
  );
};

export default LadyBoss;
