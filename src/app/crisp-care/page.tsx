import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crisp Care — Monthly Mobile Detailing Plan | Puyallup WA | Crisp Auto Detailers",
  description:
    "Never think about your car's next wash again. Crisp Care delivers monthly mobile auto detailing to your home or office in Puyallup, South Hill, Sumner, Orting & Pierce County. Starting at $89/mo. No contracts.",
  keywords:
    "monthly car detailing Puyallup, mobile detailing subscription Pierce County, recurring auto detailing South Hill WA, car maintenance plan Sumner, monthly auto detail Orting, Crisp Care detailing plan",
  openGraph: {
    title: "Crisp Care — Monthly Mobile Detailing | Puyallup WA",
    description:
      "We come to you on a set schedule so your car always looks like the day we finished it. Starting at $89/mo. No contracts.",
    url: "https://crispautodetailers.com/crisp-care",
    siteName: "Crisp Auto Detailers",
    locale: "en_US",
    type: "website",
  },
};

const PHONE = "2539700858";
const PHONE_DISPLAY = "(253) 970-0858";
const BLUE = "#1BBDD4";
const NAVY = "#0D1B2A";
const NAVY_DARK = "#071018";
const ORANGE = "#F59E0B";

export default function CrispCarePage() {
  return (
    <main className="min-h-screen font-sans antialiased" style={{ backgroundColor: NAVY }}>

      {/* NAV */}
      <nav style={{ backgroundColor: NAVY_DARK, borderBottom: "1px solid rgba(27,189,212,0.15)", position: "sticky", top: 0, zIndex: 50, overflow: "visible" }}>
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between" style={{ overflow: "visible" }}>
          <Link href="/" style={{ display: "block", overflow: "visible", marginBottom: "-44px", transform: "rotate(-8deg)", transformOrigin: "center center", position: "relative", zIndex: 51 }}>
            <Image src="/crisp-logo-new.png" alt="Crisp Auto Detailers" width={148} height={148} className="object-contain" />
          </Link>
          <a href={`tel:${PHONE}`} className="text-sm font-bold px-5 py-2 rounded-full" style={{ backgroundColor: BLUE, color: "#fff" }}>
            {PHONE_DISPLAY}
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 pt-24 pb-14 text-center" style={{ backgroundColor: NAVY_DARK }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: BLUE }}>Maintenance Plan</p>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            Crisp Care — Never Think About<br className="hidden md:block" /> Your Car&apos;s Next Wash Again
          </h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed mb-8">
            We come to you on a set schedule so your car always looks like the day we finished it — no re-booking, no reminding, no letting it slide back to &ldquo;needs a full detail again.&rdquo;
          </p>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-base font-black px-8 py-4 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: BLUE, color: "#fff" }}>
            📞 Start Crisp Care — {PHONE_DISPLAY}
          </a>
          <p className="text-gray-600 text-xs mt-4">Month-to-month. Pause or cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-14 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-xl font-black mb-2 tracking-wide" style={{ color: BLUE }}>Crisp Care Pricing</h2>
          <p className="text-center text-gray-500 text-sm mb-8">Puyallup · South Hill · Sumner · Orting · Edgewood · Pierce County</p>

          <div className="rounded-xl overflow-hidden mb-6" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="grid grid-cols-3" style={{ backgroundColor: "rgba(7,16,24,0.9)" }}>
              <div className="px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Vehicle Size</div>
              <div className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-center" style={{ color: BLUE }}>Monthly</div>
              <div className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-center" style={{ color: BLUE }}>Annual (save ~15%)</div>
            </div>
            {[
              { label: "Sedan / Coupe", monthly: "$89/mo", annual: "$899/yr" },
              { label: "Mid-size SUV / Truck", monthly: "$109/mo", annual: "$1,099/yr" },
              { label: "Full-size SUV / Truck", monthly: "$129/mo", annual: "$1,299/yr" },
            ].map((row, i) => (
              <div key={row.label} className="grid grid-cols-3"
                style={{ backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="px-5 py-5 text-sm font-semibold text-white">{row.label}</div>
                <div className="px-5 py-5 text-sm font-bold text-center text-white">{row.monthly}</div>
                <div className="px-5 py-5 text-sm font-bold text-center" style={{ color: BLUE }}>{row.annual}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-600">
            Prefer to pay once? Lock in a full year and save roughly two months free — call us to set it up.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-14 px-6" style={{ backgroundColor: NAVY_DARK }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-xl font-black mb-10 tracking-wide" style={{ color: BLUE }}>How Crisp Care Works</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { step: "1", title: "Pick Your Schedule", body: "We set a recurring visit — monthly, bi-monthly, or whatever keeps your car in the condition you want." },
              { step: "2", title: "We Come to You", body: "We show up at your home, office, or wherever your car is parked. You don't move an inch." },
              { step: "3", title: "Always Looking Sharp", body: "Your car stays at the level we left it — no build-up, no emergency details, no &ldquo;I should probably wash my car.&rdquo;" },
            ].map((item) => (
              <div key={item.step} className="px-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-base font-black mx-auto mb-4" style={{ backgroundColor: BLUE, color: "#fff" }}>
                  {item.step}
                </div>
                <p className="font-bold text-white text-sm mb-2">{item.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERAMIC WARRANTY TIE-IN */}
      <section className="py-14 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl px-8 py-8" style={{ backgroundColor: "rgba(27,189,212,0.06)", border: "1px solid rgba(27,189,212,0.2)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: BLUE }}>For Ceramic Coating Customers</p>
            <h2 className="text-xl font-black text-white mb-4 leading-tight">
              Your ceramic coating warranty requires Crisp Care.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your ceramic coating is only as durable as how it&apos;s maintained. Improper washing between visits — the wrong soap, a dirty rag, an automatic car wash — can undo months of protection. That&apos;s why our ceramic coating warranty is only available to customers on a Crisp Care maintenance plan.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              We use the correct process every visit. We keep the coating in the condition it needs to be in to actually last as long as it&apos;s rated for. No guessing, no shortcuts.
            </p>
          </div>
        </div>
      </section>

      {/* COMPLIMENTARY VISIT */}
      <section className="py-14 px-6" style={{ backgroundColor: NAVY_DARK }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: BLUE }}>Try It First</p>
          <h2 className="text-2xl font-black text-white mb-4">
            Included free with Premium, Elite & Signature details.
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed mb-8">
            Every Premium, Elite, and Signature detail includes a complimentary Crisp Care visit 1–2 months after your service — so you can see exactly what &ldquo;always looking like this&rdquo; feels like before you decide if it&apos;s for you.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: "rgba(27,189,212,0.12)", color: BLUE, border: `1px solid ${BLUE}` }}>
            ← View Full Detail Packages
          </Link>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-14 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-black mb-4 tracking-wide" style={{ color: BLUE }}>Crisp Care Service Area</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-2">
            We offer Crisp Care maintenance plans throughout South Pierce County, including:
          </p>
          <p className="text-gray-300 text-sm font-semibold">
            Puyallup · South Hill · Sumner · Orting · Edgewood · Bonney Lake · Graham
          </p>
          <p className="text-gray-600 text-xs mt-4">Not sure if we cover your area? Call us — we&apos;ll let you know.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6" style={{ backgroundColor: NAVY_DARK }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-xl font-black mb-10 tracking-wide" style={{ color: BLUE }}>Crisp Care — Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What exactly happens during a Crisp Care visit?",
                a: "Each visit is a maintenance detail — hand wash, wheels and tires, exterior wipe-down, interior vacuum and surface wipe, window cleaning. Enough to keep the car at the level of a fresh detail, not just a surface clean.",
              },
              {
                q: "Is there a contract or minimum commitment?",
                a: "None. Crisp Care is month-to-month. You can pause for a month or cancel anytime — no fees, no questions.",
              },
              {
                q: "What's the difference between a Crisp Care visit and a full detail?",
                a: "A full detail is the deep reset — shampoo, decontamination, ceramic application. Crisp Care is what keeps that reset looking great between deep cleans. Most customers on Crisp Care only need a full detail once or twice a year.",
              },
              {
                q: "Why does the ceramic coating warranty require Crisp Care?",
                a: "Ceramic coatings fail when they're maintained improperly — wrong soaps, abrasive cloths, automatic car washes. We know exactly how to wash a ceramic-coated car. The warranty only holds when we're the ones doing the maintenance.",
              },
              {
                q: "Can I add Crisp Care after my initial detail?",
                a: "Yes. Call us anytime after your first service and we'll set up your recurring schedule.",
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-xl px-6 py-5" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="font-bold text-white text-sm mb-2">{faq.q}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 text-center" style={{ backgroundColor: NAVY_DARK }}>
        <div className="max-w-xl mx-auto">
          <p className="text-5xl md:text-6xl mb-2" style={{ fontFamily: "'Dancing Script', cursive", color: BLUE, lineHeight: 1.2 }}>
            Keep It Crisp.
          </p>
          <h2 className="text-2xl font-black text-white mb-2">Start Your Crisp Care Plan</h2>
          <p className="text-gray-500 text-sm mb-6">Call us to set up your first visit and recurring schedule.</p>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-xl font-black px-10 py-4 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: BLUE, color: "#fff" }}>
            📞 {PHONE_DISPLAY}
          </a>
          <p className="text-gray-600 text-xs mt-5">
            Month-to-month · No contracts · Puyallup & South Pierce County · crispautodetailers.com
          </p>
        </div>
      </section>

    </main>
  );
}
