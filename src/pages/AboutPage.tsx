import type { CSSProperties } from 'react'
import { useState } from 'react'
import { team } from '@/data/team'
import { Button } from '@/components/common/Button'
import { Card } from '@/components/common/Card'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeader } from '@/components/common/SectionHeader'
import { ROUTES } from '@/utils/routes'

const culturePhotos = [
  'top left',
  'top center',
  'top right',
  'bottom left',
  'bottom center',
  'bottom right',
]

const values = [
  { title: 'Outcomes over optics', text: 'We measure readiness, not vanity metrics.' },
  { title: 'Radical transparency', text: 'Students deserve clear terms and honest feedback.' },
  { title: 'Applied conviction', text: 'Learning only counts when it shows up in interviews.' },
]

const milestones = [
  { year: '2022', event: 'AntBox founded — campus talent graph prototype' },
  { year: '2023', event: 'First cohort placements with mentor-led sprints' },
  { year: '2024', event: 'TalentBox platform launch with role dashboards' },
  { year: '2025', event: 'KIIT partnership and पहल campaign' },
  { year: '2026', event: '40+ hiring partners across India' },
]

export function AboutPage() {
  const [activeTeam, setActiveTeam] = useState<string | null>(null)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="section-label">About AntBox</p>
            <h1 className="font-display text-5xl md:text-6xl max-w-3xl">
              We build the layer between <em>campus</em> and corporate.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal>
            <SectionHeader label="Our story" title="Started on campus. Built for scale." />
            <p>
              AntBox began when founders saw the same gap everywhere: students with potential,
              recruiters with urgency, and a middle layer full of noise. We built infrastructure
              that makes readiness visible, mentorship accountable, and hiring faster.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <Card glow>
              <p className="section-label">Mission</p>
              <p className="text-[var(--text-primary)] text-lg mb-6">
                Turn student aspiration into corporate proof — with transparency at every step.
              </p>
              <p className="section-label">Vision</p>
              <p className="text-[var(--text-primary)] text-lg">
                India's most trusted talent operating layer for campus-to-corporate journeys.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <SectionHeader label="Values" title="What we stand for." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <Card>
                  <h3 className="font-display text-xl mb-2">{v.title}</h3>
                  <p>{v.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader label="Team" title="People behind the platform." />
          <div className="team-grid">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <button
                  type="button"
                  className={`card team-card ${activeTeam === member.name ? 'is-open' : ''}`}
                  onClick={() => setActiveTeam(activeTeam === member.name ? null : member.name)}
                  aria-expanded={activeTeam === member.name}
                >
                  <div
                    className="team-photo"
                    style={{ '--avatar-position': culturePhotos[i % culturePhotos.length] } as CSSProperties}
                    aria-label={`${member.name} mock profile photo`}
                  />
                  <div className="team-card-face">
                    <h3 className="font-display text-xl">{member.name}</h3>
                    <p className="team-role text-[var(--accent)] text-sm">{member.role}</p>
                  </div>
                  <div className="team-card-details">
                    <p className="team-bio text-sm">{member.bio}</p>
                    <span>Click to close</span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader label="Timeline" title="Our journey so far." />
          <div className="timeline max-w-2xl">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="timeline-step">
                  <div className="timeline-marker">{m.year.slice(2)}</div>
                  <p className="text-[var(--accent)] font-semibold text-sm mb-1">{m.year}</p>
                  <p>{m.event}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader label="Culture" title="How we work." />
          <div className="culture-grid">
            {culturePhotos.map((position, i) => (
              <div
                key={position}
                className="culture-photo"
                style={{ '--photo-position': position } as CSSProperties}
                aria-label={`AntBox culture mock photo ${i + 1}`}
              >
                <span>{i === 0 ? 'Mentor sprint' : i === 1 ? 'Product review' : i === 2 ? 'Cohort session' : i === 3 ? 'Recruiter screen' : i === 4 ? 'Planning board' : 'Team standup'}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta about-careers-cta">
        <div className="container text-center">
          <h2 className="font-display text-3xl mb-4">Want to build with us?</h2>
          <Button variant="brand" to={ROUTES.CAREERS}>
            View open roles
          </Button>
        </div>
      </section>
    </>
  )
}
