import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Auto Detailing Tips & Local Guides | Crisp Auto Detailers",
  description:
    "Car care tips, detailing guides, and local resources for Puyallup, South Hill, Sumner, and Pierce County drivers. From ceramic coating to interior cleaning — learn from the pros.",
  openGraph: {
    title: "Auto Detailing Tips & Local Guides | Crisp Auto Detailers",
    description:
      "Car care tips, detailing guides, and local resources for Puyallup, South Hill, Sumner, and Pierce County drivers.",
    url: "https://crispautodetailers.com/blog",
    siteName: "Crisp Auto Detailers",
    locale: "en_US",
    type: "website",
  },
};

const NAVY = "#0D1B2A";
const NAVY_DARK = "#071018";
const TEAL = "#1BBDD4";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main style={{ backgroundColor: NAVY, minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ backgroundColor: NAVY_DARK, borderBottom: "1px solid rgba(27,189,212,0.15)", position: "sticky", top: 0, zIndex: 50 }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-lg tracking-tight">
            Crisp Auto Detailers
          </Link>
          <Link
            href="tel:2539700858"
            className="text-sm font-bold px-5 py-2 rounded-full"
            style={{ backgroundColor: TEAL, color: "#fff" }}
          >
            (253) 970-0858
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-16 px-6" style={{ backgroundColor: NAVY_DARK }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: TEAL }}>
            Car Care Resources
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Detailing Tips & Local Guides
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Honest advice for Puyallup and Pierce County drivers — ceramic coating, interior care, how often to detail, and more.
          </p>
        </div>
      </section>

      {/* POST GRID */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden transition-all"
              style={{
                backgroundColor: NAVY_DARK,
                border: "1px solid rgba(27,189,212,0.12)",
              }}
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: "rgba(27,189,212,0.12)", color: TEAL }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readingTime}</span>
                </div>
                <h2 className="text-base font-bold text-white mb-3 leading-snug group-hover:text-[#1BBDD4] transition-colors flex-1">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <span className="text-sm font-semibold flex items-center gap-1" style={{ color: TEAL }}>
                  Read the guide →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ borderTop: "1px solid rgba(27,189,212,0.1)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Ready to Book a Detail?
          </h2>
          <p className="text-gray-400 mb-8">
            We come to you — Puyallup, South Hill, Sumner, Orting, Edgewood, and Pierce County. First detail gets $20 off.
          </p>
          <a
            href="tel:2539700858"
            className="inline-block font-bold px-8 py-4 rounded-full text-lg"
            style={{ backgroundColor: TEAL, color: "#fff" }}
          >
            Call (253) 970-0858
          </a>
        </div>
      </section>

    </main>
  );
}
