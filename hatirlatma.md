# Hosting / SEO Hatırlatma (İleriye Dönük)

Şu an site GitHub Pages üzerinde **SPA + HashRouter** (`/#/...`) olarak çalışıyor. Bu yaklaşım hızlı ve pratik olsa da, klasik SEO ve paylaşım önizlemeleri (OG/Twitter) için sınırlıdır.

## Neden ileride taşımayı düşünebiliriz?
- `#` sonrası kısım sunucuya gitmez; bazı botlar ve sosyal paylaşım servisleri sayfa bazlı meta/OG etiketlerini doğru okuyamaz.
- Gerçek anlamda “sayfa bazlı HTML” üretmek (SSG/SSR) daha profesyonel SEO sonuçları verir.

## Netlify’a geçerken hedef (önerilen)
1. **Clean URL**: `/#/tr/about` yerine `/tr/about` (HashRouter → BrowserRouter).
2. **SSR/SSG**: sayfaların HTML olarak üretilmesi (ör. Next.js/Astro veya mevcut React’te pre-render).
3. **SEO tamamlayıcıları**:
   - Page-level `title` + `description`
   - OpenGraph / Twitter meta’ları
   - `hreflang` (TR/EN)
   - `sitemap.xml` (blog postlar dahil)
   - `robots.txt`

## Hatırlatma: geçiş sonrası kontrol listesi
- Netlify build çıktılarını doğrula (`/tr`, `/en`, `/tr/blog/...`).
- Search Console’da site haritasını güncelle.
- 301 yönlendirmeleri planla (eski `/#/...` → yeni `/...`).
- OG önizleme testleri: LinkedIn Post Inspector, Twitter Card Validator alternatifleri.

