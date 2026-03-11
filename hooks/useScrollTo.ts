import React, { useEffect } from 'react'

export function useScrollTo() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return {
    scrollToPortfolio: () => scrollToSection('portfolio'),
    scrollToContact: () => scrollToSection('contact'),
    scrollToPricing: () => scrollToSection('pricing'),
    scrollToAbout: () => scrollToSection('about'),
    scrollToHome: () => scrollToSection('home'),
  }
}
