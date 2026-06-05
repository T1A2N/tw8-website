import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { LogoLockup } from './Logo.jsx'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Book Now', href: '#consultation' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const products = [
  { label: 'Infinity School Manager', href: '/products/infinity-school-manager' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container-page">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? 'glass-strong shadow-card' : 'border border-transparent'
          }`}
        >
          <Link
            to="/"
            className="transition-transform duration-300 hover:scale-[1.03]"
          >
            <LogoLockup uid="nav" markClassName="h-10 w-14" />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="relative">
              <button
                onClick={() => setProductsOpen((o) => !o)}
                className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Products <ChevronDown className="h-4 w-4" />
              </button>
              {productsOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 rounded-xl glass-strong p-2 shadow-card">
                  {products.map((p) => (
                    <Link
                      key={p.href}
                      to={p.href}
                      onClick={() => setProductsOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-xl glass text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            open ? 'mt-2 max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass-strong rounded-2xl p-3 shadow-card">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setProductsOpen((o) => !o)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                  aria-expanded={productsOpen}
                >
                  Products <ChevronDown className="h-4 w-4" />
                </button>
                {productsOpen && (
                  <ul className="ml-4 mt-1 flex flex-col gap-1">
                    {products.map((p) => (
                      <li key={p.href}>
                        <Link
                          to={p.href}
                          onClick={() => {
                            setOpen(false)
                            setProductsOpen(false)
                          }}
                          className="block rounded-lg px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          {p.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
