/** Простые декоративные иконки (inline SVG), без внешних библиотек */

export function IconLeaf({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M24 4C14 14 8 24 8 34c0 6 4 10 10 10 8 0 14-8 18-22 2-8 2-16-2-22-4-6-6-6-10-18z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M24 8c-6 8-10 16-10 26 0 4 3 6 6 6 5 0 9-6 12-16 2-6 2-12 0-16-2-4-4-6-8-16z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}

export function IconSun({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M24 6v4M24 38v4M6 24h4M38 24h4M11 11l3 3M34 34l3 3M34 11l-3 3M11 34l3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconDroplet({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M24 8c-8 12-14 20-14 28a14 14 0 0 0 28 0c0-8-6-16-14-28z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.12"
      />
    </svg>
  )
}

export function IconRecycle({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18 12l-6 10h8l-2 8 10-14-10-2v8l-6-10zm12 24l6-10h-8l2-8-10 14 10 2v-8l6 10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function IconBee({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="24" cy="26" rx="10" ry="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 22h20M16 26h16M18 30h12" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="24" cy="14" rx="4" ry="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 12c-4-2-6 0-6 4M28 12c4-2 6 0 6 4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function IconFactory({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 40V20l8 6V20l8 6v-8l8 6V40H8z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path d="M14 40V32h4v8M26 40V28h4v12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
