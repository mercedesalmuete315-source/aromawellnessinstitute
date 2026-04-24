import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Wrench,
  Search,
  CheckCircle2,
  Handshake,
  Heart,
  ArrowDown,
  Phone,
  MapPin,
  Star,
  Calendar,
  MessageCircle,
  Gift,
  Bell,
  Megaphone,
  FileCheck,
  ClipboardCheck,
  Tag,
  Repeat,
} from "lucide-react";
import heroImg from "@/assets/autorepair/hero.jpg";
import awarenessImg from "@/assets/autorepair/awareness.jpg";
import interestImg from "@/assets/autorepair/interest.jpg";
import conversionImg from "@/assets/autorepair/conversion.jpg";
import retentionImg from "@/assets/autorepair/retention.jpg";

const stages = [
  {
    n: "01",
    key: "awareness",
    color: "awareness",
    icon: Megaphone,
    title: "Awareness",
    subtitle: "Top of Funnel",
    goal: "Get noticed by potential customers searching for trusted auto repair.",
    image: awarenessImg,
    bullets: [
      { icon: Search, label: "Local SEO", text: 'Optimized for "auto repair near me"' },
      { icon: Megaphone, label: "Social Media Ads", text: "Targeting drivers with maintenance tips" },
      { icon: FileCheck, label: "Content Marketing", text: '"5 Signs Your Car Needs Repair"' },
      { icon: Handshake, label: "Referral Partners", text: "Insurance & dealership network" },
    ],
  },
  {
    n: "02",
    key: "interest",
    color: "interest",
    icon: ClipboardCheck,
    title: "Interest",
    subtitle: "Middle of Funnel",
    goal: "Build trust and showcase expertise with helpful, honest information.",
    image: interestImg,
    bullets: [
      { icon: Wrench, label: "Service Pages", text: "Clear pricing on every repair" },
      { icon: FileCheck, label: "Free Resources", text: "Downloadable maintenance checklist" },
      { icon: Star, label: "Customer Reviews", text: "Real testimonials & case studies" },
      { icon: MessageCircle, label: "Live Chat", text: "Quick answers, anytime" },
    ],
  },
  {
    n: "03",
    key: "conversion",
    color: "conversion",
    icon: CheckCircle2,
    title: "Conversion",
    subtitle: "Bottom of Funnel",
    goal: "Turn prospects into paying customers with friction-free booking.",
    image: conversionImg,
    bullets: [
      { icon: Tag, label: "Special Offers", text: "Free first diagnostic check" },
      { icon: Calendar, label: "Online Booking", text: "Schedule in 60 seconds" },
      { icon: CheckCircle2, label: "Clear CTAs", text: '"Book Your Repair Today"' },
      { icon: Bell, label: "Reminders", text: "Automated SMS confirmations" },
    ],
  },
  {
    n: "04",
    key: "retention",
    color: "retention",
    icon: Heart,
    title: "Retention",
    subtitle: "Post-Sale Funnel",
    goal: "Keep customers coming back with proactive care and loyalty rewards.",
    image: retentionImg,
    bullets: [
      { icon: Bell, label: "Service Reminders", text: "Oil changes, tire rotations" },
      { icon: Gift, label: "Loyalty Program", text: "Points for repeat visits" },
      { icon: MessageCircle, label: "Feedback Loop", text: "Surveys to improve quality" },
      { icon: Repeat, label: "Seasonal Care", text: '"Winter Check" & "Summer Prep"' },
    ],
  },
] as const;

