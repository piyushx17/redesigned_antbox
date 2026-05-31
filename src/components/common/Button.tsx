import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '@/utils/cn'

type ButtonVariant = 'brand' | 'outline' | 'ghost' | 'tb'
type ButtonSize = 'sm' | 'md' | 'lg'

const variantClass: Record<ButtonVariant, string> = {
  brand: 'btn-brand',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
  tb: 'btn-tb',
}

const sizeClass: Record<ButtonSize, string> = {
  sm: 'btn-sm',
  md: '',
  lg: 'btn-lg',
}

type BaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { to?: never }

type ButtonAsLink = BaseProps &
  Omit<LinkProps, 'className'> & { to: string; type?: never }

export type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button({
  variant = 'brand',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn('btn', variantClass[variant], sizeClass[size], className)

  if ('to' in props && props.to) {
    const { to, ...linkProps } = props as ButtonAsLink
    return (
      <Link to={to} className={classes} {...linkProps}>
        {children}
      </Link>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
