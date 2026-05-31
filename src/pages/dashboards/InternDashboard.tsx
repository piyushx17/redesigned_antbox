import { AnnouncementBar } from '@/components/dashboard/AnnouncementBar'
import { AttendanceCalendar } from '@/components/dashboard/AttendanceCalendar'
import { ChatPanel } from '@/components/dashboard/ChatPanel'
import { DataTable } from '@/components/dashboard/DataTable'
import { AssessmentPanel, ClassroomPanel, HrRequestPanel } from '@/components/dashboard/LearningPanels'
import { RoleGuard } from '@/components/dashboard/RoleGuard'
import { interns } from '@/data/dashboardMock'

export function InternDashboard() {
  return (
    <RoleGuard allowed={['intern']}>
      <AnnouncementBar />
      <div className="dashboard-panel" id="projects">
        <h3 className="dashboard-panel-title">Work tracker</h3>
        <DataTable
          data={interns.slice(0, 3)}
          columns={[
            { key: 'name', header: 'Intern' },
            { key: 'batch', header: 'Batch' },
            {
              key: 'sprintProgress',
              header: 'Progress',
              render: (row) => `${row.sprintProgress}%`,
            },
            { key: 'status', header: 'Status' },
          ]}
        />
      </div>
      <ClassroomPanel />
      <AssessmentPanel />
      <HrRequestPanel />
      <div className="dashboard-grid">
        <div className="dashboard-panel" id="attendance">
          <AttendanceCalendar />
        </div>
        <ChatPanel title="Sprint Chat" />
      </div>
    </RoleGuard>
  )
}
