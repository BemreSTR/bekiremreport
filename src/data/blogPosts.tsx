import type { ReactNode } from 'react'

export type BlogPost = {
  slug: string
  title: string
  date: string
  category: string
  readTime: string
  excerpt: string
  content?: ReactNode
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'modern-frontend-performans-optimizasyonu',
    title: 'Modern Frontend Mimarilerinde Performans Optimizasyonu',
    date: '15 Mart 2024',
    category: 'Teknik',
    readTime: '8 dakika okuma',
    excerpt:
      'Büyük ölçekli uygulamalarda frontend performansını nasıl optimize edebiliriz? React, Vue ve modern build araçlarıyla performans stratejileri üzerine derinlemesine bir bakış.',
    content: (
      <>
        <p>
          Modern web uygulamaları geliştirirken performans, genellikle göz ardı edilen ancak kritik öneme sahip bir
          faktördür. Kullanıcı deneyimi doğrudan performans metriklerine bağlıdır ve bu da iş sonuçlarını etkiler. Bu
          yazıda, büyük ölçekli uygulamalarda frontend performansını nasıl optimize edebileceğimizi derinlemesine
          inceleyeceğiz.
        </p>

        <h2>Performansın Önemi</h2>
        <p>
          Google&apos;ın araştırmalarına göre, sayfa yükleme süresi 1 saniyeden fazla olduğunda bounce rate (sayfayı
          terk etme oranı) %32 artıyor. Bu, performans optimizasyonunun sadece teknik bir gereklilik değil, aynı zamanda
          iş stratejisi olduğunu gösteriyor.
        </p>

        <blockquote>
          &quot;Performans bir özellik değildir, bir temel gerekliliktir. Kullanıcılar hızlı ve duyarlı uygulamalar
          bekler.&quot;
        </blockquote>

        <h2>Core Web Vitals ve Metrikler</h2>
        <p>Google, kullanıcı deneyimini ölçmek için üç temel metrik tanımlamıştır:</p>

        <h3>1. Largest Contentful Paint (LCP)</h3>
        <p>
          Sayfanın ana içeriğinin ne kadar sürede yüklendiğini ölçer. İdeal değer 2.5 saniyenin altındadır. LCP&apos;yi
          optimize etmek için:
        </p>

        <ul>
          <li>Resimleri uygun formatta (WebP, AVIF) ve boyutta sıkıştırın</li>
          <li>Server-side rendering (SSR) veya static site generation (SSG) kullanın</li>
          <li>Critical CSS&apos;i inline olarak yükleyin</li>
          <li>JavaScript&apos;i lazy loading ile yükleyin</li>
        </ul>

        <h3>2. First Input Delay (FID)</h3>
        <p>
          Kullanıcının sayfa ile ilk etkileşiminden browser&apos;ın yanıt verene kadar geçen süredir. İdeal değer
          100ms&apos;nin altındadır. FID için:
        </p>

        <ul>
          <li>Uzun görevleri (long tasks) bölün</li>
          <li>JavaScript&apos;i non-blocking şekilde yükleyin</li>
          <li>Web Workers kullanın</li>
          <li>Third-party script&apos;leri optimize edin</li>
        </ul>

        <h3>3. Cumulative Layout Shift (CLS)</h3>
        <p>
          Sayfa yüklenirken beklenmedik görsel değişiklikleri ölçer. İdeal değer 0.1&apos;in altındadır. CLS için:
        </p>

        <ul>
          <li>Resimler ve reklamlar için boyut belirtin</li>
          <li>Font&apos;ları yüklerken alan ayırın</li>
          <li>Dinamik içerikleri dikkatli ekleyin</li>
        </ul>

        <h2>React Performans Optimizasyonu</h2>
        <p>React uygulamalarında performans için birkaç kritik strateji vardır:</p>

        <h3>Component Optimizasyonu</h3>
        <pre>
          <code>{`// Memoization ile gereksiz re-render'ları önleyin
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{data.map(item => <Item key={item.id} item={item} />)}</div>;
});

// Hesaplama cache'leme
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(props.data);
}, [props.data]);

// Event handler'ları stabilize etme
const handleClick = useCallback(() => {
  // handler logic
}, [dependency]);`}</code>
        </pre>

        <h3>Bundle Optimizasyonu</h3>
        <p>Modern build araçları ile bundle boyutunu optimize edebilirsiniz:</p>

        <ul>
          <li>
            <strong>Code Splitting:</strong> Uygulamayı parçalara bölerek sadece ihtiyaç duyulan kodu yükleyin
          </li>
          <li>
            <strong>Tree Shaking:</strong> Kullanılmayan kodu bundle&apos;dan çıkarın
          </li>
          <li>
            <strong>Dynamic Imports:</strong> Component&apos;leri lazy loading ile yükleyin
          </li>
        </ul>

        <pre>
          <code>{`// Dynamic import örneği
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`}</code>
        </pre>

        <h2>Vue.js Performans Stratejileri</h2>
        <p>Vue.js uygulamalarında performans için farklı yaklaşımlar gereklidir:</p>

        <h3>Reactivity Optimizasyonu</h3>
        <ul>
          <li>Büyük veri setleri için <code>shallowRef</code> kullanın</li>
          <li>Gereksiz reactivity&apos;den kaçının</li>
          <li>
            <code>v-once</code> directive ile static content&apos;i optimize edin
          </li>
        </ul>

        <h3>Async Component&apos;ler</h3>
        <pre>
          <code>{`// Vue 3'te async component
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() =>
  import('./components/AsyncComponent.vue')
)`}</code>
        </pre>

        <h2>Modern Build Araçları</h2>
        <p>
          Vite, Webpack, ve Parcel gibi modern build araçları performans optimizasyonu için önemli özellikler sunar:
        </p>

        <h3>Vite Avantajları</h3>
        <ul>
          <li>
            <strong>Hızlı Development:</strong> Native ES modules ile anında hot reload
          </li>
          <li>
            <strong>Optimized Production Build:</strong> Rollup ile otomatik optimizasyon
          </li>
          <li>
            <strong>CSS Code Splitting:</strong> Otomatik CSS ayrıştırma
          </li>
        </ul>

        <h3>Webpack Optimizasyonları</h3>
        <ul>
          <li>
            <strong>SplitChunksPlugin:</strong> Paylaşılan kodları ayrı chunk&apos;lara bölme
          </li>
          <li>
            <strong>TerserPlugin:</strong> JavaScript minifikasyonu
          </li>
          <li>
            <strong>CSSMinimizerPlugin:</strong> CSS optimizasyonu
          </li>
        </ul>

        <h2>Monitörleme ve Test</h2>
        <p>Performans optimizasyonu sürekli bir süreçtir. Aşağıdaki araçlarla performansı monitör edebilirsiniz:</p>

        <ul>
          <li>
            <strong>Lighthouse:</strong> Google&apos;ın performans audit aracı
          </li>
          <li>
            <strong>WebPageTest:</strong> Detaylı performans analizi
          </li>
          <li>
            <strong>Chrome DevTools:</strong> Performance ve Network panelleri
          </li>
          <li>
            <strong>React DevTools Profiler:</strong> Component performans analizi
          </li>
        </ul>

        <h2>Sonuç</h2>
        <p>
          Modern frontend performans optimizasyonu, çok katmanlı bir yaklaşımdır. Core Web Vitals&apos;tan başlayarak,
          framework spesifik optimizasyonlara, build araçları konfigürasyonundan monitörleme araçlarına kadar geniş bir
          yelpazede strateji gerektirir.
        </p>

        <p>
          Unutmayın, performans optimizasyonu bir defalık bir görev değil, sürekli iyileştirme gereken bir süreçtir.
          Kullanıcı geri bildirimlerini dinleyin, metrikleri takip edin ve yeni optimizasyon tekniklerini öğrenmeye
          devam edin.
        </p>
      </>
    ),
  },
  {
    slug: 'veri-odakli-karar-alma',
    title: 'Ürün Geliştirmede Veri Odaklı Karar Alma',
    date: '28 Şubat 2024',
    category: 'Ürün',
    readTime: '6 dakika okuma',
    excerpt:
      'Kullanıcı davranışlarını analiz ederek ürün stratejilerini nasıl şekillendirebiliriz? A/B testleri, metrikler ve kullanıcı geri bildirimlerinin etkili kullanımı.',
    content: (
      <>
        <p>
          Ürün geliştirme süreçlerinde en büyük zorluklardan biri, doğru kararları doğru zamanda almaktır. Geleneksel
          yaklaşımlarda kararlar genellikle hiyerarşi, deneyim veya içgörülere dayalı olarak alınır. Ancak modern ürün
          yönetiminde veri odaklı karar alma, başarıyı garantilemenin en etkili yoludur.
        </p>

        <h2>Veri Odaklılık Neden Önemli?</h2>
        <p>Veri odaklı karar alma, ürün geliştirme sürecini bir sanattan bilime dönüştürür. Bu yaklaşımın sağladığı avantajlar:</p>

        <ul>
          <li>
            <strong>Objektiflik:</strong> Kişisel görüşlerin yerine gerçek verilere dayalı kararlar
          </li>
          <li>
            <strong>Hız:</strong> Doğru verilerle daha hızlı ve güvenilir kararlar
          </li>
          <li>
            <strong>Ölçülebilirlik:</strong> Her kararın sonuçlarını ölçebilme imkanı
          </li>
          <li>
            <strong>Risk Azaltma:</strong> Verilerle desteklenmiş kararlar riski minimize eder
          </li>
        </ul>

        <blockquote>
          &quot;Veri, yeni petrol değildir. Veri, yeni topraktır. Onu işleyen, ondan değer üreten kazanır.&quot;
        </blockquote>

        <h2>Temel Veri Kaynakları</h2>
        <p>Ürün kararları için kullanabileceğimiz çeşitli veri kaynakları vardır:</p>

        <h3>1. Kullanıcı Davranış Verileri</h3>
        <p>Kullanıcıların ürününüzle nasıl etkileşime girdiğini gösteren veriler:</p>

        <ul>
          <li>
            <strong>Kullanım metrikleri:</strong> DAU/MAU, session süresi, bounce rate
          </li>
          <li>
            <strong>Funnel analizi:</strong> Kullanıcıların dönüşüm hunisindeki davranışları
          </li>
          <li>
            <strong>Feature adoption:</strong> Yeni özelliklerin benimsenme oranları
          </li>
          <li>
            <strong>User journey:</strong> Kullanıcıların ürün içindeki yolculukları
          </li>
        </ul>

        <h3>2. Kullanıcı Geri Bildirimleri</h3>
        <p>Doğrudan kullanıcıların ürününüz hakkında söyledikleri:</p>

        <ul>
          <li>
            <strong>NPS anketleri:</strong> Net Promoter Score ile memnuniyet ölçümü
          </li>
          <li>
            <strong>CSAT skorları:</strong> Customer Satisfaction ile hizmet kalitesi
          </li>
          <li>
            <strong>Müşteri destek talepleri:</strong> Kullanıcıların yaşadığı sorunlar
          </li>
          <li>
            <strong>Sosyal medya ve review&apos;lar:</strong> Kamuoyu görüşleri
          </li>
        </ul>

        <h3>3. İş Metrikleri</h3>
        <p>Ürünün iş performansını etkileyen veriler:</p>

        <ul>
          <li>
            <strong>Revenue:</strong> Gelir artışı veya azalışı
          </li>
          <li>
            <strong>Retention:</strong> Müşteri tutundurma oranları
          </li>
          <li>
            <strong>LTV:</strong> Customer Lifetime Value
          </li>
          <li>
            <strong>CAC:</strong> Customer Acquisition Cost
          </li>
        </ul>

        <h2>A/B Testleri ile Karar Alma</h2>
        <p>A/B testleri, veri odaklı karar almanın en güçlü araçlarından biridir:</p>

        <h3>Test Tasarlama İlkeleri</h3>
        <ul>
          <li>
            <strong>Hipotez belirleme:</strong> Test edilecek net bir hipotez oluşturun
          </li>
          <li>
            <strong>Örneklem büyüklüğü:</strong> İstatistiksel anlamlılık için yeterli kullanıcı
          </li>
          <li>
            <strong>Test süresi:</strong> Mevsimsel etkileri göz önünde bulundurun
          </li>
          <li>
            <strong>Tek değişken:</strong> Aynı anda sadece bir şeyi test edin
          </li>
        </ul>

        <h3>Yaygın A/B Testleri</h3>
        <ul>
          <li>
            <strong>UI/UX değişiklikleri:</strong> Buton renkleri, layout, metinler
          </li>
          <li>
            <strong>Pricing stratejileri:</strong> Fiylandırma modelleri
          </li>
          <li>
            <strong>Onboarding süreçleri:</strong> Kayıt ve ilk kullanım deneyimi
          </li>
          <li>
            <strong>Feature lansmanları:</strong> Yeni özelliklerin etkisi
          </li>
        </ul>

        <h2>Veri Toplama ve Analiz Araçları</h2>
        <p>Etkili bir veri odaklı yaklaşım için doğru araçlara ihtiyacınız var:</p>

        <h3>Analytics Platformları</h3>
        <ul>
          <li>
            <strong>Google Analytics:</strong> Temel web analitikleri
          </li>
          <li>
            <strong>Mixpanel:</strong> Event-based kullanıcı analizi
          </li>
          <li>
            <strong>Amplitude:</strong> Product analytics ve funnel analizi
          </li>
          <li>
            <strong>Hotjar:</strong> Heatmaps ve session recordings
          </li>
        </ul>

        <h3>Veri Görselleştirme</h3>
        <ul>
          <li>
            <strong>Tableau:</strong> İş zekası ve veri görselleştirme
          </li>
          <li>
            <strong>Looker:</strong> Business intelligence platformu
          </li>
          <li>
            <strong>Power BI:</strong> Microsoft&apos;un veri analitik aracı
          </li>
          <li>
            <strong>Metabase:</strong> Open source BI aracı
          </li>
        </ul>

        <h2>Veri Odaklı Kültür Oluşturma</h2>
        <p>Veri odaklı olmak sadece araçlar kullanmak değil, bir kültür oluşturmaktır:</p>

        <h3>Ekip Düzeyinde</h3>
        <ul>
          <li>
            <strong>Eğitim:</strong> Ekibe veri okuryazarlığı eğitimi verin
          </li>
          <li>
            <strong>Şeffaflık:</strong> Verileri ve metrikleri herkesle paylaşın
          </li>
          <li>
            <strong>Teşvik:</strong> Veriye dayalı kararları ödüllendirin
          </li>
          <li>
            <strong>Araçlar:</strong> Doğru araçlara yatırım yapın
          </li>
        </ul>

        <h3>Organizasyon Düzeyinde</h3>
        <ul>
          <li>
            <strong>Liderlik:</strong> Yönetimin veri odaklı yaklaşımı benimsemesi
          </li>
          <li>
            <strong>Altyapı:</strong> Veri toplama ve analiz altyapısı kurulumu
          </li>
          <li>
            <strong>Süreçler:</strong> Veriye dayalı karar alma süreçleri
          </li>
          <li>
            <strong>Ölçümleme:</strong> Başarının veri ile ölçülmesi
          </li>
        </ul>

        <h2>Yaygın Tuzaklar ve Çözümleri</h2>
        <p>Veri odaklı yaklaşırken dikkat edilmesi gereken noktalar:</p>

        <h3>1. Veri Körü Olmak</h3>
        <p>
          Sadece verilere bakıp içgörüleri ve kullanıcı geri bildirimlerini göz ardı etmek. <strong>Çözüm:</strong>{' '}
          Verileri niceliksel ve niteliksel geri bildirimlerle dengeleyin.
        </p>

        <h3>2. Yanlış Metriklere Odaklanmak</h3>
        <p>
          Vanity metrics (gösterişsel metrikler) yerine gerçek başarı metriklerine odaklanın. <strong>Çözüm:</strong>{' '}
          North Star metriğinizi belirleyin ve tüm kararları buna göre alın.
        </p>

        <h3>3. Veri Kalitesi Sorunları</h3>
        <p>
          Yanlış veya eksik verilerle karar almak. <strong>Çözüm:</strong> Veri toplama süreçlerinizi düzenli olarak
          denetleyin ve doğrulayın.
        </p>

        <h2>Sonuç</h2>
        <p>
          Veri odaklı karar alma, ürün geliştirmeyi bir sanattan bilime dönüştüren güçlü bir yaklaşımdır. Doğru
          verilerle, doğru araçlarla ve doğru kültürle, ürünlerinizin başarısını önemli ölçüde artırabilirsiniz.
        </p>

        <p>
          Unutmayın, veri bir araçtır, amaç değil. Nihai hedef, kullanıcılar için değer yaratmaktır. Veriler sadece bu
          yolda size rehberlik eder.
        </p>
      </>
    ),
  },
  {
    slug: 'uzaktan-calisma-kulturu',
    title: 'Uzaktan Çalışan Yazılım Takımlarında Etkili İletişim',
    date: '10 Şubat 2024',
    category: 'Kültür',
    readTime: '5 dakika okuma',
    excerpt:
      'Dağıtık takımlarda nasıl verimli çalışılır? Asenkron iletişim stratejileri, dokümantasyon kültürü ve takım dinamikleri üzerine deneyimlerim.',
  },
  {
    slug: 'microservice-observability',
    title: 'Microservice Mimarilerinde Observability',
    date: '25 Ocak 2024',
    category: 'Teknik',
    readTime: '10 dakika okuma',
    excerpt:
      'Dağıtık sistemlerde nasıl gözlemlenebilirlik sağlanır? Loglama, metrikler ve tracing konularında pratik çözümler ve araç önerileri.',
  },
  {
    slug: 'design-systemlerin-evrimi',
    title: "Design System'lerin Evrimi: Component'lerden Token'lara",
    date: '8 Ocak 2024',
    category: 'Tasarım',
    readTime: '7 dakika okuma',
    excerpt:
      "Modern design system'ler nasıl gelişti? Token-based design approach ve ölçeklenebilir tasarım sistemleri kurma stratejileri.",
  },
  {
    slug: 'teknik-borc-yonetimi',
    title: 'Teknik Borç Yönetimi: Ne Zaman Ödemeli, Ne Zaman Yatırım Yapmalı?',
    date: '20 Aralık 2023',
    category: 'Strateji',
    readTime: '9 dakika okuma',
    excerpt:
      'Teknik borç kavramını nasıl anlamalıyız? Stratejik karar alma, önceliklendirme ve uzun vadeli ürün sağlığı için teknik borç yönetimi.',
  },
]
