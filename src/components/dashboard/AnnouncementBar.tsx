import { Megaphone } from '@phosphor-icons/react'
import { announcements } from '@/data/dashboardMock'

export function AnnouncementBar() {
  const items = announcements.slice(0, 3)

  return (
    <div className="announcement-bar">
      <Megaphone size={18} className="text-[var(--tb-accent)] shrink-0" />
      <div className="announcement-track">
        {items.map((a) => (
          <span key={a.id} className="announcement-item">
            <strong>{a.title}</strong> — {a.message}
          </span>
        ))}
      </div>
    </div>
  )
}
