import { ArrowRight, Sparkles } from 'lucide-react'
import { LogoMark } from './Logo.jsx'

const stats = [
  { value: 'Free', label: 'Consultation' },
  { value: 'Fast', label: 'Turnaround' },
  { value: '100%', label: 'Dedicated' },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-glow" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-64 w-64 rounded-full bg-brand-700/20 blur-3xl animate-pulse-slow" />

      <div className="container-page relative">
        <div className="flex flex-col items-center text-center">
          {/* Logo centerpiece with animated blue glow */}
          <div className="reveal relative grid place-items-center">
            {/* Glow rings */}
            <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-brand-500/25 blur-3xl animate-pulse-slow" />
            <div className="pointer-events-none absolute h-44 w-44 rounded-full border border-brand-400/20 animate-pulse-slow" />
            <div className="pointer-events-none absolute h-60 w-60 rounded-full border border-brand-400/10" />
            <div className="glass-strong relative grid h-40 w-40 place-items-center rounded-[2rem] shadow-glow animate-float sm:h-48 sm:w-48">
              <LogoMark className="h-24 w-32 sm:h-28 sm:w-36" uid="hero" />
            </div>
          </div>

          <div className="reveal mt-10" style={{ transitionDelay: '80ms' }}>
            <span className="section-label">
              <Sparkles className="h-3.5 w-3.5" /> Infinity Tech Solutions
            </span>
          </div>

          <h1 className="reveal mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ transitionDelay: '120ms' }}>
            Transforming Ideas Into{' '}
            <span className="gradient-text">Digital Solutions</span>
          </h1>

          <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-slate-300" style={{ transitionDelay: '160ms' }}>
            Professional Web Development, IT Support, and Technology Solutions
            for Businesses Ready to Grow.
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-4" style={{ transitionDelay: '200ms' }}>
            <a href="#contact" className="btn-primary">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#portfolio" className="btn-ghost">
              View Portfolio
            </a>
          </div>

          <dl className="reveal mt-14 grid w-full max-w-xl grid-cols-3 gap-6" style={{ transitionDelay: '240ms' }}>
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-3 py-5">
                <dt className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-slate-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Client strip */}
        <div className="reveal mt-20 border-t border-white/10 pt-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Proudly building for
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <span className="font-display text-xl font-bold tracking-tight text-slate-300">
              Chloe Logistics
            </span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span className="text-sm text-slate-500">
              — and your business could be next.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
