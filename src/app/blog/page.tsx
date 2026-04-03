import Link from "next/link";
import { Metadata } from "next";
import { blogPosts } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Blog - Zachary Ndegwa | Web Design & Development Insights",
  description:
    "Read articles on web design, Next.js performance, e-commerce optimization, SEO, and building sustainable digital products.",
  openGraph: {
    title: "Blog - Web Design & Development Insights",
    description:
      "Articles on design, performance, e-commerce, and building premium websites for growth.",
    url: "https://zacharydev.com/blog",
  },
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const categoryCounts = blogPosts.reduce(
    (acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <main className="page-shell">
      <div className="page-hero">
        <h1>Blog & Insights</h1>
        <p>
          Articles on web design, performance optimization, e-commerce conversion, SEO strategy, and
          building sustainable digital products.
        </p>
      </div>

      <section className="blog-container">
        <div className="blog-layout">
          {/* Blog Posts Grid */}
          <div className="blog-posts">
            <div className="posts-grid">
              {sortedPosts.map((post) => (
                <article key={post.slug} className="blog-card">
                  <div className="blog-card-header">
                    <div className="blog-meta">
                      <span className="blog-category">{post.category}</span>
                      <span className="blog-date">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  <h2 className="blog-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="blog-excerpt">{post.excerpt}</p>

                  <div className="blog-card-footer">
                    <span className="read-time">{post.readTime} min read</span>
                    <Link href={`/blog/${post.slug}`} className="blog-link">
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            {/* Categories */}
            <div className="sidebar-section">
              <h3>Categories</h3>
              <div className="category-list">
                {Object.entries(categoryCounts)
                  .sort((a, b) => b[1] - a[1])
                  .map(([category, count]) => (
                    <div key={category} className="category-item">
                      <span>{category}</span>
                      <span className="count">{count}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* CTA */}
            <div className="sidebar-section sidebar-cta">
              <h3>Need a custom solution?</h3>
              <p>These insights come from real projects. Let&apos;s discuss how they apply to your business.</p>
              <Link href="/contact" className="nav-pill">
                Book a Consultation
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
