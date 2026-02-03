'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { label: 'من نحن', id: 'about' },
    { label: 'رؤيتنا', id: 'vision' },
    { label: 'لماذا نحن', id: 'why-us' },
    { label: 'مجالاتنا', id: 'domains' },
    { label: 'شركاؤنا', id: 'partners' },
    { label: 'تواصل', id: 'contact' },
  ]

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary-black/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl md:text-3xl font-bold text-white hover:text-accent-orange transition-colors duration-300"
          >
            كور كونسيبت
          </button>

          {/* Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-accent-orange transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              ابدأ رحلتك
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-accent-orange text-white px-6 py-2 rounded-lg font-semibold"
            >
              تواصل معنا
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden mt-4 flex flex-wrap gap-4 justify-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-accent-orange transition-colors duration-300 text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  )
}


