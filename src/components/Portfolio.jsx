import { useState } from 'react'
import { ArrowUpRight, Star } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const featured = {
  title: 'Chloe Logistics Website',
  category: 'Web Development · Logistics',
  desc: 'A modern, professional and responsive website built to showcase their logistics services and connect with clients — featuring a services showcase, easy customer contact, WhatsApp support and a fast, mobile-optimized interface.',
  tags: ['Web Design', 'Responsive', 'Mobile-First', 'WhatsApp'],
  gradient: 'from-brand-600 via-brand-500 to-cyan-500',
  images: [
    { src: '/portfolio/chloe-home.png', label: 'Homepage' },
    { src: '/portfolio/chloe-fleet.png', label: 'Fleet Hero' },
    { src: '/portfolio/chloe-contact.png', label: 'Contact' },
  ],
}

function FeaturedGallery({ images, gradient }) {
  const [active, setActive] = useState(0)
  return (
    <div className={`relative flex min-h-[300px] flex-col gap-3 bg-gradient-to-br ${gradient} p-4 sm:p-5`}>
      <div className="absolute left-6 top-6 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
        <Star className="h-3.5 w-3.5 fill-yellow-300 text-yellow-300" /> Featured Project
      </div>
      <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-ink-900">
        <img
          src={images[active].src}
          alt={`Chloe Logistics website — ${images[active].label}`}
          className="h-full max-h-[340px] w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${img.label}`}
            className={`relative overflow-hidden rounded-xl border bg-ink-900 transition-all duration-300 ${
              active === i
                ? 'border-white/80 ring-2 ring-white/50'
                : 'border-white/10 opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={img.src}
              alt={img.label}
              className="aspect-video h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24">
      <div className="container-page">
        <SectionHeading
          label="Our Work"
          title="Projects that deliver real results"
          description="A closer look at a recent project we designed and built."
        />

        {/* Featured */}
        <div className="reveal mt-14 overflow-hidden rounded-3xl glass-strong shadow-card lg:grid lg:grid-cols-2">
          <FeaturedGallery images={featured.images} gradient={featured.gradient} />

          <div className="p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">
              {featured.category}
            </p>
            <h3 className="mt-3 font-display text-2xl font-extrabold text-white">
              {featured.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {featured.desc}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <a href="#contact" className="btn-primary mt-8">
              View Case Study <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
