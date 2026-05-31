import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '@/data/blogPosts'
import { getBlogPostPath } from '@/utils/routes'
import { formatDate } from '@/utils/format'
import { Reveal } from '@/components/common/Reveal'

const categories = ['All', 'Talent', 'Product', 'Campus', 'Careers', 'Enterprise', 'Internships']

export function BlogPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0]

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === 'All' || post.category === category
      return matchesSearch && matchesCategory && post.slug !== featured.slug
    })
  }, [search, category, featured.slug])

  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <Reveal>
            <p className="section-label">Blog</p>
            <h1 className="font-display text-5xl">Insights on talent, tech, and campus.</h1>
            <p className="blog-hero-copy">
              Field notes on readiness, hiring operations, and building trust between campuses and companies.
            </p>
            <div className="blog-search">
              <input
                type="search"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section blog-surface">
        <div className="container">
          <div className="role-filters blog-filter-bar">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={`tab ${category === c ? 'active' : ''}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <Reveal>
            <Link to={getBlogPostPath(featured.slug)} className="blog-card blog-featured">
              <div className="blog-card-body">
                <span className="badge badge-accent">Featured</span>
                <h2 className="font-display text-3xl mb-2 text-[var(--text-primary)]">
                  {featured.title}
                </h2>
                <p className="post-meta">
                  {featured.author.name} · {formatDate(featured.publishedAt)} ·{' '}
                  {featured.readTimeMinutes} min read
                </p>
                <p>{featured.excerpt}</p>
              </div>
            </Link>
          </Reveal>

          <div className="blog-grid">
            {filtered.map((post, i) => (
              <Reveal key={post.slug} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <Link to={getBlogPostPath(post.slug)} className="blog-card">
                  <div className="blog-card-body">
                    <span className="badge">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p className="post-meta">
                      {formatDate(post.publishedAt)} · {post.readTimeMinutes} min
                    </p>
                    <p className="text-sm">{post.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section blog-digest">
        <div className="container text-center max-w-lg">
          <h2 className="font-display text-2xl mb-2">Stay in the loop</h2>
          <p className="mb-4">Monthly digest on placements, product updates, and campus stories.</p>
          <div className="blog-search">
            <input type="email" placeholder="you@email.com" />
          </div>
        </div>
      </section>
    </>
  )
}
