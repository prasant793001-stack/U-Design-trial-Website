import { withBasePath } from '../lib/sitePaths'

export default function Contact() {
  return (
    <div className="min-h-[70vh] bg-[#0a0a0a] px-6 py-24 text-[#f5f1ea] font-body">
      <section className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#e5b769]/20 px-8 py-20 text-center md:px-16">
        <img
          src={withBasePath('/site-media/about-bg-1.jpg')}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/90 via-[#0a0a0a]/80 to-[#0a0a0a]/95" />

        <div className="relative z-10">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#e5b769]">UAE-based AI Marketing Studio</p>
          <h1 className="font-display text-5xl text-[#f5f1ea] md:text-7xl">Contact U-Design</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#b7ad9b]">
            We work with restaurants, real estate businesses, boutiques and shops in the UAE.
            For enquiries or a free marketing audit, message us on Instagram.
          </p>

          <a
            href="https://instagram.com/aakriti.design"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full bg-[#e5b769] px-8 py-4 font-display text-xl text-[#0a0a0a] transition-colors hover:bg-[#d4a058] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5b769]"
          >
            DM “AI” on Instagram
          </a>
          <p className="mt-4 text-sm text-[#a0967a]">@aakriti.design</p>

          <a href={withBasePath('/services')} className="mt-12 inline-block text-[#e5b769] underline-offset-4 hover:underline">
            Explore our services
          </a>
        </div>
      </section>
    </div>
  )
}
