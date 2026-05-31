import { Reveal } from '@/components/common/Reveal'
import { SectionHeader } from '@/components/common/SectionHeader'

const steps = [
  { title: 'Apply', text: 'Share your profile and intent — no high upfront cost to begin.' },
  { title: 'Assess', text: 'Baseline skills, communication, and role-fit mapped in week one.' },
  { title: 'Train', text: '12-week mentor-led sprints with daily evaluations and mock interviews.' },
  { title: 'Place', text: 'Recruiter-ready proof layer — placement terms depend on conditions met.' },
]

export function PahalTimeline() {
  return (
    <section className="section" id="journey">
      <div className="container">
        <SectionHeader label="The journey" title="From application to offer — with clarity." />
        <div className="pahal-timeline">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="pahal-timeline-step">
                <div className="pahal-timeline-dot">{i + 1}</div>
                <h3 className="font-display text-xl mb-2">{step.title}</h3>
                <p className="text-[var(--text-muted)] text-sm">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
