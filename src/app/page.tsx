import Image from "next/image";

const PHONE = "2539700858";
const PHONE_DISPLAY = "(253) 970-0858";

// Brand colors: teal from logo (#1BBDD4), navy bg (#0D1B2A), orange accent for promo only
const BLUE = "#1BBDD4";
const BLUE_DARK = "#159FB3";
const NAVY = "#0D1B2A";
const NAVY_LIGHT = "#122335";
const NAVY_CARD = "#0F1E2E";
const ORANGE = "#F59E0B";

const packages = [
  {
    name: "Essential",
    description: "Hand wash, wheels & tires, full interior vacuum & wipe-down, 3-month ceramic sealant.",
    features: [
      "Hand wash & foam bath",
      "Wheels, tires & windows",
      "Vacuum, jambs, seat & carpet wipe-down",
      "3-month WetCoat ceramic sealant",
    ],
    prices: { sedan: 199, midSuv: 229, fullSuv: 259 },
    highlight: false,
  },
  {
    name: "Premium",
    description: "Everything in Essential + iron decontamination, carpet & seat shampoo, 6-month ceramic.",
    features: [
      "Everything in Essential",
      "Iron decontamination",
      "Carpet & seat shampoo",
      "6-month ceramic protection",
    ],
    prices: { sedan: 259, midSuv: 289, fullSuv: 319 },
    highlight: true,
  },
  {
    name: "Elite",
    description: "Everything in Premium + clay bar decon, leather conditioning, 12-month ceramic.",
    features: [
      "Everything in Premium",
      "Clay bar decontamination",
      "Leather conditioning",
      "12-month ceramic protection",
    ],
    prices: { sedan: 339, midSuv: 369, fullSuv: 399 },
    highlight: false,
  },
  {
    name: "Signature",
    subtitle: "Pre-Sale Detail",
    description: "Our most complete detail. The one to book if you're selling. Buyers pay $500–$2,000 more for a car that shows this kind of care.",
    features: [
      "Elite protection + full detail",
      "Engine bay detail",
      "Black trim restoration",
      "Gas cap detail & exhaust tip polish",
      "Glass ceramic protection",
      "Isolated scratch touch-up",
    ],
    prices: { sedan: 450, midSuv: 490, fullSuv: 530 },
    highlight: false,
  },
];

const otherServices = [
  {
    name: "Interior Only",
    description: "Full interior detail — vacuum, shampoo, wipe-down, windows.",
    prices: { sedan: 159, midSuv: 189, fullSuv: 219 },
  },
  {
    name: "Signature Exterior Refresh",
    description: "Hand wash + clay bar decontamination + ceramic sealant.",
    prices: { sedan: 179, midSuv: 209, fullSuv: 239 },
  },
];

const addons = [
  { name: "Pet Hair & Odor Treatment", price: "Ask for quote" },
  { name: "Engine Bay Detail", price: "$50" },
  { name: "Headlight Restoration", price: "$79" },
  { name: "Black Trim Restoration", price: "$60–90" },
  { name: "Interior Ceramic Protection", price: "$200 (+ $100/yr reapply)" },
  { name: "Clay Bar Treatment", price: "$45–65" },
  { name: "Carpet & Seat Shampoo", price: "$30–60" },
  { name: "Leather Conditioning", price: "$30–50" },
  { name: "Glass Ceramic Coating", price: "$60" },
  { name: "Exhaust Tip Polish", price: "$25–40" },
];

const serviceAreas = [
  "Puyallup", "South Hill", "Sumner", "Orting", "Edgewood", "Pierce County",
];

