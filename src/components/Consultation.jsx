import { useState } from 'react'
import {
  CalendarClock,
  Video,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Lightbulb,
  Calculator,
  ArrowUpRight,
  Sparkles,
  Zap,
  Headphones,
  PencilRuler,
  Quote,
  MessageCircle,
  Send,
} from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const WHATSAPP_NUMBER = '263788177569'

const inputClass =
  'w-full rounded-xl border border-white/10 bg-ink-800/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-400/60 focus:ring-2 focus:ring-brand-400/30'

const serviceOptions = [
  'Website Development',
  'IT Support',
  'Networking Solutions',
  'Custom Software',
  'Cybersecurity',
  'Something else',
]

const features = [
  { icon: Clock, text: 'Free 30-minute consultation' },
  { icon: ShieldCheck, text: 'No obligation' },
  { icon: Lightbulb, text: 'Personalized technology recommendations' },
  { icon: Calculator, text: 'Project planning and cost estimates' },
  { icon: Video, text: 'Virtual meetings via Google Meet or Zoom' },
]

const trust = [
  { icon: CheckCircle2, label: 'Free Consultation' },
  { icon: Zap, label: 'Fast Response' },
  { icon: Headphones, label: 'Professional Support' },
  { icon: PencilRuler, label: 'Tailored Solutions' },
]

export default function Consultation() {
  const [form, setForm] = useState({ name: '', service: '', time: '', message: '' })

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const buildWaLink = () => {
    const lines = [
      "Hi TW8.tech! I'd like to book a free 30-minute consultation.",
      form.name && `Name: ${form.name}`,
      form.service && `Service needed: ${form.service}`,
      form.time && `Preferred day/time: ${form.time}`,
      form.message && `Project details: ${form.message}`,
    ].filter(Boolean)
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
  }

  return (
    <section id="consultation" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-glow opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl animate-pulse-slow" />

      <div className="container-page relative">
        <SectionHeading
          label="Book a Free Consultation"
          title="Let's Discuss Your Project"
          description="Whether you need a website, IT support, networking solutions, or a custom software system, schedule a free 30-minute consultation and let's explore how TW8.tech can help your business grow."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Left: info, features, illustration */}
          <div className="reveal lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              {/* Virtual meeting illustration */}
              <div className="relative overflow-hidden rounded-3xl glass-strong p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/15 px-3 py-1.5 text-xs font-semibold text-brand-300 ring-1 ring-brand-400/30">
                    <Sparkles className="h-3.5 w-3.5" /> Virtual Meeting
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
                    Live
                  </span>
                </div>

                {/* Participant tiles */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    { initials: 'TW', name: 'TW8.tech', accent: 'from-brand-500 to-brand-700' },
                    { initials: 'YOU', name: 'You', accent: 'from-emerald-500 to-teal-600' },
                  ].map((p) => (
                    <div
                      key={p.name}
                      className="relative grid aspect-video place-items-center overflow-hidden rounded-2xl border border-white/10 bg-ink-900/70"
                    >
                      <span
                        className={`grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br ${p.accent} text-sm font-bold text-white`}
                      >
                        {p.initials}
                      </span>
                      <span className="absolute bottom-1.5 left-2 text-[11px] text-slate-300">
                        {p.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Meeting controls */}
                <div className="mt-4 flex items-center justify-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-slate-300">
                    <Video className="h-4 w-4" />
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-600 text-white shadow-glow animate-float">
                    <CalendarClock className="h-4 w-4" />
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-slate-300">
                    <Headphones className="h-4 w-4" />
                  </span>
                </div>

                {/* Floating animated calendar badge */}
                <div className="absolute -right-3 top-16 hidden rounded-2xl glass px-3 py-2 shadow-card sm:block animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <CalendarClock className="h-4 w-4 text-brand-300" />
                    <div>
                      <p className="text-[10px] text-slate-400">Next slot</p>
                      <p className="text-xs font-bold text-white">30 min</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="grid gap-3 rounded-3xl glass p-6 shadow-card">
                {features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-700/10 ring-1 ring-brand-400/30">
                      <f.icon className="h-4.5 w-4.5 text-brand-300" />
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi TW8.tech! I'd like to book a free 30-minute consultation.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1"
                >
                  Book on WhatsApp <MessageCircle className="h-4 w-4" />
                </a>
                <a href="#contact" className="btn-ghost flex-1">
                  Request a Quote <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: WhatsApp booking form */}
          <div className="reveal lg:col-span-3" style={{ transitionDelay: '120ms' }}>
            <div className="rounded-3xl glass-strong p-6 shadow-card sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-[#25D366]/15 ring-1 ring-[#25D366]/30">
                  <MessageCircle className="h-5 w-5 text-[#25D366]" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Request your free session
                  </h3>
                  <p className="text-sm text-slate-400">
                    Fill in a few details and we'll confirm your slot over WhatsApp.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                <div>
                  <label htmlFor="c-name" className="mb-1.5 block text-xs font-medium text-slate-400">
                    Your name
                  </label>
                  <input
                    id="c-name"
                    name="name"
                    value={form.name}
                    onChange={update}
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-service" className="mb-1.5 block text-xs font-medium text-slate-400">
                      What do you need?
                    </label>
                    <select
                      id="c-service"
                      name="service"
                      value={form.service}
                      onChange={update}
                      className={inputClass}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="c-time" className="mb-1.5 block text-xs font-medium text-slate-400">
                      Preferred day/time
                    </label>
                    <input
                      id="c-time"
                      name="time"
                      value={form.time}
                      onChange={update}
                      placeholder="e.g. Tuesday afternoon"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-message" className="mb-1.5 block text-xs font-medium text-slate-400">
                    Brief project details (optional)
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    value={form.message}
                    onChange={update}
                    rows={3}
                    placeholder="Tell us a little about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <a
                  href={buildWaLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-[1.02]"
                >
                  Book on WhatsApp <Send className="h-4 w-4" />
                </a>
                <p className="text-center text-xs text-slate-500">
                  This opens WhatsApp with your details pre-filled — just hit
                  send and we'll reply to confirm your free 30-minute
                  consultation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust elements */}
        <div className="reveal mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {trust.map((t) => (
            <div
              key={t.label}
              className="flex items-center justify-center gap-2.5 rounded-2xl glass px-4 py-4 text-center transition-colors hover:bg-white/[0.07]"
            >
              <t.icon className="h-5 w-5 flex-none text-brand-300" />
              <span className="text-sm font-semibold text-white">{t.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <figure className="reveal mx-auto mt-10 max-w-2xl rounded-3xl glass p-8 text-center shadow-card">
          <Quote className="mx-auto h-8 w-8 text-brand-500/40" />
          <blockquote className="mt-4 text-lg font-medium leading-relaxed text-slate-200">
            "Working with TW8 was an outstanding experience from start to
            finish. He took our vision and transformed it into a professional,
            modern website that perfectly represents our brand — and exceeded
            our expectations."
          </blockquote>
          <figcaption className="mt-5 text-sm text-slate-400">
            <span className="font-semibold text-white">Takudzwa Beta</span> —
            Founder &amp; CEO, Chloe Logistics
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
