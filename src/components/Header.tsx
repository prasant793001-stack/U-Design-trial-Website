import { useState, useEffect } from 'react'
import { withBasePath } from '../lib/sitePaths'

type HeaderProps = {
  itemCount: number
  onOpenCart: () => void
}

export default function Header({ itemCount, onOpenCart }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { href: withBasePath('/'), label: 'Home' },
    { href: withBasePath('/about'), label: 'About' },
    { href: withBasePath('/services'), label: 'Services' },
    { href: withBasePath('/shop'), label: 'Shop' },
    { href: withBasePath('/gallery'), label: 'Gallery' },
    { href: withBasePath('/contact'), label: 'Contact' }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href={withBasePath('/')}
            className="flex items-center gap-3 font-display text-xl text-[#f5f1ea] transition-colors hover:text-[#e5b769] md:text-2xl"
          >
            <img src={withBasePath('/logo.svg')} alt="" aria-hidden="true" className="h-10 w-10" width="40" height="40" />
            <span>U-Design</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-[#f5f1ea] hover:text-[#e5b769] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#e5b769] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={onOpenCart}
            className="relative rounded-full border border-[#e5b769] px-4 py-2 font-display text-[#e5b769] transition-colors hover:bg-[#e5b769]/10"
            aria-label={`Open cart, ${itemCount} ${itemCount === 1 ? 'item' : 'items'}`}
          >
            Cart
            <span className="ml-2 inline-flex min-w-6 justify-center rounded-full bg-[#e5b769] px-1 text-sm text-[#0a0a0a]" aria-live="polite" aria-atomic="true">
              {itemCount}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#f5f1ea] hover:text-[#e5b769] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
        className={`md:hidden fixed inset-0 bg-[#0a0a0a] z-40 transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav aria-label="Mobile navigation" className="flex h-full flex-col items-center justify-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-3xl text-[#f5f1ea] hover:text-[#e5b769] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
