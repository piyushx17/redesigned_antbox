import { Accordion } from '@/components/common/Accordion'
import { Counter } from '@/components/common/Counter'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeader } from '@/components/common/SectionHeader'
import { Button } from '@/components/common/Button'
import { PahalHero } from '@/components/talentbox/PahalHero'
import { ProblemStats } from '@/components/talentbox/ProblemStats'
import { CompetitorCards } from '@/components/talentbox/CompetitorCards'
import { PahalTimeline } from '@/components/talentbox/PahalTimeline'
import { KiitCollab } from '@/components/talentbox/KiitCollab'
import { LearningGrid } from '@/components/talentbox/LearningGrid'
import { AskQuestionForm } from '@/components/talentbox/AskQuestionForm'
import { testimonials } from '@/data/testimonials'
import { ROUTES } from '@/utils/routes'

const faqItems = [
  {
    question: 'What does पहल mean?',
    answer:
      'पहल means "first step" — the bold move from campus ambition to corporate readiness with clarity and support.',
  },
  {
    question: 'Is this an income-share program?',
    answer:
      'We offer flexible models. Some cohorts may include income-share commitments — terms depend on conditions and require careful review.',
  },
  {
    question: 'Who is this for?',
    answer:
      'Final-year and motivated pre-final students targeting software, product, and analytics roles with baseline technical skills.',
  },
  {
    question: 'What about placement guarantees?',
    answer:
      'We do not make absolute placement guarantees. Placement terms depend on conditions met — readiness scores, attendance, and interview performance.',
  },
]

export function TalentBoxPage() {
  return (
    <>
      <PahalHero />
      <ProblemStats />

      <CompetitorCards />

      <PahalTimeline />
      <KiitCollab />

      <section className="section">
        <div className="container">
          <SectionHeader
            label="Who this is for"
            title="Built for students ready to commit."
            description="Strong intent, baseline skills, and willingness to show up daily."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Final-year CS/IT students targeting product and engineering roles',
              'Pre-final students with strong DSA fundamentals and project work',
              'Career switchers from adjacent STEM fields with proven self-study',
            ].map((text, i) => (
              <Reveal key={text} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="card tb-glow">{text}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <SectionHeader label="Outcomes" title="Cohort impact." align="center" />
          <div className="stats-grid">
            <div className="stat-card text-center">
              <Counter value={86} suffix="%" />
              <p className="stat-label mt-2">Interview readiness</p>
            </div>
            <div className="stat-card text-center">
              <Counter value={40} suffix="+" />
              <p className="stat-label mt-2">Hiring partners</p>
            </div>
            <div className="stat-card text-center">
              <Counter value={12} suffix=" wks" />
              <p className="stat-label mt-2">Sprint duration</p>
            </div>
            <div className="stat-card text-center">
              <Counter value={94} suffix="%" />
              <p className="stat-label mt-2">Attendance rate</p>
            </div>
          </div>
        </div>
      </section>

      <LearningGrid />

      <section className="section test-section">
        <div className="container stories-header">
          <SectionHeader label="Stories" title="Students who took their पहल." align="center" />
        </div>
        <div className="story-marquee" aria-label="Student and partner stories">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="testimonial-card story-card">
              <p>&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <div className="testimonial-avatar">{t.avatarInitials}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}, {t.company}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <SectionHeader label="FAQ" title="Honest answers." align="center" />
          <Accordion items={faqItems} />
        </div>
      </section>

      <AskQuestionForm />

      <section className="section final-cta">
        <div className="container pahal-signoff">
          <div className="pahal-mark" aria-label="Pahal">पहल</div>
          <h2>Your first step starts here.</h2>
          <p>Join the campus-to-corporate sprint with clarity, mentorship, and proof that travels with you.</p>
          <Button variant="tb" to={ROUTES.TALENTBOX_LOGIN} className="pahal-signoff-cta">
            Apply now
          </Button>
        </div>
      </section>
    </>
  )
}
