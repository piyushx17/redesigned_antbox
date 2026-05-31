import { Link } from 'react-router-dom'
import { X } from '@phosphor-icons/react'
import { Button } from '@/components/common/Button'
import { ROUTES } from '@/utils/routes'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  links: { label: string; to: string }[]
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  if (!open) return null

  return (
    <div className="mobile-menu open">
      <div className="mobile-menu-backdrop" onClick={onClose} aria-hidden />
      <div className="mobile-menu-panel">
        <div className="mobile-menu-header">
          <span className="nav-logo">
            <img src="/antbox-logo-white.png" alt="Antbox" />
          </span>
          <button type="button" onClick={onClose} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <nav className="mobile-menu-links">
          {links.map((link) => (
            <Link key={link.to} to={link.to} onClick={onClose}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Button variant="brand" to={ROUTES.TALENTBOX_LOGIN} onClick={onClose}>
          Login
        </Button>
      </div>
    </div>
  )
}
