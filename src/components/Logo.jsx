// Reusable TW8.tech brand mark.
// Infinity symbol with chrome-metallic gradient + blue neon glow.
// `uid` keeps SVG gradient/filter IDs unique across multiple instances.

export function LogoMark({ className = 'h-9 w-9', uid = 'mark', glow = true, animated = true }) {
  const g = (name) => `${uid}-${name}`
  return (
    <svg
      viewBox="0 0 100 56"
      className={className}
      role="img"
      aria-label="TW8.tech infinity logo"
    >
      <defs>
        {/* Chrome metallic */}
        <linearGradient id={g('chrome')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8fbff" />
          <stop offset="28%" stopColor="#cfe0f5" />
          <stop offset="50%" stopColor="#8aa6c8" />
          <stop offset="52%" stopColor="#5b7aa0" />
          <stop offset="72%" stopColor="#dfeaf8" />
          <stop offset="100%" stopColor="#9fb6d4" />
        </linearGradient>
        {/* Blue neon edge */}
        <linearGradient id={g('neon')} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        {glow && (
          <filter id={g('glow')} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>

      {/* Neon under-glow stroke */}
      <path
        d="M50,28 C40,11 18,11 18,28 C18,45 40,45 50,28 C60,11 82,11 82,28 C82,45 60,45 50,28 Z"
        fill="none"
        stroke={`url(#${g('neon')})`}
        strokeWidth="11"
        strokeLinecap="round"
        opacity="0.55"
        filter={glow ? `url(#${g('glow')})` : undefined}
      />
      {/* Chrome metallic infinity */}
      <path
        d="M50,28 C40,11 18,11 18,28 C18,45 40,45 50,28 C60,11 82,11 82,28 C82,45 60,45 50,28 Z"
        fill="none"
        stroke={`url(#${g('chrome')})`}
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* Travelling neon spark */}
      {animated && (
        <circle r="2.4" fill="#bfdbfe">
          <animateMotion
            dur="3.2s"
            repeatCount="indefinite"
            path="M50,28 C40,11 18,11 18,28 C18,45 40,45 50,28 C60,11 82,11 82,28 C82,45 60,45 50,28 Z"
          />
          <animate attributeName="opacity" values="0.2;1;0.2" dur="3.2s" repeatCount="indefinite" />
        </circle>
      )}
    </svg>
  )
}

// Crisp SVG lockup: animated infinity mark + wordmark text.
// Used in the navbar where sharpness at small sizes matters.
export function LogoLockup({ className = '', markClassName = 'h-9 w-12', uid = 'lockup', glow = true, animated = true }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} uid={uid} glow={glow} animated={animated} />
      <span className="font-display text-lg font-extrabold tracking-tight text-white">
        TW8<span className="text-brand-400">.tech</span>
      </span>
    </span>
  )
}

export default function Logo({ className = '', imgClassName = 'h-12 w-auto' }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src="/tw8-logo.png"
        alt="TW8.tech — Building Digital Solutions That Drive Results"
        className={`${imgClassName} select-none object-contain`}
        loading="eager"
        decoding="async"
      />
    </span>
  )
}
