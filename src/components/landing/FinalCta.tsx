import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'
import { ROUTES } from '@/utils/routes'

export function FinalCta() {
  return (
    <section className="section final-cta">
      <div className="container">
        <Reveal>
          <div className="final-cta-inner">
            <p className="section-label">Ready to begin?</p>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Turn campus potential into <em>corporate proof.</em>
            </h2>
            <p className="final-cta-copy text-[var(--text-muted)] max-w-2xl mx-auto">
              Join AntBox TalentBox — where students, mentors, and recruiters operate on one
              trusted layer.
            </p>
            <div className="btn-row justify-center">
              <Button variant="brand" to={ROUTES.TALENTBOX}>
                Explore पहल
              </Button>
              <Button variant="outline" to={ROUTES.TALENTBOX_LOGIN}>
                Sign in
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
