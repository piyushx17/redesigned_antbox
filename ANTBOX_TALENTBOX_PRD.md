# AntBox + TalentBox PRD

## Product Goal

Build a production-ready React + Vite website for AntBox and TalentBox with a premium dark brand system, a strong public landing experience, a high-impact पहल pitch page, and mock role-based dashboards ready to connect to a backend in Phase 2.

The site should feel serious, modern, and trustworthy: AntBox as a premium talent infrastructure company, TalentBox as the operational platform, and पहल as the bold public campaign that turns student aspiration into action.

## Scope

### Public Site

- `/` - AntBox landing page
- `/about` - About page
- `/careers` - Careers page
- `/blog` - Blog listing page
- `/blog/:slug` - Individual blog post page
- `/talentbox` - पहल public pitch page
- `/talentbox/login` - TalentBox login page

### Dashboard Site

- `/talentbox/dashboard/student`
- `/talentbox/dashboard/intern`
- `/talentbox/dashboard/mentor`
- `/talentbox/dashboard/employee`
- `/talentbox/dashboard/hr`
- `/talentbox/dashboard/admin`

## Final Tech Decisions

### Framework

- React + Vite
- TypeScript
- React Router v6

### Styling

- Tailwind CSS for layout, spacing, responsive utilities, and common styling
- Custom CSS for animations, variables, theme primitives, marquee, reveal effects, timeline drawing, and dashboard-specific polish
- No UI component libraries

### Icons

- Phosphor Icons only via `@phosphor-icons/react`
- No Lucide React

### Fonts

- Display: Cormorant Garamond
- Body: DM Sans
- Hindi button/text: Noto Sans Devanagari
- Avoid Inter, Roboto, Arial

### Animation

- Pure CSS `@keyframes`
- Vanilla IntersectionObserver through reusable React hooks
- No GSAP
- No Framer Motion
- Motion style: slow, elegant, intentional

### State/Auth

- React Context API
- Role and email stored in `localStorage`
- Mock login in Phase 1
- Backend-driven auth in Phase 2

### Data

- Local TypeScript mock data files in `src/data`
- Clearbit logos for company marquee:
  `https://logo.clearbit.com/{domain}`

### Backend Phase 2

- Node.js
- Express
- PostgreSQL
- Real auth, role lookup, dashboards, file uploads, reports

### Deployment

- Vercel

## Brand Colors

```css
:root {
  --bg-primary: #0d0c0b;
  --bg-secondary: #161412;
  --bg-card: #1e1b18;
  --text-primary: #faf7f2;
  --text-muted: #b3aca3;
  --text-subtle: #8a8278;
  --accent: #e8813a;
  --accent-hover: #f09247;
  --border: rgba(255,255,255,0.07);
  --glass: rgba(255,255,255,0.03);
  --glow: rgba(232,129,58,0.12);
  --success: #4ade80;
  --danger: #f87171;
  --warning: #facc15;
  --info: #38bdf8;
  --tb-accent: #7c3aed;
  --tb-hover: #9333ea;
  --dashboard-line: rgba(255,255,255,0.09);
}
```

## Key Modifications From Original PRD

### 1. Add TypeScript

Reason: the project includes role-based dashboards, mock auth, reusable data models, forms, and many route-level components. TypeScript will reduce bugs and make future backend integration easier.

### 2. Keep Competitor Copy Legally Safer

The पहल page can still be bold, but claims should be phrased carefully.

Use:

- "High upfront cost"
- "Income-share commitment"
- "Placement terms depend on conditions"
- "Course-first, outcome-later model"
- "Certification-heavy path"

Avoid:

- "trap"
- "scam"
- "no placement" as an absolute claim unless verified and sourced
- any claim that sounds defamatory without citation

### 3. Separate Visual Systems

AntBox public site:

- Amber accent
- Premium SaaS/editorial feel
- Corporate trust and student clarity

TalentBox पहल:

- Same dark base
- More emotional, cinematic, data-journalism feel
- Storytelling, proof, comparison, journey

TalentBox dashboard:

- Violet accent
- Denser product UI
- More tables, panels, operational controls

### 4. Build Mock Dashboards First

Dashboards should be usable with mock data in Phase 1. Backend work comes later after the UI and role flows are stable.

### 5. Use Real Assets When Available

Until assets are provided, use carefully designed placeholders. Replace later with:

- AntBox logo SVG
- TalentBox logo SVG
- Team photos
- KIIT/campus photos
- Culture photos
- Google Form link
- Student testimonials
- Client company domains

## UX Principles

