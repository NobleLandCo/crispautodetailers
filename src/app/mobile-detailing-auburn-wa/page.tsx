import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Auto Detailing Auburn WA | Crisp Auto Detailers",
  description: "Mobile auto detailing in Auburn, WA. We come to your home or office with all the equipment — ceramic coating, interior shampoo, paint correction. No drop-off. Call (253) 970-0858.",
  keywords: "mobile auto detailing Auburn WA, car detailing Auburn, mobile detailer Auburn Washington, auto detail Auburn WA",
  openGraph: {
    title: "Mobile Auto Detailing Auburn WA | Crisp Auto Detailers",
    description: "Professional mobile detailing in Auburn, WA. We come to you. Ceramic coating, interior deep clean, full details. Call (253) 970-0858.",
    url: "https://crispautodetailers.com/mobile-detailing-auburn-wa",
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

export default function AuburnPage() {
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
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: TEAL }}>Auburn, WA</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Mobile Auto Detailing<br />in Auburn, WA
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Professional mobile detailing that comes to you in Auburn — your driveway, job site, or office lot. All equipment provided. No drop-off, no hassle.
          </p>
          <a href={`tel:${PHONE}`} className="inline-block font-black px-8 py-4 rounded-full text-lg" style={{ backgroundColor: TEAL, color: "#fff" }}>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-6">Mobile Detailing for Auburn Drivers</h2>
          <p className="text-gray-400 mb-4">Auburn sits right on the King–Pierce County line, and it's a high-traffic area — the Green River valley, Auburn Way, the casino district, and a huge volume of work trucks and commercial vehicles. It's also a city with a lot of serious car people who actually care about their paint.</p>
          <p className="text-gray-400 mb-4">Mobile detailing is especially practical in Auburn because parking options vary — from single-family homes in Lea Hill or West Hill to apartments near downtown. We work wherever you are. If you have a covered spot or driveway, great. If not, we make it work.</p>
          <p className="text-gray-400 mb-8">We cover all of Auburn — West Hill, Lea Hill, Auburn Way North and South, the Les Gove area, downtown, and surrounding neighborhoods. Call to confirm we can reach your address.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🚗", title: "We Come to You", sub: "Home, office, job site — anywhere the car can be parked safely" },
              { icon: "🛡️", title: "Ceramic Coating", sub: "1–2 years of hydrophobic protection on Elite and Signature packages" },
              { icon: "🐾", title: "Pet Hair Add-On", sub: "Dog hair embedded in fabric? We have the tools to pull it out properly" },
              { icon: "📍", title: "King & Pierce County", sub: "Auburn, Algona, Pacific, and surrounding areas all in range" },
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

      <section className="py-14 px-6" style={{ backgroundColor: NAVY_DARK }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-2">Packages & Pricing</h2>
          <p className="text-gray-500 text-sm mb-8">Sedan / Mid-SUV / Full-SUV</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Essential", price: "$199 / $229 / $259", desc: "Exterior foam wash, clay bar, wax, tire shine, interior vacuum and wipe-down. Great for quarterly maintenance." },
              { name: "Premium", price: "$259 / $289 / $319", desc: "Everything in Essential + interior shampoo, seat cleaning, odor treatment, dashboard deep clean." },
              { name: "Elite", price: "$339 / $369 / $399", desc: "Full interior/exterior restoration, paint correction, ceramic coating. Best for long-term protection." },
              { name: "Signature Pre-Sale", price: "$450 / $490 / $530", desc: "Purpose-built for vehicles going to market. Maximizes presentation and resale value." },
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
          <h2 className="text-2xl font-black text-white mb-3">Book Your Auburn Detail</h2>
          <p className="text-gray-400 mb-8">New customers get $20 off their first full detail. Call or text to book.</p>
          <a href={`tel:${PHONE}`} className="inline-block font-black px-8 py-4 rounded-full text-lg" style={{ backgroundColor: TEAL, color: "#fff" }}>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <div className="text-center py-6 text-gray-600 text-xs" style={{ borderTop: "1px solid rgba(27,189,212,0.08)" }}>
        Also serving:{" "}
        <Link href="/mobile-detailing-tacoma-wa" style={{ color: TEAL }}>Tacoma</Link> ·{" "}
        <Link href="/mobile-detailing-south-hill-wa" style={{ color: TEAL }}>South Hill</Link> ·{" "}
        <Link href="/mobile-detailing-sumner-wa" style={{ color: TEAL }}>Sumner</Link> ·{" "}
        <Link href="/mobile-detailing-orting-wa" style={{ color: TEAL }}>Orting</Link> ·{" "}
        <Link href="/mobile-detailing-edgewood-wa" style={{ color: TEAL }}>Edgewood</Link> ·{" "}
        <Link href="/" style={{ color: TEAL }}>Puyallup</Link>
      </div>

    </main>
  );
}
