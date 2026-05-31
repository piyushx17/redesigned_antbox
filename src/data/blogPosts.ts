import type { BlogPost } from '../types/blog'

export const blogPosts: BlogPost[] = [
  {
    id: 'post-001',
    slug: 'readiness-over-resumes',
    title: 'Why readiness beats resume volume in campus hiring',
    excerpt:
      'Recruiters are shifting from credential filters to evidence-backed shortlists. Here is what that means for students and placement cells.',
    category: 'Talent',
    author: { name: 'AntBox Editorial', role: 'Editorial Team' },
    readTimeMinutes: 5,
    publishedAt: '2026-05-12',
    createdAt: '2026-05-10T09:00:00Z',
    updatedAt: '2026-05-12T09:00:00Z',
    tags: ['readiness', 'campus', 'hiring'],
    featured: true,
    content: `Campus hiring has historically rewarded volume — more applications, more lists, more interviews. But hiring teams at fast-growing companies are asking a different question: *who is actually ready?*

AntBox treats readiness as a composite signal. Sprint completion, assessment performance, mock interview feedback, and mentor reviews converge into a single score that recruiters can trust before the first live conversation.

For students, the implication is practical. Instead of guessing which skills matter, you get a visible gap analysis tied to real role expectations. For placement officers, it means fewer reactive fire drills and more predictable pipeline conversations with corporate partners.

The shift is not about replacing human judgment. It is about giving every stakeholder the same evidence surface — so effort compounds into opportunity instead of disappearing into inbox noise.`,
  },
  {
    id: 'post-002',
    slug: 'mentor-led-sprints',
    title: 'Mentor-led sprints: structure without rigidity',
    excerpt:
      'How weekly milestones, daily evaluations, and async feedback create accountability without burning out learners or mentors.',
    category: 'Product',
    author: { name: 'Rohan Menon', role: 'Product Lead' },
    readTimeMinutes: 4,
    publishedAt: '2026-05-08',
    createdAt: '2026-05-06T09:00:00Z',
    updatedAt: '2026-05-08T09:00:00Z',
    tags: ['mentorship', 'sprints', 'product'],
    featured: true,
    content: `Self-paced learning works for some topics. Placement preparation is not always one of them. Students benefit from rhythm — clear weekly goals, visible progress, and someone who notices when momentum slips.

AntBox sprints are designed around that rhythm. Mentors assign tasks with priority and due dates. Interns and students submit daily evaluations. Reviews land while context is still fresh, not weeks later when details are fuzzy.

The system stays lightweight on purpose. Mentors should spend time coaching, not navigating dashboards. Students should see what matters today, not drown in notifications. When structure feels humane, consistency follows.`,
  },
  {
    id: 'post-003',
    slug: 'building-campus-trust',
    title: 'Building trust with campus-first talent programs',
    excerpt:
      'Transparent expectations, measurable outcomes, and shared dashboards help universities and corporates collaborate with confidence.',
    category: 'Campus',
    author: { name: 'Nikhil Rao', role: 'Campus Programs' },
    readTimeMinutes: 6,
    publishedAt: '2026-05-03',
    createdAt: '2026-05-01T09:00:00Z',
    updatedAt: '2026-05-03T09:00:00Z',
    tags: ['campus', 'partnerships', 'trust'],
    featured: false,
    content: `Campus programs fail quietly when expectations diverge. Students assume placement support means guaranteed interviews. Corporates assume cohorts arrive interview-ready. Placement cells sit in the middle without shared visibility.

AntBox addresses the gap with a single operating layer. Universities see cohort readiness trends. Mentors track individual progress. Recruiters access role-fit scores instead of static PDFs.

Trust grows when every party can verify the same data. That is why we prioritize transparency over marketing claims — clear milestones, published evaluation criteria, and audit-friendly workflows from day one.`,
  },
  {
    id: 'post-004',
    slug: 'mock-interviews-that-matter',
    title: 'Mock interviews that actually change outcomes',
    excerpt:
      'Structured practice, instant scoring, and mentor follow-ups turn interview anxiety into repeatable improvement loops.',
    category: 'Careers',
    author: { name: 'Diya Sharma', role: 'Student Success' },
    readTimeMinutes: 5,
    publishedAt: '2026-04-26',
    createdAt: '2026-04-24T09:00:00Z',
    updatedAt: '2026-04-26T09:00:00Z',
    tags: ['interviews', 'preparation', 'feedback'],
    featured: false,
    content: `Most mock interviews end with vague advice: "be more confident" or "structure your answers better." Useful, but hard to act on.

AntBox mock interviews tie feedback to observable behaviors — clarity, depth, relevance to the JD, and communication pacing. Scores feed directly into readiness metrics, so improvement is trackable week over week.

Students who treat mocks as data, not performance, improve faster. Mentors can spot patterns across a cohort and adjust sprint focus before real interviews begin.`,
  },
  {
    id: 'post-005',
    slug: 'enterprise-governance-basics',
    title: 'Enterprise governance for talent platforms',
    excerpt:
      'Role-based access, audit logs, and batch controls help large organizations adopt campus hiring infrastructure responsibly.',
    category: 'Enterprise',
    author: { name: 'Arjun Pillai', role: 'Head of Engineering' },
    readTimeMinutes: 7,
    publishedAt: '2026-04-18',
    createdAt: '2026-04-16T09:00:00Z',
    updatedAt: '2026-04-18T09:00:00Z',
    tags: ['enterprise', 'governance', 'security'],
    featured: false,
    content: `Talent platforms handle sensitive student data, employer pipelines, and internal HR workflows. Governance cannot be an afterthought.

AntBox ships with role-aware permissions from the start — students see their progress, mentors see their cohorts, HR sees people operations, admins see platform-wide controls. Every sensitive action leaves an audit trail.

For enterprise adopters, this means faster security reviews and cleaner handoffs between campus teams, recruiting ops, and IT. Scale should not require sacrificing accountability.`,
  },
  {
    id: 'post-006',
    slug: 'from-intern-to-offer',
    title: 'From intern sprint to full-time offer',
    excerpt:
      'How daily visibility, mentor reviews, and recruiter-ready profiles help interns convert performance into permanent roles.',
    category: 'Internships',
    author: { name: 'Sara Naik', role: 'Growth & Partnerships' },
    readTimeMinutes: 4,
    publishedAt: '2026-04-10',
    createdAt: '2026-04-08T09:00:00Z',
    updatedAt: '2026-04-10T09:00:00Z',
    tags: ['internships', 'conversion', 'careers'],
    featured: true,
    content: `Internships are extended interviews. Yet many programs still evaluate interns through ad-hoc check-ins and end-of-term presentations.

AntBox makes intern performance legible throughout the sprint. Attendance, task completion, mentor star reviews, and peer collaboration feed a profile that hiring managers can evaluate continuously.

When conversion decisions arrive, they are backed by months of signal — not a single slide deck assembled the night before review week.`,
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured)
}
