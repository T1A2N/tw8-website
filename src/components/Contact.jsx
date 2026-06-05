import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const WHATSAPP_NUMBER = '263788177569' // international format, no symbols

const socials = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/tw8.tech' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/tanaka-beta-4a176b2a2/' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://x.com/Pagion_' },
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/tanaka.beta.98' },
]

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@tw8.tech', href: 'mailto:hello@tw8.tech' },
  { icon: Phone, label: 'Phone & WhatsApp', value: '+263 78 817 7569', href: 'tel:+263788177569' },
  { icon: MapPin, label: 'Location', value: 'Remote · Worldwide', href: '#contact' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const lines = [
      "Hi TW8.tech! I'd like to discuss a project.",
      form.name && `Name: ${form.name}`,
      form.email && `Email: ${form.email}`,
      form.service && `Service: ${form.service}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean)
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(waLink, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', email: '', service: '', message: '' })
  }

  const waText = encodeURIComponent(
    "Hi TW8.tech! I'd like to discuss a project.",
  )

  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-glow opacity-60" />
      <div className="container-page relative">
        <SectionHeading
          label="Get In Touch"
          title="Let's build something great together"
          description="Tell us about your project and we'll get back to you within one business day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Info + WhatsApp + Socials */}
          <div className="reveal lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="grid gap-4">
                {contactInfo.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-4 rounded-2xl glass p-4 transition-colors hover:bg-white/[0.07]"
                  >
                    <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-700/10 ring-1 ring-brand-400/30">
                      <c.icon className="h-5 w-5 text-brand-300" />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-400">{c.label}</span>
                      <span className="block text-sm font-semibold text-white">
                        {c.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full bg-[#25D366] text-white shadow-[0_0_30px_-8px_rgba(37,211,102,0.7)] hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>

              <div className="rounded-2xl glass p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Follow Us
                </p>
                <div className="mt-4 flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/40 hover:text-brand-300"
                    >
                      <s.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal lg:col-span-3" style={{ transitionDelay: '120ms' }}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl glass-strong p-7 shadow-card sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Jane Doe"
                  required
                />
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  placeholder="jane@company.com"
                  required
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Service Needed
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={update}
                  className="w-full rounded-xl border border-white/10 bg-ink-800/80 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400/60 focus:ring-2 focus:ring-brand-400/30"
                >
                  <option value="">Select a service</option>
                  <option>Website Development</option>
                  <option>IT Support</option>
                  <option>Cybersecurity</option>
                  <option>Database Solutions</option>
                  <option>Custom Software Development</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={update}
                  rows={5}
                  required
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-ink-800/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-400/60 focus:ring-2 focus:ring-brand-400/30"
                />
              </div>

              <button type="submit" className="btn-primary mt-6 w-full">
                {sent ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" /> Message Sent!
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
              {sent && (
                <p className="mt-3 text-center text-sm text-emerald-400">
                  Thanks! We'll be in touch within one business day.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-white/10 bg-ink-800/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-400/60 focus:ring-2 focus:ring-brand-400/30"
      />
    </div>
  )
}
