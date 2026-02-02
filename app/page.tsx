import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import VisionMission from '@/components/VisionMission'
import WhyUs from '@/components/WhyUs'
import Domains from '@/components/Domains'
import Partners from '@/components/Partners'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <VisionMission />
      <WhyUs />
      <Domains />
      <Partners />
      <Contact />
    </main>
  )
}

