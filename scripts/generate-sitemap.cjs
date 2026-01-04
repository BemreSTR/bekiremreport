const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://bekiremresaripinar.online';
const BLOG_POSTS_PATH = path.join(__dirname, '../src/data/blogPosts.tsx');
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

function generateSitemap() {
    const content = fs.readFileSync(BLOG_POSTS_PATH, 'utf-8');
    const slugs = [];
    const regex = /slug:\s*'([^']+)'/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
        slugs.push(match[1]);
    }

    const today = new Date().toISOString().split('T')[0];

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Static Routes -->
  <url><loc>${SITE_URL}/#/tr</loc><lastmod>${today}</lastmod><priority>1.0</priority></url>
  <url><loc>${SITE_URL}/#/en</loc><lastmod>${today}</lastmod><priority>1.0</priority></url>
  <url><loc>${SITE_URL}/#/tr/about</loc><lastmod>${today}</lastmod></url>
  <url><loc>${SITE_URL}/#/en/about</loc><lastmod>${today}</lastmod></url>
  <url><loc>${SITE_URL}/#/tr/projects</loc><lastmod>${today}</lastmod></url>
  <url><loc>${SITE_URL}/#/en/projects</loc><lastmod>${today}</lastmod></url>
  <url><loc>${SITE_URL}/#/tr/blog</loc><lastmod>${today}</lastmod></url>
  <url><loc>${SITE_URL}/#/en/blog</loc><lastmod>${today}</lastmod></url>
  <url><loc>${SITE_URL}/#/tr/contact</loc><lastmod>${today}</lastmod></url>
  <url><loc>${SITE_URL}/#/en/contact</loc><lastmod>${today}</lastmod></url>

  <!-- Blog Posts -->
`;

    slugs.forEach(slug => {
        sitemap += `  <url><loc>${SITE_URL}/#/tr/blog/${slug}</loc><lastmod>${today}</lastmod></url>\n`;
        sitemap += `  <url><loc>${SITE_URL}/#/en/blog/${slug}</loc><lastmod>${today}</lastmod></url>\n`;
    });

    sitemap += '</urlset>';

    fs.writeFileSync(SITEMAP_PATH, sitemap);
    console.log(`✅ Sitemap updated with ${slugs.length} blog posts.`);
}

generateSitemap();
