import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/common/Button'
import { getDashboardPath, ROUTES } from '@/utils/routes'
import { mockUsers } from '@/data/mockUsers'

interface LoginForm {
  email: string
  password: string
}

export function TalentBoxLoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const { register, handleSubmit } = useForm<LoginForm>({
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = (data: LoginForm) => {
    const success = login(data.email, data.password)
    if (!success) {
      setError('Invalid email or password. Use a demo account below.')
      return
    }
    const user = mockUsers.find((u) => u.email.toLowerCase() === data.email.toLowerCase())
    if (user) {
      navigate(getDashboardPath(user.role))
    }
  }

  return (
    <div className="login-page">
      <div className="login-card card">
        <p className="section-label text-center">TalentBox</p>
        <h1 className="font-display text-3xl text-center mb-2">Sign in</h1>
        <p className="text-center text-sm mb-6">Mock auth — Phase 1 demo accounts</p>

        {error && <p className="login-error">{error}</p>}

        <form className="form-stack" onSubmit={handleSubmit(onSubmit)}>
          <label>
            Email
            <input
              type="email"
              autoComplete="email"
              {...register('email', { required: true })}
              placeholder="student@theantbox.com"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              autoComplete="current-password"
              {...register('password', { required: true })}
              placeholder="••••••••"
            />
          </label>
          <Button variant="tb" type="submit" className="w-full justify-center">
            Sign in
          </Button>
        </form>

        <div className="role-hints">
          <p className="mb-2 font-semibold text-[var(--text-muted)]">Demo accounts (password: antbox123)</p>
          {mockUsers.map((u) => (
            <p key={u.email}>
              <code>{u.role}</code> — {u.email}
            </p>
          ))}
        </div>

        <p className="text-center text-sm mt-6">
          <a href={ROUTES.TALENTBOX} className="text-[var(--tb-accent)]">
            ← Back to पहल
          </a>
        </p>
      </div>
    </div>
  )
}
