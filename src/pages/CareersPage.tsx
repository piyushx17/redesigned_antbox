import { UploadSimple } from '@phosphor-icons/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/common/Button'
import { Card } from '@/components/common/Card'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeader } from '@/components/common/SectionHeader'

const roles = [
  { title: 'Senior Full-Stack Engineer', dept: 'Engineering', location: 'Bhubaneswar / Remote', type: 'Full-time' },
  { title: 'Mentor — Backend Systems', dept: 'Delivery', location: 'Remote', type: 'Contract' },
  { title: 'Campus Partnerships Lead', dept: 'Growth', location: 'Bhubaneswar', type: 'Full-time' },
  { title: 'Product Designer', dept: 'Design', location: 'Remote', type: 'Full-time' },
  { title: 'Student Success Manager', dept: 'Operations', location: 'Bhubaneswar', type: 'Full-time' },
]

const departments = ['All', 'Engineering', 'Delivery', 'Growth', 'Design', 'Operations']

interface ResumeForm {
  name: string
  email: string
  role: string
  message: string
  resume: FileList
}

export function CareersPage() {
  const [filter, setFilter] = useState('All')
  const [submitted, setSubmitted] = useState(false)
  const [resumeName, setResumeName] = useState('')
  const { register, handleSubmit, reset } = useForm<ResumeForm>()

  const filtered =
    filter === 'All' ? roles : roles.filter((r) => r.dept === filter)

  const onSubmit = (data: ResumeForm) => {
    console.log(data)
    setSubmitted(true)
    setResumeName('')
    reset()
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="section-label">Careers</p>
            <h1 className="font-display text-5xl md:text-6xl">
              Build talent infrastructure that <em>matters.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            label="Why AntBox"
            title="Work on problems that change student outcomes."
            description="Small team, high ownership, real impact on campus-to-corporate journeys."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Outcome-driven culture — we ship for students, not slides',
              'Remote-friendly with campus roots in Bhubaneswar',
              'Competitive comp + learning budget + mentor access',
            ].map((text, i) => (
              <Reveal key={text} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <Card>{text}</Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--bg-secondary)]">
        <div className="container">
          <SectionHeader label="Open roles" title="Current openings." />
          <div className="role-filters">
            {departments.map((d) => (
              <button
                key={d}
                type="button"
                className={`tab ${filter === d ? 'active' : ''}`}
                onClick={() => setFilter(d)}
              >
                {d}
              </button>
            ))}
          </div>
          {filtered.map((role) => (
            <Card key={role.title} className="role-card">
              <div className="flex flex-wrap justify-between gap-4 items-start">
                <div>
                  <h3 className="font-display text-xl text-[var(--text-primary)]">{role.title}</h3>
                  <p className="text-sm text-[var(--text-subtle)]">
                    {role.dept} · {role.location} · {role.type}
                  </p>
                </div>
                <span className="badge badge-accent">{role.type}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container max-w-xl">
          <SectionHeader label="Apply" title="Send your resume." align="center" />
          {submitted ? (
            <Card className="text-center">
              <p className="text-[var(--success)]">Application received — we'll be in touch.</p>
            </Card>
          ) : (
            <form className="form-stack card" onSubmit={handleSubmit(onSubmit)}>
              <label>
                Name
                <input {...register('name', { required: true })} />
              </label>
              <label>
                Email
                <input type="email" {...register('email', { required: true })} />
              </label>
              <label>
                Role of interest
                <input {...register('role', { required: true })} placeholder="e.g. Senior Engineer" />
              </label>
              <label>
                Message
                <textarea {...register('message')} rows={4} />
              </label>
              <label className="resume-upload">
                Resume
                <span className="resume-dropzone">
                  <UploadSimple size={24} weight="duotone" />
                  <strong>{resumeName || 'Drop your resume here'}</strong>
                  <small>PDF, DOC, or DOCX up to 10MB</small>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    {...register('resume', {
                      required: true,
                      onChange: (event) => {
                        const file = event.target.files?.[0]
                        setResumeName(file?.name ?? '')
                      },
                    })}
                  />
                </span>
              </label>
              <Button variant="brand" type="submit">
                Submit application
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
