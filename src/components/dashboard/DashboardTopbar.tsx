import { Bell } from '@phosphor-icons/react'
import { useAuth } from '@/context/AuthContext'
import { ROLE_LABELS } from '@/types/auth'

export function DashboardTopbar() {
  const { user } = useAuth()

  if (!user) return null

  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  return (
    <header className="dashboard-topbar">
      <div>
        <p className="dashboard-topbar-title">Dashboard</p>
        <p className="dashboard-topbar-sub">Welcome back, {user.name.split(' ')[0]}</p>
      </div>
      <div className="dashboard-topbar-actions">
        <span className="badge badge-tb">{ROLE_LABELS[user.role]}</span>
        <button type="button" className="dashboard-icon-btn" aria-label="Notifications">
          <Bell size={20} />
        </button>
        <div className="dashboard-avatar" title={user.name}>
          {initials}
        </div>
      </div>
    </header>
  )
}
