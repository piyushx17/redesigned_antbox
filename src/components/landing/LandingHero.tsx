import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'
import { Counter } from '@/components/common/Counter'
import { ROUTES } from '@/utils/routes'

export function LandingHero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-mesh" />
        <div className="hero-mesh-2" />
        <div className="hero-grid-bg" />
      </div>

      <div className="container relative z-10">
        <Reveal direction="left">
          <div className="hero-label">
            <span className="dot" />
            Future-Proof Talent Infrastructure
          </div>
          <h1 className="hero-title">
            From <em>campus</em> to corporate
            <br />
            conviction.
          </h1>
          <p className="hero-subtitle max-w-xl">
            AntBox unifies students, mentors, and recruiters into one operating layer — built for
            readiness, applied learning, and high-signal hiring.
          </p>
          <div className="btn-row mt-8">
            <Button variant="brand" to={ROUTES.TALENTBOX}>
              Get Started
            </Button>
            <Button variant="outline" to={ROUTES.TALENTBOX}>
              Explore TalentBox
            </Button>
          </div>
          <div className="proof-row mt-12">
            <div className="proof">
              <strong>
                <Counter value={12} suffix="k+" />
              </strong>
              <p>Student Profiles</p>
            </div>
            <div className="proof">
              <strong>
                <Counter value={420} suffix="+" />
              </strong>
              <p>Recruiting Teams</p>
            </div>
            <div className="proof">
              <strong>
                <Counter value={88} suffix="%" />
              </strong>
              <p>Readiness Uplift</p>
            </div>
            <div className="proof">
              <strong>3.2x</strong>
              <p>Faster Shortlisting</p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="float-preview reveal-scale">
        <div className="float-header">
          <span>Live System Status</span>
          <div className="float-dot" />
        </div>
        <div className="float-inner">
          <div className="float-label">Readiness Score</div>
          <div className="float-score">
            88<span>%</span>
          </div>
          <div className="float-bar-wrap">
            <div className="float-bar-label">
              <span>Sprint Progress</span>
              <span>72%</span>
            </div>
            <div className="progress">
              <span style={{ width: '72%' }} />
            </div>
          </div>
          <div className="float-grid">
            <div className="float-stat">
              <p>Applications</p>
              <strong>12</strong>
            </div>
            <div className="float-stat">
              <p>PPO Prob.</p>
              <strong>76%</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
