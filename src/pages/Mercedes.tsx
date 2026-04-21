import { useEffect, useState } from "react";
import {
  BarChart3,
  Settings2,
  Bot,
  CheckCircle2,
  Sparkles,
  Mail,
  MessageCircle,
  ArrowRight,
  Menu,
  X,
  Wallet,
  FileSpreadsheet,
  Users,
  Receipt,
  Calendar,
  CreditCard,
  Send,
  Heart,
} from "lucide-react";
import { toast } from "sonner";
import portraitHero from "@/assets/mercedes/portrait-hero.png";
import portraitAbout from "@/assets/mercedes/portrait-about.png";
import portraitBookkeeping from "@/assets/mercedes/portrait-bookkeeping.png";
import portraitFunnel from "@/assets/mercedes/portrait-funnel.png";
import portraitCta from "@/assets/mercedes/portrait-cta.png";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#who", label: "Who I Help" },
  { href: "#why", label: "Why Me" },
  { href: "#contact", label: "Contact" },
];

const Mercedes = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    toast.success("Message sent! 💌", {
      description: "Mercedes will get back to you shortly.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-[hsl(var(--m-bg))] text-[hsl(var(--m-ink))] overflow-x-hidden">
      {/* Pastel theme tokens scoped to this page */}
      <style>{`
        :root {
          --m-bg: 340 60% 98%;
          --m-ink: 240 25% 22%;
          --m-muted: 240 10% 50%;
          --m-pink: 340 80% 88%;
          --m-pink-deep: 340 70% 75%;
          --m-lavender: 270 70% 90%;
          --m-lavender-deep: 270 50% 75%;
          --m-mint: 160 55% 86%;
          --m-mint-deep: 160 45% 65%;
          --m-peach: 25 90% 88%;
          --m-peach-deep: 22 80% 72%;
          --m-cream: 45 80% 95%;
          --m-card: 0 0% 100%;
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[hsl(var(--m-bg)/0.9)] backdrop-blur-md shadow-[0_4px_20px_-12px_hsl(340_50%_50%/0.25)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[hsl(var(--m-pink-deep))] to-[hsl(var(--m-lavender-deep))] flex items-center justify-center text-white font-serif text-lg shadow-md">
              M
            </div>
            <span className="font-serif text-xl tracking-wide">
              Mercedes <span className="text-[hsl(var(--m-pink-deep))]">Almuete</span>
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-xs uppercase tracking-[0.18em] text-[hsl(var(--m-ink)/0.7)] hover:text-[hsl(var(--m-pink-deep))] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] bg-gradient-to-r from-[hsl(var(--m-pink-deep))] to-[hsl(var(--m-lavender-deep))] text-white px-5 py-3 rounded-full hover:opacity-90 transition-all shadow-md"
          >
            Message Me <ArrowRight size={14} />
          </a>
          <button
            className="md:hidden text-[hsl(var(--m-ink))]"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-[hsl(var(--m-bg)/0.98)] backdrop-blur border-t border-[hsl(var(--m-pink)/0.5)] mt-3">
            <ul className="container flex flex-col py-4 gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm uppercase tracking-[0.18em] text-[hsl(var(--m-ink)/0.8)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center items-center bg-gradient-to-r from-[hsl(var(--m-pink-deep))] to-[hsl(var(--m-lavender-deep))] text-white px-5 py-3 rounded-full text-xs uppercase tracking-[0.18em]"
              >
                Message Me
              </a>
            </ul>
          </div>
        )}
      </nav>

      {/* HERO */}
      <header id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[hsl(var(--m-pink)/0.55)] via-[hsl(var(--m-bg))] to-[hsl(var(--m-lavender)/0.5)]" />
        {/* Floating pastel blobs */}
        <div className="absolute top-20 -left-24 w-72 h-72 rounded-full bg-[hsl(var(--m-peach)/0.6)] blur-3xl -z-10" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-[hsl(var(--m-mint)/0.5)] blur-3xl -z-10" />

        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[hsl(var(--m-pink-deep))] mb-5">
              <Sparkles size={14} /> Bookkeeping • Funnels • Automation
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-5">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--m-pink-deep))] via-[hsl(var(--m-lavender-deep))] to-[hsl(var(--m-peach-deep))] bg-clip-text text-transparent italic">
                Mercedes
              </span>
            </h1>
            <p className="text-lg text-[hsl(var(--m-muted))] max-w-md mb-7 leading-relaxed">
              Helping small businesses organize finances, automate sales, and grow faster — with simple,
              budget-friendly systems that actually work.
            </p>

            <ul className="space-y-2 mb-9">
              {[
                "Expense & Income Tracking",
                "Sales Funnels (GCash-ready)",
                "Automated Client Systems",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-[hsl(var(--m-ink))]">
                  <CheckCircle2 size={18} className="text-[hsl(var(--m-mint-deep))]" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[hsl(var(--m-pink-deep))] to-[hsl(var(--m-lavender-deep))] text-white px-7 py-4 rounded-full text-sm uppercase tracking-[0.18em] hover:opacity-90 transition-all shadow-md hover:-translate-y-0.5"
              >
                Message "START" <Send size={15} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-[hsl(var(--m-ink)/0.15)] bg-[hsl(var(--m-card))] text-[hsl(var(--m-ink))] px-7 py-4 rounded-full text-sm uppercase tracking-[0.18em] hover:border-[hsl(var(--m-pink-deep))] hover:text-[hsl(var(--m-pink-deep))] transition-colors"
              >
                See Services
              </a>
            </div>
          </div>

          {/* Hero portrait with pastel ring */}
          <div className="relative animate-fade-up flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-br from-[hsl(var(--m-pink)/0.7)] via-[hsl(var(--m-lavender)/0.7)] to-[hsl(var(--m-peach)/0.6)] blur-2xl" />
              <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[460px] md:h-[460px] rounded-full bg-gradient-to-br from-[hsl(var(--m-pink))] via-[hsl(var(--m-lavender))] to-[hsl(var(--m-mint))] p-2 shadow-[0_30px_60px_-20px_hsl(340_50%_50%/0.35)]">
                <div className="w-full h-full rounded-full bg-[hsl(var(--m-cream))] overflow-hidden flex items-end justify-center">
                  <img
                    src={portraitHero}
                    alt="Mercedes Almuete — Bookkeeper & Funnel Automation Specialist"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-2 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 animate-float">
                <div className="bg-[hsl(var(--m-mint)/0.6)] text-[hsl(var(--m-mint-deep))] rounded-full p-2">
                  <BarChart3 size={16} />
                </div>
                <div>
                  <div className="text-xs text-[hsl(var(--m-muted))]">Books</div>
                  <div className="text-sm font-medium">Organized</div>
                </div>
              </div>
              <div className="absolute bottom-4 -right-2 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="bg-[hsl(var(--m-pink)/0.6)] text-[hsl(var(--m-pink-deep))] rounded-full p-2">
                  <Bot size={16} />
                </div>
                <div>
                  <div className="text-xs text-[hsl(var(--m-muted))]">Automation</div>
                  <div className="text-sm font-medium">24/7 Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-28">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 w-48 h-48 rounded-3xl bg-[hsl(var(--m-peach)/0.6)] -z-10" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl bg-[hsl(var(--m-lavender)/0.6)] -z-10" />
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[hsl(var(--m-cream))] to-[hsl(var(--m-pink)/0.4)] shadow-xl aspect-[4/5] flex items-end justify-center">
              <img src={portraitAbout} alt="Mercedes Almuete portrait" className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--m-pink-deep))]">About Me</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-5 leading-tight">
              A dedicated <em className="text-[hsl(var(--m-lavender-deep))]">Bookkeeper</em> &<br />
              Funnel Automation Specialist
            </h2>
            <p className="text-[hsl(var(--m-muted))] text-lg leading-relaxed mb-6">
              I help entrepreneurs and small business owners take the stress out of running their business —
              with clean books, smart funnels, and automation that saves time so they can focus on growth.
            </p>
            <ul className="space-y-3">
              {[
                { icon: BarChart3, text: "Keep your finances clean and accurate" },
                { icon: Settings2, text: "Build simple but effective sales funnels" },
                { icon: Bot, text: "Automate processes to save time and earn more" },
              ].map((i) => (
                <li key={i.text} className="flex items-start gap-3">
                  <div className="mt-0.5 w-9 h-9 rounded-full bg-[hsl(var(--m-pink)/0.5)] text-[hsl(var(--m-pink-deep))] flex items-center justify-center shrink-0">
                    <i.icon size={16} />
                  </div>
                  <span className="text-[hsl(var(--m-ink))]">{i.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-transparent via-[hsl(var(--m-lavender)/0.2)] to-transparent">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--m-pink-deep))]">What I Do</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-4">Services tailored for growth</h2>
            <p className="text-[hsl(var(--m-muted))] text-lg">
              Three core systems to help your business stay organized and scale with confidence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Bookkeeping */}
            <article className="group bg-[hsl(var(--m-card))] rounded-3xl overflow-hidden border border-[hsl(var(--m-pink)/0.4)] hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="h-56 bg-gradient-to-br from-[hsl(var(--m-mint)/0.7)] to-[hsl(var(--m-mint-deep)/0.4)] relative overflow-hidden flex items-end justify-center">
                <img src={portraitBookkeeping} alt="Bookkeeping services" className="h-full w-auto object-contain object-bottom" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-full p-3 shadow">
                  <BarChart3 className="text-[hsl(var(--m-mint-deep))]" size={22} />
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl mb-3">📊 Bookkeeping</h3>
                <ul className="space-y-2 text-sm text-[hsl(var(--m-muted))]">
                  {[
                    { icon: Wallet, text: "Expense & Income Tracking" },
                    { icon: Receipt, text: "Profit & Loss Reports" },
                    { icon: FileSpreadsheet, text: "Organized Monthly Records" },
                    { icon: CheckCircle2, text: "Excel-based — simple & affordable" },
                  ].map((i) => (
                    <li key={i.text} className="flex items-center gap-2">
                      <i.icon size={15} className="text-[hsl(var(--m-mint-deep))] shrink-0" />
                      {i.text}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Funnel */}
            <article className="group bg-[hsl(var(--m-card))] rounded-3xl overflow-hidden border border-[hsl(var(--m-lavender)/0.4)] hover:shadow-xl transition-all duration-500 hover:-translate-y-1 lg:-translate-y-4">
              <div className="h-56 bg-gradient-to-br from-[hsl(var(--m-lavender)/0.7)] to-[hsl(var(--m-pink)/0.5)] relative overflow-hidden flex items-end justify-center">
                <img src={portraitFunnel} alt="Funnel design services" className="h-full w-auto object-contain object-bottom" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-full p-3 shadow">
                  <Settings2 className="text-[hsl(var(--m-lavender-deep))]" size={22} />
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl mb-3">⚙️ Funnel Design</h3>
                <ul className="space-y-2 text-sm text-[hsl(var(--m-muted))]">
                  {[
                    { icon: Users, text: "Lead Generation Funnels" },
                    { icon: Calendar, text: "Appointment Funnels" },
                    { icon: CreditCard, text: "GCash Payment Funnels" },
                    { icon: Sparkles, text: "Landing Page Setup" },
                  ].map((i) => (
                    <li key={i.text} className="flex items-center gap-2">
                      <i.icon size={15} className="text-[hsl(var(--m-lavender-deep))] shrink-0" />
                      {i.text}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Automation */}
            <article className="group bg-[hsl(var(--m-card))] rounded-3xl overflow-hidden border border-[hsl(var(--m-peach)/0.4)] hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="h-56 bg-gradient-to-br from-[hsl(var(--m-peach)/0.7)] to-[hsl(var(--m-pink)/0.5)] relative overflow-hidden flex items-end justify-center">
                <img src={portraitCta} alt="Automation services" className="h-full w-auto object-contain object-bottom" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-full p-3 shadow">
                  <Bot className="text-[hsl(var(--m-peach-deep))]" size={22} />
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl mb-3">🤖 Automation</h3>
                <ul className="space-y-2 text-sm text-[hsl(var(--m-muted))]">
                  {[
                    { icon: MessageCircle, text: "Auto-response (Messenger/Email)" },
                    { icon: FileSpreadsheet, text: "Google Forms + Sheets sync" },
                    { icon: CreditCard, text: "Payment Tracking Automation" },
                    { icon: Users, text: "Client Onboarding Systems" },
                  ].map((i) => (
                    <li key={i.text} className="flex items-center gap-2">
                      <i.icon size={15} className="text-[hsl(var(--m-peach-deep))] shrink-0" />
                      {i.text}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WHO I HELP */}
      <section id="who" className="py-20 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--m-pink-deep))]">Who I Help</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">Built for growing businesses</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { label: "Small Business Owners", color: "m-pink" },
              { label: "Online Sellers", color: "m-lavender" },
              { label: "Service Providers", color: "m-mint" },
              { label: "Freelancers", color: "m-peach" },
            ].map((w) => (
              <div
                key={w.label}
                className={`bg-[hsl(var(--${w.color})/0.4)] rounded-3xl p-6 text-center hover:bg-[hsl(var(--${w.color})/0.6)] transition-all hover:-translate-y-1 border border-white/60`}
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center mb-3 shadow-sm">
                  <CheckCircle2 className="text-[hsl(var(--m-pink-deep))]" size={20} />
                </div>
                <p className="font-medium text-[hsl(var(--m-ink))]">{w.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section id="why" className="py-20 md:py-28 bg-gradient-to-br from-[hsl(var(--m-cream))] via-[hsl(var(--m-pink)/0.25)] to-[hsl(var(--m-lavender)/0.3)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--m-pink-deep))]">Why Work With Me</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-3">Real results, no fluff</h2>
            <p className="text-[hsl(var(--m-muted))] text-lg">
              You get personalized attention and systems that fit your budget — not generic templates.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              { title: "Simple & Practical", desc: "No overwhelming tools — just what works for your business size." },
              { title: "Budget-Friendly", desc: "Affordable solutions designed for small business reality." },
              { title: "Focused on Results", desc: "More organized books and more sales — that's the goal." },
              { title: "Personalized Support", desc: "Direct, attentive help from someone who actually cares." },
            ].map((r) => (
              <div key={r.title} className="bg-white rounded-2xl p-6 flex gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--m-pink-deep))] to-[hsl(var(--m-lavender-deep))] flex items-center justify-center text-white shrink-0">
                  <Heart size={18} />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-1">{r.title}</h3>
                  <p className="text-sm text-[hsl(var(--m-muted))] leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[hsl(var(--m-pink)/0.4)] via-[hsl(var(--m-bg))] to-[hsl(var(--m-mint)/0.3)]" />
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--m-pink-deep))]">Let's Work Together</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-5 leading-tight">
              Ready to <em className="text-[hsl(var(--m-lavender-deep))]">simplify</em> your business and increase your income?
            </h2>
            <p className="text-[hsl(var(--m-muted))] text-lg mb-8 leading-relaxed">
              Send me a message with the word <strong className="text-[hsl(var(--m-pink-deep))]">"START"</strong> or fill out the
              quick form — I'll get back to you within 24 hours.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://m.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[hsl(var(--m-pink-deep))] to-[hsl(var(--m-lavender-deep))] text-white px-6 py-3 rounded-full text-sm uppercase tracking-[0.18em] hover:opacity-90 shadow-md"
              >
                <MessageCircle size={16} /> Message "START"
              </a>
              <a
                href="mailto:hello@mercedesalmuete.com"
                className="inline-flex items-center gap-2 border border-[hsl(var(--m-ink)/0.15)] bg-white px-6 py-3 rounded-full text-sm uppercase tracking-[0.18em] hover:border-[hsl(var(--m-pink-deep))] hover:text-[hsl(var(--m-pink-deep))]"
              >
                <Mail size={16} /> Email Me
              </a>
            </div>

            <div className="hidden lg:flex items-end">
              <img src={portraitCta} alt="Mercedes Almuete" className="w-48 h-auto" />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-7 md:p-9 shadow-xl border border-[hsl(var(--m-pink)/0.3)]"
          >
            <h3 className="font-serif text-2xl mb-5">Quick Start Form</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-[hsl(var(--m-muted))] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[hsl(var(--m-cream)/0.6)] border border-[hsl(var(--m-pink)/0.3)] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--m-pink-deep)/0.4)]"
                  placeholder="Juan Dela Cruz"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-[hsl(var(--m-muted))] mb-2">
                  Email or Mobile
                </label>
                <input
                  type="text"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[hsl(var(--m-cream)/0.6)] border border-[hsl(var(--m-pink)/0.3)] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--m-pink-deep)/0.4)]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-[hsl(var(--m-muted))] mb-2">
                  What do you need help with?
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[hsl(var(--m-cream)/0.6)] border border-[hsl(var(--m-pink)/0.3)] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--m-pink-deep)/0.4)] resize-none"
                  placeholder="Bookkeeping, funnel, automation..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[hsl(var(--m-pink-deep))] to-[hsl(var(--m-lavender-deep))] text-white py-4 rounded-full text-sm uppercase tracking-[0.18em] hover:opacity-90 transition-all shadow-md"
              >
                Send Message <Send size={15} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(var(--m-ink))] text-[hsl(var(--m-bg))] py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--m-pink-deep))] to-[hsl(var(--m-lavender-deep))] flex items-center justify-center text-white font-serif">
              M
            </div>
            <div>
              <div className="font-serif text-lg">Mercedes Almuete</div>
              <div className="text-xs text-white/60">Bookkeeping • Funnels • Automation</div>
            </div>
          </div>
          <ul className="flex flex-wrap gap-6 text-sm text-white/70">
            <li><a href="#about" className="hover:text-[hsl(var(--m-pink))] transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-[hsl(var(--m-pink))] transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-[hsl(var(--m-pink))] transition-colors">Contact</a></li>
          </ul>
          <div className="text-xs text-white/50">
            © {new Date().getFullYear()} Mercedes Almuete. Made with 💗
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Mercedes;
