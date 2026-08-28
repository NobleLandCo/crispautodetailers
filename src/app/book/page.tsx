import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Mobile Auto Detailing Puyallup WA | Crisp Auto Detailers',
  description: 'Professional mobile detailing in Puyallup, South Hill, Sumner & Pierce County. We come to you. Call (253) 970-0858.',
  robots: 'noindex',
}

const PHONE = '(253) 970-0858'
const PHONE_HREF = 'tel:+12539700858'
const BLUE = '#1BBDD4'
const NAVY = '#0D1B2A'
const NAVY_DARK = '#071018'
const ORANGE = '#F59E0B'
const SCRIPT = "'Dancing Script', cursive"

const reviews = [
  { text: "They came out to my office parking lot. Couldn't have been easier.", author: 'Rachel W., South Hill' },
  { text: "Best detail I've ever had. The interior shampoo on my seats was night and day.", author: 'Jen D., Puyallup' },
  { text: 'Showed up on time, did an incredible job on my Tacoma. Will definitely book again.', author: 'Mike T., Puyallup' },
]

// Photos from Josh
const galleryPhotos = [
  { src: '/lp-kia-exterior.jpg', alt: 'Kia exterior after full mobile detail — Crisp Auto Detailers Puyallup' },
  { src: '/lp-orange-truck.jpg', alt: 'Classic truck exterior detail — showroom finish' },
  { src: '/lp-raptor-ba.jpg', alt: 'Ford Raptor exterior before and after detail' },
  { src: '/lp-jeep-ba.jpg', alt: 'Interior before and after deep clean and shampoo' },
  { src: '/lp-suv-cargo.jpg', alt: 'SUV cargo area after professional detail' },
  { src: '/lp-trunk.jpg', alt: 'Trunk area after mobile detail service' },
]

