import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Play,
  X,
  ChevronDown,
  ChevronUp,
  Users,
  DollarSign,
  Calendar,
  Shield,
  BarChart3,
  Lock,
  MessageSquare,
  TrendingUp,
  Database,
  Zap,
  CheckCircle2,
  MessageCircle,
  Send,
  Star,
  Quote,
  Sparkles,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import { LogoMark } from '../components/Logo.jsx'

const WHATSAPP_NUMBER = '263788177569'

const features = [
  {
    icon: Users,
    title: 'Student Management',
    description: 'Manage student profiles, enrollment, records, and academic history.',
  },
  {
    icon: DollarSign,
    title: 'Fee Management',
    description: 'Track payments, outstanding balances, and generate receipts.',
  },
  {
    icon: Calendar,
    title: 'Attendance Tracking',
    description: 'Monitor daily attendance and generate attendance reports.',
  },
  {
    icon: Users,
    title: 'Staff Management',
    description: 'Manage teachers, administrators, and support staff.',
  },
  {
    icon: BarChart3,
    title: 'Academic Reports',
    description: 'Generate report cards and academic performance analytics.',
  },
  {
    icon: Lock,
    title: 'Secure User Access',
    description: 'Role-based permissions and secure authentication.',
  },
  {
    icon: MessageSquare,
    title: 'Parent Communication',
    description: 'Send important updates and notifications.',
  },
  {
    icon: TrendingUp,
    title: 'School Analytics',
    description: 'Gain insights through visual reports and dashboards.',
  },
]

const benefits = [
  { icon: Database, text: 'Centralized School Data' },
  { icon: Zap, text: 'Reduced Administrative Work' },
  { icon: MessageSquare, text: 'Improved Communication' },
  { icon: BarChart3, text: 'Real-Time Reporting' },
  { icon: Shield, text: 'Secure Data Management' },
  { icon: CheckCircle2, text: 'Easy To Use Interface' },
  { icon: TrendingUp, text: 'Scalable Solution' },
  { icon: Sparkles, text: 'Cloud Ready' },
]

const screenshots = [
  { id: 1, title: 'Dashboard', label: 'Dashboard', image: '/infinity-school-manager/Dashboard.PNG' },
  { id: 2, title: 'Student Registration', label: 'Students', image: '/infinity-school-manager/register-student.PNG' },
  { id: 3, title: 'Fee Payment', label: 'Fees', image: '/infinity-school-manager/record-payment.PNG' },
  { id: 4, title: 'Term Billing', label: 'Billing', image: '/infinity-school-manager/term-billing.PNG' },
  { id: 5, title: 'Login', label: 'Login', image: '/infinity-school-manager/login.PNG' },
  { id: 6, title: 'Backup & Restore', label: 'Settings', image: '/infinity-school-manager/backup-restore.PNG' },
]

const faqs = [
  {
    question: 'What is Infinity School Manager?',
    answer: 'Infinity School Manager is a comprehensive digital platform designed to streamline school operations, improve communication, and provide administrators with powerful tools for managing educational institutions.',
  },
  {
    question: 'Is Infinity School Manager cloud-based?',
    answer: 'Yes, Infinity School Manager is a cloud-ready solution that can be deployed on your preferred cloud infrastructure, ensuring accessibility from anywhere with secure data management.',
  },
  {
    question: 'Can I customize Infinity School Manager for my school?',
    answer: 'Infinity School Manager is designed to be flexible and scalable. We offer customization options to tailor the system to your school\'s specific requirements and workflows.',
  },
  {
    question: 'How do I get started with Infinity School Manager?',
    answer: 'Simply request a demo through our contact form. We\'ll schedule a free consultation to understand your needs and show you how Infinity School Manager can transform your school administration.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide comprehensive support including setup assistance, training, and ongoing technical support to ensure your school gets the most out of Infinity School Manager.',
  },
]

const stats = [
  { value: 1, label: 'New Product Launch' },
  { value: 100, label: '% Custom Built' },
  { value: 5, label: 'Schools Onboarded' },
  { value: 1, label: 'Ready to Deploy' },
]

function StatCounter({ value, label }) {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [visible, value])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-extrabold text-white sm:text-5xl">
        {count}
        {label.includes('%') && '%'}
        {label.includes('K') && 'K+'}
      </div>
      <div className="mt-2 text-sm text-slate-400">{label}</div>
    </div>
  )
}