- First screen should communicate the product immediately.
- Every CTA should be clear and role-aware.
- Avoid cheap motion: no bouncing, spinning, or overdone particles.
- Use cards for repeated items, dashboards, and framed product previews.
- Avoid nested cards where possible.
- Keep text readable on mobile.
- Prioritize trust: proof, outcomes, process, transparency.
- Dashboards should feel efficient, not decorative.

## Page Requirements

### Landing Page `/`

Sections:

- Navbar
- Hero
- Logo marquee, two rows, opposite directions
- Features, 6 cards
- How it works, 3 steps with animated line
- Why us vs alternatives comparison
- Testimonials marquee
- Stats counters
- FAQ accordion
- Final CTA
- Footer

Important details:

- Navbar center links: About, Careers, Blog, TalentBox
- Right side: Login ghost button
- Hero has two CTAs
- Logo marquee uses Clearbit domains
- Feature cards use Phosphor icons
- Counters animate on viewport entry

### About Page `/about`

Sections:

- Typography hero
- Our story
- Mission, vision, values
- Team grid
- Timeline
- Culture photo grid
- Careers CTA

### Careers Page `/careers`

Sections:

- Hero
- Why work here
- Open roles with filters
- Life at AntBox
- Hiring process
- Resume form

### Blog Page `/blog`

Sections:

- Search hero
- Category tabs
- Featured post
- Post grid
- Newsletter strip

Individual post page:

- Scroll progress bar
- Title, author, read time
- Article body
- Sticky share buttons on desktop
- Author bio
- Related posts

### TalentBox पहल Page `/talentbox`

This should be the strongest page.

Sections:

- Navbar with पहल button and login
- Cinematic split hero
- Problem section
- Competitor breakdown cards
- AntBox way comparison table
- Journey timeline
- KIIT collaboration section
- Who this is for
- Stats counters
- What you learn
- Testimonials
- FAQ
- Ask a question form
- Closing CTA

Hero image direction:

A young Indian college student studying late at night, warm amber light, books, notes, code on laptop, phone with AntBox notification. Cinematic, real, warm, determined.

### TalentBox Login `/talentbox/login`

Features:

- Centered login card
- Email and password
- Role rules displayed
- Mock login checks email against mock users
- Store:
  - `antbox_role`
  - `antbox_email`
  - `antbox_user`
- Redirect based on role
- Show danger error for unauthorized account

### Dashboards

Shared dashboard shell:

- Sidebar
- Topbar
- Role badge
- Notification bell
- User avatar
- Violet dashboard accent

Student:

- Announcements
- Score cards
- Daily evaluation board
- Leave and grievance
- Attendance tracker
- Break tracker
- Chat UI
- Profile
- Classroom assignments/materials/evaluations

Intern:

- Work tracker
- Projects
- Attendance
- Break tracker
- Chat

Mentor/Employee/HR/Admin:

- Announcements
- Chat
- Student management
- Intern management
- Attendance
- Break tracker
- Classroom management
- Session scheduler
- Evaluation panel
- Leaderboard
- Leave manager
- Grievance manager
- Payroll
- Batch management
- Audit log
- Export reports

## Recommended File Structure

