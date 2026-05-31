import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { PaperPlaneTilt } from '@phosphor-icons/react'
import { Button } from '@/components/common/Button'

interface FormData {
  name: string
  email: string
  question: string
}

export function AskQuestionForm() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, reset } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log('Question submitted:', data)
    setSubmitted(true)
    reset()
  }

  return (
    <section className="section">
      <div className="container max-w-xl">
        <h2 className="font-display text-3xl mb-2 text-center">Ask a question</h2>
        <p className="text-[var(--text-muted)] text-center mb-8">
          No sales pitch — just honest answers about पहल, placement terms, and fit.
        </p>
        {submitted ? (
          <div className="card text-center">
            <p className="text-[var(--success)] font-semibold">Thanks — we'll respond within 48 hours.</p>
          </div>
        ) : (
          <form className="form-stack card" onSubmit={handleSubmit(onSubmit)}>
            <label>
              Name
              <input {...register('name', { required: true })} placeholder="Your name" />
            </label>
            <label>
              Email
              <input
                type="email"
                {...register('email', { required: true })}
                placeholder="you@email.com"
              />
            </label>
            <label>
              Question
              <textarea
                {...register('question', { required: true })}
                placeholder="What's on your mind?"
                rows={4}
              />
            </label>
            <Button variant="tb" type="submit">
              <PaperPlaneTilt size={18} />
              Send question
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
