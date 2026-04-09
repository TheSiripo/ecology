import PageIntro from '../components/PageIntro'

const sources = [
  {
    name: 'Межправительственная группа по изменению климата (IPCC)',
    url: 'https://www.ipcc.ch/',
    note: 'Оценки по климату, отчёты для политики и общества.',
  },
  {
    name: 'Программа ООН по окружающей среде (UNEP)',
    url: 'https://www.unep.org/',
    note: 'Обзоры по отходам, загрязнению, природе.',
  },
  {
    name: 'Всемирный фонд дикой природы (WWF)',
    url: 'https://www.worldwildlife.org/',
    note: 'Материалы о биоразнообразии и охраняемых территориях.',
  },
  {
    name: 'Our World in Data — Environment',
    url: 'https://ourworldindata.org/environment',
    note: 'Графики и данные по экологическим показателям.',
  },
]

export default function Contacts() {
  return (
    <article className="article-page">
      <PageIntro
        title="Контакты и источники"
        lead="Сайт носит учебный характер. Для углубления темы ориентируйтесь на первоисточники и региональные инструкции по переработке и качеству воды."
      />

      <section className="section" aria-labelledby="project-heading">
        <h2 id="project-heading" className="section-title">
          Обратная связь по проекту
        </h2>
        <div className="contact-card">
          <p>
            <strong>ЭкоПуть</strong> — демонстрационный проект курсовой работы по
            теме экологических проблем и путей их решения.
          </p>
          <p className="contact-placeholder">
            Шворобей Захар Вадимович | E-mail: 
            <code className="inline-code">isip_z.v.shvorobey@mpt.ru</code>
            Номер телефона:
            <code className="inline-code">+79099184460</code>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="sources-heading">
        <h2 id="sources-heading" className="section-title">
          Полезные источники
        </h2>
        <ul className="source-list">
          {sources.map(({ name, url, note }) => (
            <li key={url} className="source-item">
              <a
                href={url}
                className="source-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
              <p className="source-note">{note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section prose" aria-labelledby="disclaimer-heading">
        <h2 id="disclaimer-heading" className="section-title">
          Ограничение ответственности
        </h2>
        <p>
          Тексты на сайте обобщают общедоступные сведения и не заменяют
          официальные регламенты, медицинские рекомендации или отчёты
          уполномоченных органов в вашей стране или регионе. Ссылки ведут на
          внешние ресурсы; их содержание может меняться.
        </p>
      </section>
    </article>
  )
}
