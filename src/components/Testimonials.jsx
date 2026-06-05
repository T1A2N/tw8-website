import { Star, Quote } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const review = {
  rating: 5,
  paragraphs: [
    'Working with TW8 was an outstanding experience from start to finish.',
    'He took our vision for Chloe Logistics and transformed it into a professional, modern, and visually impressive website that perfectly represents our brand. The attention to detail, clean design, responsive layout, and overall user experience exceeded our expectations.',
    'What impressed us most was his ability to understand our business goals and create a website that not only looks professional but also helps us build trust with potential customers. The branding, founder story, quote request system, logistics-focused design, and mobile responsiveness were all implemented exceptionally well.',
    'Communication throughout the project was excellent, and every suggestion we made was handled professionally and efficiently.',
    'We are extremely happy with the final result and would highly recommend TW8 to anyone looking for a high-quality website that combines great design with real business value.',
    'Thank you for helping bring Chloe Logistics to life online.',
  ],
  name: 'Takudzwa Beta',
  role: 'Founder & CEO, Chloe Logistics',
  initials: 'TB',
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="container-page">
        <SectionHeading
          label="Testimonials"
          title="What our clients say"
          description="A genuine review from a business we've helped bring online."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Real client review */}
          <figure className="reveal relative flex flex-col rounded-3xl glass p-8 shadow-card sm:p-10 lg:col-span-2">
            <Quote className="h-10 w-10 text-brand-500/40" />
            <div className="mt-4 flex gap-0.5">
              {Array.from({ length: review.rating }).map((_, s) => (
                <Star key={s} className="h-4.5 w-4.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="mt-5 flex-1 space-y-4 text-sm leading-relaxed text-slate-300">
              {review.paragraphs.map((p, i) => (
                <p key={i}>
                  {i === 0 && '“'}
                  {p}
                  {i === review.paragraphs.length - 1 && '”'}
                </p>
              ))}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
                {review.initials}
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{review.name}</p>
                <p className="text-xs text-slate-400">{review.role}</p>
              </div>
            </figcaption>
          </figure>

          {/* Next success story CTA */}
          <div
            className="reveal flex flex-col justify-center rounded-3xl glass-strong p-8 text-center shadow-card"
            style={{ transitionDelay: '120ms' }}
          >
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/15 ring-1 ring-brand-400/30">
              <Star className="h-6 w-6 text-brand-300" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-white">
              Be our next success story
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Let's build something you'll be proud to review too. Book a free
              consultation and tell us about your project.
            </p>
            <a href="#consultation" className="btn-primary mt-6 w-full justify-center">
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
