import Hero from '../components/Hero'
import MenuSection from '../components/MenuSection'
import VisitSection from '../components/VisitSection'
import GalleryPreview from '../components/GalleryPreview'

export default function Home() {
  return (
    <main>
      <Hero />
      <MenuSection />
      <GalleryPreview />
      <VisitSection />
    </main>
  )
}
