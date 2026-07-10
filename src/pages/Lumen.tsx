import { useEffect } from "react";
import heroImg from "@/assets/lumen-hero.jpg";
import bibleImg from "@/assets/lumen-bible.jpg";
import communityImg from "@/assets/lumen-community.jpg";
import torchImg from "@/assets/lumen-torch.jpg";

const traits = [
  { ko: "믿음", en: "Faithful", desc: "Always grounded in biblical values and daily devotion." },
  { ko: "용기", en: "Courageous", desc: "Stands up for kindness and truth in every classroom." },
  { ko: "사랑", en: "Compassionate", desc: "Leads cleanups, food drives, and quiet acts of care." },
  { ko: "영감", en: "Inspiring", desc: "Motivates peers to join ISBA and grow together." },
];

const powers = [
  { icon: "✦", title: "Bible Light Beam", sub: "지혜의 빛", desc: "Projects wisdom and guidance, helping students understand scripture." },
  { icon: "◈", title: "Salt Shield", sub: "소금의 방패", desc: "Protects against negativity — a symbol of character and resilience." },
  { icon: "❋", title: "Community Wings", sub: "봉사의 날개", desc: "Strength to uplift others through service and volunteer projects." },
  { icon: "✧", title: "Torch of Knowledge", sub: "지식의 횃불", desc: "Represents ISBA's online education, seminars, and lifelong learning." },
];

const pillars = [
  { n: "01", ko: "믿음", en: "Faith", desc: "Bible education seminars grounded in scripture." },
  { n: "02", ko: "학문", en: "Study", desc: "Online learning and character formation." },
  { n: "03", ko: "봉사", en: "Service", desc: "Volunteer drives, cleanups, and food banks." },
];

