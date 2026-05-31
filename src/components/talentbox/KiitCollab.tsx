import { GraduationCap, Handshake, MapPin } from '@phosphor-icons/react'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeader } from '@/components/common/SectionHeader'
import { assetPath } from '@/utils/assets'

export function KiitCollab() {
  return (
    <section className="section kiit-section">
      <div className="container kiit-grid">
        <Reveal>
          <SectionHeader
            label="Campus partnership"
            title="Built with KIIT — rooted in real student journeys."
            description="पहल launches on campus with mentors, labs, and hiring partners aligned to local talent pipelines."
          />
          <ul className="kiit-points">
            <li>
              <MapPin size={20} /> On-campus cohort hub
            </li>
            <li>
              <GraduationCap size={20} /> Faculty-aligned curriculum sprints
            </li>
            <li>
              <Handshake size={20} /> 40+ regional and national hiring partners
            </li>
          </ul>
        </Reveal>
        <Reveal direction="scale">
          <div className="kiit-visual">
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/KIIT%20Campus-6%2C%20Bhubaneshwar%2C%20Odisha.jpg"
              alt="KIIT University campus in Bhubaneswar"
            />
            <div className="kiit-logo-lockup">
              <span>KIIT partnership layer</span>
              <img src={assetPath('/antbox-logo-white.png')} alt="Antbox" />
            </div>
            <a
              className="kiit-credit"
              href="https://commons.wikimedia.org/wiki/File:KIIT_Campus-6,_Bhubaneshwar,_Odisha.jpg"
              target="_blank"
              rel="noreferrer"
            >
              Campus photo: Wikimedia Commons
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
