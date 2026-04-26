import { useEffect, useRef, useState } from 'react'
import styles from './MenuSection.module.css'
import { featuredImages } from '../data/images'

const menuItems = [
  {
    emoji: '🫐',
    name: 'Classic Acai Bowl',
    desc: 'Blended acai topped with granola, fresh banana, strawberries & a drizzle of honey',
    price: '₹280',
    tags: ['Bestseller'],
  },
  {
    emoji: '🥭',
    name: 'Tropical Paradise',
    desc: 'Acai & mango blend with pineapple, coconut flakes, chia seeds & mango puree',
    price: '₹320',
    tags: ['Popular'],
  },
  {
    emoji: '🍓',
    name: 'Berry Bliss',
    desc: 'Mixed berry acai with blueberries, raspberries, muesli & honey drizzle',
    price: '₹300',
    tags: [],
  },
  {
    emoji: '🥜',
    name: 'Nutty Overload',
    desc: 'Acai bowl loaded with almond butter, walnuts, pecans, banana & honey',
    price: '₹340',
    tags: ['Protein'],
  },
  {
    emoji: '🍌',
    name: 'Banana Boost',
    desc: 'Thick acai-banana blend with oat milk, peanut butter, seeds & dates',
    price: '₹290',
    tags: [],
  },
  {
    emoji: '🥤',
    name: 'Power Smoothie',
    desc: 'Acai, banana, spinach & almond milk — energising, refreshing & guilt-free',
    price: '₹220',
    tags: ['Refresher'],
  },
]

function useVisible(ref: React.RefObject<HTMLElement>) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref])
  return visible
}

export default function MenuSection() {
  const ref = useRef<HTMLElement>(null)
  const visible = useVisible(ref as React.RefObject<HTMLElement>)

  return (
    <section id="menu" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.header} ${visible ? styles.visible : ''}`}>
          <span className={styles.eyebrow}>Our Menu</span>
          <h2 className={styles.title}>Acai &amp; More</h2>
          <p className={styles.subtitle}>
            Every bowl is handcrafted with premium imported acai and fresh local toppings.<br />
            No artificial syrups. No compromises.
          </p>
        </div>

        <div className={styles.grid}>
          {menuItems.map((item, i) => (
            <div
              key={item.name}
              className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.cardLeft}>
                <span className={styles.emoji}>{item.emoji}</span>
                <div>
                  <div className={styles.nameRow}>
                    <h3 className={styles.name}>{item.name}</h3>
                    {item.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              </div>
              <span className={styles.price}>{item.price}</span>
            </div>
          ))}
        </div>

        <div className={`${styles.bottomNote} ${visible ? styles.visible : ''}`}>
          <div className={styles.foodPics}>
            {featuredImages.slice(0, 4).map(img => (
              <div key={img.filename} className={styles.foodPic}>
                <img src={`./${img.filename}`} alt={img.alt} />
              </div>
            ))}
          </div>
          <p className={styles.note}>
            <span className={styles.noteIcon}>✦</span>
            Visit us to explore our full menu — seasonal specials, fresh juices &amp; more!
          </p>
        </div>
      </div>
    </section>
  )
}
