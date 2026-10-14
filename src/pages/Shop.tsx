import { useEffect, useRef } from 'react'
import { withBasePath } from '../lib/sitePaths'
import type { Product } from '../data/products'

type ShopProps = {
  products: readonly Product[]
  addToCart: (product: Product) => void
}

export default function Shop({ products, addToCart }: ShopProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-[#0a0a0a] text-[#f5f1ea] font-body">
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <img
          src={withBasePath('/site-media/about-bg-1.jpg')}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0a0a0a]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#e5b769]">U-Design</p>
          <h1 className="font-display text-6xl tracking-tight text-[#f5f1ea] md:text-8xl">Shop</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#c3bba9] md:text-xl">
            Explore sample marketing and creative packages for UAE businesses.
          </p>
        </div>
      </section>

      <section ref={sectionRef} className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 rounded-xl border border-[#e5b769]/30 bg-[#e5b769]/10 px-6 py-4 text-center text-sm text-[#f5f1ea]" role="note">
            Demo catalogue only: product names and AED prices are illustrative examples, not offers for sale. Checkout is not available.
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.id} className="glass group overflow-hidden rounded-2xl">
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="mb-3 font-display text-2xl text-[#f5f1ea]">{product.name}</h2>
                  <p className="mb-6 min-h-16 text-sm leading-relaxed text-[#a0967a]">{product.description}</p>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-xl text-[#e5b769]">
                      AED {product.price.toLocaleString('en-AE')}
                    </span>
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="rounded-full bg-[#e5b769] px-4 py-2 font-display text-sm text-[#0a0a0a] transition-colors hover:bg-[#d4a058] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5b769]"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href={withBasePath('/contact')}
              className="inline-flex rounded-full border border-[#e5b769] px-8 py-3 font-display text-lg text-[#e5b769] transition-colors hover:bg-[#e5b769]/10"
            >
              Ask about a service
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
