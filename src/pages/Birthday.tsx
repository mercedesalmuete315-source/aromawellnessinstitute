import awarenessHero from "@/assets/birthday/awareness-hero.jpg";
import awareness from "@/assets/birthday/awareness.jpg";
import interest from "@/assets/birthday/interest.jpg";
import interestCake from "@/assets/birthday/interest-cake.jpg";
import decision from "@/assets/birthday/decision.jpg";
import decisionStage from "@/assets/birthday/decision-stage.jpg";
import action from "@/assets/birthday/action.jpg";
import actionBalloons from "@/assets/birthday/action-balloons.jpg";

const stages = [
  {
    num: "01",
    label: "Awareness",
    title: "Sparkle & Excitement",
    purpose: "Catch attention on social media or invites with golden teasers.",
    images: [awarenessHero, awareness],
    tactics: ["Golden balloon teasers", "Glittery save-the-date", "Story countdown"],
  },
  {
    num: "02",
    label: "Interest",
    title: "Build Anticipation",
    purpose: "Showcase elegant cakes, décor, and sneak peeks of what's coming.",
    images: [interest, interestCake],
    tactics: ["Cake reveal posts", "Décor mood boards", "Behind-the-scenes"],
  },
  {
    num: "03",
    label: "Decision",
    title: "RSVP & Commitment",
    purpose: "Themed visuals and a beautiful RSVP page that converts guests.",
    images: [decision, decisionStage],
    tactics: ["RSVP landing page", "Themed invitations", "Personal reminders"],
  },
  {
    num: "04",
    label: "Action",
    title: "Celebrate & Share",
    purpose: "Capture the night and keep the celebration glowing online.",
    images: [action, actionBalloons],
    tactics: ["Photo booth", "Hashtag wall", "Highlight reels"],
  },
];

