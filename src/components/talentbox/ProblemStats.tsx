import { Counter } from '@/components/common/Counter'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeader } from '@/components/common/SectionHeader'
import { StatCard } from '@/components/common/StatCard'

const stats = [
  { label: 'Graduates underemployed', value: 47, suffix: '%', hint: 'Within 6 months of graduation' },
  { label: 'Avg. prep spend', value: 85000, prefix: '₹', hint: 'High upfront cost models' },
  { label: 'Placement clarity gap', value: 62, suffix: '%', hint: 'Unclear outcome terms' },
  { label: 'Skills-employability gap', value: 3.2, suffix: 'x', hint: 'Demand vs campus readiness' },
]

export function ProblemStats() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          label="The problem"
          title="Students invest years. Outcomes stay uncertain."
          description="The current ecosystem rewards enrollment over employment — and students pay the price."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <StatCard
                label={stat.label}
                value={
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                }
                hint={stat.hint}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