function Lightbox({ image, onClose }) {
  if (!image) return null
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        aria-label="Close"
      >
        <X className="h-6 w-6" />
      </button>
      <div className="relative max-w-4xl">
        <div className="glass-strong rounded-3xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-white">{image.title}</h3>
          <img
            src={image.image}
            alt={image.title}
            className="mt-6 aspect-video w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default function ProductInfinity() {
  const [lightboxImage, setLightboxImage] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({
    schoolName: '',
    contactPerson: '',
    email: '',
    phone: '',
    studentCount: '',
    message: '',
  })

  const updateForm = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const buildWaLink = () => {
    const lines = [
      "Hi TW8.tech! I'm interested in a demo of Infinity School Manager.",
      form.schoolName && `School: ${form.schoolName}`,
      form.contactPerson && `Contact: ${form.contactPerson}`,
      form.email && `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.studentCount && `Students: ${form.studentCount}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean)
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
  }

  useEffect(() => {
    document.title = 'Infinity School Manager | TW8'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Infinity School Manager is a modern school administration platform developed by TW8 to manage students, fees, attendance, staff, reporting, and communication.'
      )
    }
    return () => {
      document.title = 'TW8.tech — Web Development, IT Support & Technology Solutions'
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'TW8.tech transforms ideas into digital solutions. Professional web development, IT support, cybersecurity, database and custom software solutions for businesses ready to grow.'
        )
      }
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-900">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-grid-glow" />
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl animate-pulse-slow" />
        <div className="container-page relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal flex flex-col justify-center">
              <span className="section-label">
                <Sparkles className="h-3.5 w-3.5" /> Flagship Product
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Infinity School Manager
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Transform school administration with an all-in-one platform designed to manage students, finances, academics, attendance, and communication efficiently.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#demo" className="btn-primary">
                  Request Demo <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi TW8.tech! I'm interested in Infinity School Manager.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Contact TW8
                </a>
              </div>
            </div>
            <div className="reveal flex items-center justify-center" style={{ transitionDelay: '120ms' }}>
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-500/30 to-brand-700/20 blur-3xl" />
                <div className="relative glass-strong rounded-3xl p-6 shadow-card">
                  <img
                    src="/infinity-school-manager/Dashboard.PNG"
                    alt="Infinity School Manager Dashboard"
                    className="aspect-video w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container-page">
          <SectionHeading
            label="Product Overview"
            title="Everything Your School Needs in One Platform"
            description="The Infinity School Manager is a comprehensive digital solution built to streamline school operations, improve communication, and provide administrators with powerful tools for managing educational institutions."
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container-page">
          <SectionHeading
            label="Features"
            title="Powerful Tools for Modern Schools"
            description="Everything you need to manage your institution efficiently."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="reveal group overflow-hidden rounded-3xl glass p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/40"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-brand-700/10 ring-1 ring-brand-400/30">
                  <f.icon className="h-6 w-6 text-brand-300" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24">
        <div className="container-page">
          <SectionHeading
            label="Gallery"
            title="See Infinity School Manager in Action"
            description="Explore the interface and features through our screenshots."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setLightboxImage(s)}
                className="reveal group relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-ink-800/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/40"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-semibold text-white">{s.label}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container-page">
          <SectionHeading
            label="Benefits"
            title="Why Schools Choose Infinity School Manager"
            description="The advantages that make Infinity School Manager the preferred choice for educational institutions."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <div
                key={b.text}
                className="reveal flex items-center gap-4 rounded-2xl glass p-5 transition-all duration-300 hover:bg-white/[0.07]"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-brand-500/15 ring-1 ring-brand-400/30">
                  <b.icon className="h-5 w-5 text-brand-300" />
                </div>
                <span className="text-sm font-medium text-white">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="container-page">
          <div className="reveal glass-strong rounded-3xl p-8 sm:p-12 shadow-card">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <StatCounter key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24">
        <div className="container-page">
          <SectionHeading
            label="About"
            title="Developed By TW8"
            description="Built with expertise and dedication to transform education through technology."
          />
          <div className="reveal mt-14 max-w-3xl rounded-3xl glass-strong p-8 sm:p-12 shadow-card">
            <p className="text-lg leading-relaxed text-slate-300">
              Infinity School Manager was designed and developed by TW8 – To Infinity Tech Solutions to help educational institutions modernize operations and improve efficiency through technology. Our team combined deep understanding of school workflows with modern software development practices to create a platform that truly serves the needs of administrators, teachers, parents, and students.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="py-24">
        <div className="container-page">
          <SectionHeading
            label="Testimonials"
            title="What Schools Say"
            description="Hear from educators who have transformed their operations with Infinity School Manager."
          />
          <div className="reveal mt-14 rounded-3xl glass p-8 text-center shadow-card">
            <Quote className="mx-auto h-10 w-10 text-brand-500/40" />
            <p className="mt-6 text-lg text-slate-300">
              Testimonials coming soon. Be among the first schools to experience the Infinity School Manager difference and share your success story.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container-page">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Common questions about Infinity School Manager."
          />
          <div className="reveal mt-14 max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl glass overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/[0.05]"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="h-5 w-5 text-brand-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-page">
          <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-cyan-500 p-8 sm:p-12 shadow-card">
            <div className="relative z-10 text-center">
              <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                Ready To Digitize Your School?
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Book a free demo and discover how Infinity School Manager can transform your school administration processes.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-600 shadow-lg transition-transform duration-300 hover:scale-105">
                  Request Demo <ArrowRight className="h-4 w-4" />
                </a>
                <Link to="/#contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105 hover:bg-white/20">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-grid-glow opacity-30" />
          </div>
        </div>
      </section>

      {/* Demo Form */}
      <section id="demo" className="py-24">
        <div className="container-page">
          <SectionHeading
            label="Request Demo"
            title="Get Your Free Demo"
            description="Fill in the form below and we'll schedule a personalized demo of Infinity School Manager for your school."
          />
          <div className="reveal mt-14 max-w-2xl rounded-3xl glass-strong p-8 sm:p-10 shadow-card">
            <div className="grid gap-4">
              <div>
                <label htmlFor="schoolName" className="mb-1.5 block text-xs font-medium text-slate-400">
                  School Name
                </label>
                <input
                  id="schoolName"
                  name="schoolName"
                  value={form.schoolName}
                  onChange={updateForm}
                  placeholder="Your School Name"
                  className="w-full rounded-xl border border-white/10 bg-ink-800/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-400/60 focus:ring-2 focus:ring-brand-400/30"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contactPerson" className="mb-1.5 block text-xs font-medium text-slate-400">
                    Contact Person
                  </label>
                  <input
                    id="contactPerson"
                    name="contactPerson"
                    value={form.contactPerson}
                    onChange={updateForm}
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-white/10 bg-ink-800/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-400/60 focus:ring-2 focus:ring-brand-400/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-slate-400">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateForm}
                    placeholder="email@school.com"
                    className="w-full rounded-xl border border-white/10 bg-ink-800/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-400/60 focus:ring-2 focus:ring-brand-400/30"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-slate-400">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={updateForm}
                    placeholder="+263..."
                    className="w-full rounded-xl border border-white/10 bg-ink-800/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-400/60 focus:ring-2 focus:ring-brand-400/30"
                  />
                </div>
                <div>
                  <label htmlFor="studentCount" className="mb-1.5 block text-xs font-medium text-slate-400">
                    Number of Students
                  </label>
                  <input
                    id="studentCount"
                    name="studentCount"
                    value={form.studentCount}
                    onChange={updateForm}
                    placeholder="e.g. 500"
                    className="w-full rounded-xl border border-white/10 bg-ink-800/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-400/60 focus:ring-2 focus:ring-brand-400/30"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={updateForm}
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full rounded-xl border border-white/10 bg-ink-800/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-400/60 focus:ring-2 focus:ring-brand-400/30 resize-none"
                />
              </div>
              <a
                href={buildWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-[1.02]"
              >
                Request Demo <Send className="h-4 w-4" />
              </a>
              <p className="text-center text-xs text-slate-500">
                This opens WhatsApp with your details pre-filled — just hit send and we'll schedule your demo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi TW8.tech! I'm interested in Infinity School Manager.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.8)] transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Lightbox */}
      {lightboxImage && <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />}
    </div>
  )
}
