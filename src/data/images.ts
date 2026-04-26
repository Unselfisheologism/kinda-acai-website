export interface GalleryImage {
  filename: string
  alt: string
  category: 'hero' | 'food' | 'drink' | 'interior' | 'atmosphere'
  featured?: boolean
}

export const images: GalleryImage[] = [
  // Hero / Atmosphere — landscape wide (243x174, 1.40)
  { filename: 'four.jpg', alt: 'Kinda interior seating area', category: 'atmosphere' },
  { filename: 'nine.jpg', alt: 'Kinda restaurant exterior', category: 'atmosphere' },
  { filename: 'sixteen.jpg', alt: 'Kinda ambiance and decor', category: 'atmosphere' },
  { filename: 'seventeen.jpg', alt: 'Kinda dining space', category: 'atmosphere' },
  { filename: 'fourteen.png', alt: 'Kinda brand signage', category: 'hero' },
  { filename: 'six.png', alt: 'Kinda store front view', category: 'hero' },

  // Food bowls — portrait tall (243x406, 0.60)
  { filename: 'five.jpg', alt: 'Acai power bowl with granola', category: 'food', featured: true },
  { filename: 'eight.jpg', alt: 'Rainbow acai bowl topped with fresh fruit', category: 'food', featured: true },
  { filename: 'eighteen.jpg', alt: 'Thick acai smoothie bowl', category: 'food', featured: true },
  { filename: 'nineteen.jpg', alt: 'Loaded acai bowl with berries', category: 'food', featured: true },
  { filename: 'twenty.jpg', alt: 'Acai bowl with tropical toppings', category: 'food' },

  // Food close-ups — portrait medium (243x304, 0.80)
  { filename: 'eleven.jpg', alt: 'Fresh smoothie jar with toppings', category: 'drink' },
  { filename: 'fifteen.jpg', alt: 'Acai bowl with coconut flakes', category: 'food' },
  { filename: 'twentyone.jpg', alt: 'Berry acai bowl', category: 'food' },
  { filename: 'two.jpg', alt: 'Freshly made acai blend', category: 'drink' },

  // Square / Logo — square (243x244, 1.00)
  { filename: 'one.jpg', alt: 'Kinda acai bowl close-up', category: 'food', featured: true },
  { filename: 'thirteen.jpg', alt: 'Refreshing acai drink', category: 'drink' },
  { filename: 'three.jpg', alt: 'Kinda signature bowl', category: 'food', featured: true },

  // Table scenes — landscape (243x203, 1.20)
  { filename: 'seven.jpg', alt: 'Kinda table spread with bowls', category: 'atmosphere' },
  { filename: 'twelve.jpg', alt: 'Kinda food presentation', category: 'food' },
]

export const heroImages = images.filter(i => i.category === 'hero')
export const featuredImages = images.filter(i => i.featured)
