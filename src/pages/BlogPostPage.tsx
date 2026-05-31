import { Link, useParams } from 'react-router-dom'
import { getBlogPostBySlug, blogPosts } from '@/data/blogPosts'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { formatDate } from '@/utils/format'
import { getBlogPostPath, ROUTES } from '@/utils/routes'
import { Card } from '@/components/common/Card'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPostBySlug(slug) : undefined
  const progress = useScrollProgress()

  if (!post) {
    return (
      <div className="container py-32 text-center">
        <h1 className="font-display text-3xl mb-4">Post not found</h1>
        <Link to={ROUTES.BLOG} className="text-[var(--accent)]">
          Back to blog
        </Link>
      </div>
    )
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <article className="post-article">
        <p className="section-label">{post.category}</p>
        <h1>{post.title}</h1>
        <p className="post-meta mb-8">
          {post.author.name} · {formatDate(post.publishedAt)} · {post.readTimeMinutes} min read
        </p>
        <div className="post-body">
          {post.content.split('\n\n').map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
        </div>
        <Card className="post-author-card">
          <p className="font-semibold text-[var(--text-primary)] mb-1">{post.author.name}</p>
          <p className="text-sm">
            Writing on campus talent, readiness, and the future of hiring in India.
          </p>
        </Card>
        <section className="related-posts">
          <h2 className="font-display text-2xl">Related posts</h2>
          <div className="related-posts-grid">
            {related.map((r) => (
              <Link key={r.slug} to={getBlogPostPath(r.slug)} className="blog-card">
                <div className="blog-card-body">
                  <h3 className="text-base">{r.title}</h3>
                  <p className="post-meta">{formatDate(r.publishedAt)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  )
}
