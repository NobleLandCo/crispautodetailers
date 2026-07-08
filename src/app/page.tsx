import Link from "next/link";

const PHONE = "2539700858";
const PHONE_DISPLAY = "(253) 970-0858";

const packages = [
  {
    name: "Essential",
    description: "A thorough clean inside and out — everything your car needs to look great.",
    features: [
      "Hand wash, wheels & tires",
      "Full interior vacuum & wipe-down",
      "Window cleaning (in & out)",
      "Door jamb cleaning",
      "3-month ceramic sealant",
    ],
    prices: { sedan: 199, midSuv: 229, fullSuv: 259 },
    highlight: false,
  },
  {
    name: "Premium",
    description: "Everything in Essential + iron decontamination, carpet & seat shampoo, and 6-month ceramic.",
    features: [
      "Everything in Essential",
      "Iron decontamination",
      "Carpet & seat shampoo",
      "Tire dressing",
      "6-month ceramic sealant",
    ],
    prices: { sedan: 259, midSuv: 289, fullSuv: 319 },
    highlight: true,
  },
  {
    name: "Elite",
    description: "Everything in Premium + clay bar decon, leather conditioning, and 12-month ceramic.",
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
      "Full Elite-level detail",
      "Engine bay detail",
      "Black trim restoration",
      "Gas cap detail & exhaust tip polish",
      "Glass ceramic protection",
      "Scratch touch-up",
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
  "Puyallup",
  "South Hill",
  "Sumner",
  "Orting",
  "Edgewood",
  "Pierce County",
];

const steps = [
  {
    number: "01",
    title: "Book or Call",
    description:
      "Give us a call or shoot us a text. We'll confirm your appointment same day.",
  },
  {
    number: "02",
    title: "We Come to You",
    description:
      "We show up at your home, office, or wherever works for you — no drop-off needed.",
  },
  {
    number: "03",
    title: "Drive Away Clean",
    description:
      "We handle everything. You walk out to a spotless car, every time.",
  },
];

const trustBadges = [
  { icon: "🛡️", label: "Fully Insured" },
  { icon: "🏠", label: "Family-Run" },
  { icon: "📍", label: "South Sound Local" },
  { icon: "⭐", label: "Ceramic Every Tier" },
];

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0D1B2A" }}>
      {/* NAV */}
      <nav
        className="fixed top-0 w-full z-50 border-b"
        style={{
          backgroundColor: "rgba(13,27,42,0.95)",
          borderColor: "rgba(249,115,22,0.2)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-black tracking-tight text-white">
            CRISP<span style={{ color: "#F97316" }}>.</span>
          </span>
          <a
            href={`tel:${PHONE}`}
            className="text-sm font-bold px-5 py-2 rounded-full transition-all hover:opacity-90"
            style={{ backgroundColor: "#F97316", color: "#fff" }}
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </nav>

      {/* PROMO BANNER */}
      <div
        className="text-center text-sm font-bold py-2 px-4 pt-[72px]"
        style={{ backgroundColor: "#F97316", color: "#fff" }}
      >
        ★ NEW CUSTOMER OFFER: $20 OFF YOUR FIRST FULL DETAIL — Call to redeem ★
      </div>

      {/* HERO */}
      <section
        className="relative pt-20 pb-24 px-6 overflow-hidden"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#F97316" }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-6"
            style={{ backgroundColor: "rgba(249,115,22,0.15)", color: "#F97316" }}
          >
            Mobile Auto Detailing · South Pierce County
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
            Mobile Detailing
            <br />
            <span style={{ color: "#F97316" }}>That Comes to You.</span>
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
              style={{ backgroundColor: "#F97316", color: "#fff" }}
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
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#d1d5db" }}
              >
                <span>{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6" style={{ backgroundColor: "#070F18" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-14">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div
                  className="text-5xl font-black mb-4"
                  style={{ color: "#F97316" }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-20 px-6" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Full Detail Packages
            </h2>
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
              <div
                key={pkg.name}
                className="relative rounded-2xl p-6 flex flex-col"
                style={{
                  backgroundColor: pkg.highlight ? "#1A2E45" : "#111D2B",
                  border: pkg.highlight
                    ? "2px solid #F97316"
                    : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {pkg.highlight && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full"
                    style={{ backgroundColor: "#F97316", color: "#fff" }}
                  >
                    Most Popular
                  </span>
                )}
                <div className="mb-4">
                  <h3 className="text-xl font-black text-white">
                    {pkg.name}
                    {pkg.subtitle && (
                      <span className="block text-sm font-semibold" style={{ color: "#F97316" }}>
                        {pkg.subtitle}
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div
                  className="rounded-xl p-4 mb-5 space-y-1"
                  style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Sedan/Coupe</span>
                    <span className="font-bold text-white">${pkg.prices.sedan}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Mid-size SUV/Truck</span>
                    <span className="font-bold text-white">${pkg.prices.midSuv}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Full-size SUV/Truck</span>
                    <span className="font-bold text-white">${pkg.prices.fullSuv}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <span style={{ color: "#F97316" }} className="mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={`tel:${PHONE}`}
                  className="block text-center font-bold py-3 rounded-xl transition-all hover:opacity-90"
                  style={
                    pkg.highlight
                      ? { backgroundColor: "#F97316", color: "#fff" }
                      : {
                          backgroundColor: "transparent",
                          color: "#F97316",
                          border: "1px solid #F97316",
                        }
                  }
                >
                  Book This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-12 px-6" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-black text-white text-center mb-8">Other Services</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {otherServices.map((svc) => (
              <div
                key={svc.name}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#111D2B", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <h4 className="text-lg font-bold text-white mb-1">{svc.name}</h4>
                <p className="text-gray-400 text-sm mb-4">{svc.description}</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Sedan/Coupe</span>
                    <span className="font-bold text-white">${svc.prices.sedan}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Mid-size SUV/Truck</span>
                    <span className="font-bold text-white">${svc.prices.midSuv}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Full-size SUV/Truck</span>
                    <span className="font-bold text-white">${svc.prices.fullSuv}</span>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Popular Add-Ons
            </h2>
            <p className="text-gray-400">
              Customize your detail — add exactly what your car needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between px-5 py-4 rounded-xl"
                style={{ backgroundColor: "#111D2B", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span className="text-gray-300 font-medium">{addon.name}</span>
                <span className="font-bold" style={{ color: "#F97316" }}>
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Ask about add-ons when you call — we&apos;ll quote exactly what makes sense for your vehicle.
          </p>
        </div>
      </section>

      {/* WHY CRISP */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-14">
            Why Crisp?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "We Come to You",
                body: "No drop-off, no waiting rooms, no wasted time. We show up at your home or office and take care of everything while you keep moving.",
              },
              {
                icon: "🛡️",
                title: "Real Ceramic Protection",
                body: "Every tier includes genuine ceramic — not just wax. Your paint is actually protected, not just shiny for a week.",
              },
              {
                icon: "💰",
                title: "Transparent Pricing",
                body: "Sized fairly by vehicle. You know the price before we show up — no surprise upcharges, ever.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-7"
                style={{ backgroundColor: "#111D2B", border: "1px solid rgba(255,255,255,0.07)" }}
              >
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
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
            Service Area
          </h2>
          <p className="text-gray-400 mb-8">
            Proudly serving South Pierce County. Not sure if we cover your area? Give us a call.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-5 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: "rgba(249,115,22,0.12)", color: "#F97316", border: "1px solid rgba(249,115,22,0.3)" }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-2xl mx-auto">
          <div
            className="inline-block text-sm font-bold px-5 py-2 rounded-full mb-6"
            style={{ backgroundColor: "rgba(249,115,22,0.15)", color: "#F97316" }}
          >
            ★ $20 OFF your first full detail — new customers only
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Keep It Crisp?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Call or text and we&apos;ll get you booked — usually same or next day.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2 text-xl font-black px-10 py-5 rounded-full transition-all hover:opacity-90"
            style={{ backgroundColor: "#F97316", color: "#fff" }}
          >
            📞 {PHONE_DISPLAY}
          </a>
          <p className="text-gray-600 text-sm mt-6">
            Puyallup · South Hill · Sumner · Orting · Edgewood · Pierce County
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 px-6 text-center border-t"
        style={{ borderColor: "rgba(255,255,255,0.07)", backgroundColor: "#070F18" }}
      >
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Crisp Auto Detailers · Puyallup, WA · Fully Insured ·{" "}
          <a href={`tel:${PHONE}`} style={{ color: "#F97316" }}>
            {PHONE_DISPLAY}
          </a>
        </p>
      </footer>
    </main>
  );
}
