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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
