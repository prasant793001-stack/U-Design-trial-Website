import { useEffect, useRef } from 'react'

export default function About() {
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

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f1ea] font-body overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/site-media/about-bg-1.jpg"
            alt="About U-Design"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]/90" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="reveal-on-scroll">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-[#f5f1ea] tracking-tighter mb-6">
              About Us
            </h1>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
            <p className="text-xl md:text-2xl text-[#a0967a] max-w-2xl mx-auto leading-relaxed">
              AI-Powered Creative Studio for UAE Businesses
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </section>

      {/* Mission & Vision */}
      <section ref={sectionRef} className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-[#f5f1ea] mb-6">
              Our Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <div className="glass p-10 rounded-2xl">
                <h3 className="font-display text-3xl text-[#f5f1ea] mb-6">
                  Empowering UAE Businesses with AI & Design
                </h3>
                <p className="text-[#a0967a] leading-relaxed mb-4">
                  U-Design is a creative studio based in the UAE, specializing in AI-powered
                  marketing solutions and premium web design for restaurants, real estate,
                  boutiques, and shops.
                </p>
                <p className="text-[#a0967a] leading-relaxed">
                  We believe in delivering exceptional visual experiences that capture
                  attention and drive results. Every project is a collaboration, bringing
                  your brand vision to life with cutting-edge technology and artistic flair.
                </p>
              </div>
            </div>

            <div className="reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/site-media/about-bg-2.jpg"
                  alt="Team collaboration"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl text-[#f5f1ea] mb-16 text-center">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-2xl text-center reveal-on-scroll" style={{ transitionDelay: '0ms' }}>
              <div className="w-16 h-16 bg-[#e5b769]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#e5b769]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-[#f5f1ea] mb-4">Innovation</h3>
              <p className="text-[#a0967a] leading-relaxed">
                We embrace cutting-edge AI tools and design trends to stay ahead of the curve
                and deliver fresh, innovative solutions for our clients.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl text-center reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="w-16 h-16 bg-[#e5b769]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#e5b769]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-[#f5f1ea] mb-4">Creativity</h3>
              <p className="text-[#a0967a] leading-relaxed">
                We combine artistic vision with technical expertise to create designs that
                not only look stunning but also communicate your brand's unique story.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl text-center reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="w-16 h-16 bg-[#e5b769]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#e5b769]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-[#f5f1ea] mb-4">Collaboration</h3>
              <p className="text-[#a0967a] leading-relaxed">
                We work closely with our clients, treating every project as a partnership
                where your ideas and our expertise combine to create something extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl text-[#f5f1ea] mb-16 text-center">
            Our Team
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <div className="glass p-10 rounded-2xl">
                <h3 className="font-display text-3xl text-[#f5f1ea] mb-6">
                  A Passionate Collective of Creatives
                </h3>
                <p className="text-[#a0967a] leading-relaxed mb-4">
                  U-Design brings together a talented team of designers, developers, and
                  strategists who share a common passion for creating exceptional digital
                  experiences.
                </p>
                <p className="text-[#a0967a] leading-relaxed">
                  Each team member contributes their unique perspective and expertise,
                  ensuring that every project receives the attention and care it deserves.
                  We're committed to continuous learning and staying at the forefront of
                  design and technology trends.
                </p>
              </div>
            </div>

            <div className="reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/site-media/about-bg-3.jpg"
                  alt="Creative workspace"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 relative reveal-on-scroll parallax-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-7xl text-[#f5f1ea] mb-8">
            Let's Work Together
          </h2>
          <p className="text-[#a0967a] text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Ready to transform your brand with AI-powered design and marketing solutions?
            Get in touch to discuss your project.
          </p>
          <a
            href="https://instagram.com/aakriti.design"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#e5b769] text-[#0a0a0a] font-display text-xl rounded-full hover:bg-[#d4a058] transition-colors transform hover:scale-105"
          >
            Connect on Instagram @aakriti.design
          </a>
        </div>
      </section>
    </div>
  )
}
