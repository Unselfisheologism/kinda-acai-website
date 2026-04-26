import { Link } from 'react-router-dom'
import styles from './GalleryPreview.module.css'
import { images } from '../data/images'

export default function GalleryPreview() {
  const previewImages = images.slice(0, 8)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Gallery</span>
          <h2 className={styles.title}>A Glimpse of Kinda</h2>
          <p className={styles.subtitle}>
            From our signature acai bowls to the cozy Powai vibes — here's what awaits you
          </p>
        </div>

        <div className={styles.masonry}>
          {previewImages.map((img, i) => (
            <div
              key={img.filename}
              className={`${styles.item} ${i === 0 ? styles.wide : ''}`}
            >
              <img src={`./${img.filename}`} alt={img.alt} />
              <div className={styles.overlay}>
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link to="/gallery" className={styles.ctaBtn}>
            View Full Gallery
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
