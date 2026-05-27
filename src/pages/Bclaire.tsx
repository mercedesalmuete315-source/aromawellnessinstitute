import { useState } from "react";
import { toast } from "sonner";
import { Sparkles, Heart, Flower2, MessageCircle, MapPin, Phone, Star, ShoppingBag, Truck, ShieldCheck } from "lucide-react";
import founder from "@/assets/bclaire/founder.jpg";
import centellaPromo from "@/assets/bclaire/centella-promo.jpg";
import setCentella from "@/assets/bclaire/set-centella.jpg";
import setE from "@/assets/bclaire/set-e.jpg";
import setC from "@/assets/bclaire/set-c.jpg";
import setB from "@/assets/bclaire/set-b.jpg";
import setP from "@/assets/bclaire/set-p.jpg";
import extra from "@/assets/bclaire/extra.jpg";

const products = [
  { name: "Centella Asiatica Premium Repair Set", price: "₱1,198", img: setCentella, tag: "Bestseller", desc: "Nourish, renew & glow with soothing Centella." },
  { name: "Set C — Whitening Glow Trio", price: "₱945", img: setC, tag: "Glow", desc: "Kojic + Papaya soap, whitening lotion & sunflower oil." },
  { name: "Set B — Sunflower Radiance", price: "₱945", img: setB, tag: "Radiance", desc: "Bleaching bar, sunflower beauty oil & whitening lotion." },
  { name: "Set E — Pekas Clear Set", price: "₱795", img: setE, tag: "Clear Skin", desc: "Tinted sunshield, Pekas cream & bleaching bar." },
  { name: "Set P — Pekas Power Trio", price: "₱755", img: setP, tag: "Pekas", desc: "Sun shield, Pekas cream & intensive bleaching bar." },
  { name: "Her Choice Mini Starter", price: "₱499", img: extra, tag: "Starter", desc: "Try the bestsellers in a beginner-friendly bundle." },
];

const testimonials = [
  { name: "Mika R.", text: "Sobrang ganda ng results in 2 weeks! Ang gaan sa skin ng Centella set." , rating: 5 },
  { name: "Joy A.", text: "Pekas cream truly works — my dark spots faded. Salamat BClaire!", rating: 5 },
  { name: "Trisha L.", text: "Legit IBO, mabilis mag-reply at maayos mag-pack. Highly recommended!", rating: 5 },
];

