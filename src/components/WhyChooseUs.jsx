import { Zap, ShieldCheck, Clock, HeartHandshake, Layers, TrendingUp } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const reasons = [
  {
    icon: Zap,
    title: 'Fast & Performant',
    desc: 'Optimized builds that load quickly and deliver smooth experiences on every device.',
  },
  {
    icon: ShieldCheck,
    title: 'Security First',
    desc: 'We bake security into everything we build, from code reviews to hardened infrastructure.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    desc: 'Round-the-clock monitoring and support so issues are resolved before they cost you.',
  },
  {
    icon: HeartHandshake,
    title: 'Client-Focused',
    desc: 'Transparent communication and dedicated partnership through every stage of your project.',
  },
  {
    icon: Layers,
    title: 'Scalable Solutions',
    desc: 'Architecture designed to grow with you — from startup MVP to enterprise scale.',
  },
  {
    icon: TrendingUp,
    title: 'Results Driven',
    desc: 'We measure success by your outcomes: more users, more revenue, less downtime.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-glow opacity-60" />
      <div className="container-page relative">
        <SectionHeading
          label="Why Choose Us"
          title="The advantages of partnering with TW8.tech"
          description="We're more than a vendor — we're the technology team invested in your success."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="reveal group rounded-3xl glass p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.07]"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-glow transition-transform duration-300 group-hover:scale-110">
                <r.icon className="h-7 w-7 text-white" />
              </span>
              <h3 className="mt-6 font-display text-lg font-bold text-white">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
