import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Features from '@/components/Features' 
import HowItWorks from '@/components/HowItWorks'
import FutureVision from '@/components/FutureVision'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-16">
        <main>
          <Hero />
          <AboutUs />
          <Features />
          <HowItWorks />
          <FutureVision />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  )
}
