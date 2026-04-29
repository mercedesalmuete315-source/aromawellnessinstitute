import { useState } from "react";
import { toast } from "sonner";
import {
  CheckCircle2, GraduationCap, ClipboardCheck, Award, Briefcase,
  BookOpen, Clock, Users, MessageCircle, MapPin, Phone, Facebook, ArrowRight, Leaf, Sparkles
} from "lucide-react";
import logo from "@/assets/tesda/logo.png";
import hero from "@/assets/tesda/hero.jpg";
import story1 from "@/assets/tesda/story-1.jpg";
import story2 from "@/assets/tesda/story-2.jpg";
import stepChoose from "@/assets/tesda/step-choose.jpg";
import stepEnroll from "@/assets/tesda/step-enroll.jpg";
import stepAssess from "@/assets/tesda/step-assess.jpg";
import stepCertify from "@/assets/tesda/step-certify.jpg";
import stepCareer from "@/assets/tesda/step-career.jpg";

const steps = [
  { n: "01", title: "Choose Your Course", desc: "Pick from our high-demand TESDA-aligned programs.", img: stepChoose, icon: BookOpen },
  { n: "02", title: "Enroll & Start Training", desc: "Easy enrollment with flexible payment options.", img: stepEnroll, icon: GraduationCap },
  { n: "03", title: "Get Assessed by TESDA", desc: "Take your skills evaluation right at our center.", img: stepAssess, icon: ClipboardCheck },
  { n: "04", title: "Receive Your Certification", desc: "Earn your National Certificate (NC) credential.", img: stepCertify, icon: Award },
  { n: "05", title: "Start Your Career or Business", desc: "Launch into employment or open your own venture.", img: stepCareer, icon: Briefcase },
];

