import { companies } from '@/data/companies'
import { getClearbitLogo } from '@/utils/clearbit'

export function LogoMarquee() {
  const row1 = companies.slice(0, 10)
  const row2 = companies.slice(10)

  const renderRow = (items: typeof companies, reverse = false) => (
    <div className={reverse ? 'marquee-row reverse' : 'marquee-row'}>
      <div className="marquee-track">
        {[...items, ...items].map((company, i) => (
          <div key={`${company.domain}-${i}`} className="marquee-logo">
            <img
              src={getClearbitLogo(company.domain)}
              alt={company.name}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <span>{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="marquee-section">
      {renderRow(row1)}
      {renderRow(row2, true)}
    </section>
  )
}
