import type {
  AttendanceRecord,
  ChatMessage,
  KPI,
} from '../types/dashboard'
import type {
  AuditLog,
  Batch,
  BreakRecord,
  DailyEvaluation,
  DashboardAnnouncement,
  DashboardIntern,
  DashboardScore,
  DashboardSession,
  DashboardStudent,
  Grievance,
  LeaderboardEntry,
  LeaveRequest,
  PayrollRow,
} from '../types/dashboardMock'

export const announcements: DashboardAnnouncement[] = [
  {
    id: 'ann-001',
    title: 'Phase 1 orientation',
    message: 'Cohort orientation starts Monday at 9:30 AM in the TalentOS workspace.',
    priority: 'high',
    postedAt: '2026-05-30T08:00:00Z',
    author: 'HR Team',
  },
  {
    id: 'ann-002',
    title: 'Daily evaluation deadline',
    message: 'Submit today’s self-evaluation and task log before 8:00 PM IST.',
    priority: 'medium',
    postedAt: '2026-05-30T07:30:00Z',
    author: 'Program Ops',
  },
  {
    id: 'ann-003',
    title: 'Mentor AMA — Product careers',
    message: 'Friday 5:30 PM: open AMA with industry mentors on product management paths.',
    priority: 'low',
    postedAt: '2026-05-29T14:00:00Z',
    author: 'Mentor Council',
  },
  {
    id: 'ann-004',
    title: 'Mock interview week',
    message: 'Schedule your mock interview slot by Wednesday. Slots fill quickly.',
    priority: 'high',
    postedAt: '2026-05-28T10:00:00Z',
    author: 'Student Success',
  },
]

export const scores: DashboardScore[] = [
  {
    userId: 'stu-001',
    name: 'Aarav Mishra',
    dailyScore: 86,
    weeklyAverage: 84,
    readinessScore: 88,
    attendancePercent: 94,
    trend: 'up',
  },
  {
    userId: 'stu-002',
    name: 'Diya Sharma',
    dailyScore: 72,
    weeklyAverage: 75,
    readinessScore: 79,
    attendancePercent: 88,
    trend: 'neutral',
  },
  {
    userId: 'int-001',
    name: 'Ira Sen',
    dailyScore: 91,
    weeklyAverage: 89,
    readinessScore: 92,
    attendancePercent: 98,
    trend: 'up',
  },
  {
    userId: 'int-002',
    name: 'Vivaan Das',
    dailyScore: 78,
    weeklyAverage: 80,
    readinessScore: 81,
    attendancePercent: 91,
    trend: 'down',
  },
]

export const evaluations: DailyEvaluation[] = [
  {
    id: 'eval-001',
    userId: 'int-001',
    userName: 'Ira Sen',
    date: '2026-05-30',
    tasksCompleted: 4,
    hoursLogged: 7.5,
    selfRating: 4,
    mentorRating: 5,
    notes: 'Shipped landing page revisions and documented component props.',
    status: 'reviewed',
  },
  {
    id: 'eval-002',
    userId: 'int-002',
    userName: 'Vivaan Das',
    date: '2026-05-30',
    tasksCompleted: 2,
    hoursLogged: 6,
    selfRating: 3,
    mentorRating: null,
    notes: 'Blocked on API integration — requested mentor sync.',
    status: 'pending',
  },
  {
    id: 'eval-003',
    userId: 'stu-001',
    userName: 'Aarav Mishra',
    date: '2026-05-30',
    tasksCompleted: 3,
    hoursLogged: 5,
    selfRating: 4,
    mentorRating: 4,
    notes: 'Completed aptitude set and one mock interview reflection.',
    status: 'reviewed',
  },
]

export const attendance: AttendanceRecord[] = [
  { date: '2026-05-26', status: 'present' },
  { date: '2026-05-27', status: 'present' },
  { date: '2026-05-28', status: 'leave' },
  { date: '2026-05-29', status: 'present' },
  { date: '2026-05-30', status: 'present' },
]

export const breaks: BreakRecord[] = [
  {
    id: 'brk-001',
    userId: 'int-001',
    type: 'lunch',
    startedAt: '2026-05-30T13:00:00Z',
    endedAt: '2026-05-30T13:45:00Z',
    durationMinutes: 45,
  },
  {
    id: 'brk-002',
    userId: 'int-001',
    type: 'short',
    startedAt: '2026-05-30T16:10:00Z',
    endedAt: '2026-05-30T16:25:00Z',
    durationMinutes: 15,
  },
]

