import { useState } from 'react'
import { CheckCircle, CircleNotch, Scales } from '@phosphor-icons/react'
import { competitors, competitorModels } from '@/data/competitors'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeader } from '@/components/common/SectionHeader'
import { cn } from '@/utils/cn'

export function CompetitorCards() {
  const [selectedName, setSelectedName] = useState(competitors[0]?.name ?? '')
  const selected = competitors.find((competitor) => competitor.name === selectedName) ?? competitors[0]

  return (
    <section className="section bg-[var(--bg-secondary)] competitor-section">
      <div className="container">
        <SectionHeader
          label="Landscape"
          title="Compare before you commit."
          description="First understand the model. Then choose an alternative and see where AntBox is stronger for campus-to-corporate readiness."
        />

        <div className="model-strip">
          {competitorModels.map((model, i) => (
            <Reveal key={model.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <article className="model-card">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <h3>{model.title}</h3>
                <p>{model.note}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="competitor-compare">
            <div className="competitor-picker" aria-label="Choose a competitor to compare">
              {competitors.map((competitor) => (
                <button
                  key={competitor.name}
                  type="button"
                  className={cn(competitor.name === selected.name && 'active')}
                  onClick={() => setSelectedName(competitor.name)}
                >
                  {competitor.name}
                </button>
              ))}
            </div>

            <div className="compare-grid">
              <article className="compare-panel muted">
                <p className="compare-label">{selected.type}</p>
                <h3>{selected.name}</h3>
                <dl>
                  <div>
                    <dt>Best for</dt>
                    <dd>{selected.audience}</dd>
                  </div>
                  <div>
                    <dt>Strong at</dt>
                    <dd>{selected.strength}</dd>
                  </div>
                  <div>
                    <dt>Gap to watch</dt>
                    <dd>{selected.limitation}</dd>
                  </div>
                </dl>
              </article>

              <article className="compare-panel antbox">
                <div className="compare-icon">
                  <Scales size={24} />
                </div>
                <p className="compare-label">Why AntBox wins this use case</p>
                <h3>TalentBox by AntBox</h3>
                <p>{selected.antboxEdge}</p>
                <ul>
                  {selected.proofPoints.map((point) => (
                    <li key={point}>
                      <CheckCircle size={18} weight="fill" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <p className="compare-note">
              This is a product-positioning comparison, not a claim that every alternative is bad.
              The right choice depends on what the student and campus need.
            </p>
          </div>
        </Reveal>
      </div>
      <CircleNotch className="competitor-orbit" size={120} />
    </section>
  )
}
