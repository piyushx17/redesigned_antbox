import { Navigate, Outlet } from 'react-router-dom'
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar'
import { DashboardTopbar } from '@/components/dashboard/DashboardTopbar'
import { useAuth } from '@/context/AuthContext'
import { ROUTES } from '@/utils/routes'

export function DashboardLayout() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.TALENTBOX_LOGIN} replace />
  }

  return (
    <div className="dashboard-shell">
      <DashboardSidebar />
      <div className="dashboard-main">
        <DashboardTopbar />
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
