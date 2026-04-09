import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Главная', end: true },
  { to: '/about', label: 'О проекте' },
  { to: '/problems', label: 'Проблемы' },
  { to: '/tips', label: 'Советы' },
  { to: '/contacts', label: 'Контакты' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="logo" end onClick={() => setOpen(false)}>
          <span className="logo-mark" aria-hidden="true" />
          <span>ЭкоПуть</span>
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Меню</span>
          <span className={`nav-toggle-bars ${open ? 'is-open' : ''}`} />
        </button>

        <nav
          id="site-nav"
          className={`site-nav ${open ? 'is-open' : ''}`}
          aria-label="Основная навигация"
        >
          <ul className="site-nav-list">
            {navItems.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `nav-link${isActive ? ' nav-link--active' : ''}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
