import { useEffect, useState, useRef } from "react";
import {
  Target, Compass, Zap, Shield, TrendingUp, Users, BookOpen,
  FileText, MessageCircle, Award, Calendar, CheckCircle2,
  Star, ArrowRight, Sparkles, Mail, Clock, MapPin, Phone,
  ChevronDown, Flame, Lightbulb, Heart
} from "lucide-react";

import heroImg from "@/assets/success-hero.jpg";
import goalsImg from "@/assets/success-goals.jpg";
import actionImg from "@/assets/success-action.jpg";
import communityImg from "@/assets/success-community.jpg";
import celebrationImg from "@/assets/success-celebration.jpg";

const days = [
  {
    n: "01",
    title: "Goal Setting & Success Blueprint",
    desc: "Learn how to set powerful goals and create a roadmap for success.",
    icon: Target,
    color: "#F5A623",
  },
  {
    n: "02",
    title: "Build the Right Foundation",
    desc: "Discover the key principles and strategies that successful people use.",
    icon: Compass,
    color: "#E88D3A",
  },
  {
    n: "03",
    title: "Take Massive Action",
    desc: "Implement proven action steps that generate measurable results.",
    icon: Zap,
    color: "#D4A853",
  },
  {
    n: "04",
    title: "Overcome Obstacles",
    desc: "Learn how to eliminate limiting beliefs and common roadblocks.",
    icon: Shield,
    color: "#5EC8D4",
  },
  {
    n: "05",
    title: "Scale Your Results",
    desc: "Create a long-term plan and discover the next level of growth available to you.",
    icon: TrendingUp,
    color: "#2DD4A8",
  },
];

const audience = [
  { icon: Flame, title: "Entrepreneurs and Business Owners" },
  { icon: Star, title: "Professionals Seeking Growth" },
  { icon: Heart, title: "Individuals Looking for Personal Development" },
  { icon: Lightbulb, title: "Anyone Ready to Create Positive Change" },
];

const deliverables = [
  { icon: Calendar, text: "Daily Training Sessions" },
  { icon: FileText, text: "Action Worksheets" },
  { icon: MessageCircle, text: "Community Support" },
  { icon: Award, text: "Expert Guidance" },
  { icon: CheckCircle2, text: "Challenge Completion Certificate" },
  { icon: BookOpen, text: "Exclusive Bonus Resources" },
];

