export type UserRole = 'student' | 'intern' | 'mentor' | 'employee' | 'hr' | 'admin'

export const ROLE_LABELS: Record<UserRole, string> = {
  student: 'Student',
  intern: 'Intern',
  mentor: 'Mentor',
  employee: 'Employee',
  hr: 'HR',
  admin: 'Admin',
}

export const ROLE_DESCRIPTIONS: Record<UserRole, string> = {
  student:
    'Track readiness scores, sprint learning, mock interviews, and application pipelines.',
  intern:
    'Manage sprint tasks, attendance, daily evaluations, and mentor sync sessions.',
  mentor:
    'Guide intern cohorts, submit reviews, schedule sessions, and monitor progress.',
  employee:
    'Execute operational workflows, support cohort delivery, and collaborate across teams.',
  hr:
    'Handle leave, payroll visibility, grievances, announcements, and people operations.',
  admin:
    'Govern platform users, batches, audit logs, analytics, and global configuration.',
}
