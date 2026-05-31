import { AnnouncementBar } from '@/components/dashboard/AnnouncementBar'
import { ChatPanel } from '@/components/dashboard/ChatPanel'
import { DataTable } from '@/components/dashboard/DataTable'
import { RoleGuard } from '@/components/dashboard/RoleGuard'
import { evaluations, leaderboard, students } from '@/data/dashboardMock'

export function MentorDashboard() {
  return (
    <RoleGuard allowed={['mentor']}>
      <AnnouncementBar />
      <div className="dashboard-panel" id="students">
        <h3 className="dashboard-panel-title">Student management</h3>
        <DataTable
          data={students.slice(0, 6)}
          columns={[
            { key: 'name', header: 'Name' },
            { key: 'cohort', header: 'Cohort' },
            { key: 'readinessScore', header: 'Readiness' },
            { key: 'status', header: 'Status' },
          ]}
        />
      </div>
      <div className="dashboard-grid">
        <div className="dashboard-panel" id="evaluations">
          <h3 className="dashboard-panel-title">Evaluation panel</h3>
          <DataTable
            data={evaluations.slice(0, 5)}
            columns={[
              { key: 'userName', header: 'Student' },
              { key: 'tasksCompleted', header: 'Tasks' },
              { key: 'mentorRating', header: 'Rating' },
            ]}
          />
        </div>
        <div className="dashboard-panel">
          <h3 className="dashboard-panel-title">Leaderboard</h3>
          <DataTable
            data={leaderboard.map((entry) => ({ ...entry, id: entry.userId }))}
            columns={[
              { key: 'rank', header: '#' },
              { key: 'name', header: 'Name' },
              { key: 'score', header: 'Score' },
            ]}
          />
        </div>
      </div>
      <ChatPanel />
    </RoleGuard>
  )
}