const results = [
  "Greater clarity",
  "Increased confidence",
  "A proven action plan",
  "Real progress toward your goals",
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, revealed };
}

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, revealed } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(.2,.8,.2,1) ${delay}ms, transform 0.7s cubic-bezier(.2,.8,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const SuccessChallenge = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.title = "FREE 5-Day Success Challenge — Transform Your Life";
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#0B1220] text-[#F8F5F0] overflow-x-hidden font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap');
        .sc-display { font-family: 'DM Serif Display', serif; letter-spacing: -0.01em; }
        .sc-body { font-family: 'Inter', sans-serif; }
        @keyframes sc-kenburns {
          0% { transform: scale(1.1) translate(0, 0); }
          100% { transform: scale(1.25) translate(-1%, -1%); }
        }
        @keyframes sc-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.08); }
        }
        @keyframes sc-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(2deg); }
        }
        @keyframes sc-pulse-ring {
          0% { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .sc-kenburns { animation: sc-kenburns 20s ease-out forwards; }
        .sc-glow { animation: sc-glow 4s ease-in-out infinite; }
        .sc-float { animation: sc-float 6s ease-in-out infinite; }
        .sc-pulse-ring::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          border: 2px solid currentColor;
          animation: sc-pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* NAV */}
      <nav
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(11,18,32,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(245,166,35,0.1)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5" style={{ color: "#F5A623" }} />
            <span className="sc-display text-lg">5-Day Success Challenge</span>
          </div>
          <a
            href="#register"
            className="sc-body text-xs uppercase tracking-[0.2em] px-5 py-2.5 rounded-full font-semibold transition-transform hover:scale-105"
            style={{ background: "linear-gradient(135deg, #F5A623, #E88D3A)", color: "#0B1220" }}
          >
            Join Free
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Mountain sunrise triumph" className="w-full h-full object-cover sc-kenburns" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(11,18,32,0.4) 0%, rgba(11,18,32,0.85) 70%, #0B1220 100%)" }} />
        </div>

        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] sc-glow" style={{ background: "#F5A623", opacity: 0.12 }} />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] sc-glow" style={{ background: "#5EC8D4", opacity: 0.1, animationDelay: "2s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 sc-float"
            style={{ background: "rgba(245,166,35,0.12)", border: "1px solid rgba(245,166,35,0.25)" }}
          >
            <span className="w-2 h-2 rounded-full sc-glow" style={{ background: "#2DD4A8" }} />
            <span className="text-xs uppercase tracking-[0.25em]" style={{ color: "rgba(248,245,240,0.7)" }}>Free 5-Day Challenge</span>
          </div>

          <h1 className="sc-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] max-w-5xl mx-auto">
            Join Our <span className="italic" style={{ color: "#F5A623" }}>FREE</span> 5-Day
            <br />
            Success Challenge
          </h1>

          <p className="sc-body text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed" style={{ color: "rgba(248,245,240,0.75)" }}>
            Discover the Proven System to Achieve Faster Results and Transform Your Life
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#register"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold transition-transform hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #F5A623, #E88D3A)", color: "#0B1220" }}
            >
              Join the Free Challenge
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#learn"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] transition-colors hover:bg-white/5"
              style={{ border: "1px solid rgba(248,245,240,0.15)", color: "rgba(248,245,240,0.8)" }}
            >
              See What's Inside
            </a>
          </div>

          <div className="mt-16 flex justify-center gap-8 md:gap-14 max-w-lg mx-auto">
            {[
              { k: "5 Days", v: "Of Training" },
              { k: "100%", v: "Free" },
              { k: "Limited", v: "Slots" },
            ].map((s) => (
              <div key={s.k} className="text-center">
                <div className="sc-display text-3xl md:text-4xl font-semibold" style={{ color: "#F5A623" }}>{s.k}</div>
                <div className="text-xs uppercase tracking-[0.15em] mt-1" style={{ color: "rgba(248,245,240,0.5)" }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sc-float" style={{ animationDuration: "3s" }}>
          <ChevronDown className="w-6 h-6" style={{ color: "rgba(248,245,240,0.4)" }} />
        </div>
      </section>

      {/* HOOK */}
      <section className="relative py-28" style={{ borderTop: "1px solid rgba(245,166,35,0.08)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="sc-display text-3xl md:text-5xl leading-[1.08]">
              Ready to Finally Get the Results You've Been Looking For?
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="sc-body text-lg md:text-xl mt-8 leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(248,245,240,0.65)" }}>
              If you've been struggling to achieve your goals, feeling overwhelmed, or unsure of your next step, this <span className="font-semibold" style={{ color: "#F5A623" }}>FREE 5-Day Challenge</span> is designed specifically for you.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="sc-body text-base md:text-lg mt-6 leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(248,245,240,0.55)" }}>
              Over the next 5 days, you'll receive step-by-step guidance, practical action plans, and expert support to help you create real progress and build momentum toward your desired outcome.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section id="learn" className="relative py-28" style={{ borderTop: "1px solid rgba(245,166,35,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "#F5A623" }}>The Roadmap</div>
              <h2 className="sc-display text-4xl md:text-6xl leading-[1.02]">
                What You'll <span className="italic" style={{ color: "#F5A623" }}>Learn</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {days.map((d, i) => (
              <Reveal key={d.n} delay={i * 80}>
                <div
                  className="group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-1"
                  style={{
                    background: "rgba(248,245,240,0.03)",
                    border: "1px solid rgba(248,245,240,0.08)",
                  }}
                >
                  <div
                    className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                    style={{ background: d.color }}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${d.color}20` }}
                      >
                        <d.icon className="w-6 h-6" style={{ color: d.color }} />
                      </div>
                      <span className="sc-display text-5xl font-semibold" style={{ color: "rgba(248,245,240,0.1)" }}>{d.n}</span>
                    </div>
                    <h3 className="sc-display text-xl md:text-2xl font-semibold mb-3">{d.title}</h3>
                    <p className="sc-body leading-relaxed" style={{ color: "rgba(248,245,240,0.65)", fontSize: "0.95rem" }}>{d.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR + WHAT YOU'LL RECEIVE */}
      <section className="relative py-28" style={{ borderTop: "1px solid rgba(245,166,35,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* WHO IS THIS FOR */}
            <div>
              <Reveal>
                <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "#5EC8D4" }}>For You</div>
                <h2 className="sc-display text-4xl md:text-5xl leading-[1.05] mb-12">
                  Who Is This Challenge <span className="italic" style={{ color: "#5EC8D4" }}>For?</span>
                </h2>
              </Reveal>
              <div className="space-y-5">
                {audience.map((a, i) => (
                  <Reveal key={a.title} delay={i * 100}>
                    <div
                      className="flex items-center gap-4 p-5 rounded-2xl"
                      style={{ background: "rgba(248,245,240,0.03)", border: "1px solid rgba(248,245,240,0.06)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(94,200,212,0.12)" }}
                      >
                        <a.icon className="w-5 h-5" style={{ color: "#5EC8D4" }} />
                      </div>
                      <span className="sc-body font-medium">{a.title}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* WHAT YOU'LL RECEIVE */}
            <div>
              <Reveal>
                <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "#F5A623" }}>Included</div>
                <h2 className="sc-display text-4xl md:text-5xl leading-[1.05] mb-12">
                  What You'll <span className="italic" style={{ color: "#F5A623" }}>Receive</span>
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deliverables.map((d, i) => (
                  <Reveal key={d.text} delay={i * 80}>
                    <div
                      className="flex items-start gap-3 p-5 rounded-2xl h-full"
                      style={{ background: "rgba(248,245,240,0.03)", border: "1px solid rgba(248,245,240,0.06)" }}
                    >
                      <d.icon className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#F5A623" }} />
                      <span className="sc-body text-sm">{d.text}</span>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={500}>
                <div className="mt-10 rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(245,166,35,0.12)" }}>
                  <img src={goalsImg} alt="Goal planning workspace" className="w-full h-56 object-cover" loading="lazy" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="relative py-28 overflow-hidden" style={{ borderTop: "1px solid rgba(245,166,35,0.08)" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[120px]" style={{ background: "#F5A623", opacity: 0.06 }} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "#E88D3A" }}>The Difference</div>
                <h2 className="sc-display text-4xl md:text-5xl leading-[1.05] mb-8">
                  Why Join This <span className="italic" style={{ color: "#E88D3A" }}>Challenge?</span>
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="sc-body text-lg leading-relaxed mb-6" style={{ color: "rgba(248,245,240,0.65)" }}>
                  Most people fail because they try to do everything <span className="font-semibold" style={{ color: "#F8F5F0" }}>alone</span>.
                </p>
              </Reveal>
              <Reveal delay={250}>
                <p className="sc-body leading-relaxed mb-8" style={{ color: "rgba(248,245,240,0.55)" }}>
                  This challenge provides a clear roadmap, accountability, and support to help you achieve results faster than you could on your own.
                </p>
              </Reveal>
              <Reveal delay={350}>
                <div
                  className="p-6 rounded-2xl"
                  style={{ background: "rgba(245,166,35,0.06)", border: "1px solid rgba(245,166,35,0.15)" }}
                >
                  <div className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "#F5A623" }}>By the end, you'll have:</div>
                  <div className="space-y-3">
                    {results.map((r) => (
                      <div key={r} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: "#2DD4A8" }} />
                        <span className="sc-body" style={{ color: "rgba(248,245,240,0.8)" }}>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(248,245,240,0.08)" }}>
                <img src={actionImg} alt="Taking action" className="w-full h-[420px] object-cover" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMMUNITY + CELEBRATION */}
      <section className="relative py-28" style={{ borderTop: "1px solid rgba(245,166,35,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div
                className="rounded-3xl overflow-hidden relative group h-[320px] md:h-[400px]"
                style={{ border: "1px solid rgba(248,245,240,0.08)" }}
              >
                <img src={communityImg} alt="Community support" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,18,32,0.9) 0%, transparent 60%)" }} />
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5" style={{ color: "#5EC8D4" }} />
                    <span className="text-xs uppercase tracking-[0.25em]" style={{ color: "#5EC8D4" }}>Together</span>
                  </div>
                  <h3 className="sc-display text-2xl md:text-3xl font-semibold">Join Hundreds of Participants</h3>
                  <p className="sc-body mt-2 text-sm max-w-sm" style={{ color: "rgba(248,245,240,0.65)" }}>
                    Be part of a motivated community committed to achieving extraordinary results.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div
                className="rounded-3xl overflow-hidden relative group h-[320px] md:h-[400px]"
                style={{ border: "1px solid rgba(248,245,240,0.08)" }}
              >
                <img src={celebrationImg} alt="Celebrate success" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,18,32,0.9) 0%, transparent 60%)" }} />
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5" style={{ color: "#F5A623" }} />
                    <span className="text-xs uppercase tracking-[0.25em]" style={{ color: "#F5A623" }}>Achieve</span>
                  </div>
                  <h3 className="sc-display text-2xl md:text-3xl font-semibold">Your Breakthrough Starts Here</h3>
                  <p className="sc-body mt-2 text-sm max-w-sm" style={{ color: "rgba(248,245,240,0.65)" }}>
                    Success isn't a destination — it's a journey. Take your first step today.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="register" className="relative py-32 overflow-hidden" style={{ borderTop: "1px solid rgba(245,166,35,0.08)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(245,166,35,0.06) 0%, transparent 70%)" }} />
        <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full blur-[120px] sc-glow" style={{ background: "#F5A623", opacity: 0.08 }} />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: "rgba(245,166,35,0.1)", border: "1px solid rgba(245,166,35,0.2)" }}>
              <Clock className="w-4 h-4" style={{ color: "#F5A623" }} />
              <span className="text-xs uppercase tracking-[0.25em]" style={{ color: "#F5A623" }}>Limited Slots Available</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="sc-display text-4xl md:text-6xl leading-[1.02] mb-6">
              Success Starts <span className="italic" style={{ color: "#F5A623" }}>Today</span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="sc-body text-lg leading-relaxed max-w-xl mx-auto mb-4" style={{ color: "rgba(248,245,240,0.65)" }}>
              Don't wait for the perfect moment. Take the first step toward your transformation and join hundreds of participants committed to achieving extraordinary results.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="sc-body text-sm mb-10" style={{ color: "rgba(248,245,240,0.45)" }}>
              No experience required. Just bring your commitment and willingness to take action.
            </p>
          </Reveal>

          <Reveal delay={400}>
            {submitted ? (
              <div
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full"
                style={{ background: "rgba(45,212,168,0.12)", border: "1px solid rgba(45,212,168,0.3)", color: "#2DD4A8" }}
              >
                <CheckCircle2 className="w-5 h-5" />
                <span className="sc-body font-medium">You're in! Check your inbox for Day 1.</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full bg-white/5 text-white placeholder:text-white/30 focus:outline-none transition-colors"
                  style={{ border: "1px solid rgba(248,245,240,0.12)" }}
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-transform hover:scale-[1.02] relative sc-pulse-ring"
                  style={{ background: "linear-gradient(135deg, #F5A623, #E88D3A)", color: "#0B1220" }}
                >
                  Join the Free Challenge
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-16 flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(248,245,240,0.35)" }}>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "#2DD4A8" }} /> No Credit Card Required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "#2DD4A8" }} /> Instant Access
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "#2DD4A8" }} /> Cancel Anytime
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-16" style={{ borderTop: "1px solid rgba(248,245,240,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5" style={{ color: "#F5A623" }} />
                <span className="sc-display text-lg">5-Day Success Challenge</span>
              </div>
              <p className="sc-body text-sm leading-relaxed" style={{ color: "rgba(248,245,240,0.45)" }}>
                Your breakthrough starts here. Join thousands who have transformed their lives through our proven challenge system.
              </p>
            </div>
            <div>
              <h4 className="sc-body text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: "rgba(248,245,240,0.6)" }}>Quick Links</h4>
              <div className="space-y-2.5">
                {["What You'll Learn", "Who It's For", "Register Now"].map((l) => (
                  <a
                    key={l}
                    href={l === "What You'll Learn" ? "#learn" : l === "Who It's For" ? "#register" : "#register"}
                    className="block sc-body text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(248,245,240,0.45)" }}
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="sc-body text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: "rgba(248,245,240,0.6)" }}>Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 shrink-0" style={{ color: "#F5A623" }} />
                  <span className="sc-body text-sm" style={{ color: "rgba(248,245,240,0.5)" }}>hello@successchallenge.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 shrink-0" style={{ color: "#F5A623" }} />
                  <span className="sc-body text-sm" style={{ color: "rgba(248,245,240,0.5)" }}>Online — Join From Anywhere</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 shrink-0" style={{ color: "#F5A623" }} />
                  <span className="sc-body text-sm" style={{ color: "rgba(248,245,240,0.5)" }}>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 text-center" style={{ borderTop: "1px solid rgba(248,245,240,0.06)" }}>
            <div className="sc-body text-xs tracking-[0.2em]" style={{ color: "rgba(248,245,240,0.3)" }}>
              &copy; {new Date().getFullYear()} 5-Day Success Challenge. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default SuccessChallenge;
