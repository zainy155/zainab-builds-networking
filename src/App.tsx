import BrandBanner from './components/BrandBanner'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import LeadCaptureCard from './components/LeadCaptureCard'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <BrandBanner />
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <LeadCaptureCard />
      </main>
      <Footer />
    </div>
  )
}
