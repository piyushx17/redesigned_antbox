import { Link, useLocation } from 'react-router-dom'
import {
  Calendar,
  ChartBar,
  Chats,
  ClipboardText,
  Gear,
  House,
  SignOut,
  Users,
} from '@phosphor-icons/react'
import { useAuth } from '@/context/AuthContext'
import { ROUTES } from '@/utils/routes'
import type { UserRole } from '@/types/auth'
import { cn } from '@/utils/cn'

const navByRole: Record<UserRole, { label: string; to: string; icon: typeof House }[]> = {
  student: [
    { label: 'Overview', to: ROUTES.DASHBOARD.STUDENT, icon: House },
    { label: 'Classroom', to: `${ROUTES.DASHBOARD.STUDENT}#classroom`, icon: ClipboardText },
    { label: 'Assessment', to: `${ROUTES.DASHBOARD.STUDENT}#assessment`, icon: ChartBar },
    { label: 'Attendance', to: `${ROUTES.DASHBOARD.STUDENT}#attendance`, icon: Calendar },
    { label: 'HR Desk', to: `${ROUTES.DASHBOARD.STUDENT}#hr-requests`, icon: Users },
    { label: 'Chat', to: `${ROUTES.DASHBOARD.STUDENT}#chat`, icon: Chats },
  ],
  intern: [
    { label: 'Overview', to: ROUTES.DASHBOARD.INTERN, icon: House },
    { label: 'Projects', to: `${ROUTES.DASHBOARD.INTERN}#projects`, icon: ClipboardText },
    { label: 'Classroom', to: `${ROUTES.DASHBOARD.INTERN}#classroom`, icon: ClipboardText },
    { label: 'Assessment', to: `${ROUTES.DASHBOARD.INTERN}#assessment`, icon: ChartBar },
    { label: 'Attendance', to: `${ROUTES.DASHBOARD.INTERN}#attendance`, icon: Calendar },
    { label: 'HR Desk', to: `${ROUTES.DASHBOARD.INTERN}#hr-requests`, icon: Users },
    { label: 'Chat', to: `${ROUTES.DASHBOARD.INTERN}#chat`, icon: Chats },
  ],
  mentor: [
    { label: 'Overview', to: ROUTES.DASHBOARD.MENTOR, icon: House },
    { label: 'Students', to: `${ROUTES.DASHBOARD.MENTOR}#students`, icon: Users },
    { label: 'Evaluations', to: `${ROUTES.DASHBOARD.MENTOR}#evaluations`, icon: ChartBar },
    { label: 'Chat', to: `${ROUTES.DASHBOARD.MENTOR}#chat`, icon: Chats },
  ],
  employee: [
    { label: 'Overview', to: ROUTES.DASHBOARD.EMPLOYEE, icon: House },
    { label: 'Sessions', to: `${ROUTES.DASHBOARD.EMPLOYEE}#sessions`, icon: Calendar },
    { label: 'Students', to: `${ROUTES.DASHBOARD.EMPLOYEE}#students`, icon: Users },
    { label: 'Chat', to: `${ROUTES.DASHBOARD.EMPLOYEE}#chat`, icon: Chats },
  ],
  hr: [
    { label: 'Overview', to: ROUTES.DASHBOARD.HR, icon: House },
    { label: 'Requests', to: `${ROUTES.DASHBOARD.HR}#requests`, icon: Users },
    { label: 'Leave', to: `${ROUTES.DASHBOARD.HR}#leave`, icon: ClipboardText },
    { label: 'Payroll', to: `${ROUTES.DASHBOARD.HR}#payroll`, icon: ChartBar },
    { label: 'Grievances', to: `${ROUTES.DASHBOARD.HR}#grievances`, icon: Users },
    { label: 'Chat', to: `${ROUTES.DASHBOARD.HR}#chat`, icon: Chats },
  ],
  admin: [
    { label: 'Overview', to: ROUTES.DASHBOARD.ADMIN, icon: House },
    { label: 'Batches', to: `${ROUTES.DASHBOARD.ADMIN}#batches`, icon: Users },
    { label: 'Audit Log', to: `${ROUTES.DASHBOARD.ADMIN}#audit`, icon: ClipboardText },
    { label: 'Settings', to: `${ROUTES.DASHBOARD.ADMIN}#settings`, icon: Gear },
    { label: 'Chat', to: `${ROUTES.DASHBOARD.ADMIN}#chat`, icon: Chats },
  ],
}

export function DashboardSidebar() {
  const { user, logout } = useAuth()
  const location = useLocation()
  const links = user ? navByRole[user.role] : []

  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-sidebar-brand">
        <Link to={ROUTES.HOME}>TalentBox</Link>
      </div>
      <nav className="dashboard-nav">
        {links.map((link) => {
          const Icon = link.icon
          const [path, hash] = link.to.split('#')
          const active =
            location.pathname === path && (!hash || location.hash === `#${hash}`)
          return (
            <Link
              key={link.label}
              to={link.to}
              className={cn('dashboard-nav-link', active && 'active')}
            >
              <Icon size={20} />
              {link.label}
            </Link>
          )
        })}
      </nav>
      <button type="button" className="dashboard-nav-link logout" onClick={logout}>
        <SignOut size={20} />
        Logout
      </button>
    </aside>
  )
}
