import { useEffect, useRef, useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Shop from './pages/Shop'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import { DEMO_PRODUCTS, type CartItem, type Product } from './data/products'
import './App.css'

function loadCart(): CartItem[] {
  try {
    const saved = localStorage.getItem('u-design-cart')
    if (!saved) return []

    const parsed: unknown = JSON.parse(saved)
    if (!Array.isArray(parsed)) {
      console.warn('Ignoring invalid cart data in localStorage.')
      return []
    }

    const items = parsed.flatMap((value): CartItem[] => {
      if (!value || typeof value !== 'object') return []

      const entry = value as { id?: unknown; quantity?: unknown }
      if (!Number.isSafeInteger(entry.id) || typeof entry.quantity !== 'number' || !Number.isInteger(entry.quantity) || entry.quantity < 1) {
        return []
      }

      const product = DEMO_PRODUCTS.find((item) => item.id === entry.id)
      return product ? [{ ...product, quantity: entry.quantity }] : []
    })

    if (items.length !== parsed.length) {
      console.warn('Ignoring invalid items in the saved cart.')
    }
    return items
  } catch (error) {
    console.warn('Could not read the saved cart from localStorage:', error)
    return []
  }
}

function App() {
  const cursorRef = useRef<HTMLDivElement>(null)

  // Cart state
  const [cart, setCart] = useState<CartItem[]>(loadCart)

  const [isCartOpen, setIsCartOpen] = useState(false)

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('u-design-cart', JSON.stringify(cart))
    } catch (e) {
      console.warn('Could not save cart to localStorage:', e)
    }
  }, [cart])

  useEffect(() => {
    // Scroll reveal observer - add .visible directly to elements and unobserve
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })

    const revealElements = document.querySelectorAll('.reveal-on-scroll')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      const cursor = cursorRef.current
      if (cursor) {
        cursor.style.transform = `translate3d(${e.clientX - 150}px, ${e.clientY - 150}px, 0)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Cart functions
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQuantity = Math.max(1, item.quantity + delta)
        return { ...item, quantity: newQuantity }
      }
      return item
    }))
  }

  const clearCart = () => setCart([])

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  // Hash-based routing
  const getCurrentRoute = () => window.location.pathname.replace(/\/+$/, '') || '/'
  const [currentRoute, setCurrentRoute] = useState(getCurrentRoute)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getCurrentRoute())
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const renderPage = () => {
    switch (currentRoute) {
      case '/about':
        return <About />
      case '/services':
        return <Services />
      case '/shop':
        return <Shop products={DEMO_PRODUCTS} addToCart={addToCart} />
      case '/gallery':
        return <Gallery />
      case '/contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f1ea] font-body overflow-x-hidden">
      {/* Cursor torch - subtle light reveal, deactivates on touch devices */}
      <div
        ref={cursorRef}
        className="cursor-torch hidden md:block"
      />

      <Header itemCount={itemCount} onOpenCart={() => setIsCartOpen(true)} />

      <main className="pt-20">
        {renderPage()}
      </main>

      <Footer />

      {/* Cart drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isCartOpen}
        inert={!isCartOpen}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#0a0a0a] border-l border-[#333] shadow-2xl transform transition-transform duration-300 ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cart-title"
        >
          <div className="flex items-center justify-between p-6 border-b border-[#333]">
            <h2 id="cart-title" className="font-display text-2xl text-[#f5f1ea]">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#f5f1ea] hover:text-[#e5b769] transition-colors"
              aria-label="Close cart"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center text-[#a0967a]">
                <p className="text-lg mb-4">Your cart is empty</p>
                <p className="text-sm">Add some products to get started!</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-[#0a0a0a]/50 rounded-xl border border-[#333]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-display text-lg text-[#f5f1ea]">{item.name}</h3>
                    <p className="text-[#a0967a] text-sm mb-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#e5b769] font-display text-lg">AED {item.price}</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 bg-[#333] text-[#f5f1ea] rounded-full hover:bg-[#444] transition-colors flex items-center justify-center"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-[#f5f1ea]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 bg-[#333] text-[#f5f1ea] rounded-full hover:bg-[#444] transition-colors flex items-center justify-center"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-2 p-1 text-[#e5b769] hover:text-[#ff6b6b] transition-colors"
                          aria-label="Remove item"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 border-t border-[#333] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[#a0967a]">Subtotal:</span>
              <span className="text-[#e5b769] font-display text-2xl">AED {cartTotal}</span>
            </div>
            <p className="text-[#a0967a] text-sm text-center">
              This is a demo store. No purchases will be made.
            </p>
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="w-full px-6 py-3 bg-[#333] text-[#a0967a] font-display rounded-xl hover:bg-[#444] transition-colors"
              >
                Clear Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