const steps = [
  { number: "01", title: "Book or Call", description: "Give us a call or shoot us a text. We'll confirm your appointment same day." },
  { number: "02", title: "We Come to You", description: "We show up at your home, office, or wherever works for you — no drop-off needed." },
  { number: "03", title: "Drive Away Clean", description: "We handle everything. You walk out to a spotless car, every time." },
];

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: NAVY }}>

      {/* NAV */}
      <nav
        className="fixed top-0 w-full z-50 border-b"
        style={{ backgroundColor: "rgba(13,27,42,0.97)", borderColor: "rgba(30,140,200,0.2)", backdropFilter: "blur(8px)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Image src="/logo.jpg" alt="Crisp Auto Detailers" width={120} height={120} className="object-contain rounded-lg" style={{ maxHeight: 56, width: "auto" }} />
          <a
            href={`tel:${PHONE}`}
            className="text-sm font-bold px-5 py-2 rounded-full transition-all hover:opacity-90"
            style={{ backgroundColor: BLUE, color: "#fff" }}
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </nav>

      {/* PROMO BANNER */}
      <div className="text-center text-sm font-bold py-2 px-4 pt-[72px]"
        style={{ backgroundColor: ORANGE, color: "#fff" }}>
        ★ NEW CUSTOMER OFFER: $20 OFF YOUR FIRST FULL DETAIL — Call to redeem ★
      </div>

      {/* HERO */}
      <section className="relative pt-20 pb-24 px-6 overflow-hidden" style={{ backgroundColor: NAVY }}>
        {/* Hero background photo */}
        <div className="absolute inset-0 z-0">
          <Image src="/hero-foam.jpg" alt="" fill className="object-cover object-center" style={{ opacity: 0.18 }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${NAVY}cc 0%, ${NAVY}88 50%, ${NAVY}ee 100%)` }} />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: BLUE }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-6"
            style={{ backgroundColor: "rgba(30,140,200,0.15)", color: BLUE }}
          >
            Mobile Auto Detailing · South Pierce County
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
            Mobile Detailing
            <br />
            <span style={{ color: BLUE }}>That Comes to You.</span>
          </h1>
          <p className="text-2xl font-bold text-gray-300 mb-6">Keep It Crisp.</p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Professional mobile detailing at your home, office, or anywhere in
            Puyallup, South Hill, Sumner, Orting & Edgewood. No drop-off. No waiting rooms. No wasted time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 text-lg font-bold px-8 py-4 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: BLUE, color: "#fff" }}
            >
              📞 Call to Book — {PHONE_DISPLAY}
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 text-lg font-semibold px-8 py-4 rounded-full border transition-all hover:bg-white hover:text-gray-900"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "#fff" }}
            >
              View Packages ↓
            </a>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: "🚗", label: "We Come to You" },
              { icon: "🛡️", label: "Fully Insured" },
              { icon: "🏠", label: "Family-Run" },
              { icon: "⭐", label: "Ceramic Every Tier" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#d1d5db" }}>
                <span>{b.icon}</span><span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6" style={{ backgroundColor: "#070F18" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-14">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="text-5xl font-black mb-4" style={{ color: BLUE }}>{step.number}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-20 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Full Detail Packages</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Real ceramic protection at every tier — not just wax. Priced fairly by vehicle size, no surprise upcharges.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-gray-400">
            <span>🚗 Sedan/Coupe</span>
            <span>🚙 Mid-size SUV/Truck</span>
            <span>🚐 Full-size SUV/Truck</span>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className="relative rounded-2xl p-6 flex flex-col"
                style={{
                  backgroundColor: pkg.highlight ? NAVY_LIGHT : NAVY_CARD,
                  border: pkg.highlight ? `2px solid ${BLUE}` : "1px solid rgba(255,255,255,0.08)",
                }}>
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full"
                    style={{ backgroundColor: BLUE, color: "#fff" }}>
                    Most Popular
                  </span>
                )}
                <div className="mb-4">
                  <h3 className="text-xl font-black text-white">
                    {pkg.name}
                    {pkg.subtitle && <span className="block text-sm font-semibold" style={{ color: BLUE }}>{pkg.subtitle}</span>}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">{pkg.description}</p>
                </div>
                <div className="rounded-xl p-4 mb-5 space-y-1" style={{ backgroundColor: "rgba(0,0,0,0.25)" }}>
                  {[
                    ["Sedan/Coupe", pkg.prices.sedan],
                    ["Mid-size SUV/Truck", pkg.prices.midSuv],
                    ["Full-size SUV/Truck", pkg.prices.fullSuv],
                  ].map(([label, price]) => (
                    <div key={label as string} className="flex justify-between text-sm">
                      <span className="text-gray-400">{label}</span>
                      <span className="font-bold text-white">${price}</span>
                    </div>
                  ))}
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <span style={{ color: BLUE }} className="mt-0.5 flex-shrink-0">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href={`tel:${PHONE}`}
                  className="block text-center font-bold py-3 rounded-xl transition-all hover:opacity-90"
                  style={pkg.highlight
                    ? { backgroundColor: BLUE, color: "#fff" }
                    : { backgroundColor: "transparent", color: BLUE, border: `1px solid ${BLUE}` }
                  }>
                  Book This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-12 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-black text-white text-center mb-8">Other Services</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {otherServices.map((svc) => (
              <div key={svc.name} className="rounded-2xl p-6"
                style={{ backgroundColor: NAVY_CARD, border: "1px solid rgba(255,255,255,0.08)" }}>
                <h4 className="text-lg font-bold text-white mb-1">{svc.name}</h4>
                <p className="text-gray-400 text-sm mb-4">{svc.description}</p>
                <div className="space-y-1">
                  {[
                    ["Sedan/Coupe", svc.prices.sedan],
                    ["Mid-size SUV/Truck", svc.prices.midSuv],
                    ["Full-size SUV/Truck", svc.prices.fullSuv],
                  ].map(([label, price]) => (
                    <div key={label as string} className="flex justify-between text-sm">
                      <span className="text-gray-400">{label}</span>
                      <span className="font-bold text-white">${price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-20 px-6" style={{ backgroundColor: "#070F18" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Popular Add-Ons</h2>
            <p className="text-gray-400">Customize your detail — add exactly what your car needs.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {addons.map((addon) => (
              <div key={addon.name} className="flex items-center justify-between px-5 py-4 rounded-xl"
                style={{ backgroundColor: NAVY_CARD, border: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="text-gray-300 font-medium">{addon.name}</span>
                <span className="font-bold" style={{ color: BLUE }}>{addon.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Ask about add-ons when you call — we&apos;ll quote exactly what makes sense for your vehicle.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Our Work</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Real results, real cars. This is what Crisp looks like.</p>
          </div>

          {/* Before/After grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {[
              { src: "/ba-raptor.jpg", label: "Full Exterior Detail — Ford Raptor" },
              { src: "/ba-interior.jpg", label: "Interior Deep Clean" },
              { src: "/ba-cargo.jpg", label: "Cargo Area — Before & After" },
              { src: "/ba-mats.jpg", label: "Floor Mats — Before & After" },
              { src: "/ba-fabric-seats.jpg", label: "Fabric Seat Shampoo" },
              { src: "/ba-rear-seats.jpg", label: "Rear Seat Restoration" },
            ].map((photo) => (
              <div key={photo.src} className="rounded-2xl overflow-hidden relative group"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="relative h-56">
                  <Image src={photo.src} alt={photo.label} fill className="object-cover" />
                </div>
                <div className="px-4 py-3" style={{ backgroundColor: NAVY_CARD }}>
                  <p className="text-sm text-gray-400 font-medium">{photo.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Standalone after shots */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { src: "/after-interior.jpg", label: "Toyota Highlander — Full Interior Detail" },
              { src: "/after-seats.jpg", label: "Leather Seats — Conditioned & Restored" },
            ].map((photo) => (
              <div key={photo.src} className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="relative h-64">
                  <Image src={photo.src} alt={photo.label} fill className="object-cover" />
                </div>
                <div className="px-4 py-3" style={{ backgroundColor: NAVY_CARD }}>
                  <p className="text-sm text-gray-400 font-medium">{photo.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CRISP */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-14">Why Crisp?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🚗", title: "We Come to You", body: "No drop-off, no waiting rooms, no wasted time." },
              { icon: "🛡️", title: "Real Ceramic Protection", body: "Every tier includes genuine ceramic — not just wax." },
              { icon: "💰", title: "Transparent Pricing", body: "Sized fairly by vehicle — no surprise upcharges." },
              { icon: "🏠", title: "Local & Trusted", body: "Family-run, proudly serving the South Sound." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-7 text-center"
                style={{ backgroundColor: NAVY_CARD, border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16 px-6" style={{ backgroundColor: "#070F18" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6">Service Area</h2>
          <p className="text-gray-400 mb-8">Proudly serving South Pierce County. Not sure if we cover your area? Give us a call.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span key={area} className="px-5 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: "rgba(30,140,200,0.12)", color: BLUE, border: `1px solid rgba(30,140,200,0.3)` }}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: NAVY }}>
        <div className="max-w-2xl mx-auto">
          <div className="inline-block text-sm font-bold px-5 py-2 rounded-full mb-6"
            style={{ backgroundColor: `rgba(245,158,11,0.15)`, color: ORANGE }}>
            ★ $20 OFF your first full detail — new customers only
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Keep It Crisp?</h2>
          <p className="text-gray-400 mb-10 text-lg">Call or text and we&apos;ll get you booked — usually same or next day.</p>
          <a href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2 text-xl font-black px-10 py-5 rounded-full transition-all hover:opacity-90"
            style={{ backgroundColor: BLUE, color: "#fff" }}>
            📞 {PHONE_DISPLAY}
          </a>
          <p className="text-gray-600 text-sm mt-6">
            Puyallup · South Hill · Sumner · Orting · Edgewood · Pierce County
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center border-t"
        style={{ borderColor: "rgba(255,255,255,0.07)", backgroundColor: "#070F18" }}>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Crisp Auto Detailers · Puyallup, WA · Fully Insured ·{" "}
          <a href={`tel:${PHONE}`} style={{ color: BLUE }}>{PHONE_DISPLAY}</a>
        </p>
      </footer>

    </main>
  );
}
