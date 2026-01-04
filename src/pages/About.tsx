const About = () => (
  <main>
    <section className="page-hero">
      <div className="container narrow">
        <p className="eyebrow">Hakkımda</p>
        <h1>Ürün ekosistemine teknik vizyon katan bir geliştirici.</h1>
        <p className="lead">
          Tasarım odaklı ürün geliştirmeye gönül verdim. Yazılım mimarisi ile kullanıcı deneyimini aynı masada
          buluşturmayı seviyorum.
        </p>
      </div>
    </section>

    <section className="section">
      <div className="container split">
        <div className="panel">
          <h2>Nasıl başladım?</h2>
          <p>
            Küçük yaşlarda elektronik kitlerle uğraşırken hızla web geliştirmeye yöneldim. Lise yıllarımda
            mahallemizin spor kulübü için basit bir CMS hazırladığımda ilk kez gerçek kullanıcılarla buluşan bir ürün
            koydum ortaya.
          </p>
          <p>
            Üniversitede bilgisayar mühendisliği okurken, sosyal girişimler ve hackathon&apos;larda deneysel projeler
            geliştirdim. Bu süreç beni kullanıcı araştırması ve veri odaklı karar alma konusunda derinlemesine
            düşünmeye itti.
          </p>
        </div>
        <div className="panel">
          <h2>Bugün ne yapıyorum?</h2>
          <p>
            Ürün takımlarıyla birlikte yeni iş alanlarını keşfediyor, fikirden prototipe, oradan da ölçeklenebilir
            platformlara uzanan süreçleri yönetiyorum. Start-up&apos;lar ve kurumsal ekipler için hibrit çalışma
            modelleri kuruyorum.
          </p>
          <p>
            Teknik olarak frontend mimarileri, modüler monorepo düzenleri ve bulut üzerinde sıfırdan kurulan
            altyapılarla ilgileniyorum. Sürekli ölçümleyerek iterasyon yapmayı önceliklendiriyorum.
          </p>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="eyebrow">Rastgele Gerçekler</p>
            <h2>Biraz da vitrin dışına bakalım</h2>
          </div>
        </div>
        <div className="fact-grid">
          <article className="fact-card">
            <h3>Analog meraklısı</h3>
            <p>Hafta sonları mekanik klavyeler ve analog synthesizer&apos;larla uğraşıp kişisel projelerime ses tasarımı ekliyorum.</p>
          </article>
          <article className="fact-card">
            <h3>Harita koleksiyoncusu</h3>
            <p>Veriyi görselleştirmenin en iyi yolu farklı projeksiyonlar keşfetmek olduğuna inanırım; 40&apos;ın üzerinde fiziksel haritam var.</p>
          </article>
          <article className="fact-card">
            <h3>Kahve demleme</h3>
            <p>Ekosistemimdeki her sprint, V60 ile başlar. Demlemenin kimyası, yazılım süreçlerine bakışımı bile etkiliyor.</p>
          </article>
          <article className="fact-card">
            <h3>Müzik senkronizasyonu</h3>
            <p>Kısa filmlere elektronik müzik besteleyip dağıtımını üstleniyorum; müziğin ritmi, sprint planlarına bakış açımı şekillendiriyor.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container timeline">
        <div className="timeline-item">
          <span className="timeline-year">2024</span>
          <h3>Ürün Operasyon Platformu</h3>
          <p>Uluslararası ölçekte çalışan bir SaaS ürününün ürün operasyonlarını yeniden tasarlayan çekirdek ekipte teknik liderlik yaptım.</p>
        </div>
        <div className="timeline-item">
          <span className="timeline-year">2022</span>
          <h3>Bulut Geçişi Programı</h3>
          <p>Kritik finansal servisleri Kubernetes tabanlı altyapıya taşıyarak gecikmeyi %34 azalttım, gözlemlenebilirliği ciddi ölçüde geliştirdim.</p>
        </div>
        <div className="timeline-item">
          <span className="timeline-year">2020</span>
          <h3>Design System Evrimi</h3>
          <p>Farklı ürün gruplarında kullanılan React tabanlı bileşen kütüphanesini yeniden inşa ederek teslim hızını iki katına çıkardım.</p>
        </div>
        <div className="timeline-item">
          <span className="timeline-year">2017</span>
          <h3>İlk profesyonel deneyim</h3>
          <p>IoT tabanlı akıllı şehir projeleri geliştiren bir firmada tam yığın geliştirici olarak çalışmaya başladım.</p>
        </div>
      </div>
    </section>
  </main>
)

export default About
