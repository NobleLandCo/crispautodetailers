import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-posts";

const NAVY = "#0D1B2A";
const NAVY_DARK = "#071018";
const TEAL = "#1BBDD4";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      url: `https://crispautodetailers.com/blog/${post.slug}`,
      siteName: "Crisp Auto Detailers",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

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
      <section className="py-14 px-6" style={{ backgroundColor: NAVY_DARK }}>
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm mb-6 transition-colors"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            ← All guides
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: "rgba(27,189,212,0.12)", color: TEAL }}
            >
              {post.category}
            </span>
            <span className="text-xs text-gray-500">{post.readingTime}</span>
            <span className="text-xs text-gray-500">{formattedDate}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-gray-400 text-base max-w-2xl">{post.excerpt}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{ backgroundColor: NAVY_DARK, border: "1px solid rgba(27,189,212,0.1)" }}
          >
            <article
              className="prose prose-invert prose-lg max-w-none"
              style={{
                "--tw-prose-body": "#9ca3af",
                "--tw-prose-headings": "#ffffff",
                "--tw-prose-links": TEAL,
                "--tw-prose-bold": "#ffffff",
                "--tw-prose-counters": "#9ca3af",
                "--tw-prose-bullets": TEAL,
                "--tw-prose-hr": "rgba(27,189,212,0.2)",
                "--tw-prose-th-borders": "rgba(27,189,212,0.2)",
                "--tw-prose-td-borders": "rgba(27,189,212,0.1)",
              } as React.CSSProperties}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl p-8 text-center" style={{ backgroundColor: NAVY_DARK, border: `1px solid ${TEAL}30` }}>
            <h2 className="text-xl font-black text-white mb-2">
              Ready for a Professional Detail?
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              We come to you — Puyallup, South Hill, Sumner, Orting, Edgewood. First detail gets $20 off.
            </p>
            <a
              href="tel:2539700858"
              className="inline-block font-bold px-7 py-3 rounded-full"
              style={{ backgroundColor: TEAL, color: "#fff" }}
            >
              Call (253) 970-0858
            </a>
          </div>

          <div className="mt-6 text-center">
            <Link href="/blog" className="text-sm font-semibold" style={{ color: TEAL }}>
              ← Back to all guides
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
