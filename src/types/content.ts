export interface Company {
  name: string
  domain: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  avatarInitials: string
}

export interface Competitor {
  name: string
  type: string
  audience: string
  strength: string
  limitation: string
  antboxEdge: string
  proofPoints: string[]
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  initials: string
}
