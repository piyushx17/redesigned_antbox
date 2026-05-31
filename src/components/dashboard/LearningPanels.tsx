import { useMemo, useState, type FormEvent } from 'react'
import { useAuth } from '@/context/AuthContext'
import { evaluations, sessions } from '@/data/dashboardMock'

const requestStorageKey = 'talentbox_hr_requests'

interface HrRequest {
  id: string
  raisedBy: string
  email: string
  type: string
  subject: string
  details: string
  date: string
  status: 'submitted'
}

function readHrRequests(): HrRequest[] {
  try {
    return JSON.parse(window.localStorage.getItem(requestStorageKey) ?? '[]') as HrRequest[]
  } catch {
    return []
  }
}

export function ClassroomPanel() {
  return (
    <div className="dashboard-panel dashboard-section" id="classroom">
      <div className="dashboard-panel-head">
        <div>
          <p className="dashboard-eyebrow">Classroom</p>
          <h3 className="dashboard-panel-title">Today’s learning room</h3>
        </div>
        <button className="dashboard-action" type="button">Open classroom</button>
      </div>
      <div className="dashboard-card-grid">
        {sessions.map((session) => (
          <article key={session.id} className="dashboard-mini-card">
            <p className="dashboard-mini-meta">{session.date} · {session.time}</p>
            <h4>{session.title}</h4>
            <p>{session.owner} · {session.attendees} learners</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export function AssessmentPanel() {
  const recent = evaluations.slice(0, 3)

  return (
    <div className="dashboard-panel dashboard-section" id="assessment">
      <div className="dashboard-panel-head">
        <div>
          <p className="dashboard-eyebrow">Assessment</p>
          <h3 className="dashboard-panel-title">Readiness checks</h3>
        </div>
        <button className="dashboard-action" type="button">Start assessment</button>
      </div>
      <div className="assessment-list">
        {recent.map((item) => (
          <article key={item.id} className="assessment-row">
            <div>
              <h4>{item.notes}</h4>
              <p>{item.date} · self {item.selfRating}/5 · mentor {item.mentorRating ?? 'pending'}</p>
            </div>
            <span className="badge badge-tb">{item.status}</span>
          </article>
        ))}
      </div>
    </div>
  )
}

export function HrRequestPanel() {
  const { user } = useAuth()
  const [requests, setRequests] = useState<HrRequest[]>(() =>
    typeof window === 'undefined' ? [] : readHrRequests(),
  )
  const [type, setType] = useState('Leave')
  const [subject, setSubject] = useState('')
  const [details, setDetails] = useState('')

  const myRequests = useMemo(
    () => requests.filter((request) => request.email === user?.email),
    [requests, user?.email],
  )

  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!user || !subject.trim() || !details.trim()) return

    const nextRequest: HrRequest = {
      id: `req-${Date.now()}`,
      raisedBy: user.name,
      email: user.email,
      type,
      subject: subject.trim(),
      details: details.trim(),
      date: new Date().toISOString(),
      status: 'submitted',
    }
    const next = [nextRequest, ...requests]
    window.localStorage.setItem(requestStorageKey, JSON.stringify(next))
    setRequests(next)
    setSubject('')
    setDetails('')
  }

  return (
    <div className="dashboard-panel dashboard-section" id="hr-requests">
      <div className="dashboard-panel-head">
        <div>
          <p className="dashboard-eyebrow">HR desk</p>
          <h3 className="dashboard-panel-title">Leave, grievance or request</h3>
        </div>
      </div>
      <form className="dashboard-form" onSubmit={submitRequest}>
        <select value={type} onChange={(event) => setType(event.target.value)}>
          <option>Leave</option>
          <option>Grievance</option>
          <option>Document request</option>
          <option>General request</option>
        </select>
        <input
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          placeholder="Subject"
        />
        <textarea
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          placeholder="Add dates, context, and what you need from HR"
          rows={4}
        />
        <button className="dashboard-action" type="submit">Send to HR</button>
      </form>
      {myRequests.length > 0 && (
        <div className="request-history">
          {myRequests.slice(0, 2).map((request) => (
            <p key={request.id}>
              <strong>{request.type}</strong> · {request.subject} · {request.status}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export function HrInboxPanel() {
  const [requests] = useState<HrRequest[]>(() =>
    typeof window === 'undefined' ? [] : readHrRequests(),
  )

  return (
    <div className="dashboard-panel dashboard-section" id="requests">
      <h3 className="dashboard-panel-title">Student and team requests</h3>
      <div className="assessment-list">
        {requests.length === 0 ? (
          <p className="text-sm text-[var(--text-muted)]">
            New leave, grievance, and document requests from students appear here.
          </p>
        ) : (
          requests.map((request) => (
            <article key={request.id} className="assessment-row">
              <div>
                <h4>{request.subject}</h4>
                <p>{request.raisedBy} · {request.type} · {request.details}</p>
              </div>
              <span className="badge badge-tb">{request.status}</span>
            </article>
          ))
        )}
      </div>
    </div>
  )
}
