import type { Competitor } from '../types/content'

export const competitorModels = [
  {
    title: 'Course marketplace',
    note: 'Good for self-study, weaker when students need daily accountability.',
  },
  {
    title: 'Cohort bootcamp',
    note: 'Structured learning, but often separated from campus and live hiring workflows.',
  },
  {
    title: 'ISA or pay-later',
    note: 'Low upfront entry, but terms and long-term cost need careful review.',
  },
  {
    title: 'Campus placement cell',
    note: 'Trusted locally, but usually lacks one shared readiness and proof layer.',
  },
]

export const competitors: Competitor[] = [
  {
    name: 'Airtribe',
    type: 'Cohort-based upskilling',
    audience: 'Professionals and students who want live cohorts around specific skills.',
    strength: 'Strong cohort energy, focused instructors, and peer accountability.',
    limitation: 'The learning journey can still sit outside campus attendance, HR requests, mentor reviews, and recruiter proof.',
    antboxEdge:
      'AntBox connects learning, attendance, evaluations, HR workflows, mentors, and recruiter evidence inside one TalentBox layer.',
    proofPoints: ['Campus-ready dashboards', 'Daily evaluations', 'Recruiter proof profiles'],
  },
  {
    name: 'AlgoUniversity',
    type: 'Placement preparation program',
    audience: 'Students focused heavily on DSA, interviews, and software placement prep.',
    strength: 'Clear interview-prep orientation and coding-practice focus.',
    limitation:
      'A narrow prep track may not cover the full operating system a campus needs for mentors, HR, attendance, and hiring teams.',
    antboxEdge:
      'AntBox keeps technical preparation visible alongside readiness scoring, mentor feedback, leave requests, and hiring-pipeline context.',
    proofPoints: ['Role-fit scoring', 'Mentor review loops', 'Campus-to-HR continuity'],
  },
  {
    name: 'Scaler-style bootcamp',
    type: 'Structured intensive program',
    audience: 'Learners who want a more intensive, curriculum-led pathway.',
    strength: 'Deep curriculum, long-format learning paths, and strong brand recall.',
    limitation:
      'Often feels program-first, while universities and recruiters still need local cohort visibility and shared operating workflows.',
    antboxEdge:
      'AntBox is campus-first: students, mentors, HR, and recruiters work from the same readiness and proof system.',
    proofPoints: ['Cohort operations', 'Attendance intelligence', 'Hiring partner layer'],
  },
  {
    name: 'Traditional placement cell',
    type: 'Institution-led placement support',
    audience: 'Colleges managing student records, company drives, and campus coordination.',
    strength: 'High trust on campus and direct access to students.',
    limitation:
      'Manual spreadsheets and disconnected updates make readiness hard to prove before interviews.',
    antboxEdge:
      'AntBox upgrades the placement cell with live readiness, documented evaluations, and recruiter-facing proof.',
    proofPoints: ['Live readiness signal', 'Unified student records', 'Evidence-backed shortlists'],
  },
]
