import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import ContactForm from '@/components/ContactForm'
import { CreativePricingDemo } from '@/components/demo'
import { useScrollTo } from '@/hooks/useScrollTo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {
    scrollToPortfolio,
    scrollToContact,
    scrollToPricing,
    scrollToAbout,
    scrollToHome,
  } = useScrollTo()

  return (
    <main className={`min-h-screen ${inter.className}`}>
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Skylands<span className="text-blue-600">Media</span>
          </h1>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Erhöhen Sie Ihre<br />
            <span className="text-blue-600">Perspektive</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Premium Drohnenfotografie für führende Unternehmen weltweit
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={scrollToPortfolio}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Portfolio ansehen
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Kontakt aufnehmen
            </button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 text-4xl opacity-20">🚁</div>
        <div className="absolute bottom-20 right-20 text-4xl opacity-20">📸</div>
        <div className="absolute top-40 right-40 text-3xl opacity-20">✈️</div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto">
          <CreativePricingDemo />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Skylands Media</h3>
          <p className="text-gray-400 mb-4">Premium Drohnenfotografie Würzburg</p>
          <div className="flex gap-6 justify-center text-sm">
            <span>info@skylandsmedia.de</span>
            <span>|</span>
            <span>+49 123 456 7890</span>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            © 2024 Skylands Media. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </main>
  )
}
