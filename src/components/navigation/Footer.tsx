import { Link } from 'react-router-dom'
import { ROUTES } from '@/utils/routes'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to={ROUTES.HOME} className="footer-brand" aria-label="AntBox home">
            <img src="/antbox-logo-white.png" alt="Antbox" />
          </Link>
          <p className="footer-tagline">
            Future-proof talent infrastructure — from campus readiness to corporate conviction.
          </p>
        </div>
        <div>
          <p className="footer-heading">Company</p>
          <Link to={ROUTES.ABOUT}>About</Link>
          <Link to={ROUTES.CAREERS}>Careers</Link>
          <Link to={ROUTES.BLOG}>Blog</Link>
        </div>
        <div>
          <p className="footer-heading">Platform</p>
          <Link to={ROUTES.TALENTBOX}>TalentBox</Link>
          <Link to={ROUTES.TALENTBOX_LOGIN}>Login</Link>
        </div>
        <div>
          <p className="footer-heading">Contact</p>
          <a href="mailto:hello@theantbox.com">hello@theantbox.com</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} AntBox. All rights reserved.</p>
      </div>
    </footer>
  )
}