export default function Lumen() {
  useEffect(() => {
    document.title = "Lumen · ISBA Koronadal";
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(var(--lumen-cream))] text-[hsl(var(--lumen-ink))] font-sans overflow-x-hidden">
      <style>{`
        :root {
          --lumen-cream: 40 45% 96%;
          --lumen-ink: 220 30% 15%;
          --lumen-blush: 350 80% 92%;
          --lumen-sky: 210 70% 90%;
          --lumen-gold: 38 78% 58%;
          --lumen-mint: 150 40% 88%;
          --lumen-lavender: 260 50% 92%;
        }
        .font-serif-k { font-family: 'Noto Serif KR', 'Cormorant Garamond', serif; }
        .font-hangul { font-family: 'Nanum Myeongjo', 'Noto Serif KR', serif; }
        @keyframes drift { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(-14px) rotate(6deg)} }
        @keyframes petals { 0%{transform:translateY(-10vh) translateX(0) rotate(0);opacity:0} 10%{opacity:1} 100%{transform:translateY(110vh) translateX(80px) rotate(360deg);opacity:0} }
        @keyframes glow-pulse { 0%,100%{opacity:.35;transform:scale(1)} 50%{opacity:.6;transform:scale(1.08)} }
        @keyframes fade-in-up { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        .drift { animation: drift 7s ease-in-out infinite; }
        .glow-pulse { animation: glow-pulse 4s ease-in-out infinite; }
        .fade-up { animation: fade-in-up 1.1s cubic-bezier(.2,.7,.2,1) both; }
        .petal { position: fixed; top: -5vh; width: 14px; height: 14px; border-radius: 50% 0 50% 0; background: hsl(var(--lumen-blush)); opacity: .7; pointer-events:none; z-index:1; animation: petals 18s linear infinite; }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;600;900&family=Nanum+Myeongjo:wght@400;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />

      {/* petals */}
      {Array.from({ length: 14 }).map((_, i) => (
        <span key={i} className="petal" style={{ left: `${(i * 7) % 100}%`, animationDelay: `${i * 1.3}s`, animationDuration: `${14 + (i % 6) * 2}s` }} />
      ))}

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[hsl(var(--lumen-cream)/0.75)] border-b border-[hsl(var(--lumen-ink)/0.06)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[hsl(var(--lumen-gold))] grid place-items-center text-white font-serif-k text-lg">✦</div>
            <div className="leading-tight">
              <div className="font-serif-k text-lg tracking-wide">LUMEN</div>
              <div className="font-hangul text-[10px] tracking-[0.3em] text-[hsl(var(--lumen-ink)/0.6)]">루멘 · 빛</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.25em] text-[hsl(var(--lumen-ink)/0.75)]">
            <a href="#hero" className="hover:text-[hsl(var(--lumen-gold))]">Hero</a>
            <a href="#traits" className="hover:text-[hsl(var(--lumen-gold))]">Traits</a>
            <a href="#powers" className="hover:text-[hsl(var(--lumen-gold))]">Powers</a>
            <a href="#isba" className="hover:text-[hsl(var(--lumen-gold))]">ISBA</a>
            <a href="#join" className="hover:text-[hsl(var(--lumen-gold))]">Join</a>
          </div>
          <a href="#join" className="text-xs uppercase tracking-[0.25em] px-5 py-2.5 rounded-full bg-[hsl(var(--lumen-ink))] text-[hsl(var(--lumen-cream))] hover:bg-[hsl(var(--lumen-gold))] transition-colors">Join ISBA</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen pt-32 pb-16 px-6">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--lumen-sky)/0.6)] via-[hsl(var(--lumen-cream))] to-[hsl(var(--lumen-blush)/0.4)]" />
          <div className="absolute top-1/3 -left-24 w-[36rem] h-[36rem] rounded-full bg-[hsl(var(--lumen-gold)/0.15)] blur-3xl glow-pulse" />
          <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-[hsl(var(--lumen-blush)/0.4)] blur-3xl glow-pulse" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
          <div className="fade-up order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-14 bg-[hsl(var(--lumen-gold))]" />
              <span className="font-hangul text-sm tracking-[0.35em] text-[hsl(var(--lumen-gold))]">루멘 · LUMEN</span>
            </div>
            <h1 className="font-serif-k font-light text-6xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              Be the <em className="italic text-[hsl(var(--lumen-gold))]">Light</em>.
              <br />
              Live the <em className="italic">Word</em>.
            </h1>
            <p className="font-hangul mt-6 text-lg text-[hsl(var(--lumen-ink)/0.6)] italic">
              "너희는 세상의 빛이라" · Matthew 5:14
            </p>
            <p className="mt-8 max-w-lg text-[hsl(var(--lumen-ink)/0.75)] leading-relaxed">
              Meet Lumen — the first guardian of ISBA Koronadal. A youthful hero in uniform, carrying a torch of knowledge and a Bible of light, standing for faith, study, and service at Koronadal Comprehensive High School.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#join" className="px-8 py-4 rounded-full bg-[hsl(var(--lumen-ink))] text-[hsl(var(--lumen-cream))] text-xs uppercase tracking-[0.3em] hover:bg-[hsl(var(--lumen-gold))] transition-colors">Join ISBA →</a>
              <a href="#powers" className="px-8 py-4 rounded-full border border-[hsl(var(--lumen-ink)/0.3)] text-xs uppercase tracking-[0.3em] hover:border-[hsl(var(--lumen-gold))] hover:text-[hsl(var(--lumen-gold))] transition-colors">Discover Lumen</a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {pillars.map((p) => (
                <div key={p.n}>
                  <div className="font-serif-k text-xs text-[hsl(var(--lumen-gold))]">{p.n}</div>
                  <div className="font-hangul text-2xl mt-1">{p.ko}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--lumen-ink)/0.55)] mt-1">{p.en}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up order-1 lg:order-2 relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[hsl(var(--lumen-gold)/0.25)] via-transparent to-[hsl(var(--lumen-blush)/0.4)] blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white">
              <img src={heroImg} alt="Lumen mascot" width={1280} height={1600} className="w-full h-auto" />
            </div>
            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur px-5 py-3 rounded-2xl shadow-lg drift">
              <div className="font-hangul text-xs text-[hsl(var(--lumen-gold))]">첫 수호자</div>
              <div className="font-serif-k text-sm">First Guardian · Koronadal</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAITS */}
      <section id="traits" className="relative py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-hangul text-xs tracking-[0.4em] text-[hsl(var(--lumen-gold))]">성품 · CHARACTER</div>
            <h2 className="font-serif-k text-5xl md:text-6xl mt-4 font-light">Personality of a Guardian</h2>
            <div className="h-px w-16 bg-[hsl(var(--lumen-gold))] mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {traits.map((t, i) => (
              <div key={t.en} className="group relative p-8 rounded-3xl border border-[hsl(var(--lumen-ink)/0.08)] bg-[hsl(var(--lumen-cream))] hover:bg-white hover:shadow-2xl transition-all">
                <div className="font-hangul text-6xl text-[hsl(var(--lumen-gold)/0.25)] group-hover:text-[hsl(var(--lumen-gold))] transition-colors">{t.ko}</div>
                <div className="mt-4 font-serif-k text-2xl">{t.en}</div>
                <p className="mt-3 text-sm text-[hsl(var(--lumen-ink)/0.65)] leading-relaxed">{t.desc}</p>
                <div className="mt-6 text-xs font-serif-k text-[hsl(var(--lumen-gold))]">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POWERS */}
      <section id="powers" className="relative py-28 px-6 bg-[hsl(var(--lumen-cream))]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-xl">
              <img src={bibleImg} alt="Bible of light" width={1024} height={1024} loading="lazy" className="w-full" />
            </div>
            <img src={torchImg} alt="Torch" width={1024} height={1024} loading="lazy" className="absolute -bottom-8 -right-8 w-40 md:w-56 drift" />
          </div>
          <div>
            <div className="font-hangul text-xs tracking-[0.4em] text-[hsl(var(--lumen-gold))]">능력 · POWERS</div>
            <h2 className="font-serif-k text-5xl md:text-6xl mt-4 font-light">Symbols of Light</h2>
            <div className="h-px w-16 bg-[hsl(var(--lumen-gold))] mt-6 mb-10" />
            <div className="space-y-5">
              {powers.map((p) => (
                <div key={p.title} className="flex gap-5 p-5 rounded-2xl bg-white/70 backdrop-blur border border-[hsl(var(--lumen-ink)/0.06)] hover:border-[hsl(var(--lumen-gold)/0.5)] transition-colors">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--lumen-gold))] to-[hsl(var(--lumen-blush))] text-white grid place-items-center text-2xl font-serif-k">{p.icon}</div>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-serif-k text-xl">{p.title}</h3>
                      <span className="font-hangul text-xs text-[hsl(var(--lumen-gold))]">{p.sub}</span>
                    </div>
                    <p className="mt-1 text-sm text-[hsl(var(--lumen-ink)/0.7)]">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ISBA */}
      <section id="isba" className="relative py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
            <div>
              <div className="font-hangul text-xs tracking-[0.4em] text-[hsl(var(--lumen-gold))]">공동체 · COMMUNITY</div>
              <h2 className="font-serif-k text-5xl md:text-6xl mt-4 font-light">The First Guardian of <em className="italic">ISBA Koronadal</em></h2>
              <div className="h-px w-16 bg-[hsl(var(--lumen-gold))] mt-6 mb-8" />
              <p className="text-[hsl(var(--lumen-ink)/0.75)] leading-relaxed">
                As the mascot and role model for ISBA at Koronadal Comprehensive High School, Lumen guides students to balance the three pillars of faith, study, and service — through Bible seminars, environmental cleanups, and food bank drives.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Join weekly Bible education seminars",
                  "Serve through cleanups and food bank days",
                  "Grow character with mentors and friends",
                ].map((line) => (
                  <li key={line} className="flex items-center gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-[hsl(var(--lumen-gold))] text-white grid place-items-center text-xs">✓</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                <img src={communityImg} alt="ISBA students serving community" width={1280} height={900} loading="lazy" className="w-full" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[hsl(var(--lumen-ink))] text-[hsl(var(--lumen-cream))] p-5 rounded-2xl shadow-xl max-w-[220px]">
                <div className="font-hangul text-xs text-[hsl(var(--lumen-gold))]">봉사</div>
                <div className="font-serif-k text-lg mt-1">Salt & Light in every school.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="relative py-32 px-6 bg-gradient-to-br from-[hsl(var(--lumen-ink))] to-[hsl(220_35%_10%)] text-[hsl(var(--lumen-cream))] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-[hsl(var(--lumen-gold)/0.15)] blur-3xl glow-pulse" />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="font-hangul text-xs tracking-[0.5em] text-[hsl(var(--lumen-gold))]">함께해요</div>
          <h2 className="font-serif-k text-5xl md:text-7xl mt-6 font-light leading-tight">
            Walk with <em className="italic text-[hsl(var(--lumen-gold))]">Lumen</em>.<br />
            Shine with <em className="italic">ISBA</em>.
          </h2>
          <p className="mt-8 text-[hsl(var(--lumen-cream)/0.7)] max-w-xl mx-auto">
            Sign up to be part of ISBA Koronadal — Bible seminars, service projects, and a community of young lights.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! Lumen will reach out soon."); }} className="mt-12 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input required type="email" placeholder="your.email@school.ph" className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-[hsl(var(--lumen-cream))] placeholder:text-white/50 focus:outline-none focus:border-[hsl(var(--lumen-gold))]" />
            <button className="px-8 py-4 rounded-full bg-[hsl(var(--lumen-gold))] text-[hsl(var(--lumen-ink))] font-medium text-xs uppercase tracking-[0.3em] hover:bg-white transition-colors">Join Now</button>
          </form>
          <p className="font-hangul mt-6 text-xs tracking-[0.3em] text-[hsl(var(--lumen-cream)/0.4)]">코로나달 종합고등학교 · Koronadal Comprehensive HS</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(var(--lumen-cream))] py-12 px-6 border-t border-[hsl(var(--lumen-ink)/0.08)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[hsl(var(--lumen-ink)/0.6)]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[hsl(var(--lumen-gold))] grid place-items-center text-white text-sm">✦</div>
            <span className="font-serif-k">LUMEN · ISBA Koronadal</span>
          </div>
          <div className="font-hangul text-xs tracking-[0.3em]">빛이 되어라 · Be the Light</div>
          <div className="text-xs">© {new Date().getFullYear()} ISBA</div>
        </div>
      </footer>
    </div>
  );
}
