import { Reveal } from '@/components/common/Reveal'
import { SectionHeader } from '@/components/common/SectionHeader'
import { Card } from '@/components/common/Card'

const topics = [
  { title: 'Data Structures & Algorithms', hours: '40h', level: 'Core' },
  { title: 'System Design Fundamentals', hours: '24h', level: 'Advanced' },
  { title: 'Communication & Presence', hours: '16h', level: 'Core' },
  { title: 'Full-Stack Project Sprint', hours: '32h', level: 'Applied' },
  { title: 'Mock Interviews', hours: '12h', level: 'Placement' },
  { title: 'Resume & ATS Optimization', hours: '8h', level: 'Placement' },
]

export function LearningGrid() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader label="Curriculum" title="What you'll actually learn." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic, i) => (
            <Reveal key={topic.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <Card>
                <span className="badge badge-tb mb-3">{topic.level}</span>
                <h3 className="font-display text-xl mb-2">{topic.title}</h3>
                <p className="text-[var(--text-subtle)] text-sm">{topic.hours} guided sprint</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
