const DATE_FORMAT: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}

const DATE_TIME_FORMAT: Intl.DateTimeFormatOptions = {
  ...DATE_FORMAT,
  hour: 'numeric',
  minute: '2-digit',
}

export function formatDate(
  date: string | Date,
  options?: Intl.DateTimeFormatOptions,
  locale = 'en-IN',
): string {
  const value = typeof date === 'string' ? new Date(date) : date

  if (Number.isNaN(value.getTime())) {
    return ''
  }

  return value.toLocaleDateString(locale, options ?? DATE_FORMAT)
}

export function formatDateTime(
  date: string | Date,
  locale = 'en-IN',
): string {
  const value = typeof date === 'string' ? new Date(date) : date

  if (Number.isNaN(value.getTime())) {
    return ''
  }

  return value.toLocaleString(locale, DATE_TIME_FORMAT)
}

export function formatReadTime(minutes: number): string {
  if (minutes < 1) {
    return 'Less than 1 min read'
  }

  if (minutes === 1) {
    return '1 min read'
  }

  return `${Math.round(minutes)} min read`
}

export function formatRelativeDate(date: string | Date, locale = 'en-IN'): string {
  const value = typeof date === 'string' ? new Date(date) : date

  if (Number.isNaN(value.getTime())) {
    return ''
  }

  const diffMs = Date.now() - value.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`

  return formatDate(value, undefined, locale)
}