const Tesda = () => {
  const [form, setForm] = useState({ name: "", contact: "", course: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim() || !form.course.trim()) {
      toast.error("Please complete all fields to enroll.");
      return;
    }
    toast.success(`Salamat, ${form.name}! We'll contact you shortly.`);
    setForm({ name: "", contact: "", course: "" });
  };

  return (
    <div
      className="min-h-screen bg-white text-slate-800"
      style={{
        // scoped green palette
        ['--t-green' as never]: '142 72% 29%',
        ['--t-green-deep' as never]: '150 80% 18%',
        ['--t-green-light' as never]: '142 60% 92%',
        ['--t-lime' as never]: '88 70% 55%',
        ['--t-cream' as never]: '60 40% 97%',
      } as React.CSSProperties}
    >
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b" style={{ borderColor: 'hsl(var(--t-green-light))' }}>
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="Aroma Wellness Institute logo" className="h-10 w-10" width={40} height={40} />
            <div className="leading-tight">
              <div className="font-semibold text-sm" style={{ color: 'hsl(var(--t-green-deep))' }}>Aroma Wellness</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500">Institute Inc.</div>
            </div>
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#how" className="hover:text-emerald-700">How It Works</a>
            <a href="#stories" className="hover:text-emerald-700">Stories</a>
            <a href="#enroll" className="hover:text-emerald-700">Enroll</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <a href="#enroll" className="rounded-full px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90 transition"
             style={{ background: 'hsl(var(--t-green))' }}>
            Enroll Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10"
             style={{ background: 'linear-gradient(135deg, hsl(var(--t-green-light)) 0%, hsl(var(--t-cream)) 100%)' }} />
        <div className="container mx-auto grid md:grid-cols-2 gap-10 px-4 py-16 md:py-24 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5"
                  style={{ background: 'hsl(var(--t-green))', color: 'white' }}>
              <Leaf className="h-3.5 w-3.5" /> Official TESDA Assessment Center
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: 'hsl(var(--t-green-deep))' }}>
              Get Assessed & <span style={{ color: 'hsl(var(--t-green))' }}>Certified</span> in One Place
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Aroma Wellness Institute Inc. is your partner in earning a recognized National Certificate — from training to TESDA assessment, all under one roof.
            </p>
            <ul className="mt-6 space-y-2">
              {["Professional skills evaluation", "National Certification (NC) pathway", "Faster processing"].map(x => (
                <li key={x} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-5 w-5" style={{ color: 'hsl(var(--t-green))' }} /> {x}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#enroll" className="rounded-full px-6 py-3 text-white font-medium shadow-lg hover:scale-[1.02] transition inline-flex items-center gap-2"
                 style={{ background: 'hsl(var(--t-green))' }}>
                Book Your Assessment <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#how" className="rounded-full px-6 py-3 font-medium border hover:bg-emerald-50 transition"
                 style={{ borderColor: 'hsl(var(--t-green))', color: 'hsl(var(--t-green-deep))' }}>
                How It Works
              </a>
            </div>
          </div>
          <div className="relative">
            <img src={hero} alt="Aroma Wellness Institute TESDA training classroom" width={1536} height={1024}
                 className="rounded-3xl shadow-2xl object-cover w-full aspect-[4/3]" />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-xl border" style={{ borderColor: 'hsl(var(--t-green-light))' }}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full grid place-items-center" style={{ background: 'hsl(var(--t-green-light))' }}>
                  <Sparkles className="h-5 w-5" style={{ color: 'hsl(var(--t-green-deep))' }} />
                </div>
                <div>
                  <div className="text-sm font-semibold">1,200+ Certified</div>
                  <div className="text-xs text-slate-500">Graduates & counting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section id="stories" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'hsl(var(--t-green))' }}>Success Stories</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-2" style={{ color: 'hsl(var(--t-green-deep))' }}>
              Real Graduates. Real Results.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { img: story1, name: "Mark D.", role: "TESDA NC II Holder", quote: "After completing my course, I passed my TESDA assessment and found a job within months!" },
              { img: story2, name: "Anna R.", role: "Small Business Owner", quote: "From no experience to running my own small agribusiness — this training changed my life." },
            ].map((s) => (
              <article key={s.name} className="rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition"
                       style={{ borderColor: 'hsl(var(--t-green-light))' }}>
                <img src={s.img} alt={s.name} loading="lazy" width={1024} height={1024} className="w-full aspect-[4/3] object-cover" />
                <div className="p-6">
                  <p className="text-lg italic text-slate-700">“{s.quote}”</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-10 w-1 rounded-full" style={{ background: 'hsl(var(--t-green))' }} />
                    <div>
                      <div className="font-semibold" style={{ color: 'hsl(var(--t-green-deep))' }}>{s.name}</div>
                      <div className="text-sm text-slate-500">{s.role}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20" style={{ background: 'hsl(var(--t-cream))' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'hsl(var(--t-green))' }}>How It Works</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-2" style={{ color: 'hsl(var(--t-green-deep))' }}>
              Your 5-Step Path to Certification
            </h2>
          </div>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={s.n}
                   className={`grid md:grid-cols-2 gap-6 items-center bg-white rounded-3xl shadow-sm border overflow-hidden ${i % 2 ? 'md:[&>img]:order-2' : ''}`}
                   style={{ borderColor: 'hsl(var(--t-green-light))' }}>
                <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768}
                     className={`w-full h-64 md:h-full object-cover ${i % 2 ? 'md:order-2' : ''}`} />
                <div className="p-8">
                  <div className="flex items-center gap-3">
                    <span className="text-5xl font-bold" style={{ color: 'hsl(var(--t-green-light))' }}>{s.n}</span>
                    <s.icon className="h-7 w-7" style={{ color: 'hsl(var(--t-green))' }} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2" style={{ color: 'hsl(var(--t-green-deep))' }}>{s.title}</h3>
                  <p className="mt-3 text-slate-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIMITED SLOTS */}
      <section className="py-20 text-white" style={{ background: 'linear-gradient(135deg, hsl(var(--t-green-deep)) 0%, hsl(var(--t-green)) 100%)' }}>
        <div className="container mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 bg-white/15 backdrop-blur">
            <Clock className="h-3.5 w-3.5" /> Limited Slots Available
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">Don't Miss Your Chance to Get Certified</h2>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto">Build your future with TESDA-recognized credentials. Slots are filling fast.</p>
          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: CheckCircle2, label: "Flexible Payment Options" },
              { icon: Users, label: "Limited Class Slots" },
              { icon: Sparkles, label: "High Demand Courses" },
            ].map(b => (
              <div key={b.label} className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20">
                <b.icon className="h-6 w-6 mx-auto mb-2" />
                <div className="font-medium">{b.label}</div>
              </div>
            ))}
          </div>
          <a href="#enroll" className="inline-flex items-center gap-2 mt-10 rounded-full px-8 py-4 font-semibold bg-white hover:scale-[1.02] transition shadow-xl"
             style={{ color: 'hsl(var(--t-green-deep))' }}>
            Reserve Your Slot Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ENROLLMENT FORM */}
      <section id="enroll" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'hsl(var(--t-green))' }}>Enrollment</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-2" style={{ color: 'hsl(var(--t-green-deep))' }}>
              Start Your TESDA Journey Today
            </h2>
            <p className="mt-3 text-slate-600">Fill out the form and our team will reach out to confirm your slot.</p>
          </div>
          <form onSubmit={submit} className="rounded-3xl border shadow-lg p-8 grid gap-5"
                style={{ borderColor: 'hsl(var(--t-green-light))', background: 'hsl(var(--t-cream))' }}>
            <div>
              <label className="text-sm font-medium block mb-1.5">Full Name</label>
              <input
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="w-full rounded-xl border px-4 py-3 bg-white focus:outline-none focus:ring-2"
                style={{ borderColor: 'hsl(var(--t-green-light))' }}
                placeholder="Juan Dela Cruz"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Contact Number</label>
              <input
                value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })}
                maxLength={20}
                className="w-full rounded-xl border px-4 py-3 bg-white focus:outline-none focus:ring-2"
                style={{ borderColor: 'hsl(var(--t-green-light))' }}
                placeholder="0917 000 0000"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Course Interest</label>
              <input
                value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })}
                maxLength={100}
                className="w-full rounded-xl border px-4 py-3 bg-white focus:outline-none focus:ring-2"
                style={{ borderColor: 'hsl(var(--t-green-light))' }}
                placeholder="e.g., Massage Therapy NC II"
              />
            </div>
            <button type="submit"
                    className="rounded-full px-6 py-3.5 text-white font-semibold shadow-lg hover:opacity-95 transition inline-flex items-center justify-center gap-2"
                    style={{ background: 'hsl(var(--t-green))' }}>
              Enroll Now <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20" style={{ background: 'hsl(var(--t-green-light))' }}>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ color: 'hsl(var(--t-green-deep))' }}>Contact Us</h2>
            <p className="mt-3 text-slate-700">We'd love to hear from you. Visit our center or message us anytime.</p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5" style={{ color: 'hsl(var(--t-green))' }} />
                <div>
                  <div className="font-semibold">Aroma Wellness Institute Inc.</div>
                  <div className="text-slate-600 text-sm">[Insert Address Here]</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5" style={{ color: 'hsl(var(--t-green))' }} />
                <div className="text-slate-700">[Insert Contact Number]</div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 mt-0.5" style={{ color: 'hsl(var(--t-green))' }} />
                <div className="text-slate-700">Message us on Facebook for faster response</div>
              </li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="#enroll" className="rounded-full px-6 py-3 text-white font-medium shadow hover:opacity-95 inline-flex items-center gap-2"
                 style={{ background: 'hsl(var(--t-green))' }}>
                Enroll Now
              </a>
              <a href="#" className="rounded-full px-6 py-3 font-medium border bg-white inline-flex items-center gap-2"
                 style={{ borderColor: 'hsl(var(--t-green))', color: 'hsl(var(--t-green-deep))' }}>
                <Facebook className="h-4 w-4" /> Message Us
              </a>
            </div>
          </div>
          <div className="rounded-3xl p-10 text-center text-white shadow-2xl"
               style={{ background: 'linear-gradient(135deg, hsl(var(--t-green-deep)) 0%, hsl(var(--t-green)) 100%)' }}>
            <Sparkles className="h-10 w-10 mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold">Your Future Starts Here.</h3>
            <p className="mt-3 text-white/90">Get TESDA Certified Today.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="#enroll" className="rounded-full px-6 py-3 bg-white font-semibold" style={{ color: 'hsl(var(--t-green-deep))' }}>
                Enroll Now
              </a>
              <a href="#" className="rounded-full px-6 py-3 border border-white/40 font-semibold">
                Message Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-white border-t" style={{ borderColor: 'hsl(var(--t-green-light))' }}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-7 w-7" width={28} height={28} />
            <span>© {new Date().getFullYear()} Aroma Wellness Institute Inc. All rights reserved.</span>
          </div>
          <div className="flex gap-5">
            <a href="#how" className="hover:text-emerald-700">How It Works</a>
            <a href="#enroll" className="hover:text-emerald-700">Enroll</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Tesda;
