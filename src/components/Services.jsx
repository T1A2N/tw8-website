import { Globe, Headphones, ShieldCheck, Database, Code2, ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'High-performance, responsive websites and web apps built with modern frameworks and conversion in mind.',
    features: ['Responsive design', 'SEO optimized', 'CMS integration'],
  },
  {
    icon: Headphones,
    title: 'IT Support',
    desc: 'Reliable managed IT support to keep your systems running smoothly with fast response times.',
    features: ['24/7 monitoring', 'Remote & on-site', 'Proactive maintenance'],
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    desc: 'Protect your business with security audits, threat detection, and hardened infrastructure.',
    features: ['Security audits', 'Threat detection', 'Data protection'],
  },
  {
    icon: Database,
    title: 'Database Solutions',
    desc: 'Design, optimization, and management of scalable databases for performance and reliability.',
    features: ['Schema design', 'Performance tuning', 'Backup & recovery'],
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    desc: 'Tailored software built around your workflows — from internal tools to full SaaS platforms.',
    features: ['Bespoke apps', 'API integrations', 'Cloud-native'],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-glow opacity-60" />
      <div className="container-page relative">
        <SectionHeading
          label="What We Do"
          title="Services built to move your business forward"
          description="A complete suite of technology services — from your first website to enterprise-grade software and security."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative overflow-hidden rounded-3xl glass p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/40 hover:bg-white/[0.07]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
              <div className="flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-brand-700/10 ring-1 ring-brand-400/30">
                  <s.icon className="h-7 w-7 text-brand-300" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-300" />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {/* CTA card */}
          <article className="reveal flex flex-col justify-between rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-7 shadow-glow">
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                Need something custom?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-100">
                Tell us your challenge and we'll architect the right solution for
                your business and budget.
              </p>
            </div>
            <a
              href="#contact"
              className="btn mt-6 w-full bg-white text-brand-700 hover:bg-brand-50"
            >
              Let's Talk <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
