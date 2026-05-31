import { AnnouncementBar } from '@/components/dashboard/AnnouncementBar'
import { ChatPanel } from '@/components/dashboard/ChatPanel'
import { DataTable } from '@/components/dashboard/DataTable'
import { RoleGuard } from '@/components/dashboard/RoleGuard'
import { sessions, students } from '@/data/dashboardMock'

export function EmployeeDashboard() {
  return (
    <RoleGuard allowed={['employee']}>
      <AnnouncementBar />
      <div className="dashboard-panel" id="sessions">
        <h3 className="dashboard-panel-title">Session scheduler</h3>
        <DataTable
          data={sessions}
          columns={[
            { key: 'title', header: 'Session' },
            { key: 'date', header: 'Date' },
            { key: 'time', header: 'Time' },
            { key: 'attendees', header: 'Attendees' },
          ]}
        />
      </div>
      <div className="dashboard-panel" id="students">
        <h3 className="dashboard-panel-title">Student management</h3>
        <DataTable
          data={students.slice(0, 5)}
          columns={[
            { key: 'name', header: 'Name' },
            { key: 'cohort', header: 'Cohort' },
            { key: 'applications', header: 'Apps' },
            { key: 'status', header: 'Status' },
          ]}
        />
      </div>
      <ChatPanel />
    </RoleGuard>
  )
}
