// Blog filtering functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const blogCards = document.querySelectorAll('.blog-card');

if (filterButtons.length > 0 && blogCards.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const selectedCategory = button.getAttribute('data-category');

      blogCards.forEach(card => {
        const category = card.querySelector('.blog-card__category').textContent;

        if (selectedCategory === 'all' || category === selectedCategory) {
          card.style.display = 'flex';
          // Add fade-in animation
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 100);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function initMobileNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (!navToggle || !siteNav) {
    return;
  }

  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    const nextExpanded = String(!expanded);
    navToggle.setAttribute('aria-expanded', nextExpanded);
    navToggle.classList.toggle('is-open', nextExpanded === 'true');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (siteNav.classList.contains('open')) {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('is-open');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
});
