'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollTo } from '@/hooks/useScrollTo'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollToPortfolio, scrollToPricing, scrollToAbout, scrollToContact, scrollToHome } = useScrollTo()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Skylands<span className="text-blue-600">Media</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => { scrollToHome(); setIsOpen(false) }}
                className={`transition-colors duration-300 hover:text-blue-600 font-medium ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => { scrollToPortfolio(); setIsOpen(false) }}
                className={`transition-colors duration-300 hover:text-blue-600 font-medium ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToPricing()}
                className={`transition-colors duration-300 hover:text-blue-600 font-medium ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Preise
              </button>
              <button
                onClick={() => scrollToAbout()}
                className={`transition-colors duration-300 hover:text-blue-600 font-medium ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Über uns
              </button>
              <button
                onClick={() => scrollToContact()}
                className={`transition-colors duration-300 hover:text-blue-600 font-medium ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Kontakt
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+491234567890" className={`flex items-center space-x-2 ${
              scrolled ? 'text-gray-600' : 'text-white/90'
            } hover:text-blue-600 transition-colors`}>
              <Phone className="w-4 h-4" />
              <span className="text-sm">+49 123 456 7890</span>
            </a>
            <Button
              onClick={() => scrollToContact()}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Angebot anfordern
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => { scrollToHome(); setIsOpen(false) }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
            >
              Home
            </button>
            <button
              onClick={() => { scrollToPortfolio(); setIsOpen(false) }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToPricing()}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
            >
              Preise
            </button>
            <button
              onClick={() => scrollToAbout()}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
            >
              Über uns
            </button>
            <button
              onClick={() => scrollToContact()}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
            >
              Kontakt
            </button>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-2">
              <a href="tel:+491234567890" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+49 123 456 7890</span>
              </a>
              <Button
                onClick={() => scrollToContact()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Angebot anfordern
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
