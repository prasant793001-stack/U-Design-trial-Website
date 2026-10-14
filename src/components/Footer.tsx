import { withBasePath } from '../lib/sitePaths'

export default function Footer() {
  return (
    <footer
      className="bg-[#0a0a0a] text-[#f5f1ea] font-body relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-50">
        <div className="aurora">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <a
                href={withBasePath('/')}
                className="mb-6 inline-flex items-center gap-3 font-display text-3xl text-[#f5f1ea] transition-colors hover:text-[#e5b769]"
              >
                <img src={withBasePath('/logo.svg')} alt="" aria-hidden="true" className="h-12 w-12" width="48" height="48" />
                <span>U-Design</span>
              </a>
              <p className="text-[#a0967a] max-w-md leading-relaxed">
                AI-powered marketing and creative studio helping UAE businesses
                grow through innovative digital solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display text-xl text-[#f5f1ea] mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={withBasePath('/')}
                    className="text-[#a0967a] hover:text-[#e5b769] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href={withBasePath('/about')}
                    className="text-[#a0967a] hover:text-[#e5b769] transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href={withBasePath('/services')}
                    className="text-[#a0967a] hover:text-[#e5b769] transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href={withBasePath('/shop')}
                    className="text-[#a0967a] hover:text-[#e5b769] transition-colors"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href={withBasePath('/gallery')}
                    className="text-[#a0967a] hover:text-[#e5b769] transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href={withBasePath('/contact')}
                    className="text-[#a0967a] hover:text-[#e5b769] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display text-xl text-[#f5f1ea] mb-6">Connect</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://instagram.com/aakriti.design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a0967a] hover:text-[#e5b769] transition-colors inline-flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.074-4.949-.074zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.102-6.999c-2.208 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.79 4 4c0 2.21-1.791 4-4 4z" />
                    </svg>
                    @aakriti.design
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-[#a0967a] text-sm text-center md:text-left">
              © {new Date().getFullYear()} U-Design.
            </p>
            <p className="text-[#a0967a] text-sm text-center md:text-right mt-4 md:mt-0">
              AI Marketing Studio based in the UAE.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
