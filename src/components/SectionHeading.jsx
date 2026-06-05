export default function SectionHeading({ label, title, description, center = true }) {
  return (
    <div className={`reveal ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>
      )}
    </div>
  )
}
