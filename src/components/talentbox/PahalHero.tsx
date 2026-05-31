import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'
import { ROUTES } from '@/utils/routes'

export function PahalHero() {
  return (
    <section className="pahal-hero">
      <div className="pahal-hero-bg" />
      <div className="container pahal-hero-grid">
        <Reveal direction="left">
          <p className="section-label font-hindi">TalentBox · पहल</p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight mb-6">
            Your first step.
            <br />
            <span className="font-hindi text-[var(--tb-accent)]">पहल.</span>
          </h1>
          <p className="text-lg text-[var(--text-muted)] max-w-xl mb-8">
            A bold path from campus ambition to corporate readiness — without high upfront cost,
            opaque placement terms, or course-first models that delay outcomes.
          </p>
          <div className="btn-row">
            <Button variant="tb" to={ROUTES.TALENTBOX_LOGIN}>
              Apply Now
            </Button>
            <Button variant="outline" to="#journey">
              See the journey
            </Button>
          </div>
        </Reveal>
        <Reveal direction="scale" className="pahal-hero-visual">
          <div className="pahal-hero-card">
            <div className="pahal-hero-card-header">
              <span>Live cohort · KIIT</span>
              <span className="badge badge-tb">Open</span>
            </div>
            <div className="pahal-hero-card-body">
              <p className="text-sm text-[var(--text-subtle)] uppercase tracking-wider mb-2">
                Next intake
              </p>
              <p className="font-display text-3xl mb-4">June 2026</p>
              <ul className="pahal-hero-stats">
                <li>
                  <strong>12</strong> week sprint
                </li>
                <li>
                  <strong>1:8</strong> mentor ratio
                </li>
                <li>
                  <strong>40+</strong> hiring partners
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
