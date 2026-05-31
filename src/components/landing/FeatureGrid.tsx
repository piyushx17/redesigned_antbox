import {
  Buildings,
  ChartLineUp,
  Gauge,
  Graph,
  ShieldCheck,
  UsersThree,
} from '@phosphor-icons/react'
import { features } from '@/data/features'
import { Card } from '@/components/common/Card'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeader } from '@/components/common/SectionHeader'

const iconMap = {
  Graph,
  Gauge,
  UsersThree,
  Buildings,
  ChartLineUp,
  ShieldCheck,
} as const

export function FeatureGrid() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          label="Why AntBox"
          title={
            <>
              Built for outcomes,
              <br />
              <em>not noise.</em>
            </>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] ?? Graph
            return (
              <Reveal key={feature.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <Card className="feature-card">
                  <div className="feature-num">{String(i + 1).padStart(2, '0')}</div>
                  <Icon size={28} className="text-[var(--accent)] mb-4" weight="duotone" />
                  <h3 className="font-display text-2xl mb-2">{feature.title}</h3>
                  <p className="text-[var(--text-muted)]">{feature.description}</p>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
