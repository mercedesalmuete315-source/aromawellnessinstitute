import { useEffect, useState } from "react";
import { Sparkles, Target, BookOpen, Rocket, Wrench, Trophy, ArrowRight, CheckCircle2, Flame, Users, TrendingUp, Award } from "lucide-react";

const days = [
  {
    n: "01",
    icon: Target,
    label: "Welcome & Goal Setting",
    title: "Set the Stage",
    desc: "Introduce yourself and the challenge. Help participants define their goals and share the roadmap for the week.",
    actions: ["Personal welcome video", "Goal-setting worksheet", "Week-at-a-glance roadmap"],
    accent: "from-[#ff7a59] to-[#ffb46b]",
  },
  {
    n: "02",
    icon: BookOpen,
    label: "Foundation Training",
    title: "Teach the Core",
    desc: "Teach a key concept or strategy. Keep it simple, then assign one focused action item participants can finish today.",
    actions: ["Core concept lesson", "Cheatsheet PDF", "Single daily action"],
    accent: "from-[#ffb46b] to-[#ffd66b]",
  },
  {
    n: "03",
    icon: Rocket,
    label: "Implementation",
    title: "Take Action",
    desc: "Guide participants step-by-step through applying what they've learned. Encourage sharing wins inside the community.",
    actions: ["Live walkthrough", "Community share thread", "Hot-seat coaching"],
    accent: "from-[#ffd66b] to-[#9ee493]",
  },
  {
    n: "04",
    icon: Wrench,
    label: "Optimization",
    title: "Refine & Fix",
    desc: "Address common mistakes and obstacles. Drop advanced tips that compound results faster.",
    actions: ["Top 5 mistakes breakdown", "Pro tips drop", "Q&A session"],
    accent: "from-[#9ee493] to-[#5ec8d4]",
  },
  {
    n: "05",
    icon: Trophy,
    label: "Results & Next Steps",
    title: "Celebrate & Convert",
    desc: "Celebrate achievements, showcase success stories, and introduce your premium offer as the natural next step.",
    actions: ["Wins showcase", "Success stories reel", "Premium offer reveal"],
    accent: "from-[#5ec8d4] to-[#7a7aff]",
  },
];

const formula = [
  { word: "Attract", icon: Sparkles },
  { word: "Engage", icon: Users },
  { word: "Deliver Results", icon: TrendingUp },
  { word: "Build Trust", icon: Award },
  { word: "Present Offer", icon: Flame },
  { word: "Convert", icon: CheckCircle2 },
];

