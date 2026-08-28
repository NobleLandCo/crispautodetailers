import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Mobile Auto Detailing Puyallup WA | Book Now — Crisp Auto Detailers',
  description: 'Professional mobile detailing in Puyallup, South Hill, Sumner & Pierce County. We come to you. Fast quote — call (253) 970-0858.',
  robots: 'noindex', // Landing page — keep out of organic index
}

const PHONE = '(253) 970-0858'
const PHONE_HREF = 'tel:+12539700858'

const BLUE = '#1BBDD4'
const NAVY = '#0D1B2A'
const NAVY_DARK = '#071018'
const ORANGE = '#F59E0B'

const reviews = [
  { text: "They came out to my office parking lot. Couldn't have been easier.", author: 'Rachel W., South Hill' },
  { text: "Best detail I've ever had. The interior shampoo on my seats was night and day.", author: 'Jen D., Puyallup' },
  { text: 'Showed up on time, did an incredible job on my Tacoma. Will definitely book again.', author: 'Mike T., Puyallup' },
]

export default function BookPage() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: NAVY, color: '#fff', minHeight: '100vh', paddingBottom: '80px' }}>

      {/* STICKY BOTTOM BAR — mobile */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100,
        background: BLUE, padding: '14px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.5)',
      }}>
        <a href={PHONE_HREF} style={{
          color: NAVY, fontWeight: 900, fontSize: '1.1rem',
          textDecoration: 'none', letterSpacing: '0.3px',
        }}>
          📞 Call Now — {PHONE}
        </a>
      </div>

      {/* MINI NAV — logo + phone only */}
      <nav style={{ background: NAVY_DARK, borderBottom: `1px solid rgba(27,189,212,0.15)`, padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image src="/crisp-logo-new.png" alt="Crisp Auto Detailers" width={52} height={52} style={{ objectFit: 'contain' }} />
          <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#fff' }}>Crisp Auto Detailers</span>
        </div>
        <a href={PHONE_HREF} style={{
          background: BLUE, color: NAVY, fontWeight: 800,
          fontSize: '0.9rem', padding: '8px 18px', borderRadius: '6px',
          textDecoration: 'none',
        }}>
          {PHONE}
        </a>
      </nav>

      {/* HERO */}
      <section style={{
        background: `linear-gradient(to bottom, ${NAVY_DARK} 0%, ${NAVY} 100%)`,
        padding: '56px 24px 48px',
        textAlign: 'center',
        borderBottom: `3px solid ${BLUE}`,
      }}>
        {/* Ad match headline */}
        <p style={{ color: BLUE, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>
          Mobile Detailing · Puyallup &amp; Pierce County
        </p>

        <h1 style={{ fontSize: 'clamp(1.9rem, 5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '18px', letterSpacing: '-0.5px' }}>
          We Come to Your Driveway.<br />
          <span style={{ color: BLUE }}>You Don&apos;t Lift a Finger.</span>
        </h1>

        <p style={{ fontSize: '1.1rem', color: '#b0c4d8', maxWidth: '540px', margin: '0 auto 12px', lineHeight: 1.65 }}>
          Professional mobile detailing serving Puyallup, South Hill, Sumner,
          Orting &amp; Edgewood. No drop-off. We bring everything to you.
        </p>

        {/* 5-star trust signal */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
          <span style={{ color: ORANGE, fontSize: '1.1rem' }}>★★★★★</span>
          <span style={{ color: '#b0c4d8', fontSize: '0.9rem', fontWeight: 600 }}>5.0 Google Rating · 5 Reviews</span>
        </div>

        <a href={PHONE_HREF} style={{
          display: 'inline-block',
          background: BLUE, color: NAVY,
          fontWeight: 900, fontSize: '1.25rem',
          padding: '18px 48px', borderRadius: '8px',
          textDecoration: 'none',
          boxShadow: '0 6px 28px rgba(27,189,212,0.45)',
          letterSpacing: '0.3px',
        }}>
          📞 Get a Free Quote
        </a>

        <p style={{ color: '#5a7a95', fontSize: '0.82rem', marginTop: '14px' }}>
          Mon–Sat 8am–6pm · 2-minute quote over the phone · No commitment
        </p>
      </section>

      {/* TRUST BAR */}
      <div style={{
        background: NAVY_DARK,
        borderBottom: '1px solid rgba(27,189,212,0.1)',
        padding: '16px 24px',
        display: 'flex', justifyContent: 'center',
        gap: '32px', flexWrap: 'wrap',
      }}>
        {[
          '✅ Fully Insured',
          '⭐ 5-Star Rated on Google',
          '🚗 We Come to You',
          '💧 Eco-Friendly Products',
          '🔒 Transparent Pricing',
        ].map(item => (
          <span key={item} style={{ color: '#b0c4d8', fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap' }}>{item}</span>
        ))}
      </div>

      {/* PACKAGES */}
      <section style={{ padding: '60px 24px', maxWidth: '920px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: 900, marginBottom: '6px' }}>
          Pick Your Package
        </h2>
        <p style={{ textAlign: 'center', color: '#6a8aa5', marginBottom: '36px', fontSize: '0.9rem' }}>
          Sedan / Mid-SUV / Full-SUV &amp; Truck — priced by vehicle size
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
          {[
            {
              name: 'Essential',
              price: '$199 / $229 / $259',
              badge: null,
              includes: ['Hand wash + foam bath', 'Wheels &amp; tires cleaned', 'Full interior vacuum', 'Windows + surfaces', '3-month ceramic sealant'],
            },
            {
              name: 'Premium',
              price: '$259 / $289 / $319',
              badge: 'MOST POPULAR',
              includes: ['Everything in Essential', 'Deep wheel barrel clean', 'Carpet &amp; seat shampoo', 'Door jambs + sills', '6-month ceramic sealant'],
            },
            {
              name: 'Elite',
              price: '$339 / $369 / $399',
              badge: null,
              includes: ['Everything in Premium', 'Clay bar decontamination', 'Leather conditioning', 'Odor elimination', '12-month ceramic sealant'],
            },
            {
              name: 'Signature',
              price: '$450 / $490 / $530',
              badge: 'PRE-SALE',
              includes: ['Full Elite package', 'Engine bay detail', 'Black trim restoration', 'Exhaust tip polish', 'Glass ceramic coating'],
            },
          ].map(pkg => (
            <div key={pkg.name} style={{
              background: pkg.badge === 'MOST POPULAR' ? 'rgba(27,189,212,0.08)' : 'rgba(255,255,255,0.03)',
              border: `2px solid ${pkg.badge === 'MOST POPULAR' ? BLUE : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '12px',
              padding: '24px 20px',
              position: 'relative',
            }}>
              {pkg.badge && (
                <div style={{
                  position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)',
                  background: pkg.badge === 'MOST POPULAR' ? BLUE : ORANGE,
                  color: NAVY, fontSize: '0.72rem', fontWeight: 900,
                  padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap',
                  letterSpacing: '1px',
                }}>
                  {pkg.badge}
                </div>
              )}
              <h3 style={{ fontWeight: 800, fontSize: '1.05rem', marginBottom: '4px', color: pkg.badge === 'MOST POPULAR' ? BLUE : '#fff' }}>{pkg.name}</h3>
              <p style={{ fontWeight: 700, fontSize: '0.95rem', color: '#d0e8f0', marginBottom: '16px' }}>{pkg.price}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {pkg.includes.map((item, i) => (
                  <li key={i} style={{ color: '#8ab0c8', fontSize: '0.82rem', padding: '3px 0', display: 'flex', gap: '6px' }}>
                    <span style={{ color: BLUE, flexShrink: 0 }}>✓</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <a href={PHONE_HREF} style={{
            display: 'inline-block',
            background: BLUE, color: NAVY, fontWeight: 800,
            fontSize: '1.1rem', padding: '14px 40px', borderRadius: '8px',
            textDecoration: 'none',
          }}>
            Call to Book — {PHONE}
          </a>
          <p style={{ color: '#4a6a85', fontSize: '0.82rem', marginTop: '10px' }}>
            Not sure which package? We&apos;ll help you pick on the phone.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: NAVY_DARK, borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '60px 24px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '40px' }}>How It Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '36px' }}>
            {[
              { n: '1', title: 'Call for a Quote', body: 'Tell us your vehicle and location. We quote you in 2 minutes — no forms, no back-and-forth.' },
              { n: '2', title: 'We Show Up', body: 'At your home, office, or wherever your car is parked. We bring all our own water and equipment.' },
              { n: '3', title: 'Drive Away Crisp', body: 'Pay when the job is done. No surprise charges. Just a car that looks like you just drove it off the lot.' },
            ].map(s => (
              <div key={s.n}>
                <div style={{
                  width: '54px', height: '54px', background: BLUE, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px', fontSize: '1.4rem', fontWeight: 900, color: NAVY,
                }}>{s.n}</div>
                <h3 style={{ fontWeight: 800, marginBottom: '10px', fontSize: '1rem' }}>{s.title}</h3>
                <p style={{ color: '#7a9ab5', fontSize: '0.88rem', lineHeight: 1.6 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: 900, marginBottom: '8px' }}>
            What Customers Are Saying
          </h2>
          <p style={{ textAlign: 'center', color: '#6a8aa5', marginBottom: '36px' }}>5.0 ★ on Google</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {reviews.map((r, i) => (
              <div key={i} style={{
                background: 'rgba(27,189,212,0.06)',
                border: '1px solid rgba(27,189,212,0.15)',
                borderRadius: '12px',
                padding: '24px',
              }}>
                <div style={{ color: ORANGE, fontSize: '1rem', marginBottom: '12px' }}>★★★★★</div>
                <p style={{ color: '#c8dce8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '14px' }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <p style={{ color: BLUE, fontSize: '0.82rem', fontWeight: 700 }}>— {r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: NAVY_DARK, borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '60px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: 900, marginBottom: '40px' }}>Quick Answers</h2>
          {[
            { q: 'Do you need water or electricity at my location?', a: "No. We carry our own water and power everything ourselves. We just need access to your vehicle." },
            { q: 'How long does it take?', a: "Essential runs 2–3 hours. Premium is 3–4 hours. Elite and Signature are 5–6 hours. We'll confirm timing when you call." },
            { q: 'Can I get same-day or next-day service?', a: "Often yes — call and we'll check availability in real time. Weekends fill fast." },
            { q: 'What payment do you accept?', a: "Cash, card, Venmo, Zelle. You pay when the job is finished and you're happy." },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '22px 0' }}>
              <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px' }}>{faq.q}</h3>
              <p style={{ color: '#7a9ab5', fontSize: '0.88rem', lineHeight: 1.65 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: '48px 24px', textAlign: 'center' }}>
        <p style={{ color: BLUE, fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
          Service Area
        </p>
        <p style={{ color: '#b0c4d8', fontSize: '1rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
          <strong style={{ color: '#fff' }}>Puyallup · South Hill · Sumner · Orting · Edgewood</strong>
          <br />and surrounding Pierce County. Not sure if we cover your area? Just call.
        </p>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ background: NAVY_DARK, borderTop: `3px solid ${BLUE}`, padding: '56px 24px 80px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 900, marginBottom: '12px' }}>
          Ready for a Crisp Car?
        </h2>
        <p style={{ color: '#7a9ab5', marginBottom: '30px', fontSize: '1rem' }}>
          Call now for a fast, no-pressure quote.
        </p>
        <a href={PHONE_HREF} style={{
          display: 'inline-block',
          background: BLUE, color: NAVY,
          fontWeight: 900, fontSize: '1.35rem',
          padding: '20px 56px', borderRadius: '8px',
          textDecoration: 'none',
          boxShadow: '0 6px 32px rgba(27,189,212,0.5)',
        }}>
          📞 {PHONE}
        </a>
        <p style={{ color: '#3a5a75', fontSize: '0.8rem', marginTop: '20px' }}>
          © {new Date().getFullYear()} Crisp Auto Detailers · Puyallup, WA · Fully Insured
        </p>
      </section>

    </main>
  )
}
