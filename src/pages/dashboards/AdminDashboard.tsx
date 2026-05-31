import { AnnouncementBar } from '@/components/dashboard/AnnouncementBar'
import { ChatPanel } from '@/components/dashboard/ChatPanel'
import { DataTable } from '@/components/dashboard/DataTable'
import { RoleGuard } from '@/components/dashboard/RoleGuard'
import { auditLogs, batches, dashboardKpis } from '@/data/dashboardMock'

export function AdminDashboard() {
  return (
    <RoleGuard allowed={['admin']}>
      <AnnouncementBar />
      <div className="dashboard-grid mb-4">
        {dashboardKpis.map((kpi) => (
          <div key={kpi.id} className="dashboard-kpi">
            <p className="text-xs text-[var(--text-subtle)] uppercase">{kpi.label}</p>
            <strong>{kpi.value}</strong>
          </div>
        ))}
      </div>
      <div className="dashboard-panel" id="batches">
        <h3 className="dashboard-panel-title">Batch management</h3>
        <DataTable
          data={batches}
          columns={[
            { key: 'name', header: 'Batch' },
            { key: 'startDate', header: 'Start' },
            { key: 'internCount', header: 'Interns' },
            { key: 'status', header: 'Status' },
          ]}
        />
      </div>
      <div className="dashboard-panel" id="audit">
        <h3 className="dashboard-panel-title">Audit log</h3>
        <DataTable
          data={auditLogs.slice(0, 10)}
          columns={[
            {
              key: 'timestamp',
              header: 'Time',
              render: (row) => row.timestamp.slice(0, 16).replace('T', ' '),
            },
            { key: 'actor', header: 'Actor' },
            { key: 'action', header: 'Action' },
            { key: 'target', header: 'Target' },
          ]}
        />
      </div>
      <ChatPanel title="Admin Chat" />
    </RoleGuard>
  )
}
