import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PublicLayout } from '@/layouts/PublicLayout'
import { TalentBoxLayout } from '@/layouts/TalentBoxLayout'
import { DashboardLayout } from '@/layouts/DashboardLayout'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { CareersPage } from '@/pages/CareersPage'
import { BlogPage } from '@/pages/BlogPage'
import { BlogPostPage } from '@/pages/BlogPostPage'
import { TalentBoxPage } from '@/pages/TalentBoxPage'
import { TalentBoxLoginPage } from '@/pages/TalentBoxLoginPage'

const StudentDashboard = lazy(() =>
  import('@/pages/dashboards/StudentDashboard').then((m) => ({ default: m.StudentDashboard })),
)
const InternDashboard = lazy(() =>
  import('@/pages/dashboards/InternDashboard').then((m) => ({ default: m.InternDashboard })),
)
const MentorDashboard = lazy(() =>
  import('@/pages/dashboards/MentorDashboard').then((m) => ({ default: m.MentorDashboard })),
)
const EmployeeDashboard = lazy(() =>
  import('@/pages/dashboards/EmployeeDashboard').then((m) => ({ default: m.EmployeeDashboard })),
)
const HrDashboard = lazy(() =>
  import('@/pages/dashboards/HrDashboard').then((m) => ({ default: m.HrDashboard })),
)
const AdminDashboard = lazy(() =>
  import('@/pages/dashboards/AdminDashboard').then((m) => ({ default: m.AdminDashboard })),
)

function Loading() {
  return <div className="container py-32 text-center text-[var(--text-muted)]">Loading…</div>
}

export function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
        </Route>

        <Route element={<TalentBoxLayout />}>
          <Route path="talentbox" element={<TalentBoxPage />} />
        </Route>

        <Route path="talentbox/login" element={<TalentBoxLoginPage />} />

        <Route path="talentbox/dashboard" element={<DashboardLayout />}>
          <Route path="student" element={<StudentDashboard />} />
          <Route path="intern" element={<InternDashboard />} />
          <Route path="mentor" element={<MentorDashboard />} />
          <Route path="employee" element={<EmployeeDashboard />} />
          <Route path="hr" element={<HrDashboard />} />
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Suspense>
  )
}