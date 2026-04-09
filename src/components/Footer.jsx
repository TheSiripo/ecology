import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-brand">
          <strong>ЭкоПуть</strong> — просветительский проект об экологии и
          повседневных шагах к меньшему воздействию на природу.
        </p>
        <p className="footer-meta">
          <Link to="/contacts">Источники и контакты</Link>
          <span className="footer-dot" aria-hidden="true">
            ·
          </span>
          <span>Учебный проект, {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  )
}
