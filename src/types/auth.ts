import type { Timestamped } from './common'

export type UserRole = 'student' | 'intern' | 'mentor' | 'employee' | 'hr' | 'admin'

export interface MockUser {
  email: string
  password: string
  name: string
  role: UserRole
}

export interface AuthUser extends Timestamped {
  id: string
  email: string
  name: string
  role: UserRole
  avatarUrl?: string
  phone?: string
  organization?: string
  isVerified?: boolean
}

export interface LoginCredentials {
  email: string
  password: string
  role: UserRole
}

export interface SignupPayload {
  email: string
  password: string
  name: string
  role: UserRole
  phone?: string
  organization?: string
}

export interface AuthSession {
  user: AuthUser
  token: string
  expiresAt: string
}

export interface RoleOption {
  role: UserRole
  label: string
  description: string
}

export const ROLE_LABELS: Record<UserRole, string> = {
  student: 'Student',
  intern: 'Intern',
  mentor: 'Mentor',
  employee: 'Employee',
  hr: 'HR',
  admin: 'Admin',
}

export const ROLE_OPTIONS: RoleOption[] = [
  {
    role: 'student',
    label: 'Student',
    description: 'Apply to roles, track applications, and prepare for interviews.',
  },
  {
    role: 'intern',
    label: 'Intern',
    description: 'Manage sprint tasks, attendance, and mentor sync.',
  },
  {
    role: 'mentor',
    label: 'Mentor',
    description: 'Guide cohorts, review progress, and assign tasks.',
  },
  {
    role: 'employee',
    label: 'Employee',
    description: 'Execute operational workflows and support cohort delivery.',
  },
  {
    role: 'hr',
    label: 'HR',
    description: 'Manage leave, payroll visibility, grievances, and announcements.',
  },
  {
    role: 'admin',
    label: 'Admin',
    description: 'Oversee platform operations, users, and analytics.',
  },
]
