export default function PageIntro({ title, lead, children }) {
  return (
    <section className="page-intro" aria-labelledby="page-title">
      <h1 id="page-title" className="page-title">
        {title}
      </h1>
      {lead ? <p className="page-lead">{lead}</p> : null}
      {children}
    </section>
  )
}
