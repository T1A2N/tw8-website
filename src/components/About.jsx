import { CheckCircle2 } from 'lucide-react'

const points = [
  'Full-stack web & software engineering',
  'Proactive, managed IT support',
  'Security-first architecture',
  'Scalable cloud & database solutions',
]

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="container-page">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="section-label">About TW8.tech</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            A technology solutions company built for{' '}
            <span className="gradient-text">growth</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300">
            TW8.tech is a full-service technology solutions company helping
            businesses design, build, and maintain the digital systems that
            power their growth. We combine modern engineering, robust security,
            and dependable support to deliver software that performs.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Whether you're launching a new product, modernizing legacy systems,
            or scaling your infrastructure, we deliver reliable, future-ready
            solutions tailored to your goals — from the first line of code to
            ongoing support.
          </p>
        </div>

        <ul className="reveal mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-2xl glass p-5 text-sm text-slate-200"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-400" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
