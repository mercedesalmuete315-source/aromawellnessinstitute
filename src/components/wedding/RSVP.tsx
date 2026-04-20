import { useState } from "react";
import { toast } from "sonner";

export const RSVP = () => {
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!attending) {
      toast.error("Please let us know if you can make it.");
      return;
    }
    toast.success("Thank you! Your RSVP has been received 💌");
    (e.target as HTMLFormElement).reset();
    setAttending(null);
  };

  return (
    <section id="rsvp" className="py-28 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blush/40 via-transparent to-cream pointer-events-none" />

      <div className="container max-w-2xl relative">
        <div className="text-center mb-12">
          <p className="font-script text-3xl text-gold mb-3">Kindly Respond</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink">Will You Join Us?</h2>
          <div className="mx-auto mt-6 divider-ornate max-w-xs">
            <span className="text-gold">✦</span>
          </div>
          <p className="mt-6 font-serif italic text-ink/70">Please reply by May 25, 2026</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-cream/60 backdrop-blur-sm p-8 md:p-12 shadow-soft">
          <div>
            <label className="text-xs uppercase tracking-[0.25em] text-ink/70">Full Name</label>
            <input
              required
              type="text"
              name="name"
              className="mt-2 w-full bg-transparent border-b border-ink/30 py-3 focus:border-gold outline-none transition-colors font-serif text-lg"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.25em] text-ink/70">Email or Contact</label>
            <input
              required
              type="text"
              name="contact"
              className="mt-2 w-full bg-transparent border-b border-ink/30 py-3 focus:border-gold outline-none transition-colors font-serif text-lg"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ink/70 mb-3">Attendance</p>
            <div className="flex gap-3">
              {(["yes", "no"] as const).map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setAttending(opt)}
                  className={`flex-1 py-3 text-xs uppercase tracking-[0.25em] border transition-all ${
                    attending === opt
                      ? "bg-ink text-cream border-ink"
                      : "border-ink/30 text-ink/70 hover:border-gold hover:text-gold"
                  }`}
                >
                  {opt === "yes" ? "Joyfully Accept" : "Regretfully Decline"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.25em] text-ink/70">A Message for the Couple</label>
            <textarea
              name="message"
              rows={4}
              className="mt-2 w-full bg-transparent border-b border-ink/30 py-3 focus:border-gold outline-none transition-colors font-serif text-lg resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-ink text-cream py-4 text-xs uppercase tracking-[0.3em] hover:bg-gold transition-colors duration-500"
          >
            Send RSVP
          </button>
        </form>
      </div>
    </section>
  );
};
