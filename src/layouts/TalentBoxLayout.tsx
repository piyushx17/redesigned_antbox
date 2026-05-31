import { Link, Outlet } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { ROUTES } from '@/utils/routes'
import { assetPath } from '@/utils/assets'

export function TalentBoxLayout() {
  return (
    <div className="page-offset talentbox-layout">
      <header className="site-nav tb-nav">
        <div className="container nav-inner">
          <Link to={ROUTES.HOME} className="nav-logo">
            <img src={assetPath('/antbox-logo-white.png')} alt="Antbox" />
          </Link>
          <div className="nav-actions gap-3">
            <Button variant="tb" size="sm" className="font-hindi" to={ROUTES.TALENTBOX}>
              पहल
            </Button>
            <Button variant="ghost" size="sm" to={ROUTES.TALENTBOX_LOGIN}>
              Login
            </Button>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