export default function Bclaire() {
  const [form, setForm] = useState({ name: "", contact: "", set: "", address: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.contact) return toast.error("Please fill in your name and contact.");
    toast.success("Order received! We'll message you shortly 💕");
    setForm({ name: "", contact: "", set: "", address: "" });
  };

  return (
    <div className="bclaire min-h-screen">
      <style>{`
        .bclaire {
          --bc-pink-50: 340 100% 98%;
          --bc-pink-100: 340 90% 95%;
          --bc-pink-200: 340 85% 90%;
          --bc-pink-300: 340 80% 82%;
          --bc-pink-500: 340 75% 70%;
          --bc-pink-700: 340 55% 50%;
          --bc-cream: 30 50% 98%;
          --bc-ink: 340 30% 20%;
          background: linear-gradient(180deg, hsl(var(--bc-pink-50)) 0%, hsl(var(--bc-cream)) 100%);
          color: hsl(var(--bc-ink));
          font-family: 'Inter', sans-serif;
        }
        .bclaire h1, .bclaire h2, .bclaire h3 { font-family: 'Cormorant Garamond', serif; letter-spacing: -0.01em; }
        .bc-script { font-family: 'Pinyon Script', cursive; }
        .bc-pink-bg { background: hsl(var(--bc-pink-200)); }
        .bc-pink-soft { background: hsl(var(--bc-pink-100)); }
        .bc-pink-text { color: hsl(var(--bc-pink-700)); }
        .bc-btn { background: linear-gradient(135deg, hsl(var(--bc-pink-300)), hsl(var(--bc-pink-500))); color: white; }
        .bc-btn:hover { filter: brightness(1.05); }
        .bc-card { background: white; border: 1px solid hsl(var(--bc-pink-200)); box-shadow: 0 8px 30px -12px hsl(var(--bc-pink-500) / 0.25); }
        .bc-chip { background: hsl(var(--bc-pink-100)); color: hsl(var(--bc-pink-700)); }
      `}</style>

      {/* Nav */}
      <nav className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bc-btn flex items-center justify-center"><Flower2 className="w-5 h-5 text-white" /></div>
            <div>
              <div className="text-sm font-semibold tracking-wide">BCLAIRE</div>
              <div className="text-[10px] uppercase tracking-[0.2em] bc-pink-text">Beauty & Wellness Hub</div>
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#shop" className="hover:bc-pink-text">Shop</a>
            <a href="#about" className="hover:bc-pink-text">About</a>
            <a href="#reviews" className="hover:bc-pink-text">Reviews</a>
            <a href="#order" className="hover:bc-pink-text">Order</a>
          </div>
          <a href="#order" className="bc-btn px-4 py-2 rounded-full text-xs font-medium">Order Now</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bc-pink-bg opacity-50 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bc-pink-soft opacity-60 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="bc-chip inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium">
              <Sparkles className="w-3 h-3" /> Her Choice IBO • Parañaque
            </span>
            <h1 className="mt-5 text-5xl md:text-6xl leading-tight">
              BClaire Beauty <br/>& Wellness Hub
            </h1>
            <p className="bc-script text-3xl md:text-4xl bc-pink-text mt-3">Beauty is a Choice. It's Her Choice.</p>
            <p className="mt-5 text-base md:text-lg text-pink-900/70 max-w-md">
              Authentic Her Choice Ph skincare sets — formulated for glowing, healthy, and confident Filipina beauty.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#shop" className="bc-btn px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"><ShoppingBag className="w-4 h-4"/> Shop Sets</a>
              <a href="#order" className="px-6 py-3 rounded-full font-medium border border-pink-300 bc-pink-text bg-white inline-flex items-center gap-2"><MessageCircle className="w-4 h-4"/> Message Us</a>
            </div>
            <div className="mt-8 flex gap-6 text-xs text-pink-900/60">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 bc-pink-text"/> 100% Authentic</div>
              <div className="flex items-center gap-2"><Truck className="w-4 h-4 bc-pink-text"/> Nationwide COD</div>
              <div className="flex items-center gap-2"><Heart className="w-4 h-4 bc-pink-text"/> Loved by 5,000+</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bc-pink-bg rounded-[2.5rem] rotate-3" />
            <img src={centellaPromo} alt="BClaire founder with Centella Asiatica skincare" className="relative rounded-[2.5rem] shadow-2xl object-cover w-full h-[480px]" />
            <div className="absolute -bottom-5 -left-5 bc-card rounded-2xl p-3 flex items-center gap-3">
              <div className="flex -space-x-1">
                {[1,2,3].map(i=><div key={i} className="w-7 h-7 rounded-full bc-pink-bg border-2 border-white"/>)}
              </div>
              <div className="text-xs"><div className="font-semibold">5,000+ happy customers</div><div className="text-pink-900/60">⭐⭐⭐⭐⭐ rated</div></div>
            </div>
          </div>
        </div>
      </header>

      {/* Shop */}
      <section id="shop" className="max-w-6xl mx-auto px-5 py-16">
        <div className="text-center mb-12">
          <span className="bc-chip px-3 py-1 rounded-full text-xs">Featured Sets</span>
          <h2 className="text-4xl md:text-5xl mt-3">Glow With Her Choice Ph</h2>
          <p className="text-pink-900/60 mt-2 max-w-xl mx-auto">Curated bundles for whitening, anti-pekas, and skin repair — all coordinated in our pretty pastel pink aesthetic.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.name} className="bc-card rounded-3xl overflow-hidden flex flex-col group">
              <div className="aspect-square overflow-hidden bc-pink-soft">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="bc-chip self-start px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider">{p.tag}</span>
                <h3 className="text-xl mt-2">{p.name}</h3>
                <p className="text-sm text-pink-900/60 mt-1 flex-1">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-semibold bc-pink-text">{p.price}</span>
                  <a href="#order" className="bc-btn px-4 py-2 rounded-full text-xs font-medium">Order</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bc-pink-soft py-16">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img src={founder} alt="BClaire founder portrait" className="rounded-3xl shadow-xl w-full max-w-sm mx-auto" />
            <div className="absolute -top-4 -right-4 bc-card rounded-2xl px-4 py-2 text-xs font-medium bc-pink-text">Authorized IBO ✿</div>
          </div>
          <div>
            <span className="bc-chip px-3 py-1 rounded-full text-xs">About BClaire</span>
            <h2 className="text-4xl md:text-5xl mt-3">Meet your Beauty Partner</h2>
            <p className="bc-script text-3xl bc-pink-text mt-2">Beauty is a Choice.</p>
            <p className="mt-4 text-pink-900/70 leading-relaxed">
              BClaire Beauty and Wellness Hub is your trusted Her Choice Ph IBO based in Parañaque. We are passionate about helping every Filipina feel confident, radiant, and beautiful through safe, effective, and affordable Korean-inspired skincare.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex gap-2"><Sparkles className="w-4 h-4 bc-pink-text mt-0.5"/> Authentic Her Choice Ph products</li>
              <li className="flex gap-2"><Sparkles className="w-4 h-4 bc-pink-text mt-0.5"/> Honest beauty advice & after-sales care</li>
              <li className="flex gap-2"><Sparkles className="w-4 h-4 bc-pink-text mt-0.5"/> Nationwide shipping & COD available</li>
              <li className="flex gap-2"><Sparkles className="w-4 h-4 bc-pink-text mt-0.5"/> Reseller & dealer slots open</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="max-w-6xl mx-auto px-5 py-16">
        <div className="text-center mb-10">
          <span className="bc-chip px-3 py-1 rounded-full text-xs">Real Reviews</span>
          <h2 className="text-4xl md:text-5xl mt-3">Loved by our Beauties</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bc-card rounded-3xl p-6">
              <div className="flex gap-0.5 bc-pink-text mb-3">{Array.from({length: t.rating}).map((_,i)=><Star key={i} className="w-4 h-4 fill-current"/>)}</div>
              <p className="text-sm text-pink-900/70 italic">"{t.text}"</p>
              <div className="mt-4 text-xs font-semibold">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Order */}
      <section id="order" className="py-16 bc-pink-soft">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl">Place Your Order</h2>
            <p className="text-pink-900/60 mt-2">Fill in your details and we'll confirm via Messenger.</p>
          </div>
          <form onSubmit={submit} className="bc-card rounded-3xl p-6 md:p-8 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} placeholder="Your Name" className="px-4 py-3 rounded-xl border border-pink-200 bg-white outline-none focus:border-pink-400" />
              <input value={form.contact} onChange={e=>setForm({...form, contact: e.target.value})} placeholder="Mobile / Messenger" className="px-4 py-3 rounded-xl border border-pink-200 bg-white outline-none focus:border-pink-400" />
            </div>
            <select value={form.set} onChange={e=>setForm({...form, set: e.target.value})} className="px-4 py-3 rounded-xl border border-pink-200 bg-white outline-none focus:border-pink-400">
              <option value="">Choose a set...</option>
              {products.map(p=><option key={p.name}>{p.name} — {p.price}</option>)}
            </select>
            <textarea value={form.address} onChange={e=>setForm({...form, address: e.target.value})} placeholder="Shipping address" rows={3} className="px-4 py-3 rounded-xl border border-pink-200 bg-white outline-none focus:border-pink-400" />
            <button type="submit" className="bc-btn px-6 py-3 rounded-full font-medium">Send Order 💕</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-pink-100">
        <div className="max-w-6xl mx-auto px-5 py-10 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="text-lg font-semibold">BCLAIRE Beauty & Wellness Hub</div>
            <p className="bc-script bc-pink-text text-xl">Beauty is a Choice.</p>
            <p className="text-pink-900/60 mt-2">Authorized Her Choice Ph IBO — Parañaque City.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2"><MapPin className="w-4 h-4 bc-pink-text mt-0.5 shrink-0"/> CSA Bldg., Zulueta St. corner Gensan Drive, Zone IV, Koronadal City, South Cotabato</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 bc-pink-text"/> 0917•000•0000</div>
            <div className="flex items-center gap-2"><MessageCircle className="w-4 h-4 bc-pink-text"/> m.me/bclairebeauty</div>
          </div>
          <div className="text-pink-900/60">
            © {new Date().getFullYear()} BClaire Beauty & Wellness Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
