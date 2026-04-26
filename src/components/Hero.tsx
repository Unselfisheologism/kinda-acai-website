import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'
import { heroImages } from '../data/images'

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % heroImages.length)
    }, 4000)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const goTo = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current)
    setCurrent(i)
    startTimer()
  }

  return (
    <section className={styles.hero}>
      {/* Background images */}
      {heroImages.map((img, i) => (
        <div
          key={img.filename}
          className={`${styles.slide} ${i === current ? styles.active : ''}`}
        >
          <img
            src={`./${img.filename}`}
            alt={img.alt}
            className={styles.slideImg}
          />
          <div className={styles.slideOverlay} />
        </div>
      ))}

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeLeaf}>✦</span>
          Powai's Home of Acai
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleK}>K</span>
          <span className={styles.titleRest}>inda</span>
        </h1>
        <p className={styles.tagline}>Acai &amp; More</p>

        <p className={styles.sub}>
          Fresh acai bowls, vibrant smoothies &amp; wholesome bites<br />
          crafted with love in the heart of Powai
        </p>

        <div className={styles.ctas}>
          <a href="https://www.instagram.com/kinda.acai" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Follow @kinda.acai
          </a>
          <a href="/gallery" className={styles.ctaSecondary}>
            View Gallery
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {heroImages.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
