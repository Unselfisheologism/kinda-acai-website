import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Menu', to: '/#menu' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Visit Us', to: '/#visit' },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoK}>K</span>
          <span className={styles.logoText}>inda</span>
          <span className={styles.logoSub}>Acai &amp; More</span>
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`${styles.link} ${location.pathname + location.hash === link.to ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://www.instagram.com/kinda.acai"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.igBtn}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Follow Us
            </a>
          </li>
        </ul>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
