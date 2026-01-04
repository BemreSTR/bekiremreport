const Projects = () => (
  <main>
    <section className="page-hero">
      <div className="container narrow">
        <p className="eyebrow">Projeler</p>
        <h1>Ürün stratejisinden teknik mimariye uzanan çalışmalar.</h1>
        <p className="lead">
          Kullanıcı hedeflerini veriyle doğrulayan, performans ve erişilebilirlik standartlarını gözeten platformlar geliştiriyorum.
        </p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="project-list">
          <article className="project-detail">
            <div className="project-detail__header">
              <span className="project-detail__tag">Backend · Go · 2026</span>
              <h2>ZenBlog: Performans Odaklı Blog Motoru</h2>
            </div>
            <p>
              Go dili ile geliştirilmiş, hız ve sadeliği ön planda tutan modern bir blog motorudur. İçerikleri Markdown
              dosyalarından okuyarak dinamik temalar ve statik varlıklarla birlikte yüksek performanslı bir web sitesi
              olarak sunar. DigitalOcean Droplet üzerinde kendi VPS sunucumda host edilmektedir.
            </p>
            <div className="project-detail__substack">
              <strong>Backend &amp; Deployment:</strong> Go (Golang), HTML Templates, DigitalOcean VPS
              <br />
              <strong>Frontend &amp; Content:</strong> JavaScript, CSS, Markdown
            </div>
            <ul className="project-detail__stack">
              <li>Go</li>
              <li>Markdown</li>
              <li>DigitalOcean</li>
              <li>VPS</li>
              <li>VPS Management</li>
            </ul>
          </article>

          <article className="project-detail">
            <div className="project-detail__header">
              <span className="project-detail__tag">Eğitim · EdTech · 2025</span>
              <h2>Din Akademi: İnteraktif Eğitim Platformu</h2>
            </div>
            <p>
              5-8. sınıf öğrencileri için geliştirilmiş, Din Kültürü ve Ahlak Bilgisi dersi içeriklerini modern bir arayüzle sunan eğitim
              platformu. YouTube entegrasyonu, Kahoot testleri ve Wordwall aktiviteleri ile ders çalışmayı eğlenceli hale getirir.
              Firebase tabanlı admin paneli sayesinde içerik yönetimi, sürükle-bırak sıralama ve anlık güncelleme imkanı sunar.
            </p>
            <div className="project-detail__substack">
              <strong>Frontend:</strong> Vite, TypeScript, Vanilla CSS, SortableJS
              <br />
              <strong>Backend &amp; Cloud:</strong> Firebase (Firestore, Auth, Storage), GitHub Actions (CI/CD)
            </div>
            <ul className="project-detail__stack">
              <li>Vite</li>
              <li>TypeScript</li>
              <li>Firebase</li>
              <li>EdTech</li>
              <li>Responsive Design</li>
              <li>dinakademi.com</li>
            </ul>
          </article>

          <article className="project-detail">
            <div className="project-detail__header">
              <span className="project-detail__tag">E-Ticaret · 2025</span>
              <h2>MyBaby: Bebek Ürünleri E-Ticaret Platformu</h2>
            </div>
            <p>
              Bebek ürünleri sektörü için tasarlanmış, modern ve kullanıcı dostu bir e-ticaret platformu. Ürün listeleme,
              gelişmiş filtreleme, sepet yönetimi ve misafir sipariş sistemi gibi temel e-ticaret fonksiyonlarını barındırır.
              Performans odaklı MERN stack mimarisiyle tüm cihazlarda akıcı bir alışveriş deneyimi sunar.
            </p>
            <div className="project-detail__substack">
              <strong>Stack:</strong> React.js, Node.js, Express.js, MongoDB
              <br />
              <strong>Öne Çıkan:</strong> Sepet Sistemi, Dinamik Filtreleme, Responsive Design
            </div>
            <ul className="project-detail__stack">
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>E-Commerce</li>
            </ul>
          </article>

          <article className="project-detail">
            <div className="project-detail__header">
              <span className="project-detail__tag">AI · Finans · 2025</span>
              <h2> Fatura Takip Asistanı</h2>
            </div>
            <p>
              Modern web tabanlı fatura takip uygulaması. Google Gemini 2.5 Flash AI desteği ile fatura fotoğraflarından otomatik veri çekme
              ve Firebase ile gerçek zamanlı bulut senkronizasyonu sağlar. Harcama analizleri, kategori bazlı grafikler ve çoklu kullanıcı
              desteği ile kişisel finans yönetimini kolaylaştırır.
            </p>
            <div className="project-detail__substack">
              <strong>Frontend:</strong> React 19, TypeScript, Vite 6, Tailwind CSS, Recharts
              <br />
              <strong>Backend &amp; AI:</strong> Firebase (Auth, Firestore), Google Gemini 2.5 Flash
            </div>
            <ul className="project-detail__stack">
              <li>React 19</li>
              <li>TypeScript</li>
              <li>Gemini AI</li>
              <li>Firebase</li>
              <li>Tailwind CSS</li>
              <li>GitHub Pages</li>
            </ul>
          </article>

          <article className="project-detail">
            <div className="project-detail__header">
              <span className="project-detail__tag">SaaS · Team Lead · 2024</span>
              <h2>SafePass: Öğrenci Taşımacılığı Yönetim Platformu</h2>
            </div>
            <p>
              6 kişilik bir ekibe liderlik ederek geliştirdiğimiz SafePass, öğrenci güvenliğini merkeze alan çok katmanlı bir yönetim
              platformudur. Gerçek zamanlı GPS takibi, rule-based acil durum yönetimi ve veli-şoför-okul arası kesintisiz iletişim sağlar.
              Role-based access control (RBAC), anlık bildirimler ve PII maskeleme destekli raporlama sistemlerini içerir.
            </p>
            <div className="project-detail__substack">
              <strong>Backend:</strong> NestJS, TypeORM, PostgreSQL, Firebase Auth, Socket.io
              <br />
              <strong>Web &amp; Mobile:</strong> Next.js 16, Tailwind CSS, Flutter, Google Maps
            </div>
            <ul className="project-detail__stack">
              <li>NestJS</li>
              <li>Next.js</li>
              <li>Flutter</li>
              <li>PostgreSQL</li>
              <li>Firebase</li>
              <li>DigitalOcean</li>
            </ul>
          </article>

          <article className="project-detail">
            <div className="project-detail__header">
              <span className="project-detail__tag">PWA · 2024</span>
              <h2>Okuma Takip Uygulaması</h2>
            </div>
            <p>
              Günlük kitap okuma alışkanlıklarını dijital ortamda takip etmek için geliştirilmiş, mobil uyumlu bir web uygulaması. Okuma
              hedefleri belirleme, ilerleme takibi ve gerçek zamanlı senkronizasyon özelliklerine sahiptir.
            </p>
            <ul className="project-detail__stack">
              <li>React 19</li>
              <li>Vite 7</li>
              <li>shadcn/ui</li>
              <li>Supabase</li>
              <li>Tailwind CSS</li>
              <li>PWA</li>
            </ul>
          </article>

          <article className="project-detail">
            <div className="project-detail__header">
              <span className="project-detail__tag">Tool · macOS · 2025</span>
              <h2>netusage: macOS Network Usage Monitor</h2>
            </div>
            <p>
              macOS sistemleri için geliştirilmiş, hafif ve güçlü bir komut satırı aracıdır. WiFi veri kullanımını anlık
              olarak izler, SQLite veritabanında saklar ve saatlik, günlük veya özel zaman aralıklarında detaylı raporlar
              sunar. Counter reset durumlarına karşı dirençli mimarisi ile doğru veri takibi sağlar.
            </p>
            <ul className="project-detail__stack">
              <li>Python 3.8+</li>
              <li>SQLite</li>
              <li>macOS System Metrics</li>
              <li>CLI</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  </main>
)

export default Projects
