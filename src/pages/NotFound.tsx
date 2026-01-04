import { Link } from 'react-router-dom'

const NotFound = () => (
  <main>
    <section className="page-hero">
      <div className="container narrow">
        <p className="eyebrow">404</p>
        <h1>Bu sayfa bulunamadı</h1>
        <p className="lead">Link hatalı olabilir ya da içerik taşınmış olabilir.</p>
        <Link className="btn ghost" to="/">
          Ana Sayfa&apos;ya Dön
        </Link>
      </div>
    </section>
  </main>
)

export default NotFound
