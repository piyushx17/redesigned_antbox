import { Link, useLocation } from 'react-router-dom'
import { List } from '@phosphor-icons/react'
import { useState } from 'react'
import { Button } from '@/components/common/Button'
import { MobileMenu } from './MobileMenu'
import { ROUTES } from '@/utils/routes'
import { cn } from '@/utils/cn'
import { assetPath } from '@/utils/assets'

const navLinks = [
  { label: 'About', to: ROUTES.ABOUT },
  { label: 'Careers', to: ROUTES.CAREERS },
  { label: 'Blog', to: ROUTES.BLOG },
  { label: 'TalentBox', to: ROUTES.TALENTBOX },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <header className="site-nav">
        <div className="container nav-inner">
          <Link to={ROUTES.HOME} className="nav-logo">
            <img src={assetPath('/antbox-logo-white.png')} alt="Antbox" />
          </Link>

          <nav className="nav-center">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn('nav-link', location.pathname === link.to && 'active')}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <Button variant="brand" size="sm" to={ROUTES.TALENTBOX_LOGIN} className="nav-login-cta">
              Sign in
            </Button>
            <button
              type="button"
              className="nav-toggle lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <List size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} links={navLinks} />
    </>
  )
}
