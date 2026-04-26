import { useState, useEffect, useRef } from 'react'
import styles from './Gallery.module.css'
import { images, GalleryImage } from '../data/images'

type Filter = 'all' | 'food' | 'drink' | 'atmosphere'

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>('all')
  const [selected, setSelected] = useState<GalleryImage | null>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const filtered = filter === 'all' ? images : images.filter(i => i.category === filter)

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selected])

  const close = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setSelected(null)
  }

  const navigate = (dir: 1 | -1) => {
    const currentIdx = filtered.findIndex(i => i.filename === selected?.filename)
    const newIdx = (currentIdx + dir + filtered.length) % filtered.length
    setSelected(filtered[newIdx])
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!selected) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') navigate(-1)
      if (e.key === 'ArrowRight') navigate(1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selected, filtered])

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'food', label: 'Acai Bowls' },
    { key: 'drink', label: 'Smoothies & Drinks' },
    { key: 'atmosphere', label: 'Vibes & Space' },
  ]

  return (
    <main className={styles.page}>
      {/* Hero banner */}
      <div className={styles.banner}>
        <div className={styles.bannerOverlay} />
        <img src="./fourteen.png" alt="Kinda Acai & More" className={styles.bannerImg} />
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>
            <span className={styles.bannerK}>G</span>allery
          </h1>
          <p className={styles.bannerSub}>A visual taste of Kinda — bowls, vibes &amp; everything in between</p>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filterBar}>
        <div className={styles.container}>
          {filters.map(f => (
            <button
              key={f.key}
              className={`${styles.filterBtn} ${filter === f.key ? styles.active : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.map((img, i) => (
          <div
            key={img.filename}
            className={`${styles.item} ${styles[img.category]}`}
            onClick={() => setSelected(img)}
            style={{ animationDelay: `${(i % 6) * 0.07}s` }}
          >
            <img
              src={`./${img.filename}`}
              alt={img.alt}
              loading="lazy"
            />
            <div className={styles.overlay}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
              <span>{img.alt}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className={styles.lightbox}
          ref={overlayRef}
          onClick={close}
        >
          <button className={styles.lbClose} onClick={close} aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <button className={`${styles.lbNav} ${styles.lbPrev}`} onClick={(e) => { e.stopPropagation(); navigate(-1) }} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className={styles.lbContent} onClick={e => e.stopPropagation()}>
            <img src={`./${selected.filename}`} alt={selected.alt} />
            <p className={styles.lbCaption}>{selected.alt}</p>
          </div>

          <button className={`${styles.lbNav} ${styles.lbNext}`} onClick={(e) => { e.stopPropagation(); navigate(1) }} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      )}

      {/* Instagram CTA */}
      <div className={styles.igCta}>
        <div className={styles.igContainer}>
          <p className={styles.igEmoji}>📸</p>
          <h2 className={styles.igTitle}>Follow Us on Instagram</h2>
          <p className={styles.igText}>
            More photos, new menu drops &amp; behind-the-scenes on{' '}
            <a href="https://www.instagram.com/kinda.acai" target="_blank" rel="noopener noreferrer">@kinda.acai</a>
          </p>
          <a
            href="https://www.instagram.com/kinda.acai"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.igBtn}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            @kinda.acai
          </a>
        </div>
      </div>
    </main>
  )
}