export const chatMessages: ChatMessage[] = [
  {
    id: 'msg-001',
    senderId: 'mentor-001',
    content: 'Submit today’s evaluation before 8 PM. Include blockers if any.',
    createdAt: '2026-05-30T09:15:00Z',
    isOwn: false,
  },
  {
    id: 'msg-002',
    senderId: 'int-001',
    content: 'Working on the dashboard mock data module now. ETA 6 PM.',
    createdAt: '2026-05-30T09:22:00Z',
    isOwn: true,
  },
  {
    id: 'msg-003',
    senderId: 'hr-001',
    content: 'Reminder: submit leave requests at least 48 hours in advance.',
    createdAt: '2026-05-30T11:00:00Z',
    isOwn: false,
  },
  {
    id: 'msg-004',
    senderId: 'mentor-001',
    content: 'Good progress on the landing page. Add loading states next sprint.',
    createdAt: '2026-05-30T14:30:00Z',
    isOwn: false,
  },
]

export const students: DashboardStudent[] = [
  {
    id: 'stu-001',
    name: 'Aarav Mishra',
    email: 'aarav.m@campus.in',
    cohort: 'KIIT CSE 2026',
    readinessScore: 88,
    applications: 12,
    status: 'active',
    initials: 'AM',
  },
  {
    id: 'stu-002',
    name: 'Diya Sharma',
    email: 'diya.s@campus.in',
    cohort: 'VIT IT 2026',
    readinessScore: 79,
    applications: 8,
    status: 'needs_review',
    initials: 'DS',
  },
  {
    id: 'stu-003',
    name: 'Omar Khan',
    email: 'omar.k@campus.in',
    cohort: 'NIT Trichy ECE 2026',
    readinessScore: 84,
    applications: 10,
    status: 'active',
    initials: 'OK',
  },
]

export const interns: DashboardIntern[] = [
  {
    id: 'int-001',
    name: 'Ira Sen',
    email: 'ira.s@theantbox.com',
    batch: 'Product Sprint Q2',
    mentor: 'Meera Kapoor',
    sprintProgress: 72,
    status: 'on_track',
    initials: 'IS',
  },
  {
    id: 'int-002',
    name: 'Vivaan Das',
    email: 'vivaan.d@theantbox.com',
    batch: 'Growth Sprint Q2',
    mentor: 'Rahul Kapoor',
    sprintProgress: 58,
    status: 'at_risk',
    initials: 'VD',
  },
  {
    id: 'int-003',
    name: 'Nia Patel',
    email: 'nia.p@theantbox.com',
    batch: 'Engineering Sprint Q2',
    mentor: 'Meera Kapoor',
    sprintProgress: 81,
    status: 'excellent',
    initials: 'NP',
  },
]

export const sessions: DashboardSession[] = [
  {
    id: 'ses-001',
    title: 'Resume teardown workshop',
    date: '2026-05-31',
    time: '10:00',
    owner: 'HR Team',
    type: 'group',
    attendees: 24,
  },
  {
    id: 'ses-002',
    title: 'Frontend sprint review',
    date: '2026-05-31',
    time: '14:00',
    owner: 'Meera Kapoor',
    type: 'mentor_sync',
    attendees: 6,
  },
  {
    id: 'ses-003',
    title: 'Mock interview circle',
    date: '2026-05-31',
    time: '17:30',
    owner: 'Student Success',
    type: 'interview',
    attendees: 12,
  },
]

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, userId: 'int-001', name: 'Ira Sen', score: 91, change: 2 },
  { rank: 2, userId: 'stu-001', name: 'Aarav Mishra', score: 86, change: 1 },
  { rank: 3, userId: 'stu-003', name: 'Omar Khan', score: 84, change: 0 },
  { rank: 4, userId: 'int-003', name: 'Nia Patel', score: 83, change: 3 },
  { rank: 5, userId: 'stu-002', name: 'Diya Sharma', score: 72, change: -1 },
]

export const leaveRequests: LeaveRequest[] = [
  {
    id: 'leave-001',
    userId: 'int-002',
    userName: 'Vivaan Das',
    type: 'casual',
    startDate: '2026-06-02',
    endDate: '2026-06-02',
    reason: 'Family commitment',
    status: 'pending',
    submittedAt: '2026-05-29T10:00:00Z',
  },
  {
    id: 'leave-002',
    userId: 'emp-001',
    userName: 'Rohan Nair',
    type: 'sick',
    startDate: '2026-05-28',
    endDate: '2026-05-28',
    reason: 'Medical rest',
    status: 'approved',
    submittedAt: '2026-05-27T18:00:00Z',
  },
]

