# TR/EN Dil Desteği (Profesyonel Yaklaşım) – Uygulama Planı

## Hedef
Sitenin Türkçe (TR) ve İngilizce (EN) olmak üzere iki dilde çalışması; dilin URL üzerinden belirlenmesi (paylaşılabilir link, daha iyi SEO ve analiz).

Önerilen URL yapısı (HashRouter ile):
- `/#/tr/...`
- `/#/en/...`

> Not: Clean URL istenirse ileride `BrowserRouter` + hosting rewrite ile `/{lang}/...` yapısına geçilebilir.

---

## Mimari Kararlar
1) i18n kütüphanesi: `i18next` + `react-i18next`  
2) Dil kaynağı: URL parametresi (`:lang`) + fallback `localStorage` + fallback `navigator.language`  
3) Çeviri dosyaları: `src/locales/{tr,en}/common.json`, `src/locales/{tr,en}/about.json`, ...  
4) Blog içerikleri:
   - Kısa vadede: blog post içerikleri de i18n içinde tutulabilir (anahtar/JSON).
   - Daha profesyonel (orta vadede): Markdown/MDX + frontmatter + içeriklerin ayrı dosyalarda (TR/EN) yönetilmesi.

---

## Uygulama Adımları
### 1) Routing’i dile göre düzenle
- Route yapısı: `/:lang(tr|en)/*`
- Varsayılan yönlendirme: `/#/` → `/#/tr` (veya tarayıcı diline göre)

### 2) i18n altyapısını kur
- `src/i18n.ts` oluştur
- `main.tsx` içinde provider/init
- Lazy load (opsiyonel) ile çeviri dosyalarını parça parça yükle

### 3) Dil seçici (Language Switcher)
- Header içine TR/EN toggle (shadcn UI) ekle
- Seçim yapıldığında:
  - URL’deki `:lang` değişsin
  - Seçim `localStorage`’a yazılsın

### 4) Metinleri anahtarlara taşı
- UI metinleri `t("...")` ile çekilecek
- Sayfa başlıkları ve buton metinleri dahil

### 5) SEO/Meta yönetimi
- Dil bazlı `document.title`
- (Opsiyonel) sayfa bazlı meta description
- (İleride BrowserRouter’a geçilirse) `hreflang` alternatifleri

### 6) QA kontrol listesi
- TR ve EN tüm route’lar çalışıyor mu?
- Dil switcher doğru sayfada dili değiştiriyor mu?
- Blog filtre kategorileri iki dilde doğru mu?
- 404 sayfası iki dilde doğru mu?

---

## Çeviri Kapsamı (İkiye Bölünmüş)

### A) Ben Çevireceğim (Core UI + Site Yapısı)
**Header / Navigation**
- Site adı (değişmeyecek)
- Menü item’ları: Ana Sayfa, Hakkında, Projeler, Blog, İletişim
- Mobil menü (Sheet) metinleri (sr-only vb.)

**Footer**
- Gezinti (başlık + linkler)
- Bağlantılar (GitHub, LinkedIn, Email, CV/Resume)
- Uzmanlıklar (maddeler)
- Alt metinler: telif/şartlar/gizlilik (şu an placeholder)

**Sayfalar (genel UI)**
- `Home`: hero metinleri, CTA butonları, “Öne Çıkan Yönler”, “Projeler” section başlıkları
- `Contact`: form label/placeholder’lar, açıklamalar
- `Projects`: sayfa hero metni (projelerin açıklamaları içerik kısmı hariç)
- `NotFound`: 404 metinleri
- `Blog` sayfası: hero metni + kategori isimleri

**Ortak küçük metinler**
- “Devamını Oku”, okuma süresi formatı, tarih formatı (gerekirse)

### B) Diğer Arkadaşın Çevireceği (İçerik/Ağır Metinler)
**About (Hakkında) sayfası**
- “Nasıl başladım?” paragraf(lar)
- “Bugün ne yapıyorum?” paragraf(lar)
- “Kısa Özet” panelindeki maddeler
- “Rastgele Gerçekler” kartları (fotoğraf/kitap/insan/çay)
- Timeline (2022–2025) başlık + açıklamalar

**Projects sayfası – Proje açıklamaları**
- Tüm proje detay paragrafları ve alt stack açıklamaları

**Blog içerikleri**
- “Etkili İletişimde En Önemli Noktalar” yazısı
- “Zaman Yönetiminin Önemi” yazısı
- Diğer mevcut/placeholder blog post içerikleri (varsa)

> Not: Blog post başlıkları/özetleri (excerpt) iki dilde de tutarlı olmalı.

---

## Dosya/Modül Taslağı (Öneri)
- `src/i18n.ts`
- `src/locales/tr/common.json`
- `src/locales/en/common.json`
- `src/locales/tr/about.json`
- `src/locales/en/about.json`
- `src/locales/tr/blog.json`
- `src/locales/en/blog.json`
- `src/locales/tr/projects.json`
- `src/locales/en/projects.json`
- `src/locales/tr/contact.json`
- `src/locales/en/contact.json`

---

## Teslim Kriterleri
- TR/EN dil switcher sorunsuz çalışır
- URL’den dil paylaşılabilir
- Boş/eksik anahtar yok (missing key log yok)
- Mobil/Tablet/Desktop görünümde header + sheet düzgün

