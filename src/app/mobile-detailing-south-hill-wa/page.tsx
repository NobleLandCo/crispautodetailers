import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Auto Detailing South Hill WA | Crisp Auto Detailers",
  description: "Mobile auto detailing in South Hill, WA. We come to your home or office. Professional ceramic, interior shampoo, paint correction — no drop-off needed. Call (253) 970-0858.",
  keywords: "mobile auto detailing South Hill WA, car detailing South Hill, mobile detailer South Hill Washington",
  openGraph: {
    title: "Mobile Auto Detailing South Hill WA | Crisp Auto Detailers",
    description: "We come to you in South Hill, WA. Professional mobile detailing — ceramic coating, interior shampoo, full details. Call (253) 970-0858.",
    url: "https://crispautodetailers.com/mobile-detailing-south-hill-wa",
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

export default function SouthHillPage() {
  return (
    <main style={{ backgroundColor: NAVY, minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ backgroundColor: NAVY_DARK, borderBottom: "1px solid rgba(27,189,212,0.15)", position: "sticky", top: 0, zIndex: 50 }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-lg tracking-tight">Crisp Auto Detailers</Link>
          <a href={`tel:${PHONE}`} className="text-sm font-bold px-5 py-2 rounded-full" style={{ backgroundColor: TEAL, color: "#fff" }}>{PHONE_DISPLAY}</a>
        </div>
      </nav>

      {/* PROMO */}
      <div className="text-center text-sm font-bold py-3 px-4 tracking-wide" style={{ backgroundColor: ORANGE, color: "#fff" }}>
        ★ NEW CUSTOMER OFFER: $20 OFF YOUR FIRST FULL DETAIL ★
      </div>

      {/* HERO */}
      <section className="py-16 px-6 text-center" style={{ backgroundColor: NAVY_DARK }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: TEAL }}>South Hill, WA</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Mobile Auto Detailing<br />in South Hill, WA
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            We come to your home, driveway, or office. No drop-off, no waiting rooms — just a professionally detailed vehicle where it sits.
          </p>
          <a href={`tel:${PHONE}`} className="inline-block font-black px-8 py-4 rounded-full text-lg mr-4" style={{ backgroundColor: TEAL, color: "#fff" }}>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* WHY SOUTH HILL */}
      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">Why South Hill Drivers Choose Mobile Detailing</h2>
          <p className="text-gray-400 mb-4">South Hill is one of the fastest-growing residential areas in Pierce County — newer homes, newer vehicles, and residents who have better things to do than sit in a detail shop waiting room for four hours.</p>
          <p className="text-gray-400 mb-4">Most South Hill homes have a driveway or garage apron that gives us plenty of room to work. We pull up, set up, and get to work while you're inside, working remotely, or getting on with your day. When we're done, you do a walkthrough and we don't leave until it's right.</p>
          <p className="text-gray-400 mb-8">We cover all of South Hill — Canyon Road, Meridian, Shaw Road, 176th Street corridor, and everything in between.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🚗", title: "We Come to You", sub: "Your driveway, your parking lot — wherever the car lives" },
              { icon: "🛡️", title: "Ceramic Protection", sub: "Every Elite and Signature package includes genuine ceramic" },
              { icon: "✓", title: "Flat Pricing by Vehicle Size", sub: "Sedan, mid-SUV, or full-SUV — priced fairly, no surprises" },
              { icon: "🏠", title: "Family-Run", sub: "Not a franchise — you know who's showing up" },
            ].map((v) => (
              <div key={v.title} className="rounded-xl p-5 flex gap-4" style={{ backgroundColor: NAVY_DARK, border: "1px solid rgba(27,189,212,0.12)" }}>
                <span className="text-2xl">{v.icon}</span>
                <div>
                  <p className="font-bold text-white text-sm mb-1">{v.title}</p>
                  <p className="text-gray-500 text-xs leading-snug">{v.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-14 px-6" style={{ backgroundColor: NAVY_DARK }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-2">Detail Packages</h2>
          <p className="text-gray-500 text-sm mb-8">Priced by vehicle size — sedan / mid-SUV / full-SUV</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Essential", price: "$199 / $229 / $259", desc: "Exterior foam wash, clay bar, wax, tire shine, interior vacuum and wipe-down. Great for quarterly maintenance." },
              { name: "Premium", price: "$259 / $289 / $319", desc: "Everything in Essential + interior shampoo, seat cleaning, odor treatment, dashboard deep clean." },
              { name: "Elite", price: "$339 / $369 / $399", desc: "Full interior/exterior restoration, paint correction, ceramic coating. Best for long-term protection." },
              { name: "Signature Pre-Sale", price: "$450 / $490 / $530", desc: "Purpose-built for vehicles going to market. Maximizes presentation and resale value." },
            ].map((pkg) => (
              <div key={pkg.name} className="rounded-xl p-5" style={{ border: `1px solid rgba(27,189,212,0.15)`, backgroundColor: NAVY }}>
                <p className="font-black text-white text-base mb-1">{pkg.name}</p>
                <p className="text-sm font-bold mb-3" style={{ color: TEAL }}>{pkg.price}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-3">Book Your South Hill Detail</h2>
          <p className="text-gray-400 mb-8">First-time customers get $20 off a full detail. Call or text — we'll get you scheduled.</p>
          <a href={`tel:${PHONE}`} className="inline-block font-black px-8 py-4 rounded-full text-lg" style={{ backgroundColor: TEAL, color: "#fff" }}>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* FOOTER NAV */}
      <div className="text-center py-6 text-gray-600 text-xs" style={{ borderTop: "1px solid rgba(27,189,212,0.08)" }}>
        Also serving:{" "}
        <Link href="/mobile-detailing-tacoma-wa" style={{ color: TEAL }}>Tacoma</Link> ·{" "}
        <Link href="/mobile-detailing-auburn-wa" style={{ color: TEAL }}>Auburn</Link> ·{" "}
        <Link href="/mobile-detailing-sumner-wa" style={{ color: TEAL }}>Sumner</Link> ·{" "}
        <Link href="/mobile-detailing-orting-wa" style={{ color: TEAL }}>Orting</Link> ·{" "}
        <Link href="/mobile-detailing-edgewood-wa" style={{ color: TEAL }}>Edgewood</Link> ·{" "}
        <Link href="/" style={{ color: TEAL }}>Puyallup</Link>
      </div>

    </main>
  );
}
