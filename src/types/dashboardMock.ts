import type { ID, Priority } from './common'

export interface DashboardAnnouncement {
  id: ID
  title: string
  message: string
  priority: Priority
  postedAt: string
  author: string
}

export interface DashboardScore {
  userId: ID
  name: string
  dailyScore: number
  weeklyAverage: number
  readinessScore: number
  attendancePercent: number
  trend: 'up' | 'down' | 'neutral'
}

export interface DailyEvaluation {
  id: ID
  userId: ID
  userName: string
  date: string
  tasksCompleted: number
  hoursLogged: number
  selfRating: number
  mentorRating: number | null
  notes: string
  status: 'pending' | 'reviewed'
}

export interface BreakRecord {
  id: ID
  userId: ID
  type: 'lunch' | 'short' | 'personal'
  startedAt: string
  endedAt: string
  durationMinutes: number
}

export interface DashboardStudent {
  id: ID
  name: string
  email: string
  cohort: string
  readinessScore: number
  applications: number
  status: 'active' | 'needs_review' | 'placed'
  initials: string
}

export interface DashboardIntern {
  id: ID
  name: string
  email: string
  batch: string
  mentor: string
  sprintProgress: number
  status: 'on_track' | 'at_risk' | 'excellent' | 'on_leave'
  initials: string
}

export interface DashboardSession {
  id: ID
  title: string
  date: string
  time: string
  owner: string
  type: 'group' | 'mentor_sync' | 'interview'
  attendees: number
}

export interface LeaderboardEntry {
  rank: number
  userId: ID
  name: string
  score: number
  change: number
}

export interface LeaveRequest {
  id: ID
  userId: ID
  userName: string
  type: 'casual' | 'sick' | 'earned'
  startDate: string
  endDate: string
  reason: string
  status: 'pending' | 'approved' | 'rejected'
  submittedAt: string
}

export interface Grievance {
  id: ID
  userId: ID
  userName: string
  category: string
  subject: string
  description: string
  status: 'open' | 'in_review' | 'resolved'
  submittedAt: string
}

export interface PayrollRow {
  id: ID
  employeeId: ID
  name: string
  role: string
  month: string
  basePay: number
  stipend: number
  deductions: number
  netPay: number
  status: 'pending' | 'processed'
}

export interface Batch {
  id: ID
  name: string
  startDate: string
  endDate: string
  mentor: string
  internCount: number
  avgReadiness: number
  status: 'active' | 'completed' | 'upcoming'
}

export interface AuditLog {
  id: ID
  actor: string
  action: string
  target: string
  timestamp: string
  severity: 'info' | 'warning' | 'critical'
}
