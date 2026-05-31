import { cn } from '@/utils/cn'

interface StatCardProps {
  label: string
  value: React.ReactNode
  hint?: string
  className?: string
}

export function StatCard({ label, value, hint, className }: StatCardProps) {
  return (
    <div className={cn('stat-card', className)}>
      <p className="stat-label">{label}</p>
      <div className="stat-value">{value}</div>
      {hint && <p className="stat-hint">{hint}</p>}
    </div>
  )
}
