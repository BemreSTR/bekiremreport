import { Link } from 'react-router-dom'

const Home = () => (
  <main>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Ürün Odaklı Yazılım Geliştirici</p>
          <h1>Merhaba, ben Bekir Emre Sarıpınar.</h1>
          <p>
            Web, mobil ve bulut tabanlı deneyimleri tasarlayan ve hayata geçiren İstanbul merkezli bir yazılım
            geliştiricisiyim. Kullanıcı deneyimi, performans ve erişilebilirlik benim için vazgeçilmez.
          </p>
          <div className="cta-group">
            <Link className="btn primary" to="/projects">
              Projelerime Bak
            </Link>
            <Link className="btn ghost" to="/contact">
              Benimle Çalış
            </Link>
          </div>
          <div className="quick-stats">
            <div>
              <h3>Modern Stack</h3>
              <p>React 19 &amp; Vite 7</p>
            </div>
            <div>
              <h3>UI/UX</h3>
              <p>shadcn/ui &amp; Tailwind</p>
            </div>
            <div>
              <h3>Backend</h3>
              <p>Supabase Auth &amp; DB</p>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <span className="hero-card__label">Team Lead</span>
            <h3>SafePass: Öğrenci Taşımacılığı Platformu</h3>
            <p>NestJS, Next.js, Flutter, PostgreSQL</p>
          </div>
          <div className="hero-glow"></div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container section-header">
        <div>
          <p className="eyebrow">Öne Çıkan Yönler</p>
          <h2>Ürün keşfinden üretime kadar uçtan uca katkı sağlıyorum.</h2>
        </div>
        <p className="section-subtitle">
          Deneyimim, modern JavaScript ekosistemi, veri görselleştirme, bulut yerel mimariler ve kullanıcı merkezli
          iterasyonlar etrafında şekilleniyor.
        </p>
      </div>

      <div className="container feature-grid">
        <article className="feature-card">
          <h3>Tasarım Odaklı Yaklaşım</h3>
          <p>
            Tasarım ekipleriyle yakın çalışır, etkileşim prototiplerini kodla yeniden yorumlarım. Erişilebilir bileşen
            kütüphaneleri oluşturdum.
          </p>
        </article>
        <article className="feature-card">
          <h3>Ölçeklenebilir Backend</h3>
          <p>
            Serverless, konteyner ve event-driven mimarilerde yüksek trafikli API&apos;ler geliştirdim. SLA takibi ve
            gözlemlenebilirlik odaklıyım.
          </p>
        </article>
        <article className="feature-card">
          <h3>Takım Oyun Kurucusu</h3>
          <p>
            Mentorluk, kod incelemesi ve ürün stratejilerine teknik bakış getirme konusunda aktif rol alıyorum.
            Disiplinler arası iletişimi güçlendirmeyi seviyorum.
          </p>
        </article>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="eyebrow">Projeler</p>
            <h2>Son çalışmalardan seçki</h2>
          </div>
          <Link className="btn ghost" to="/projects">
            Tüm Projeler
          </Link>
        </div>

        <div className="project-preview-grid">
          <article className="project-card">
            <span className="project-card__tag">Go · 2026</span>
            <h3>ZenBlog</h3>
            <p>Markdown tabanlı içerik yönetimi sunan, Go ile geliştirilmiş yüksek performanslı ve sade bir blog motoru.</p>
          </article>
          <article className="project-card">
            <span className="project-card__tag">Eğitim · 2025</span>
            <h3>Din Akademi</h3>
            <p>İnteraktif testler ve video içeriklerle zenginleştirilmiş, Vite ve Firebase tabanlı modern eğitim platformu.</p>
          </article>
          <article className="project-card">
            <span className="project-card__tag">E-Ticaret · 2025</span>
            <h3>MyBaby</h3>
            <p>Bebek ürünleri için geliştirilmiş, MERN stack tabanlı modern ve fonksiyonel e-ticaret platformu.</p>
          </article>
          <article className="project-card">
            <span className="project-card__tag">AI · 2025</span>
            <h3>Fatura Takip Asistanı</h3>
            <p>Gemini AI 2.5 Flash ile fatura tarama ve Firebase bulut senkronizasyonu sunan akıllı finans asistanı.</p>
          </article>
          <article className="project-card">
            <span className="project-card__tag">SaaS · Team Lead</span>
            <h3>SafePass</h3>
            <p>6 kişilik bir ekiple geliştirdiğimiz, gerçek zamanlı öğrenci takip ve güvenlik yönetim sistemi.</p>
          </article>
          <article className="project-card">
            <span className="project-card__tag">PWA</span>
            <h3>Okuma Takip Uygulaması</h3>
            <p>React 19 ve Supabase ile güçlendirilmiş, günlük okumaları takip eden modern bir platform.</p>
          </article>
          <article className="project-card">
            <span className="project-card__tag">CLI Tool</span>
            <h3>netusage</h3>
            <p>macOS için geliştirilmiş, SQLite tabanlı hafif bir ağ trafik takip ve raporlama aracı.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="eyebrow">Beceriler</p>
            <h2>Güvendiğim ve sıkça kullandığım teknolojiler</h2>
          </div>
        </div>
        <div className="skill-grid">
          <article className="skill-card">
            <h3>Frontend</h3>
            <ul>
              <li>React 19 &amp; Vite 7</li>
              <li>shadcn/ui (Radix)</li>
              <li>Tailwind CSS</li>
            </ul>
          </article>
          <article className="skill-card">
            <h3>Backend &amp; Auth</h3>
            <ul>
              <li>Supabase Auth</li>
              <li>PostgreSQL (Supabase)</li>
              <li>Realtime Database</li>
            </ul>
          </article>
          <article className="skill-card">
            <h3>Diğer</h3>
            <ul>
              <li>PWA (vite-plugin-pwa)</li>
              <li>Lucide React Icons</li>
              <li>Git &amp; GitHub</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  </main>
)

export default Home
