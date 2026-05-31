import type { ID, NamedEntity, Priority, Timestamped } from './common'

export type ApplicationStatus =
  | 'applied'
  | 'shortlisted'
  | 'interview'
  | 'offered'
  | 'rejected'
  | 'withdrawn'

export interface Application extends Timestamped {
  id: ID
  company: string
  companyDomain?: string
  role: string
  status: ApplicationStatus
  appliedAt: string
  jobDescription?: string
  notes?: string
}

export interface Interview extends Timestamped {
  id: ID
  company: string
  role: string
  date: string
  time: string
  type?: 'phone' | 'video' | 'onsite'
  status?: 'scheduled' | 'completed' | 'cancelled'
  notes?: string
}

export interface Task extends Timestamped {
  id: ID
  title: string
  description?: string
  priority: Priority
  status: 'todo' | 'in_progress' | 'done'
  dueDate?: string
  assignee?: NamedEntity
  sprintId?: ID
}

export interface Sprint extends Timestamped {
  id: ID
  name: string
  startDate: string
  endDate: string
  progress: number
  tasks: Task[]
}

export interface KPI {
  id: ID
  label: string
  value: number | string
  change?: number
  changeLabel?: string
  trend?: 'up' | 'down' | 'neutral'
}

export interface DashboardNavItem {
  id: string
  label: string
  href: string
  icon?: string
  badge?: number
}

export interface DashboardUser {
  id: ID
  name: string
  email: string
  role: string
  avatarUrl?: string
  initials?: string
}

export interface Notification {
  id: ID
  title: string
  message: string
  read: boolean
  createdAt: string
  href?: string
}

export interface AttendanceRecord {
  date: string
  status: 'present' | 'absent' | 'leave' | 'weekend'
}

export interface PipelineStage {
  id: ID
  name: string
  count: number
  color?: string
}

export interface Candidate extends Timestamped {
  id: ID
  name: string
  email: string
  role: string
  score?: number
  stage: string
  avatarUrl?: string
}

export interface MentorReview {
  id: ID
  internId: ID
  rating: number
  feedback: string
  createdAt: string
}

export interface DashboardPanel {
  id: string
  title: string
  description?: string
}

export interface ChartDataPoint {
  label: string
  value: number
}

export interface FunnelStep {
  label: string
  count: number
  widthPercent: number
}

export interface KanbanColumn {
  id: ID
  title: string
  tasks: Task[]
}

export interface ChatMessage {
  id: ID
  senderId: ID
  content: string
  createdAt: string
  isOwn?: boolean
}

export interface DashboardStats {
  kpis: KPI[]
  recentApplications?: Application[]
  upcomingInterviews?: Interview[]
  notifications?: Notification[]
}
