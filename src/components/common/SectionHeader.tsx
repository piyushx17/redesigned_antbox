import { cn } from '@/utils/cn'

interface SectionHeaderProps {
  label?: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'section-header mb-12 max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {label && <p className="section-label">{label}</p>}
      <h2 className="font-display text-4xl md:text-5xl leading-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-[var(--text-muted)]">{description}</p>
      )}
    </div>
  )
}
