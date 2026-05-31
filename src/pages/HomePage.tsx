import { LogoMarquee } from '@/components/common/LogoMarquee'
import { Accordion } from '@/components/common/Accordion'
import { Counter } from '@/components/common/Counter'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeader } from '@/components/common/SectionHeader'
import { LandingHero } from '@/components/landing/LandingHero'
import { FeatureGrid } from '@/components/landing/FeatureGrid'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { ComparisonTable } from '@/components/landing/ComparisonTable'
import { TestimonialsMarquee } from '@/components/landing/TestimonialsMarquee'
import { FinalCta } from '@/components/landing/FinalCta'

const faqItems = [
  {
    question: 'What is AntBox?',
    answer:
      'AntBox is talent infrastructure that connects students, mentors, and recruiters on one operating layer — from campus readiness to high-signal hiring.',
  },
  {
    question: 'How is TalentBox different from a bootcamp?',
    answer:
      'TalentBox aligns incentives around outcomes, not enrollment. You get mentor-led sprints, live readiness scoring, and recruiter-ready proof — with transparent placement terms.',
  },
  {
    question: 'Who can join पहल?',
    answer:
      'Final-year and pre-final students with strong intent and baseline skills. Cohorts launch on campus with KIIT and expand regionally.',
  },
  {
    question: 'Is there a high upfront cost?',
    answer:
      'पहल is designed to reduce upfront barriers compared to traditional models. Specific terms depend on cohort and conditions met.',
  },
]

export function HomePage() {
  return (
    <>
      <LandingHero />
      <LogoMarquee />
      <FeatureGrid />
      <HowItWorks />
      <ComparisonTable />
      <TestimonialsMarquee />
      <section className="section">
        <div className="container">
          <SectionHeader label="Impact" title="Numbers that matter." align="center" />
          <div className="stats-grid">
            <Reveal>
              <div className="stat-card text-center">
                <Counter value={12} suffix="k+" className="text-4xl" />
                <p className="stat-label mt-2">Profiles</p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="stat-card text-center">
                <Counter value={420} suffix="+" className="text-4xl" />
                <p className="stat-label mt-2">Recruiting teams</p>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="stat-card text-center">
                <Counter value={88} suffix="%" className="text-4xl" />
                <p className="stat-label mt-2">Readiness uplift</p>
              </div>
            </Reveal>
            <Reveal delay={4}>
              <div className="stat-card text-center">
                <strong className="font-display text-4xl text-[var(--text-primary)]">3.2x</strong>
                <p className="stat-label mt-2">Faster shortlisting</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container max-w-3xl">
          <SectionHeader label="FAQ" title="Common questions." align="center" />
          <Accordion items={faqItems} />
        </div>
      </section>
      <FinalCta />
    </>
  )
}
