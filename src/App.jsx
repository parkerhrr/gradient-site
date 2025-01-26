import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustedPartners } from './components/TrustedPartners'
import { About } from './components/About'
import { HowItWorks } from './components/HowItWorks'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustedPartners />
      <About />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  )
}

export default App 