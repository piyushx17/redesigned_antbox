import { useState, type FormEvent } from 'react'
import { chatMessages } from '@/data/dashboardMock'
import { useAuth } from '@/context/AuthContext'
import { formatDateTime } from '@/utils/format'

const senderNames: Record<string, string> = {
  'mentor-001': 'Meera Kapoor',
  'int-001': 'Ira Sen',
  'hr-001': 'Ananya Rao',
}

export function ChatPanel({ title = 'Cohort Chat' }: { title?: string }) {
  const { user } = useAuth()
  const [messages, setMessages] = useState(chatMessages)
  const [draft, setDraft] = useState('')

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!draft.trim()) return
    setMessages([
      ...messages,
      {
        id: `msg-${Date.now()}`,
        senderId: user?.email ?? 'me',
        content: draft.trim(),
        createdAt: new Date().toISOString(),
        isOwn: true,
      },
    ])
    setDraft('')
  }

  return (
    <div className="chat-panel" id="chat">
      <div className="chat-header">
        <h3>{title}</h3>
        <span className="badge badge-tb">Live</span>
      </div>
      <div className="chat-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-message ${msg.isOwn ? 'own' : ''}`}
          >
            <p className="chat-sender">{msg.isOwn ? user?.name ?? 'You' : senderNames[msg.senderId] ?? msg.senderId}</p>
            <p>{msg.content}</p>
            <time>{formatDateTime(msg.createdAt)}</time>
          </div>
        ))}
      </div>
      <form className="chat-input" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type a message..."
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
