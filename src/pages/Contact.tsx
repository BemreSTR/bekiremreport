const Contact = () => (
  <main>
    <section className="page-hero">
      <div className="container narrow">
        <p className="eyebrow">İletişim</p>
        <h1>Birlikte neler inşa edebileceğimizi konuşalım.</h1>
        <p className="lead">
          Yeni fikirler, danışmanlık ve teknik keşif süreçleri için bana ulaşın. 24 saat içerisinde geri dönüş yapıyorum.
        </p>
      </div>
    </section>

    <section className="section">
      <div className="container contact-grid">
        <div className="contact-info">
          <h2>Hızlı Bağlantılar</h2>
          <ul>
            <li>
              <span>E-posta</span>
              <a href="mailto:bekiremrebusiness@gmail.com">bekiremrebusiness@gmail.com</a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href="https://www.linkedin.com/in/bekir-emre-sar%C4%B1p%C4%B1nar-316834175/" target="_blank" rel="noreferrer">
                linkedin.com/in/bekir-emre-sarıpınar
              </a>
            </li>
            <li>
              <span>GitHub</span>
              <a href="https://github.com/BemreSTR" target="_blank" rel="noreferrer">
                github.com/BemreSTR
              </a>
            </li>
            <li>
              <span>Konum</span>
              <p>Gebze, Kocaeli · Uzaktan çalışmaya açık</p>
            </li>
          </ul>
          <div className="contact-note">
            <h3>Takvim paylaşımı</h3>
            <p>
              İlk görüşme için 30 dakikalık ürün veya teknik keşif çağrısı planlayabiliriz. İhtiyacınızı paylaşmanız
              yeterli.
            </p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Mesaj Gönder</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Adınız</label>
              <input type="text" id="name" name="name" placeholder="Ad Soyad" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input type="email" id="email" name="email" placeholder="ornek@firma.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="topic">Konu</label>
              <select id="topic" name="topic">
                <option>Ürün keşfi</option>
                <option>Teknik danışmanlık</option>
                <option>Ekip mentoring</option>
                <option>Etkinlik ve konuşma</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesajınız</label>
              <textarea id="message" name="message" rows={5} placeholder="İhtiyacınızı kısaca anlatın"></textarea>
            </div>
            <button type="submit" className="btn primary">
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
)

export default Contact
