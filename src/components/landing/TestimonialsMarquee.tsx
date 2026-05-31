import { testimonials } from '@/data/testimonials'
import { SectionHeader } from '@/components/common/SectionHeader'

export function TestimonialsMarquee() {
  const items = [...testimonials, ...testimonials]

  return (
    <section className="section test-section">
      <div className="container mb-10">
        <SectionHeader label="Proof" title="What our community says." align="center" />
      </div>
      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {items.map((t, i) => (
            <blockquote key={`${t.name}-${i}`} className="testimonial-card">
              <p>&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <div className="testimonial-avatar">{t.avatarInitials}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>
                    {t.role}, {t.company}
                  </span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
