import Link from "next/link";
import { Metadata } from "next";
import { blogPosts } from "@/lib/siteData";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://zacharydev.com/blog/${post.slug}`,
      type: "article",
    },
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <main className="page-shell">
        <div className="page-hero">
          <h1>Post Not Found</h1>
          <p>This blog post doesn&apos;t exist.</p>
          <Link href="/blog" className="nav-pill">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const currentPostIndex = sortedPosts.findIndex((p) => p.slug === params.slug);
  const previousPost = currentPostIndex < sortedPosts.length - 1 ? sortedPosts[currentPostIndex + 1] : null;
  const nextPost = currentPostIndex > 0 ? sortedPosts[currentPostIndex - 1] : null;

  return (
    <main className="page-shell">
      <article className="blog-post">
        <header className="blog-post-header">
          <Link href="/blog" className="blog-back-link">
            ← Back to Blog
          </Link>

          <h1>{post.title}</h1>

          <div className="blog-post-meta">
            <span className="blog-category">{post.category}</span>
            <span className="blog-date">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="read-time">• {post.readTime} min read</span>
          </div>

          <p className="blog-post-excerpt">{post.excerpt}</p>
        </header>

        <div className="blog-post-content">
          {post.content.split("\n").map((paragraph, idx) => {
            if (paragraph.startsWith("## ")) {
              return <h2 key={idx}>{paragraph.replace("## ", "")}</h2>;
            }
            if (paragraph.startsWith("### ")) {
              return <h3 key={idx}>{paragraph.replace("### ", "")}</h3>;
            }
            if (paragraph.trim() === "") {
              return <div key={idx} style={{ height: "0.5rem" }} />;
            }
            if (paragraph.startsWith("- ")) {
              return (
                <ul key={idx}>
                  {post.content
                    .split("\n")
                    .filter((line) => line.startsWith("- "))
                    .map((item, i) => (
                      <li key={i}>{item.replace("- ", "")}</li>
                    ))}
                </ul>
              );
            }
            if (paragraph.startsWith("1. ")) {
              return (
                <ol key={idx}>
                  {post.content
                    .split("\n")
                    .filter((line) => /^\d+\. /.test(line))
                    .map((item, i) => (
                      <li key={i}>{item.replace(/^\d+\. /, "")}</li>
                    ))}
                </ol>
              );
            }
            if (!paragraph.startsWith("## ") && !paragraph.startsWith("### ") && paragraph.trim()) {
              return <p key={idx}>{paragraph}</p>;
            }
            return null;
          })}
        </div>

        {/* CTA Section */}
        <section className="blog-post-cta">
          <div className="cta-content">
            <h3>Ready to apply these insights?</h3>
            <p>
              These strategies work best when tailored to your specific business. Let&apos;s discuss how to implement them
              for your project.
            </p>
            <Link href="/contact" className="nav-pill">
              Book a Consultation
            </Link>
          </div>
        </section>

        {/* Previous/Next Posts */}
        {(previousPost || nextPost) && (
          <nav className="blog-post-nav">
            {previousPost && (
              <Link href={`/blog/${previousPost.slug}`} className="blog-nav-link blog-nav-prev">
                <span className="nav-label">← Previous</span>
                <span className="nav-title">{previousPost.title}</span>
              </Link>
            )}
            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} className="blog-nav-link blog-nav-next">
                <span className="nav-label">Next →</span>
                <span className="nav-title">{nextPost.title}</span>
              </Link>
            )}
          </nav>
        )}
      </article>
    </main>
  );
}
