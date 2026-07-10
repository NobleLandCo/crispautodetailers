import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Auto Detailing Sumner WA | Crisp Auto Detailers",
  description: "Mobile auto detailing in Sumner, WA. We come to your home or office in Sumner and surrounding Pierce County. Ceramic coating, interior shampoo, full details. Call (253) 970-0858.",
  keywords: "mobile auto detailing Sumner WA, car detailing Sumner, mobile detailer Sumner Washington",
  openGraph: {
    title: "Mobile Auto Detailing Sumner WA | Crisp Auto Detailers",
    description: "Professional mobile detailing in Sumner, WA. We come to you — no drop-off needed. Call (253) 970-0858.",
    url: "https://crispautodetailers.com/mobile-detailing-sumner-wa",
    siteName: "Crisp Auto Detailers",
    locale: "en_US",
    type: "website",
  },
};

const NAVY = "#0D1B2A";
const NAVY_DARK = "#071018";
const TEAL = "#1BBDD4";
const ORANGE = "#F59E0B";
const PHONE = "2539700858";
const PHONE_DISPLAY = "(253) 970-0858";

export default function SumnerPage() {
  return (
    <main style={{ backgroundColor: NAVY, minHeight: "100vh" }}>

      <nav style={{ backgroundColor: NAVY_DARK, borderBottom: "1px solid rgba(27,189,212,0.15)", position: "sticky", top: 0, zIndex: 50 }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-lg tracking-tight">Crisp Auto Detailers</Link>
          <a href={`tel:${PHONE}`} className="text-sm font-bold px-5 py-2 rounded-full" style={{ backgroundColor: TEAL, color: "#fff" }}>{PHONE_DISPLAY}</a>
        </div>
      </nav>

      <div className="text-center text-sm font-bold py-3 px-4 tracking-wide" style={{ backgroundColor: ORANGE, color: "#fff" }}>
        ★ NEW CUSTOMER OFFER: $20 OFF YOUR FIRST FULL DETAIL ★
      </div>

      <section className="py-16 px-6 text-center" style={{ backgroundColor: NAVY_DARK }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: TEAL }}>Sumner, WA</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Mobile Auto Detailing<br />in Sumner, WA
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Professional mobile detailing that comes straight to you in Sumner. We bring all the equipment — you don't leave the driveway.
          </p>
          <a href={`tel:${PHONE}`} className="inline-block font-black px-8 py-4 rounded-full text-lg" style={{ backgroundColor: TEAL, color: "#fff" }}>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">Mobile Detailing in Sumner — How It Works</h2>
          <p className="text-gray-400 mb-4">Sumner sits right at the edge of the Green River Valley — beautiful area, but the combination of valley humidity, spring pollen from the river corridor, and summer dust means cars accumulate grime faster than you'd expect.</p>
          <p className="text-gray-400 mb-4">We serve Sumner residential neighborhoods, the downtown area, and the industrial/commercial district along 24th Street E. Whether you're home on a weekday or want a lunchtime detail at your office, we can work around your schedule.</p>
          <p className="text-gray-400 mb-8">Sumner is a quick drive from our Puyallup base — same-day availability is often possible for morning bookings.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "📍", title: "Local & Fast", sub: "Puyallup-based, quick to Sumner — often same-day" },
              { icon: "💧", title: "Water Supplied", sub: "We bring our own water when needed — no hookup required" },
              { icon: "✓", title: "No Hidden Fees", sub: "Package price is the price. No surprises at the end." },
            ].map((v) => (
              <div key={v.title} className="rounded-xl p-5 text-center" style={{ backgroundColor: NAVY_DARK, border: "1px solid rgba(27,189,212,0.12)" }}>
                <div className="text-2xl mb-3">{v.icon}</div>
                <p className="font-bold text-white text-sm mb-1">{v.title}</p>
                <p className="text-gray-500 text-xs leading-snug">{v.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6" style={{ backgroundColor: NAVY_DARK }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-2">Packages & Pricing</h2>
          <p className="text-gray-500 text-sm mb-8">Sedan / Mid-SUV / Full-SUV</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Essential", price: "$199 / $229 / $259", desc: "Exterior wash, clay bar, wax, tire shine, interior vacuum and wipe-down." },
              { name: "Premium", price: "$259 / $289 / $319", desc: "Everything in Essential + interior shampoo, seat and carpet cleaning, odor treatment." },
              { name: "Elite", price: "$339 / $369 / $399", desc: "Full detail with paint correction, ceramic coating, and complete interior restoration." },
              { name: "Signature Pre-Sale", price: "$450 / $490 / $530", desc: "Pre-listing package for maximum vehicle presentation and resale value." },
            ].map((pkg) => (
              <div key={pkg.name} className="rounded-xl p-5" style={{ border: "1px solid rgba(27,189,212,0.15)", backgroundColor: NAVY }}>
                <p className="font-black text-white text-base mb-1">{pkg.name}</p>
                <p className="text-sm font-bold mb-3" style={{ color: TEAL }}>{pkg.price}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-3">Book Your Sumner Detail</h2>
          <p className="text-gray-400 mb-8">New customers get $20 off their first full detail. Call or text to book.</p>
          <a href={`tel:${PHONE}`} className="inline-block font-black px-8 py-4 rounded-full text-lg" style={{ backgroundColor: TEAL, color: "#fff" }}>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <div className="text-center py-6 text-gray-600 text-xs" style={{ borderTop: "1px solid rgba(27,189,212,0.08)" }}>
        Also serving:{" "}
        <Link href="/mobile-detailing-tacoma-wa" style={{ color: TEAL }}>Tacoma</Link> ·{" "}
        <Link href="/mobile-detailing-auburn-wa" style={{ color: TEAL }}>Auburn</Link> ·{" "}
        <Link href="/mobile-detailing-south-hill-wa" style={{ color: TEAL }}>South Hill</Link> ·{" "}
        <Link href="/mobile-detailing-orting-wa" style={{ color: TEAL }}>Orting</Link> ·{" "}
        <Link href="/mobile-detailing-edgewood-wa" style={{ color: TEAL }}>Edgewood</Link> ·{" "}
        <Link href="/" style={{ color: TEAL }}>Puyallup</Link>
      </div>

    </main>
  );
}
