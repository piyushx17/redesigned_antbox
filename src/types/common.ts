export type ID = string

export type Status = 'idle' | 'loading' | 'success' | 'error'

export interface ApiResponse<T> {
  data: T
  message?: string
}

export interface ApiError {
  message: string
  code?: string
  status?: number
}

export interface Paginated<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}

export interface SelectOption<T extends string = string> {
  label: string
  value: T
}

export interface NavLink {
  label: string
  href: string
  external?: boolean
}

export interface SocialLink {
  platform: string
  href: string
  label?: string
}

export interface SEO {
  title: string
  description: string
  image?: string
  canonical?: string
}

export type Priority = 'low' | 'medium' | 'high'

export type SortDirection = 'asc' | 'desc'

export interface SortConfig {
  field: string
  direction: SortDirection
}

export interface FilterConfig {
  field: string
  value: string | string[] | boolean | number
}

export interface Timestamped {
  createdAt: string
  updatedAt: string
}

export interface NamedEntity {
  id: ID
  name: string
}

export type Locale = 'en' | 'hi'
