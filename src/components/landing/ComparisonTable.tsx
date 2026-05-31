import { Check, X } from '@phosphor-icons/react'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeader } from '@/components/common/SectionHeader'

const rows: { feature: string; antbox: boolean; alt: boolean | 'partial' }[] = [
  { feature: 'Outcome-aligned incentives', antbox: true, alt: false },
  { feature: 'Live readiness scoring', antbox: true, alt: false },
  { feature: 'Mentor-led applied sprints', antbox: true, alt: 'partial' },
  { feature: 'Recruiter-ready proof layer', antbox: true, alt: false },
  { feature: 'Campus-to-corporate continuity', antbox: true, alt: 'partial' },
  { feature: 'Transparent placement terms', antbox: true, alt: 'partial' },
]

function Cell({ value }: { value: boolean | 'partial' }) {
  if (value === true) return <Check size={20} className="text-[var(--success)]" weight="bold" />
  if (value === 'partial')
    return <span className="text-[var(--warning)] text-sm font-semibold">Partial</span>
  return <X size={20} className="text-[var(--danger)]" weight="bold" />
}

export function ComparisonTable() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          label="Comparison"
          title="Why teams choose AntBox over alternatives."
          description="We optimize for readiness and placement proof — not vanity metrics."
        />
        <Reveal>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>AntBox</th>
                  <th>Typical alternatives</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td>
                      <Cell value={row.antbox} />
                    </td>
                    <td>
                      <Cell value={row.alt} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
