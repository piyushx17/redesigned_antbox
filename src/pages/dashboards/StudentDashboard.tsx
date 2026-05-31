import { AnnouncementBar } from '@/components/dashboard/AnnouncementBar'
import { AttendanceCalendar } from '@/components/dashboard/AttendanceCalendar'
import { ChatPanel } from '@/components/dashboard/ChatPanel'
import { DataTable } from '@/components/dashboard/DataTable'
import { AssessmentPanel, ClassroomPanel, HrRequestPanel } from '@/components/dashboard/LearningPanels'
import { RoleGuard } from '@/components/dashboard/RoleGuard'
import { evaluations, scores } from '@/data/dashboardMock'

export function StudentDashboard() {
  const myScore = scores[0]

  return (
    <RoleGuard allowed={['student']}>
      <AnnouncementBar />
      <div className="dashboard-grid dashboard-kpi-grid">
        <div className="dashboard-kpi">
          <p className="text-xs text-[var(--text-subtle)] uppercase">Daily score</p>
          <strong>{myScore?.dailyScore ?? '—'}</strong>
        </div>
        <div className="dashboard-kpi">
          <p className="text-xs text-[var(--text-subtle)] uppercase">Readiness</p>
          <strong>{myScore?.readinessScore ?? '—'}%</strong>
        </div>
        <div className="dashboard-kpi">
          <p className="text-xs text-[var(--text-subtle)] uppercase">Attendance</p>
          <strong>{myScore?.attendancePercent ?? '—'}%</strong>
        </div>
        <div className="dashboard-kpi">
          <p className="text-xs text-[var(--text-subtle)] uppercase">Weekly avg</p>
          <strong>{myScore?.weeklyAverage ?? '—'}</strong>
        </div>
      </div>

      <div className="dashboard-panel dashboard-section" id="evaluations">
        <h3 className="dashboard-panel-title">Daily evaluations</h3>
        <DataTable
          data={evaluations.slice(0, 5)}
          columns={[
            { key: 'date', header: 'Date' },
            { key: 'tasksCompleted', header: 'Tasks' },
            { key: 'hoursLogged', header: 'Hours' },
            { key: 'status', header: 'Status' },
          ]}
        />
      </div>

      <ClassroomPanel />
      <AssessmentPanel />
      <HrRequestPanel />

      <div className="dashboard-grid dashboard-section">
        <div className="dashboard-panel" id="attendance">
          <AttendanceCalendar />
        </div>
        <ChatPanel />
      </div>
    </RoleGuard>
  )
}
