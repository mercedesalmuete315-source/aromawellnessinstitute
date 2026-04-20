import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";

export const Story = () => {
  return (
    <section id="story" className="py-28 md:py-40 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-script text-3xl text-gold mb-3">Our Story</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink">How It All Began</h2>
          <div className="mx-auto mt-6 divider-ornate max-w-xs">
            <span className="text-gold">✦</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={story1}
              loading="lazy"
              width={1024}
              height={1280}
              alt="Emma and Liam walking on the beach at sunset"
              className="aspect-[3/4] w-full object-cover shadow-soft -mt-8"
            />
            <img
              src={story2}
              loading="lazy"
              width={1024}
              height={1280}
              alt="Emma and Liam laughing together in a flower field"
              className="aspect-[3/4] w-full object-cover shadow-soft mt-8"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-ink/80 font-serif">
            <p>
              It started with a quiet hello on a rainy afternoon in a Davao café —
              two strangers, one shared umbrella, and a conversation that didn't end until midnight.
            </p>
            <p>
              Seven years, three cities, and countless small adventures later,
              Liam asked Emma the question her heart had already answered.
            </p>
            <p className="font-script text-3xl text-blush-deep pt-4">
              And she said yes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
