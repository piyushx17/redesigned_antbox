# AntBox + TalentBox

Production-ready React + Vite site for AntBox public pages, TalentBox पहल campaign, and mock role-based dashboards.

## Stack

- React 19 + TypeScript + Vite
- React Router v7
- Tailwind CSS v4
- Phosphor Icons
- Mock auth via localStorage (Phase 1)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Demo login

Password for all accounts: `antbox123`

| Role | Email |
|------|-------|
| Student | student@theantbox.com |
| Intern | intern@theantbox.com |
| Mentor | mentor@theantbox.com |
| Employee | employee@theantbox.com |
| HR | hr@theantbox.com |
| Admin | admin@theantbox.com |

## Routes

- `/` — AntBox landing
- `/about`, `/careers`, `/blog`, `/blog/:slug`
- `/talentbox` — पहल pitch page
- `/talentbox/login`
- `/talentbox/dashboard/{student|intern|mentor|employee|hr|admin}`

Legacy static HTML files are preserved in `legacy/`.
