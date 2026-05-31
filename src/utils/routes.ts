import type { UserRole } from '@/types/auth'

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CAREERS: '/careers',
  BLOG: '/blog',
  TALENTBOX: '/talentbox',
  TALENTBOX_LOGIN: '/talentbox/login',
  DASHBOARD: {
    STUDENT: '/talentbox/dashboard/student',
    INTERN: '/talentbox/dashboard/intern',
    MENTOR: '/talentbox/dashboard/mentor',
    EMPLOYEE: '/talentbox/dashboard/employee',
    HR: '/talentbox/dashboard/hr',
    ADMIN: '/talentbox/dashboard/admin',
  },
} as const

const DASHBOARD_PATHS: Record<UserRole, string> = {
  student: ROUTES.DASHBOARD.STUDENT,
  intern: ROUTES.DASHBOARD.INTERN,
  mentor: ROUTES.DASHBOARD.MENTOR,
  employee: ROUTES.DASHBOARD.EMPLOYEE,
  hr: ROUTES.DASHBOARD.HR,
  admin: ROUTES.DASHBOARD.ADMIN,
}

export function getDashboardPath(role: UserRole): string {
  return DASHBOARD_PATHS[role]
}

export function isDashboardRoute(pathname: string): boolean {
  return pathname.startsWith('/talentbox/dashboard')
}

export function getBlogPostPath(slug: string): string {
  return `${ROUTES.BLOG}/${slug}`
}
