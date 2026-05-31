import { AnnouncementBar } from '@/components/dashboard/AnnouncementBar'
import { ChatPanel } from '@/components/dashboard/ChatPanel'
import { DataTable } from '@/components/dashboard/DataTable'
import { HrInboxPanel } from '@/components/dashboard/LearningPanels'
import { RoleGuard } from '@/components/dashboard/RoleGuard'
import { grievances, leaveRequests, payrollRows } from '@/data/dashboardMock'

export function HrDashboard() {
  return (
    <RoleGuard allowed={['hr']}>
      <AnnouncementBar />
      <HrInboxPanel />
      <div className="dashboard-grid">
        <div className="dashboard-panel" id="leave">
          <h3 className="dashboard-panel-title">Leave manager</h3>
          <DataTable
            data={leaveRequests}
            columns={[
              { key: 'userName', header: 'Employee' },
              { key: 'type', header: 'Type' },
              { key: 'startDate', header: 'From' },
              { key: 'status', header: 'Status' },
            ]}
          />
        </div>
        <div className="dashboard-panel" id="grievances">
          <h3 className="dashboard-panel-title">Grievance manager</h3>
          <DataTable
            data={grievances}
            columns={[
              { key: 'userName', header: 'Raised by' },
              { key: 'subject', header: 'Subject' },
              { key: 'category', header: 'Category' },
              { key: 'status', header: 'Status' },
            ]}
          />
        </div>
      </div>
      <div className="dashboard-panel" id="payroll">
        <h3 className="dashboard-panel-title">Payroll</h3>
        <DataTable
          data={payrollRows}
          columns={[
            { key: 'name', header: 'Employee' },
            { key: 'role', header: 'Role' },
            {
              key: 'netPay',
              header: 'Net pay',
              render: (row) => `₹${row.netPay.toLocaleString()}`,
            },
            { key: 'status', header: 'Status' },
          ]}
        />
      </div>
      <ChatPanel title="HR Desk Chat" />
    </RoleGuard>
  )
}