```txt
antbox-site2/
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── README.md
├── ANTBOX_TALENTBOX_PRD.md
├── public/
│   ├── assets/
│   │   ├── logos/
│   │   ├── team/
│   │   ├── culture/
│   │   ├── campus/
│   │   └── generated/
│   └── favicon.svg
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── styles/
    │   ├── variables.css
    │   ├── animations.css
    │   ├── components.css
    │   └── dashboard.css
    ├── routes/
    │   ├── PublicRoutes.tsx
    │   └── DashboardRoutes.tsx
    ├── layouts/
    │   ├── PublicLayout.tsx
    │   ├── TalentBoxLayout.tsx
    │   └── DashboardLayout.tsx
    ├── components/
    │   ├── common/
    │   │   ├── Button.tsx
    │   │   ├── Card.tsx
    │   │   ├── SectionHeader.tsx
    │   │   ├── Reveal.tsx
    │   │   ├── Counter.tsx
    │   │   ├── Accordion.tsx
    │   │   ├── LogoMarquee.tsx
    │   │   ├── StatCard.tsx
    │   │   └── EmptyState.tsx
    │   ├── navigation/
    │   │   ├── Navbar.tsx
    │   │   ├── Footer.tsx
    │   │   └── MobileMenu.tsx
    │   ├── landing/
    │   │   ├── LandingHero.tsx
    │   │   ├── FeatureGrid.tsx
    │   │   ├── HowItWorks.tsx
    │   │   ├── ComparisonTable.tsx
    │   │   ├── TestimonialsMarquee.tsx
    │   │   └── FinalCta.tsx
    │   ├── talentbox/
    │   │   ├── PahalHero.tsx
    │   │   ├── ProblemStats.tsx
    │   │   ├── CompetitorCards.tsx
    │   │   ├── PahalTimeline.tsx
    │   │   ├── KiitCollab.tsx
    │   │   ├── LearningGrid.tsx
    │   │   └── AskQuestionForm.tsx
    │   └── dashboard/
    │       ├── DashboardSidebar.tsx
    │       ├── DashboardTopbar.tsx
    │       ├── AnnouncementBar.tsx
    │       ├── DataTable.tsx
    │       ├── ChatPanel.tsx
    │       ├── AttendanceCalendar.tsx
    │       └── RoleGuard.tsx
    ├── pages/
    │   ├── HomePage.tsx
    │   ├── AboutPage.tsx
    │   ├── CareersPage.tsx
    │   ├── BlogPage.tsx
    │   ├── BlogPostPage.tsx
    │   ├── TalentBoxPage.tsx
    │   ├── TalentBoxLoginPage.tsx
    │   └── dashboards/
    │       ├── StudentDashboard.tsx
    │       ├── InternDashboard.tsx
    │       ├── MentorDashboard.tsx
    │       ├── EmployeeDashboard.tsx
    │       ├── HrDashboard.tsx
    │       └── AdminDashboard.tsx
    ├── context/
    │   └── AuthContext.tsx
    ├── hooks/
    │   ├── useReveal.ts
    │   ├── useCounter.ts
    │   ├── useLocalStorage.ts
    │   └── useScrollProgress.ts
    ├── data/
    │   ├── companies.ts
    │   ├── features.ts
    │   ├── testimonials.ts
    │   ├── competitors.ts
    │   ├── team.ts
    │   ├── roles.ts
    │   ├── blogPosts.ts
    │   ├── mockUsers.ts
    │   └── dashboardMock.ts
    ├── types/
    │   ├── auth.ts
    │   ├── dashboard.ts
    │   ├── blog.ts
    │   └── common.ts
    └── utils/
        ├── cn.ts
        ├── clearbit.ts
        ├── format.ts
        └── routes.ts
```

## Environment Setup

### Requirements

- Node.js 20+
- npm 10+
- VS Code or Cursor

### Create/Install Project

If building from this existing folder:

```bash
cd /Users/piyushx17/Documents/antbox-site2
npm create vite@latest . -- --template react-ts
npm install
```

If Vite refuses because the folder is not empty, we will scaffold manually instead of deleting current files.

### Install Dependencies

```bash
npm install react-router-dom @phosphor-icons/react clsx react-hook-form zod
npm install -D tailwindcss @tailwindcss/vite typescript
```

### Run Local Dev Server

```bash
npm run dev
```

Expected local URL:

```txt
http://localhost:5173
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Implementation Phases

### Phase 1 - React Foundation

- Add Vite + React + TypeScript
- Add Tailwind
- Add routing
- Add global CSS variables
- Add animation system
- Add layout components

### Phase 2 - Public Pages

- Home
- About
- Careers
- Blog
- Blog post
- Footer/nav polish

### Phase 3 - TalentBox पहल

- Cinematic hero
- Problem data cards
- Competitor cards
- Comparison table
- Timeline
- KIIT/collab section
- FAQ and CTA

### Phase 4 - Mock Auth + Dashboards

- Login
- Auth context
- Role guard
- Dashboard shell
- Student/intern/mentor/employee/hr/admin pages
- Mock data

### Phase 5 - Polish

- Mobile QA
- Accessibility pass
- Empty states
- Form states
- Loading states
- Performance cleanup
- Vercel config

## Needed From Founder/User

- AntBox logo SVG
- TalentBox logo SVG or permission to design one
- Team headshots
- Office/culture photos
- KIIT/campus photos
- Google Form link
- Real testimonials
- Client company domains
- Real placement/company numbers
- Exact contact email and social links

## Acceptance Criteria

- Site runs on `localhost:5173`
- All routes work with React Router
- No Lucide dependency
- No Framer Motion or GSAP
- Fonts load correctly
- Mobile responsive
- Dashboards are role protected
- Mock login redirects correctly
- Build passes with `npm run build`
- Public pages feel polished, not placeholder-heavy
- पहल page feels premium, emotional, and credible

