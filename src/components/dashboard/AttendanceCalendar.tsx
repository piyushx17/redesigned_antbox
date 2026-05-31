import { attendance } from '@/data/dashboardMock'

export function AttendanceCalendar() {
  const days = attendance.slice(0, 28)

  return (
    <div className="attendance-calendar" id="attendance">
      <h3 className="dashboard-panel-title">Attendance</h3>
      <div className="attendance-grid">
        {days.map((day) => (
          <div
            key={day.date}
            className={`attendance-day status-${day.status}`}
            title={`${day.date}: ${day.status}`}
          >
            <span>{new Date(day.date).getDate()}</span>
          </div>
        ))}
      </div>
      <div className="attendance-legend">
        <span className="status-present">Present</span>
        <span className="status-absent">Absent</span>
        <span className="status-leave">Leave</span>
      </div>
    </div>
  )
}
