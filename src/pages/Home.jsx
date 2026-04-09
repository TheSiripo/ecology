import { Link } from 'react-router-dom'
import { IconLeaf } from '../components/IconDecor'

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-visual" aria-hidden="true">
          <IconLeaf className="hero-icon" />
        </div>
        <div className="hero-text">
          <h1 id="hero-title" className="hero-title">
            ЭкоПуть
          </h1>
          <p className="hero-subtitle">
            Спокойный взгляд на экологические вызовы и на то, что каждый из нас
            может сделать без радикальных перемен в жизни.
          </p>
          <div className="hero-actions">
            <Link to="/problems" className="btn btn--primary">
              Узнать о проблемах
            </Link>
            <Link to="/tips" className="btn btn--ghost">
              Практические советы
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="blocks-title">
        <h2 id="blocks-title" className="section-title">
          Что внутри проекта
        </h2>
        <ul className="feature-grid">
          <li className="feature-card">
            <h3 className="feature-card-title">Проблемы</h3>
            <p>
              Климат, отходы, вода, биоразнообразие и загрязнение — кратко и по
              существу: что происходит и почему это важно.
            </p>
            <Link to="/problems" className="text-link">
              Перейти к разделу →
            </Link>
          </li>
          <li className="feature-card">
            <h3 className="feature-card-title">Советы</h3>
            <p>
              Чек-листы и идеи для дома, транспорта и потребления: маленькие
              шаги, которые реально выполнить.
            </p>
            <Link to="/tips" className="text-link">
              Смотреть советы →
            </Link>
          </li>
          <li className="feature-card">
            <h3 className="feature-card-title">О проекте</h3>
            <p>
              Цели сайта и принципы подачи материала: факты, без паники и без
              нравоучений.
            </p>
            <Link to="/about" className="text-link">
              Подробнее →
            </Link>
          </li>
        </ul>
      </section>

      <section className="section section--muted" aria-labelledby="cta-title">
        <div className="cta-block">
          <h2 id="cta-title" className="cta-title">
            Начните с одного привычного действия
          </h2>
          <p className="cta-text">
            Устойчивость складывается из повторяемых решений. Выберите одну
            привычку на месяц — например, меньше одноразовой упаковки или
            осознаннее относиться к поездкам.
          </p>
          <Link to="/tips" className="btn btn--primary">
            Открыть чек-листы
          </Link>
        </div>
      </section>
    </>
  )
}