export default function BookPage() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: NAVY, color: '#fff', minHeight: '100vh', paddingBottom: '80px' }}>

      {/* STICKY BOTTOM BAR */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100,
        background: BLUE, padding: '15px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.5)',
      }}>
        <a href={PHONE_HREF} style={{ color: NAVY, fontWeight: 900, fontSize: '1.15rem', textDecoration: 'none', letterSpacing: '0.3px' }}>
          📞 Call Now — {PHONE}
        </a>
      </div>

      {/* MINI NAV — big logo + phone */}
      <nav style={{
        background: NAVY_DARK,
        borderBottom: '1px solid rgba(27,189,212,0.15)',
        padding: '10px 28px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Big logo */}
        <div style={{ position: 'relative', width: 130, height: 130, marginBottom: -40, zIndex: 10, transform: 'rotate(-8deg)', transformOrigin: 'center' }}>
          <Image src="/crisp-logo-new.png" alt="Crisp Auto Detailers" fill style={{ objectFit: 'contain' }} />
        </div>
        <a href={PHONE_HREF} style={{
          background: BLUE, color: NAVY, fontWeight: 800,
          fontSize: '0.95rem', padding: '10px 22px', borderRadius: '6px',
          textDecoration: 'none', whiteSpace: 'nowrap',
        }}>
          {PHONE}
        </a>
      </nav>

      {/* HERO */}
      <section style={{
        position: 'relative',
        padding: '64px 24px 52px',
        textAlign: 'center',
        borderBottom: `3px solid ${BLUE}`,
        overflow: 'hidden',
      }}>
        {/* Hero background image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/lp-orange-truck.jpg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} priority />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, rgba(7,16,24,0.82) 0%, rgba(13,27,42,0.88) 100%)` }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ color: BLUE, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 700 }}>
          Mobile Detailing · Puyallup &amp; Pierce County
        </p>

        {/* Script tagline */}
        <p style={{ fontFamily: SCRIPT, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: ORANGE, marginBottom: '16px', lineHeight: 1.2 }}>
          Keep It Crisp.
        </p>

        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '18px', letterSpacing: '-0.5px' }}>
          We Come to Your Driveway.<br />
          <span style={{ color: BLUE }}>You Don&apos;t Lift a Finger.</span>
        </h1>

        <p style={{ fontSize: '1.1rem', color: '#b0c4d8', maxWidth: '560px', margin: '0 auto 16px', lineHeight: 1.65 }}>
          Professional mobile detailing serving Puyallup, South Hill, Sumner,
          Orting &amp; Edgewood. We come to you.
        </p>

        {/* Stars — no review count */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '36px' }}>
          <span style={{ color: ORANGE, fontSize: '1.2rem' }}>★★★★★</span>
          <span style={{ color: '#b0c4d8', fontSize: '0.9rem', fontWeight: 600 }}>5-Star Rated on Google</span>
        </div>

        <a href={PHONE_HREF} style={{
          display: 'inline-block',
          background: BLUE, color: NAVY,
          fontWeight: 900, fontSize: '1.3rem',
          padding: '18px 52px', borderRadius: '8px',
          textDecoration: 'none',
          boxShadow: '0 6px 30px rgba(27,189,212,0.45)',
          letterSpacing: '0.3px',
        }}>
          📞 Get a Free Quote
        </a>

        <p style={{ color: '#5a7a95', fontSize: '0.82rem', marginTop: '14px' }}>
          Mon–Sat 8am–6pm · 2-minute quote · No commitment
        </p>
        </div>
      </section>

      {/* PROMO BANNER */}
      <div style={{ textAlign: 'center', fontSize: '0.9rem', fontWeight: 700, padding: '12px 24px', letterSpacing: '1px', background: ORANGE, color: '#fff' }}>
        ★ NEW CUSTOMER OFFER: $20 OFF YOUR FIRST FULL DETAIL ★
      </div>

      {/* TRUST BAR */}
      <div style={{
        background: NAVY_DARK,
        borderBottom: '1px solid rgba(27,189,212,0.1)',
        padding: '16px 24px',
        display: 'flex', justifyContent: 'center',
        gap: '28px', flexWrap: 'wrap',
      }}>
        {['✅ Fully Insured', '⭐ 5-Star on Google', '🚗 We Come to You', '💧 Eco-Friendly', '🔒 Upfront Pricing'].map(item => (
          <span key={item} style={{ color: '#b0c4d8', fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap' }}>{item}</span>
        ))}
      </div>

      {/* REVIEWS — moved up for early social proof */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: 900, marginBottom: '8px' }}>What Customers Say</h2>
          <p style={{ textAlign: 'center', color: ORANGE, fontSize: '1.1rem', marginBottom: '32px' }}>★★★★★</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {reviews.map((r, i) => (
              <div key={i} style={{
                background: 'rgba(27,189,212,0.06)',
                border: '1px solid rgba(27,189,212,0.15)',
                borderRadius: '12px', padding: '24px',
              }}>
                <div style={{ color: ORANGE, fontSize: '0.95rem', marginBottom: '12px' }}>★★★★★</div>
                <p style={{ color: '#c8dce8', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '14px' }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <p style={{ color: BLUE, fontSize: '0.82rem', fontWeight: 700 }}>— {r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY — hero shot full width, then grid */}
      <section style={{ padding: '60px 24px', maxWidth: '960px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: 900, marginBottom: '8px' }}>Our Work</h2>
        <p style={{ textAlign: 'center', color: '#6a8aa5', marginBottom: '28px', fontSize: '0.9rem' }}>Real results from real customers in South Pierce County</p>

        {/* Full-width hero photo */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '12px', position: 'relative', height: '380px' }}>
          <Image src={galleryPhotos[0].src} alt={galleryPhotos[0].alt} fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </div>

        {/* 2x2 grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '10px' }}>
          {galleryPhotos.slice(1, 5).map(photo => (
            <div key={photo.src} style={{ borderRadius: '10px', overflow: 'hidden', position: 'relative', aspectRatio: '4/3' }}>
              <Image src={photo.src} alt={photo.alt} fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>

        {/* Last photo full width */}
        <div style={{ borderRadius: '10px', overflow: 'hidden', position: 'relative', height: '260px' }}>
          <Image src={galleryPhotos[5].src} alt={galleryPhotos[5].alt} fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </div>
      </section>

      {/* PACKAGES */}
      <section style={{ padding: '20px 24px 60px', maxWidth: '960px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: 900, marginBottom: '6px' }}>Pick Your Package</h2>
        <p style={{ textAlign: 'center', color: '#6a8aa5', marginBottom: '36px', fontSize: '0.9rem' }}>
          Priced by vehicle size — Sedan / Mid-SUV / Full-SUV &amp; Truck
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
          {[
            {
              name: 'Essential', price: '$199 / $229 / $259', badge: null,
              includes: ['Hand wash + foam bath', 'Wheels &amp; tires cleaned', 'Full interior vacuum', 'Windows + surfaces wiped', '3-month ceramic sealant'],
            },
            {
              name: 'Premium', price: '$259 / $289 / $319', badge: 'MOST POPULAR',
              includes: ['Everything in Essential', 'Deep wheel barrel clean', 'Carpet &amp; seat shampoo', 'Door jambs + sills', '6-month ceramic sealant'],
            },
            {
              name: 'Elite', price: '$339 / $369 / $399', badge: null,
              includes: ['Everything in Premium', 'Clay bar decontamination', 'Leather conditioning', 'Odor elimination', '12-month ceramic sealant'],
            },
            {
              name: 'Pre-Sale Detail', price: '$450 / $490 / $530', badge: 'PRE-SALE',
              includes: ['Full Elite package', 'Engine bay detail', 'Black trim restoration', 'Exhaust tip polish', 'Glass ceramic coating'],
            },
          ].map(pkg => (
            <div key={pkg.name} style={{
              background: pkg.badge === 'MOST POPULAR' ? 'rgba(27,189,212,0.09)' : 'rgba(255,255,255,0.03)',
              border: `2px solid ${pkg.badge === 'MOST POPULAR' ? BLUE : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '12px', padding: '26px 20px', position: 'relative',
            }}>
              {pkg.badge && (
                <div style={{
                  position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)',
                  background: pkg.badge === 'MOST POPULAR' ? BLUE : ORANGE,
                  color: NAVY, fontSize: '0.72rem', fontWeight: 900,
                  padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap', letterSpacing: '1px',
                }}>{pkg.badge}</div>
              )}
              <h3 style={{ fontWeight: 800, fontSize: '1.05rem', marginBottom: '4px', color: pkg.badge === 'MOST POPULAR' ? BLUE : '#fff' }}>{pkg.name}</h3>
              <p style={{ fontWeight: 700, fontSize: '0.95rem', color: '#d0e8f0', marginBottom: '16px' }}>{pkg.price}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {pkg.includes.map((item, i) => (
                  <li key={i} style={{ color: '#8ab0c8', fontSize: '0.82rem', padding: '4px 0', display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                    <span style={{ color: BLUE, flexShrink: 0, marginTop: '1px' }}>✓</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <a href={PHONE_HREF} style={{
            display: 'inline-block', background: BLUE, color: NAVY,
            fontWeight: 800, fontSize: '1.1rem', padding: '14px 40px', borderRadius: '8px', textDecoration: 'none',
          }}>
            Call to Book — {PHONE}
          </a>
          <p style={{ color: '#4a6a85', fontSize: '0.82rem', marginTop: '10px' }}>Not sure which to pick? We&apos;ll help you on the phone.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: NAVY_DARK, borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '60px 24px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '40px' }}>How It Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '36px' }}>
            {[
              { n: '1', title: 'Call for a Quote', body: 'Tell us your vehicle and location. 2-minute quote, no forms, no back-and-forth.' },
              { n: '2', title: 'We Show Up', body: 'At your home, office, or wherever your car is. We bring our own water and all equipment.' },
              { n: '3', title: 'Drive Away Crisp', body: 'Pay when the job is done. No surprise charges. Just a car that looks brand new.' },
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

      {/* FAQ */}
      <section style={{ background: NAVY_DARK, borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '60px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: 900, marginBottom: '40px' }}>Quick Answers</h2>
          {[
            { q: 'Do I need to be home while you work?', a: "Nope. As long as we have access to the vehicle, you can go about your day. Most customers just leave us the keys and come back to a clean car." },
            { q: 'How long does a detail take?', a: "Essential: 2–3 hrs. Premium: 3–4 hrs. Elite and Signature: 5–6 hrs. We'll confirm when you call." },
            { q: 'Can I get same-day or next-day service?', a: "Often yes. Call and we'll check availability in real time. Weekends book fast." },
            { q: 'What payment do you accept?', a: "Cash, card, Venmo, or Zelle. You pay when the job is done and you're happy with it." },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '22px 0' }}>
              <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px' }}>{faq.q}</h3>
              <p style={{ color: '#7a9ab5', fontSize: '0.88rem', lineHeight: 1.65 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE AREA */}
      <section style={{ padding: '50px 24px', textAlign: 'center' }}>
        <p style={{ color: BLUE, fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Service Area</p>
        <p style={{ color: '#b0c4d8', fontSize: '1rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
          <strong style={{ color: '#fff' }}>Puyallup · South Hill · Sumner · Orting · Edgewood</strong>
          <br />and surrounding Pierce County. Not sure if we cover you? Just call.
        </p>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ background: NAVY_DARK, borderTop: `3px solid ${BLUE}`, padding: '60px 24px 100px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: SCRIPT, fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '12px', color: ORANGE }}>Ready for a Crisp Car?</h2>
        <p style={{ color: '#7a9ab5', marginBottom: '30px', fontSize: '1rem' }}>Call now for a fast, no-pressure quote.</p>
        <a href={PHONE_HREF} style={{
          display: 'inline-block', background: BLUE, color: NAVY,
          fontWeight: 900, fontSize: '1.4rem',
          padding: '20px 60px', borderRadius: '8px', textDecoration: 'none',
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
