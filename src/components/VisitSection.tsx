import styles from './VisitSection.module.css'

export default function VisitSection() {
  return (
    <section id="visit" className={styles.section}>
      <div className={styles.bgDecor} />
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>Find Us</span>
          <h2 className={styles.title}>Visit Kinda</h2>
          <p className={styles.subtitle}>
            Drop by for a bowl, hang out with friends, or grab a quick smoothie on the go.
            We're right in the heart of Powai.
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h4 className={styles.cardTitle}>Address</h4>
                <p className={styles.cardText}>
                  RAJ GRANDEUR, Gautam Nagar,<br />
                  Ramabai Ambedkar Nagar, Powai,<br />
                  Mumbai, Maharashtra 400076
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <h4 className={styles.cardTitle}>Hours</h4>
                <p className={styles.cardText}>
                  Open Daily<br />
                  10:00 AM – 10:00 PM
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <div>
                <h4 className={styles.cardTitle}>Follow Us</h4>
                <a
                  href="https://www.instagram.com/kinda.acai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                >
                  @kinda.acai
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/RAJ+GRANDEUR+Gautam+Nagar+Powai+Mumbai+400076"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapBtn}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 11 22 2 13 21 11 13 3 11"/>
            </svg>
            Open in Google Maps
          </a>
        </div>

        <div className={styles.right}>
          <div className={styles.mapCard}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.16405477823582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c627a20bcaa9%3A0x4bcea7f6d04f7c0e!2sPowai%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kinda Acai location"
            />
          </div>
          <div className={styles.floatingTag}>
            <span>📍</span> Powai, Mumbai
          </div>
        </div>
      </div>
    </section>
  )
}
