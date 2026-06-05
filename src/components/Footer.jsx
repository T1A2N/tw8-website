import { Instagram, Linkedin, Twitter, Facebook, Mail, Phone } from 'lucide-react'
import Logo from './Logo.jsx'

const cols = [
  {
    title: 'Services',
    links: [
      'Website Development',
      'IT Support',
      'Cybersecurity',
      'Database Solutions',
      'Custom Software',
    ],
  },
  {
    title: 'Company',
    links: ['About', 'Portfolio', 'Why Us', 'Testimonials', 'Contact'],
  },
]

const socials = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/tw8.tech' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/tanaka-beta-4a176b2a2/' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://x.com/Pagion_' },
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/tanaka.beta.98' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-800/60">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="inline-block transition-transform duration-300 hover:scale-[1.03]"
            >
              <Logo imgClassName="h-16 w-auto" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Transforming ideas into digital solutions. Professional web
              development, IT support, and technology solutions for businesses
              ready to grow.
            </p>
            <div className="mt-6 space-y-2 text-sm text-slate-400">
              <a href="mailto:hello@tw8.tech" className="flex items-center gap-2 hover:text-brand-300">
                <Mail className="h-4 w-4" /> hello@tw8.tech
              </a>
              <a href="tel:+263788177569" className="flex items-center gap-2 hover:text-brand-300">
                <Phone className="h-4 w-4" /> +263 78 817 7569
              </a>
            </div>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-400/40 hover:text-brand-300"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#contact"
                      className="text-sm text-slate-400 transition-colors hover:text-brand-300"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} TW8.tech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-300">Privacy Policy</a>
            <a href="#" className="hover:text-brand-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
