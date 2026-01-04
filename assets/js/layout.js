const HEADER_HTML = `
  <div class="container nav-container">
    <a class="brand" href="index.html">bekiremre.dev</a>
    <button class="nav-toggle" aria-label="Menüyü Aç/Kapat" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav class="site-nav">
      <ul>
        <li><a href="index.html" data-nav="index">Ana Sayfa</a></li>
        <li><a href="about.html" data-nav="about">Hakkında</a></li>
        <li><a href="projects.html" data-nav="projects">Projeler</a></li>
        <li><a href="blog.html" data-nav="blog">Blog</a></li>
        <li><a href="contact.html" data-nav="contact">İletişim</a></li>
      </ul>
    </nav>
  </div>
`;

const FOOTER_HTML = `
  <div class="footer-content">
    <div class="container footer-main">
      <div class="footer-brand-col">
        <a href="index.html" class="brand footer-logo">bekiremre.dev</a>
        <p class="footer-desc">
          Modern web teknolojileriyle kullanıcı odaklı, performanslı ve erişilebilir dijital ürünler geliştiriyorum.
        </p>
        <div class="status-badge">
          <span class="status-dot"></span>
          <span>Yeni projeler için uygun</span>
        </div>
      </div>
      
      <div class="footer-links-col">
        <h3 class="footer-heading">Gezinti</h3>
        <ul class="footer-menu">
          <li><a href="index.html">Ana Sayfa</a></li>
          <li><a href="projects.html">Projeler</a></li>
          <li><a href="about.html">Hakkında</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">İletişim</a></li>
        </ul>
      </div>

      <div class="footer-links-col">
        <h3 class="footer-heading">Bağlantılar</h3>
        <ul class="footer-menu">
          <li><a href="https://github.com/BemreSTR" target="_blank">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/bekir-emre-sar%C4%B1p%C4%B1nar-316834175/" target="_blank">LinkedIn</a></li>
          <li><a href="mailto:bekiremrebusiness@gmail.com">Email</a></li>
          <li><a href="/resume.pdf" target="_blank">CV / Resume</a></li>
        </ul>
      </div>

      <div class="footer-newsletter-col">
        <h3 class="footer-heading">Bülten</h3>
        <p style="margin-bottom: 1rem; color: var(--text-secondary); font-size: 0.9rem;">Teknoloji ve yazılım dünyasından notlar.</p>
        <form class="footer-form" onsubmit="event.preventDefault();">
          <input type="email" placeholder="E-posta adresiniz" />
          <button type="submit" aria-label="Abone Ol">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </form>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>&copy; <span id="year"></span> Bekir Emre Sarıpınar. Tüm hakları saklıdır.</p>
      <div class="footer-legal">
        <a href="#">Gizlilik</a>
        <a href="#">Şartlar</a>
      </div>
    </div>
  </div>
`;

function injectLayout() {
  const header = document.querySelector('.site-header');
  const footer = document.querySelector('.site-footer');

  if (header) {
    header.innerHTML = HEADER_HTML;
  }

  if (footer) {
    footer.innerHTML = FOOTER_HTML;
  }

  // Set active link
  const currentPath = window.location.pathname;
  const page = currentPath.split('/').pop().replace('.html', '') || 'index';
  const activeLink = document.querySelector(`[data-nav="${page}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // Update Year
  const yearEl = document.querySelector('#year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Init Mobile Nav
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
    });

    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (siteNav.classList.contains('open')) {
          siteNav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
}

// Run injection immediately
document.addEventListener('DOMContentLoaded', injectLayout);
