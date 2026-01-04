# Bekir Emre Sarıpınar - Kişisel Portfolyo

React + TypeScript + Vite ile hazırlanmış, blog ve proje odaklı kişisel portfolyo sitesi.

## 🌟 Özellikler

- Mobil ve masaüstü uyumlu modern UI
- SPA deneyimi (React Router)
- Blog kategori filtreleme
- Tek tip header/footer
- Statik içerik için kolay düzenlenebilir sayfalar

## 🧱 Proje Yapısı

```
.
├── src/
│   ├── components/         # Layout ve ortak bileşenler
│   ├── data/               # Blog içerikleri ve metadata
│   ├── pages/              # Sayfa bileşenleri
│   ├── styles.css          # Ana stil dosyası
│   └── main.tsx            # Uygulama giriş noktası
├── public/                 # Statik dosyalar (CNAME vb.)
├── index.html              # Vite giriş HTML'i
└── vite.config.ts
```

## 🚀 Kurulum ve Çalıştırma

```bash
corepack enable
pnpm install
pnpm dev
```

Build almak için:

```bash
pnpm build
pnpm preview
```

## ℹ️ Notlar

- SPA yönlendirmesi için `HashRouter` kullanılır. Clean URL istiyorsan sunucu yönlendirmesi (rewrite) ile `BrowserRouter`'a geçebilirsin.
- Eski statik HTML dosyaları `legacy/` klasörüne taşındı.
