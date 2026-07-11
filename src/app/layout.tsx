import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crisp Auto Detailers | Mobile Detailing in Puyallup & South Pierce County",
  description:
    "Professional mobile auto detailing serving Puyallup, South Hill, Sumner, Orting & Edgewood. We come to you. Book online or call 253-970-0858.",
  keywords:
    "mobile auto detailing Puyallup, car detailing South Hill WA, mobile detailer Sumner, auto detail Orting, car detail Edgewood WA",
  openGraph: {
    title: "Crisp Auto Detailers | Mobile Detailing Puyallup WA",
    description:
      "We come to you. Professional mobile detailing serving South Pierce County.",
    url: "https://crispautodetailers.com",
    siteName: "Crisp Auto Detailers",
    locale: "en_US",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Crisp Auto Detailers",
  description: "Professional mobile auto detailing serving Puyallup, South Hill, Sumner, Orting, Edgewood, and Pierce County, WA. We come to you.",
  url: "https://crispautodetailers.com",
  telephone: "+12539700858",
  email: "info@crispautodetailers.com",
  areaServed: [
    { "@type": "City", name: "Puyallup", containedInPlace: { "@type": "State", name: "Washington" } },
    { "@type": "City", name: "South Hill", containedInPlace: { "@type": "State", name: "Washington" } },
    { "@type": "City", name: "Sumner", containedInPlace: { "@type": "State", name: "Washington" } },
    { "@type": "City", name: "Orting", containedInPlace: { "@type": "State", name: "Washington" } },
    { "@type": "City", name: "Edgewood", containedInPlace: { "@type": "State", name: "Washington" } },
  ],
  priceRange: "$$",
  openingHours: "Mo-Sa 08:00-18:00",
  hasMap: "https://maps.google.com/?q=Crisp+Auto+Detailers+Puyallup+WA",
  sameAs: [
    "https://www.instagram.com/crispautodetailers",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "1",
    bestRating: "5",
    worstRating: "1",
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Essential Mobile Detail", description: "Exterior foam wash, clay bar, wax, tire shine, interior vacuum and wipe-down" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Premium Mobile Detail", description: "Full interior shampoo, seat cleaning, odor treatment, exterior detail with paint sealant" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Elite Mobile Detail", description: "Paint correction, ceramic coating, full interior and exterior restoration" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Signature Pre-Sale Detail", description: "Pre-listing detail package designed to maximize vehicle resale value" } },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="msvalidate.01" content="D3758E7DFA29DF1EAF3615BD609B0E39" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