export const grievances: Grievance[] = [
  {
    id: 'grv-001',
    userId: 'int-002',
    userName: 'Vivaan Das',
    category: 'workload',
    subject: 'Sprint scope clarification',
    description: 'Need clearer acceptance criteria for the analytics widget task.',
    status: 'in_review',
    submittedAt: '2026-05-28T15:00:00Z',
  },
  {
    id: 'grv-002',
    userId: 'stu-002',
    userName: 'Diya Sharma',
    category: 'scheduling',
    subject: 'Mock interview slot conflict',
    description: 'Requested alternate slot due to university exam on the same day.',
    status: 'resolved',
    submittedAt: '2026-05-25T09:00:00Z',
  },
]

export const payrollRows: PayrollRow[] = [
  {
    id: 'pay-001',
    employeeId: 'emp-001',
    name: 'Rohan Nair',
    role: 'Operations Associate',
    month: 'May 2026',
    basePay: 45000,
    stipend: 0,
    deductions: 3200,
    netPay: 41800,
    status: 'processed',
  },
  {
    id: 'pay-002',
    employeeId: 'int-001',
    name: 'Ira Sen',
    role: 'Product Intern',
    month: 'May 2026',
    basePay: 0,
    stipend: 25000,
    deductions: 0,
    netPay: 25000,
    status: 'processed',
  },
  {
    id: 'pay-003',
    employeeId: 'int-002',
    name: 'Vivaan Das',
    role: 'Growth Intern',
    month: 'May 2026',
    basePay: 0,
    stipend: 25000,
    deductions: 0,
    netPay: 25000,
    status: 'pending',
  },
]

export const batches: Batch[] = [
  {
    id: 'bat-001',
    name: 'Product Sprint Q2',
    startDate: '2026-04-01',
    endDate: '2026-06-30',
    mentor: 'Meera Kapoor',
    internCount: 8,
    avgReadiness: 85,
    status: 'active',
  },
  {
    id: 'bat-002',
    name: 'Growth Sprint Q2',
    startDate: '2026-04-01',
    endDate: '2026-06-30',
    mentor: 'Rahul Kapoor',
    internCount: 6,
    avgReadiness: 78,
    status: 'active',
  },
  {
    id: 'bat-003',
    name: 'Engineering Sprint Q1',
    startDate: '2026-01-15',
    endDate: '2026-03-31',
    mentor: 'Meera Kapoor',
    internCount: 10,
    avgReadiness: 91,
    status: 'completed',
  },
]

export const auditLogs: AuditLog[] = [
  {
    id: 'aud-001',
    actor: 'Kabir Malhotra',
    action: 'Updated role permissions for HR dashboard',
    target: 'hr@theantbox.com',
    timestamp: '2026-05-30T08:45:00Z',
    severity: 'info',
  },
  {
    id: 'aud-002',
    actor: 'Ananya Rao',
    action: 'Approved leave request',
    target: 'leave-002',
    timestamp: '2026-05-28T09:10:00Z',
    severity: 'info',
  },
  {
    id: 'aud-003',
    actor: 'System',
    action: 'Bulk user import completed',
    target: '128 users',
    timestamp: '2026-05-27T22:00:00Z',
    severity: 'info',
  },
  {
    id: 'aud-004',
    actor: 'Kabir Malhotra',
    action: 'Exported placement analytics report',
    target: 'Q2-2026-report',
    timestamp: '2026-05-26T16:30:00Z',
    severity: 'warning',
  },
]

export const dashboardKpis: KPI[] = [
  { id: 'kpi-001', label: 'Active users', value: 128, change: 12, trend: 'up' },
  { id: 'kpi-002', label: 'Avg readiness', value: '84%', change: 3, trend: 'up' },
  { id: 'kpi-003', label: 'Open tasks', value: 47, change: -8, trend: 'down' },
  { id: 'kpi-004', label: 'Sessions today', value: 3, trend: 'neutral' },
]

export const dashboardMock = {
  announcements,
  scores,
  evaluations,
  attendance,
  breaks,
  chatMessages,
  students,
  interns,
  sessions,
  leaderboard,
  leaveRequests,
  grievances,
  payrollRows,
  batches,
  auditLogs,
  dashboardKpis,
}
