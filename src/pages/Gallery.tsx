import { useEffect, useRef } from 'react'

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

  // Sample gallery images - these are inspirational/sample only, not client work
  const galleryImages = [
    { src: "/site-media/service-boutique-1.jpg", alt: "Boutique Design Sample" },
    { src: "/site-media/service-boutique-2.jpg", alt: "Creative Workspace Sample" },
    { src: "/site-media/service-boutique-3.jpg", alt: "Social Media Content Sample" },
    { src: "/site-media/service-real-estate-2.jpg", alt: "Real Estate Design Sample" },
    { src: "/site-media/service-real-estate-3.jpg", alt: "Real Estate Marketing Sample" },
    { src: "/site-media/service-restaurant-2.jpg", alt: "Restaurant Design Sample" },
    { src: "/site-media/about-bg-1.jpg", alt: "About Page Sample" },
    { src: "/site-media/about-bg-2.jpg", alt: "Modern Workspace Sample" },
    { src: "/site-media/about-bg-3.jpg", alt: "Workspace Sample" },
    { src: "/site-media/about-bg-4.jpg", alt: "Creative Process Sample" }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f1ea] font-body overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/site-media/about-bg-1.jpg"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]/90" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="reveal-on-scroll">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-[#f5f1ea] tracking-tighter mb-6">
              Gallery
            </h1>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
            <p className="text-xl md:text-2xl text-[#a0967a] max-w-2xl mx-auto leading-relaxed">
              Inspirational Design Samples
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </section>

      {/* Gallery Content */}
      <section ref={sectionRef} className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-[#f5f1ea] mb-6">
              Our Work Samples
            </h2>
            <p className="text-[#a0967a] text-lg max-w-3xl mx-auto leading-relaxed">
              These images showcase our design capabilities and creative approach.
              <br className="hidden md:inline" />
              <span className="text-sm text-[#6b5b4a] mt-2 block">
                <em>Inspirational and sample imagery only - not actual client work.</em>
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl overflow-hidden group reveal-on-scroll"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-[#f5f1ea] mb-2">
                    {item.alt}
                  </h3>
                  <p className="text-[#a0967a] text-sm">
                    Design sample showcasing our creative capabilities
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative reveal-on-scroll parallax-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-7xl text-[#f5f1ea] mb-8">
            Want to See More?
          </h2>
          <p className="text-[#a0967a] text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            We'd love to discuss your project and show you how we can bring your vision to life.
          </p>
          <a
            href="https://instagram.com/aakriti.design"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#e5b769] text-[#0a0a0a] font-display text-xl rounded-full hover:bg-[#d4a058] transition-colors transform hover:scale-105"
          >
            Follow on Instagram @aakriti.design
          </a>
        </div>
      </section>
    </div>
  )
}