const AutoRepair = () => {
  const [phone, setPhone] = useState("");

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      toast.error("Please enter your phone number");
      return;
    }
    toast.success("Booking received! We'll text you to confirm.");
    setPhone("");
  };

  return (
    <div
      className="min-h-screen bg-ar-bg text-ar-ink"
      style={
        {
          // Auto Repair palette — scoped tokens
          "--ar-bg": "30 10% 97%",
          "--ar-surface": "0 0% 100%",
          "--ar-ink": "220 30% 12%",
          "--ar-muted": "220 10% 45%",
          "--ar-border": "220 15% 88%",
          // Stage colors
          "--ar-awareness": "212 85% 50%", // blue
          "--ar-interest": "42 95% 55%", // yellow/amber
          "--ar-conversion": "152 65% 42%", // green
          "--ar-retention": "22 90% 55%", // orange
        } as React.CSSProperties
      }
    >
      <style>{`
        .bg-ar-bg { background-color: hsl(var(--ar-bg)); }
        .bg-ar-surface { background-color: hsl(var(--ar-surface)); }
        .text-ar-ink { color: hsl(var(--ar-ink)); }
        .text-ar-muted { color: hsl(var(--ar-muted)); }
        .border-ar { border-color: hsl(var(--ar-border)); }
        .stage-awareness { --c: var(--ar-awareness); }
        .stage-interest { --c: var(--ar-interest); }
        .stage-conversion { --c: var(--ar-conversion); }
        .stage-retention { --c: var(--ar-retention); }
        .text-c { color: hsl(var(--c)); }
        .bg-c { background-color: hsl(var(--c)); }
        .bg-c-soft { background-color: hsl(var(--c) / 0.08); }
        .border-c { border-color: hsl(var(--c)); }
        .ring-c { box-shadow: 0 0 0 1px hsl(var(--c) / 0.3), 0 20px 40px -20px hsl(var(--c) / 0.4); }
      `}</style>

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-ar-surface/80 border-b border-ar">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-bold text-lg">
            <div className="w-9 h-9 rounded-lg bg-ar-ink flex items-center justify-center">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span>AutoCare<span className="text-[hsl(var(--ar-retention))]">+</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#funnel" className="hover:text-[hsl(var(--ar-conversion))] transition">Process</a>
            <a href="#services" className="hover:text-[hsl(var(--ar-conversion))] transition">Services</a>
            <a href="#book" className="hover:text-[hsl(var(--ar-conversion))] transition">Book</a>
            <a href="#contact" className="hover:text-[hsl(var(--ar-conversion))] transition">Contact</a>
          </nav>
          <a href="#book">
            <Button className="bg-[hsl(var(--ar-conversion))] hover:bg-[hsl(var(--ar-conversion))]/90 text-white">
              Book Now
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Modern auto repair garage with cars on lifts"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ar-ink/95 via-ar-ink/80 to-ar-ink/40" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-36 text-white">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium mb-6 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--ar-conversion))] animate-pulse" />
              Trusted by 5,000+ drivers
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              Auto Repair<br />
              <span className="text-[hsl(var(--ar-retention))]">Done Right.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              From the first warning light to your 10th oil change — a complete service journey designed to keep you on the road and worry-free.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#book">
                <Button size="lg" className="bg-[hsl(var(--ar-conversion))] hover:bg-[hsl(var(--ar-conversion))]/90 text-white text-base h-12 px-8">
                  Book Your Repair
                </Button>
              </a>
              <a href="#funnel">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white/40 hover:bg-white hover:text-ar-ink text-base h-12 px-8">
                  See How It Works
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap gap-8 mt-12 text-sm">
              <div>
                <div className="text-3xl font-bold text-[hsl(var(--ar-retention))]">15+</div>
                <div className="text-white/70">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[hsl(var(--ar-retention))]">4.9★</div>
                <div className="text-white/70">Customer Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[hsl(var(--ar-retention))]">24/7</div>
                <div className="text-white/70">Booking Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funnel intro */}
      <section id="funnel" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-sm font-semibold tracking-widest text-[hsl(var(--ar-conversion))] uppercase mb-4">
              The AutoCare+ Customer Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A 4-Stage Funnel Built<br />for Long-Term Trust
            </h2>
            <p className="text-lg text-ar-muted">
              We don't just fix cars. We build relationships at every stage — from the first search to the tenth visit.
            </p>
          </div>

          {/* Funnel stages */}
          <div className="space-y-12 md:space-y-20 max-w-6xl mx-auto">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              const reverse = i % 2 === 1;
              return (
                <div key={stage.key} className={`stage-${stage.color} relative`}>
                  {/* Connector arrow */}
                  {i > 0 && (
                    <div className="absolute -top-10 md:-top-14 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <div className="w-px h-8 md:h-10 bg-ar-border" />
                      <ArrowDown className="w-5 h-5 text-ar-muted -mt-1" />
                    </div>
                  )}

                  <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                    {/* Image */}
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-c-soft -z-0" />
                      <div className="relative rounded-2xl overflow-hidden ring-c">
                        <img
                          src={stage.image}
                          alt={`${stage.title} stage — ${stage.subtitle}`}
                          width={1280}
                          height={832}
                          loading="lazy"
                          className="w-full h-[280px] md:h-[380px] object-cover"
                        />
                        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur text-xs font-bold">
                          <span className="w-2 h-2 rounded-full bg-c" />
                          STAGE {stage.n}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-c flex items-center justify-center text-white">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold tracking-widest uppercase text-c">
                            {stage.subtitle}
                          </div>
                          <div className="text-3xl md:text-4xl font-bold">{stage.title}</div>
                        </div>
                      </div>
                      <p className="text-ar-muted text-base md:text-lg mb-6 leading-relaxed">
                        {stage.goal}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {stage.bullets.map((b) => {
                          const BIcon = b.icon;
                          return (
                            <div
                              key={b.label}
                              className="flex gap-3 p-4 rounded-xl bg-ar-surface border border-ar hover:border-c transition-colors"
                            >
                              <div className="shrink-0 w-9 h-9 rounded-lg bg-c-soft flex items-center justify-center">
                                <BIcon className="w-4 h-4 text-c" />
                              </div>
                              <div>
                                <div className="font-semibold text-sm">{b.label}</div>
                                <div className="text-xs text-ar-muted mt-0.5">{b.text}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services strip */}
      <section id="services" className="py-20 bg-ar-ink text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <div className="text-sm font-semibold tracking-widest text-[hsl(var(--ar-retention))] uppercase mb-3">
              Core Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Everything your car needs, under one roof.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Wrench, name: "Oil Change", price: "from $39" },
              { icon: CheckCircle2, name: "Brake Repair", price: "from $149" },
              { icon: Search, name: "Diagnostics", price: "FREE" },
              { icon: Repeat, name: "Tire Rotation", price: "from $29" },
            ].map((s) => {
              const I = s.icon;
              return (
                <div key={s.name} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  <I className="w-8 h-8 text-[hsl(var(--ar-retention))] mb-4" />
                  <div className="font-semibold text-lg">{s.name}</div>
                  <div className="text-white/60 text-sm mt-1">{s.price}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[hsl(var(--ar-conversion))] to-[hsl(212_70%_35%)] p-8 md:p-14 text-white relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm font-semibold tracking-widest uppercase text-white/80 mb-3">
                  Conversion Stage
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Book your free diagnostic today
                </h2>
                <p className="text-white/80 mb-6">
                  Drop your number — we'll text you a confirmation and a 10% off voucher for your first repair.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> No obligation, free inspection</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Same-day appointments available</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Honest pricing, written estimate</li>
                </ul>
              </div>
              <form onSubmit={handleBook} className="bg-white text-ar-ink rounded-2xl p-6 space-y-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ar-muted">Phone Number</label>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 123-4567"
                    className="mt-1 h-12 text-base"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 text-base bg-[hsl(var(--ar-retention))] hover:bg-[hsl(var(--ar-retention))]/90 text-white"
                >
                  Book Free Diagnostic
                </Button>
                <p className="text-xs text-ar-muted text-center">
                  By booking you agree to receive SMS reminders. Reply STOP anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-ar-ink text-white/70 py-14">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 font-bold text-white text-lg mb-3">
              <div className="w-9 h-9 rounded-lg bg-[hsl(var(--ar-retention))] flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              AutoCare<span className="text-[hsl(var(--ar-retention))]">+</span>
            </div>
            <p className="text-sm">
              Building lifelong customer relationships, one repair at a time.
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="text-white font-semibold mb-2">Visit Us</div>
            <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> 1234 Main Street, Auto District</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> (555) 123-CARE</div>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Mon–Sat · 7 AM – 7 PM</div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="text-white font-semibold mb-2">Funnel Stages</div>
            <a href="#funnel" className="block hover:text-white">→ Awareness</a>
            <a href="#funnel" className="block hover:text-white">→ Interest</a>
            <a href="#book" className="block hover:text-white">→ Conversion</a>
            <a href="#funnel" className="block hover:text-white">→ Retention</a>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-10 pt-6 border-t border-white/10 text-xs text-center">
          © {new Date().getFullYear()} AutoCare+ · Built around the customer journey
        </div>
      </footer>
    </div>
  );
};

export default AutoRepair;
