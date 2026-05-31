import type { Timestamped } from './common'

export interface BlogAuthor {
  name: string
  avatarUrl?: string
  role?: string
}

export interface BlogPost extends Timestamped {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: BlogAuthor
  publishedAt: string
  readTimeMinutes: number
  tags: string[]
  coverImage?: string
  category?: string
  featured?: boolean
  locale?: 'en' | 'hi'
}

export interface BlogCategory {
  slug: string
  name: string
  description?: string
  postCount?: number
}

export interface BlogFilters {
  category?: string
  tag?: string
  search?: string
  featured?: boolean
}

export type BlogPostPreview = Pick<
  BlogPost,
  | 'id'
  | 'slug'
  | 'title'
  | 'excerpt'
  | 'author'
  | 'publishedAt'
  | 'readTimeMinutes'
  | 'tags'
  | 'coverImage'
  | 'category'
  | 'featured'
>
