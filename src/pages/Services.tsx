import { useEffect, useRef } from 'react'

export default function Services() {
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

  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      ),
      title: "Social Media Management",
      description: "AI-powered content creation, scheduling, and engagement strategies that grow your audience and drive conversions.",
      image: "/site-media/service-boutique-1.jpg"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L13.732 7.732z" />
        </svg>
      ),
      title: "Content Creation",
      description: "Engaging visuals, copy, and video content that tells your brand's story and resonates with your target audience.",
      image: "/site-media/service-boutique-2.jpg"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "SEO & Analytics",
      description: "Data-driven optimization that improves your search rankings and provides actionable insights for growth.",
      image: "/site-media/service-real-estate-2.jpg"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v13a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Marketing",
      description: "Automated email campaigns that nurture leads and retain customers with personalized messaging.",
      image: "/site-media/service-restaurant-2.jpg"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Influencer Marketing",
      description: "Strategic partnerships with UAE influencers who authentically promote your brand to their engaged followers.",
      image: "/site-media/service-boutique-3.jpg"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Custom Solutions",
      description: "Every business is different. We tailor AI solutions to your specific needs, industry, and goals. No cookie-cutter approaches.",
      image: "/site-media/service-real-estate-3.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f1ea] font-body overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/site-media/about-bg-1.jpg"
            alt="Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]/90" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="reveal-on-scroll">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-[#f5f1ea] tracking-tighter mb-6">
              Our Services
            </h1>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
            <p className="text-xl md:text-2xl text-[#a0967a] max-w-2xl mx-auto leading-relaxed">
              AI-Powered Solutions for UAE Businesses
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </section>

      {/* Services Grid */}
      <section ref={sectionRef} className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-[#f5f1ea] mb-6">
              What We Do
            </h2>
            <p className="text-[#a0967a] text-lg max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive AI-powered marketing and creative services
              tailored to help your business grow and stand out in the UAE market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass service-card p-8 rounded-2xl transition-transform duration-300 group reveal-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-[#e5b769]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#e5b769]/30 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl text-[#f5f1ea] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#a0967a] leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl text-[#f5f1ea] mb-16 text-center">
            Our Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="glass p-8 rounded-2xl text-center reveal-on-scroll" style={{ transitionDelay: '0ms' }}>
              <div className="w-16 h-16 bg-[#e5b769]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-3xl text-[#e5b769]">1</span>
              </div>
              <h3 className="font-display text-xl text-[#f5f1ea] mb-4">Discovery</h3>
              <p className="text-[#a0967a] leading-relaxed">
                We learn about your business, goals, and target audience to create a
                tailored strategy.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl text-center reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="w-16 h-16 bg-[#e5b769]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-3xl text-[#e5b769]">2</span>
              </div>
              <h3 className="font-display text-xl text-[#f5f1ea] mb-4">Strategy</h3>
              <p className="text-[#a0967a] leading-relaxed">
                We develop a comprehensive plan leveraging AI tools and creative
                techniques to achieve your objectives.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl text-center reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="w-16 h-16 bg-[#e5b769]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-3xl text-[#e5b769]">3</span>
              </div>
              <h3 className="font-display text-xl text-[#f5f1ea] mb-4">Creation</h3>
              <p className="text-[#a0967a] leading-relaxed">
                We bring your vision to life with premium design, AI-powered content,
                and innovative solutions.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl text-center reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <div className="w-16 h-16 bg-[#e5b769]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-3xl text-[#e5b769]">4</span>
              </div>
              <h3 className="font-display text-xl text-[#f5f1ea] mb-4">Results</h3>
              <p className="text-[#a0967a] leading-relaxed">
                We deliver measurable results and continuously optimize for better
                performance and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative reveal-on-scroll parallax-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-7xl text-[#f5f1ea] mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-[#a0967a] text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Let's discuss how we can help your business grow with AI-powered solutions.
          </p>
          <a
            href="https://instagram.com/aakriti.design"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#e5b769] text-[#0a0a0a] font-display text-xl rounded-full hover:bg-[#d4a058] transition-colors transform hover:scale-105"
          >
            Contact on Instagram @aakriti.design
          </a>
        </div>
      </section>
    </div>
  )
}
