import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Auto Detailing Edgewood WA | Crisp Auto Detailers",
  description: "Mobile auto detailing in Edgewood, WA. Professional car detailing at your home or business. Ceramic coating, interior deep clean, full details. Call (253) 970-0858.",
  keywords: "mobile auto detailing Edgewood WA, car detailing Edgewood, mobile detailer Edgewood Washington",
  openGraph: {
    title: "Mobile Auto Detailing Edgewood WA | Crisp Auto Detailers",
    description: "We come to you in Edgewood, WA. Professional mobile detailing — ceramic coating, interior shampoo, full details. Call (253) 970-0858.",
    url: "https://crispautodetailers.com/mobile-detailing-edgewood-wa",
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

export default function EdgewoodPage() {
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
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: TEAL }}>Edgewood, WA</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Mobile Auto Detailing<br />in Edgewood, WA
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Professional mobile detailing in Edgewood — we come to your home or business with all the equipment. No drop-off, no hassle.
          </p>
          <a href={`tel:${PHONE}`} className="inline-block font-black px-8 py-4 rounded-full text-lg" style={{ backgroundColor: TEAL, color: "#fff" }}>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">Serving Edgewood and the Milton–Edgewood Corridor</h2>
          <p className="text-gray-400 mb-4">Edgewood sits between Puyallup and Federal Way along the 99 corridor — well-established residential neighborhoods, newer developments near Meridian E, and a mix of commuter vehicles and weekend drivers that all need regular attention.</p>
          <p className="text-gray-400 mb-4">Mobile detailing is a natural fit here. Most Edgewood homes have a driveway or covered parking where we can work comfortably. We handle everything — all equipment, all products — and work while you're home or at the office.</p>
          <p className="text-gray-400 mb-8">We cover all of Edgewood including the Jovita, Lake Dolloff, and Emerald Heights areas. Call to confirm availability for your specific address.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "🚗", title: "We Come to You", sub: "Your driveway or business parking lot — we work where the car is" },
              { icon: "⏱️", title: "On-Time Arrival", sub: "Confirmed appointment windows, not vague half-day waits" },
              { icon: "🛡️", title: "Real Ceramic Coating", sub: "Long-term paint protection included in Elite and Signature packages" },
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
              { name: "Premium", price: "$259 / $289 / $319", desc: "Interior shampoo, seat cleaning, odor treatment + full exterior detail." },
              { name: "Elite", price: "$339 / $369 / $399", desc: "Paint correction, ceramic coating, complete interior and exterior restoration." },
              { name: "Signature Pre-Sale", price: "$450 / $490 / $530", desc: "Pre-listing detail to maximize resale presentation and value." },
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
          <h2 className="text-2xl font-black text-white mb-3">Book Your Edgewood Detail</h2>
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
        <Link href="/mobile-detailing-sumner-wa" style={{ color: TEAL }}>Sumner</Link> ·{" "}
        <Link href="/mobile-detailing-orting-wa" style={{ color: TEAL }}>Orting</Link> ·{" "}
        <Link href="/" style={{ color: TEAL }}>Puyallup</Link>
      </div>

    </main>
  );
}
