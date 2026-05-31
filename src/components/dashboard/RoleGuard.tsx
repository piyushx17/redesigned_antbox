import { Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { ROUTES } from '@/utils/routes'
import type { UserRole } from '@/types/auth'

interface RoleGuardProps {
  allowed: UserRole[]
  children: React.ReactNode
}

export function RoleGuard({ allowed, children }: RoleGuardProps) {
  const { user, isAuthenticated } = useAuth()

  if (!isAuthenticated || !user) {
    return <Navigate to={ROUTES.TALENTBOX_LOGIN} replace />
  }

  if (!allowed.includes(user.role)) {
    return <Navigate to={ROUTES.TALENTBOX_LOGIN} replace />
  }

  return <>{children}</>
}