const Challenge = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "5-Day Challenge Funnel — Transform Audience into Customers";
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a12] text-[#f4f1ea] overflow-x-hidden font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,700&family=Inter:wght@300;400;500;600&display=swap');
        .ch-display { font-family: 'Fraunces', serif; letter-spacing: -0.02em; }
        .ch-body { font-family: 'Inter', sans-serif; }
        @keyframes ch-glow { 0%,100% { opacity:.5; transform:scale(1) } 50% { opacity:.9; transform:scale(1.05) } }
        @keyframes ch-rise { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
        @keyframes ch-drift { 0%,100% { transform:translate(0,0) } 50% { transform:translate(20px,-30px) } }
        .ch-glow { animation: ch-glow 4s ease-in-out infinite; }
        .ch-rise { animation: ch-rise 1s cubic-bezier(.2,.8,.2,1) both; }
        .ch-drift { animation: ch-drift 14s ease-in-out infinite; }
        .ch-grid {
          background-image:
            linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#0a0a12]/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#ff7a59]" />
            <span className="ch-display text-xl font-semibold">5-Day Challenge</span>
          </div>
          <a href="#join" className="ch-body text-xs uppercase tracking-[0.2em] px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff7a59] to-[#ffb46b] text-[#0a0a12] font-semibold hover:scale-105 transition-transform">
            Join Free
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-40 pb-32 min-h-screen flex items-center">
        <div className="absolute inset-0 ch-grid opacity-40" />
        <div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-[#ff7a59]/20 blur-[120px] ch-drift" />
        <div className="absolute bottom-0 -right-32 w-[600px] h-[600px] rounded-full bg-[#7a7aff]/20 blur-[140px] ch-drift" style={{ animationDelay: "4s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 ch-rise">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#9ee493] ch-glow" />
              <span className="text-xs uppercase tracking-[0.25em] text-white/70">Live cohort starts soon</span>
            </div>

            <h1 className="ch-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-semibold">
              Turn audiences into
              <span className="block italic font-light bg-gradient-to-r from-[#ff7a59] via-[#ffd66b] to-[#5ec8d4] bg-clip-text text-transparent">
                paying customers
              </span>
              <span className="block">in just 5 days.</span>
            </h1>

            <p className="ch-body mt-8 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              A proven challenge funnel that attracts your dream audience, delivers a real transformation, and converts believers into buyers — all in one focused week.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#join" className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff7a59] to-[#ffb46b] text-[#0a0a12] font-semibold hover:scale-[1.02] transition-transform">
                Launch My Challenge
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#days" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/15 hover:bg-white/5 transition-colors text-sm uppercase tracking-[0.2em]">
                See the 5 Days
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "5 Days", v: "One transformation" },
                { k: "6 Steps", v: "Proven formula" },
                { k: "100%", v: "Action-focused" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="ch-display text-3xl font-semibold bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent">{s.k}</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-white/50 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual: stacked day cards */}
          <div className="lg:col-span-5 relative h-[500px] hidden lg:block">
            {days.map((d, i) => (
              <div
                key={d.n}
                className="absolute w-full p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 ch-rise"
                style={{
                  top: `${i * 60}px`,
                  left: `${i * 18}px`,
                  animationDelay: `${0.15 * i}s`,
                  width: "calc(100% - 80px)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${d.accent} flex items-center justify-center text-[#0a0a12]`}>
                    <d.icon className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">Day {d.n}</div>
                    <div className="ch-display text-xl font-semibold">{d.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULA */}
      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-[#ffb46b] mb-4">The Formula</div>
            <h2 className="ch-display text-4xl md:text-6xl font-semibold">
              Six steps. <span className="italic font-light">One conversion engine.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {formula.map((f, i) => (
              <div key={f.word} className="flex items-center gap-3 md:gap-4">
                <div className="group flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#ffb46b]/50 hover:bg-white/[0.08] transition-all">
                  <f.icon className="w-4 h-4 text-[#ffb46b]" />
                  <span className="ch-body text-sm md:text-base font-medium tracking-wide">{f.word}</span>
                </div>
                {i < formula.length - 1 && <ArrowRight className="w-4 h-4 text-white/30" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAYS */}
      <section id="days" className="relative py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <div className="text-xs uppercase tracking-[0.3em] text-[#ff7a59] mb-4">The Roadmap</div>
            <h2 className="ch-display text-5xl md:text-7xl font-semibold leading-[1.02]">
              Five days, <span className="italic font-light">one transformation.</span>
            </h2>
          </div>

          <div className="space-y-6">
            {days.map((d, i) => (
              <div
                key={d.n}
                className="group relative grid md:grid-cols-12 gap-8 p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all overflow-hidden"
              >
                <div className={`absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br ${d.accent} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />

                <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${d.accent} flex items-center justify-center text-[#0a0a12]`}>
                    <d.icon className="w-7 h-7" strokeWidth={2.5} />
                  </div>
                  <div className="ch-display text-6xl md:text-7xl font-semibold text-white/15 leading-none">
                    {d.n}
                  </div>
                </div>

                <div className="md:col-span-6">
                  <div className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">Day {d.n} — {d.label}</div>
                  <h3 className="ch-display text-3xl md:text-4xl font-semibold mb-4">{d.title}</h3>
                  <p className="ch-body text-white/70 leading-relaxed text-lg">{d.desc}</p>
                </div>

                <div className="md:col-span-4 space-y-3">
                  <div className="text-xs uppercase tracking-[0.25em] text-white/50 mb-4">Deliverables</div>
                  {d.actions.map((a) => (
                    <div key={a} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#9ee493] mt-0.5 shrink-0" />
                      <span className="ch-body text-white/85">{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WIN-WIN */}
      <section className="relative py-32 border-t border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#ffb46b]/10 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-xs uppercase tracking-[0.3em] text-[#5ec8d4] mb-4">Win-Win</div>
            <h2 className="ch-display text-4xl md:text-6xl font-semibold max-w-3xl mx-auto leading-[1.05]">
              Everybody walks away <span className="italic font-light">better.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Trophy, t: "Participants Win", d: "They achieve a valuable, tangible result inside one week." },
              { icon: Award, t: "You Build Authority", d: "Live delivery establishes credibility and lasting expertise." },
              { icon: Users, t: "Audience Qualifies Itself", d: "Only motivated buyers stick around — your list gets stronger." },
              { icon: TrendingUp, t: "Business Grows", d: "New customers, recurring advocates, compounding revenue." },
            ].map((b) => (
              <div key={b.t} className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ffb46b]/30 transition-colors">
                <b.icon className="w-8 h-8 text-[#ffb46b] mb-6" />
                <h4 className="ch-display text-2xl font-semibold mb-3">{b.t}</h4>
                <p className="ch-body text-white/65 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS TIP */}
      <section className="relative py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative p-12 md:p-20 rounded-3xl bg-gradient-to-br from-[#ff7a59]/15 via-[#ffb46b]/10 to-transparent border border-[#ffb46b]/20 overflow-hidden">
            <Flame className="absolute top-8 right-8 w-32 h-32 text-[#ff7a59]/10" strokeWidth={1} />
            <div className="text-xs uppercase tracking-[0.3em] text-[#ff7a59] mb-6">Key Success Tip</div>
            <p className="ch-display text-3xl md:text-5xl font-light leading-[1.15]">
              Deliver <span className="italic font-semibold bg-gradient-to-r from-[#ff7a59] to-[#ffd66b] bg-clip-text text-transparent">one clear transformation</span> — not a flood of information.
            </p>
            <p className="ch-body mt-8 text-lg text-white/70 max-w-2xl leading-relaxed">
              The faster your audience experiences a real win, the more they trust you — and the more confidently they'll invest in your next offer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="relative py-32 border-t border-white/5">
        <div className="absolute inset-0 ch-grid opacity-30" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-[#9ee493] mb-6">Ready When You Are</div>
          <h2 className="ch-display text-5xl md:text-7xl font-semibold leading-[1.02] mb-8">
            Your next customer is <span className="italic font-light">five days away.</span>
          </h2>
          <p className="ch-body text-lg text-white/70 mb-12 max-w-xl mx-auto">
            Reserve your seat in the next free cohort. We'll send the daily roadmap straight to your inbox.
          </p>

          {submitted ? (
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#9ee493]/15 border border-[#9ee493]/30 text-[#9ee493]">
              <CheckCircle2 className="w-5 h-5" />
              You're in. Check your inbox for Day 1.
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
                placeholder="you@example.com"
                className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ffb46b]"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff7a59] to-[#ffb46b] text-[#0a0a12] font-semibold hover:scale-[1.02] transition-transform"
              >
                Save My Seat
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center">
        <div className="ch-body text-xs uppercase tracking-[0.3em] text-white/40">
          5-Day Challenge Funnel · Attract → Engage → Convert
        </div>
      </footer>
    </main>
  );
};

export default Challenge;
