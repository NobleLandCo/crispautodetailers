import Image from "next/image";

const PHONE = "2539700858";
const PHONE_DISPLAY = "(253) 970-0858";
const BLUE = "#1BBDD4";
const NAVY = "#0D1B2A";
const NAVY_DARK = "#071018";
const ORANGE = "#F59E0B";

const reviews = [
  { text: "They came out to my office parking lot. Couldn't have been easier.", author: "Rachel W., South Hill" },
  { text: "Best detail I've ever had. The interior shampoo on my seats was night and day.", author: "Jen D., Puyallup" },
];

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: NAVY }}>

      {/* NAV — static, not sticky */}
      <nav style={{ backgroundColor: NAVY_DARK, borderBottom: "1px solid rgba(27,189,212,0.15)" }}>
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Image src="/logo.jpg" alt="Crisp Auto Detailers" width={160} height={160} className="rounded-xl object-contain" style={{ maxHeight: 96, width: "auto" }} />
          <a href={`tel:${PHONE}`} className="text-sm font-bold px-5 py-2 rounded-full" style={{ backgroundColor: BLUE, color: "#fff" }}>
            {PHONE_DISPLAY}
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative text-center px-6 pt-14 pb-14" style={{ backgroundColor: NAVY_DARK }}>
        <div className="absolute inset-0 z-0">
          <Image src="/ba-raptor.jpg" alt="" fill className="object-cover object-center" style={{ opacity: 0.8 }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, rgba(7,16,24,0.5) 0%, rgba(7,16,24,0.35) 50%, rgba(7,16,24,0.7) 100%)` }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3">
            MOBILE DETAILING THAT COMES TO YOU
          </h1>
          <p className="text-gray-400 text-sm tracking-widest">
            Puyallup · South Hill · Sumner · Orting · Edgewood · Pierce County
          </p>
        </div>
      </section>

      {/* PROMO BANNER */}
      <div className="text-center text-sm font-bold py-3 px-4 tracking-wide" style={{ backgroundColor: ORANGE, color: "#fff" }}>
        ★ NEW CUSTOMER OFFER: $20 OFF YOUR FIRST FULL DETAIL ★
      </div>

      {/* VALUE PROPS */}
      <section className="py-10 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "🚗", title: "We Come To You", sub: "No drop-off, no waiting rooms, no wasted time" },
            { icon: "🛡️", title: "Real Ceramic Protection", sub: "Every tier includes genuine ceramic — not just wax" },
            { icon: "✓", title: "Transparent Pricing", sub: "Sized fairly by vehicle — no surprise upcharges" },
            { icon: "🏠", title: "Local & Trusted", sub: "Family-run, proudly serving the South Sound" },
          ].map((v) => (
            <div key={v.title} className="px-2">
              <div className="text-2xl mb-2">{v.icon}</div>
              <p className="font-bold text-white text-sm mb-1">{v.title}</p>
              <p className="text-gray-500 text-xs leading-snug">{v.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.07)" }} /></div>

      {/* PACKAGES */}
      <section className="py-12 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-xl font-black mb-8 tracking-wide" style={{ color: BLUE }}>
            Full Detail Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { name: "ESSENTIAL", desc: "Hand wash, wheels & tires, full interior vacuum & wipe-down, 3-month ceramic sealant" },
              { name: "PREMIUM", desc: "Everything in Essential + iron decontamination, carpet & seat shampoo, 6-month ceramic", highlight: true },
              { name: "ELITE", desc: "Everything in Premium + clay bar decon, leather conditioning, 12-month ceramic" },
            ].map((pkg) => (
              <div key={pkg.name} className="rounded-xl px-5 py-4 text-center"
                style={{
                  backgroundColor: pkg.highlight ? "rgba(27,189,212,0.1)" : "rgba(255,255,255,0.03)",
                  border: pkg.highlight ? `1.5px solid ${BLUE}` : "1px solid rgba(255,255,255,0.08)",
                }}>
                <p className="font-black text-white text-sm tracking-widest mb-2">{pkg.name}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{pkg.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="grid grid-cols-4" style={{ backgroundColor: "rgba(7,16,24,0.8)" }}>
              <div className="px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Vehicle Size</div>
              {["Essential", "Premium", "Elite"].map((h) => (
                <div key={h} className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-center" style={{ color: BLUE }}>{h}</div>
              ))}
            </div>
            {[
              { label: "Sedan / Coupe", prices: [199, 259, 339] },
              { label: "Mid-size SUV / Truck", prices: [229, 289, 369] },
              { label: "Full-size SUV / Truck", prices: [259, 319, 399] },
            ].map((row, i) => (
              <div key={row.label} className="grid grid-cols-4"
                style={{ backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="px-5 py-4 text-sm font-semibold text-white">{row.label}</div>
                {row.prices.map((p, j) => (
                  <div key={j} className="px-5 py-4 text-sm font-bold text-center text-white">${p}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="px-6 pb-12">
        <div className="max-w-5xl mx-auto rounded-xl px-8 py-8 text-center" style={{ backgroundColor: "#0A2540", border: `1px solid ${BLUE}22` }}>
          <p className="text-xs font-black uppercase tracking-widest text-white mb-1">Signature — Pre-Sale Detail</p>
          <p className="text-gray-400 text-sm mb-4">Our most complete detail. The one to book if you&apos;re selling.</p>
          <p className="text-4xl font-black mb-4" style={{ color: BLUE }}>$450 – $530</p>
          <p className="text-gray-400 text-xs max-w-xl mx-auto leading-relaxed">
            Elite protection, plus engine bay detail, black trim restoration, gas cap detail, exhaust tip polish, glass ceramic protection & scratch touch-up. Buyers pay $500–$2,000 more for a car that shows this kind of care.
          </p>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="px-6 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs text-gray-500">
            <span className="text-gray-400 font-semibold">Popular Add-Ons: </span>
            Pet Hair & Odor Treatment · Engine Bay Detail · Headlight Restoration · Black Trim Restoration · Interior Ceramic Protection · Clay Bar Treatment
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.07)" }} /></div>

      {/* GALLERY */}
      <section className="py-12 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-xl font-black mb-8 tracking-wide" style={{ color: BLUE }}>Our Work</h2>

          {/* Foam car — full width */}
          <div className="rounded-xl overflow-hidden mb-4 relative w-full" style={{ height: 260 }}>
            <Image src="/hero-foam.jpg" alt="Full exterior detail" fill className="object-cover object-center" />
          </div>

          {/* Before/after grid — 4 photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["/ba-raptor.jpg", "/ba-interior.jpg", "/ba-cargo.jpg", "/ba-mats.jpg"].map((src) => (
              <div key={src} className="rounded-xl overflow-hidden relative" style={{ aspectRatio: "4/3" }}>
                <Image src={src} alt="Before and after detail" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-10 px-6" style={{ backgroundColor: NAVY_DARK }}>
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-6" style={{ color: BLUE }}>
          What Our Customers Are Saying
        </p>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-xl px-6 py-5" style={{ backgroundColor: "rgba(27,189,212,0.06)", border: "1px solid rgba(27,189,212,0.15)" }}>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, s) => <span key={s} style={{ color: ORANGE, fontSize: 13 }}>★</span>)}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">&ldquo;{r.text}&rdquo;</p>
              <p className="text-xs font-semibold" style={{ color: BLUE }}>— {r.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-14 px-6 text-center" style={{ backgroundColor: NAVY_DARK }}>
        <div className="max-w-xl mx-auto">
          <p className="text-5xl md:text-6xl mb-2" style={{ fontFamily: "'Dancing Script', cursive", color: BLUE, lineHeight: 1.2 }}>
            Keep It Crisp.
          </p>
          <h2 className="text-2xl font-black text-white">Book Your Detail Today</h2>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-xl font-black px-10 py-4 rounded-full mt-6 mb-5 hover:opacity-90 transition-opacity" style={{ backgroundColor: BLUE, color: "#fff" }}>
            📞 {PHONE_DISPLAY}
          </a>
          <p className="text-gray-500 text-xs">
            crispautodetailers.com · @crispautodetailers · Fully Insured
          </p>
        </div>
      </section>

    </main>
  );
}