const BirthdayFunnel = () => {
  return (
    <main className="min-h-screen bg-[hsl(36_45%_6%)] text-[hsl(40_60%_92%)] overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={awarenessHero}
          alt="Golden balloons with confetti on dark background"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(36_45%_6%)]/40 via-[hsl(36_45%_6%)]/60 to-[hsl(36_45%_6%)]" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="font-script text-3xl md:text-5xl text-[hsl(45_85%_65%)] mb-4 animate-fade-up">
            A Golden Celebration
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] animate-fade-up [animation-delay:0.2s]">
            <span className="bg-gradient-to-b from-[hsl(48_90%_75%)] via-[hsl(45_75%_55%)] to-[hsl(38_65%_40%)] bg-clip-text text-transparent">
              Birthday
            </span>
            <span className="block font-script text-4xl md:text-6xl text-[hsl(45_85%_65%)] -mt-2">
              Funnel
            </span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto font-serif italic text-lg md:text-xl text-[hsl(40_30%_82%)]/80 animate-fade-up [animation-delay:0.4s]">
            From the first sparkle of a teaser to the last shared memory —
            a four-stage journey designed in gold.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-[0.3em] text-[hsl(45_60%_70%)] animate-fade-up [animation-delay:0.6s]">
            <span>Awareness</span>
            <span className="hidden sm:block w-8 h-px bg-[hsl(45_75%_55%)]/60" />
            <span>Interest</span>
            <span className="hidden sm:block w-8 h-px bg-[hsl(45_75%_55%)]/60" />
            <span>Decision</span>
            <span className="hidden sm:block w-8 h-px bg-[hsl(45_75%_55%)]/60" />
            <span>Action</span>
          </div>

          <a
            href="#stage-01"
            className="mt-14 inline-flex items-center gap-3 border border-[hsl(45_75%_55%)]/60 text-[hsl(45_85%_75%)] px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-[hsl(45_75%_55%)] hover:text-[hsl(36_45%_6%)] transition-all duration-500 animate-fade-up [animation-delay:0.8s]"
          >
            Enter the Funnel
            <span aria-hidden>↓</span>
          </a>
        </div>
      </section>

      {/* STAGES */}
      {stages.map((s, i) => {
        const reverse = i % 2 === 1;
        return (
          <section
            key={s.num}
            id={`stage-${s.num}`}
            className="relative py-28 md:py-40 border-t border-[hsl(45_75%_55%)]/15"
          >
            <div className="container max-w-7xl">
              <div
                className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  reverse ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* Text */}
                <div className="lg:col-span-5 space-y-8">
                  <div className="flex items-baseline gap-6">
                    <span className="font-display text-7xl md:text-8xl bg-gradient-to-b from-[hsl(48_90%_75%)] to-[hsl(38_65%_40%)] bg-clip-text text-transparent">
                      {s.num}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-[hsl(45_75%_55%)]/60 to-transparent" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-[hsl(45_85%_65%)] mb-3">
                      {s.label} Stage
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl text-[hsl(40_60%_92%)] leading-tight">
                      {s.title}
                    </h2>
                  </div>

                  <p className="font-serif text-lg md:text-xl italic text-[hsl(40_30%_82%)]/85 leading-relaxed">
                    {s.purpose}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {s.tactics.map((t) => (
                      <li
                        key={t}
                        className="flex items-center gap-4 text-sm uppercase tracking-[0.2em] text-[hsl(40_30%_82%)]/80"
                      >
                        <span className="text-[hsl(45_85%_65%)] text-lg">✦</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Images */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-5 grid-rows-6 gap-3 md:gap-4 h-[500px] md:h-[640px]">
                    <div className="col-span-3 row-span-6 overflow-hidden shadow-[0_20px_60px_-20px_hsl(45_75%_55%/0.4)] group">
                      <img
                        src={s.images[0]}
                        alt={`${s.label} stage primary visual`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                      />
                    </div>
                    <div className="col-span-2 row-span-4 overflow-hidden shadow-[0_20px_60px_-20px_hsl(45_75%_55%/0.4)] group">
                      <img
                        src={s.images[1]}
                        alt={`${s.label} stage secondary visual`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                      />
                    </div>
                    <div className="col-span-2 row-span-2 bg-gradient-to-br from-[hsl(48_90%_75%)] via-[hsl(45_75%_55%)] to-[hsl(38_65%_40%)] flex items-center justify-center">
                      <span className="font-script text-3xl md:text-4xl text-[hsl(36_45%_6%)]">
                        {s.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* HOW TO USE */}
      <section className="py-28 md:py-40 border-t border-[hsl(45_75%_55%)]/15 bg-[hsl(36_45%_4%)]">
        <div className="container max-w-6xl">
          <div className="text-center mb-20">
            <p className="font-script text-3xl text-[hsl(45_85%_65%)] mb-3">
              The Playbook
            </p>
            <h2 className="font-display text-4xl md:text-6xl">How to Use This Funnel</h2>
            <div className="mx-auto mt-6 w-24 h-px bg-gradient-to-r from-transparent via-[hsl(45_75%_55%)] to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[hsl(45_75%_55%)]/15">
            {[
              {
                t: "Social Media Teasers",
                d: "Use balloon and cake images to spark awareness with countdown stories and reels.",
              },
              {
                t: "Invitations & Landing Pages",
                d: "Incorporate décor visuals to build interest and convert RSVPs at the decision stage.",
              },
              {
                t: "Event Day",
                d: "Showcase the full party setup — backdrop, dessert table, balloon arches in their full glory.",
              },
              {
                t: "Post-Event Sharing",
                d: "Group shots and décor highlights keep the celebration alive across feeds for weeks.",
              },
            ].map((item) => (
              <div key={item.t} className="bg-[hsl(36_45%_6%)] p-10 md:p-14">
                <h3 className="font-display text-2xl md:text-3xl mb-4 text-[hsl(45_85%_75%)]">
                  {item.t}
                </h3>
                <p className="font-serif text-lg italic text-[hsl(40_30%_82%)]/75 leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center border-t border-[hsl(45_75%_55%)]/20">
        <p className="font-script text-3xl bg-gradient-to-r from-[hsl(48_90%_75%)] to-[hsl(38_65%_40%)] bg-clip-text text-transparent">
          Pure Gold, Pure Joy
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.4em] text-[hsl(45_60%_70%)]/70">
          #GoldenCelebration
        </p>
      </footer>
    </main>
  );
};

export default BirthdayFunnel;
