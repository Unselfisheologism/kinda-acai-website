import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoK}>K</span>
            <span className={styles.logoText}>inda</span>
          </div>
          <p className={styles.tagline}>Acai &amp; More — Powai's favourite acai destination</p>
          <div className={styles.social}>
            <a href="https://www.instagram.com/kinda.acai" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              @kinda.acai
            </a>
          </div>
        </div>

        <div className={styles.links}>
          <h4 className={styles.linksTitle}>Quick Links</h4>
          <ul className={styles.linksList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#menu">Menu</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/#visit">Visit Us</Link></li>
          </ul>
        </div>

        <div className={styles.address}>
          <h4 className={styles.linksTitle}>Find Us</h4>
          <p className={styles.addressText}>
            RAJ GRANDEUR, Gautam Nagar,<br />
            Ramabai Ambedkar Nagar, Powai,<br />
            Mumbai, Maharashtra 400076
          </p>
          <p className={styles.hours}>Open Daily — 10 AM to 10 PM</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 Kinda - Acai &amp; More. All rights reserved.</p>
        <p>Made with 🫐 in Mumbai</p>
      </div>
    </footer>
  )
}
