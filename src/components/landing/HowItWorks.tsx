import { Reveal } from '@/components/common/Reveal'
import { SectionHeader } from '@/components/common/SectionHeader'

const steps = [
  {
    num: '01',
    title: 'Assess readiness',
    text: 'Students enter with a baseline profile — skills, intent, and role fit mapped in one view.',
  },
  {
    num: '02',
    title: 'Sprint with mentors',
    text: 'Applied projects, mock interviews, and daily evaluations build real corporate signal.',
  },
  {
    num: '03',
    title: 'Place with proof',
    text: 'Recruiters see verified outcomes — not just resumes — and shortlist with confidence.',
  },
]

export function HowItWorks() {
  return (
    <section className="section journey-section">
      <div className="container">
        <SectionHeader label="How it works" title="Three steps to conviction." />
        <div className="timeline">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="timeline-step">
                <div className="timeline-marker">{step.num}</div>
                <div>
                  <h3 className="font-display text-2xl mb-2">{step.title}</h3>
                  <p className="text-[var(--text-muted)]">{step.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
