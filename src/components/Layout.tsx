import { useEffect, useState } from 'react'
import { NavLink, Navigate, Outlet, useLocation, useParams } from 'react-router-dom'
import { MenuIcon, XIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { isSupportedLanguage } from '@/i18n'
import { prefixLangPath, swapLangInPath } from '@/lib/lang'
import { cn } from '@/lib/utils'

const Layout = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const { lang } = useParams()
  const location = useLocation()

  if (lang && !isSupportedLanguage(lang)) {
    return <Navigate replace to={swapLangInPath(location.pathname, 'tr')} />
  }

  const currentLang = isSupportedLanguage(lang) ? lang : 'tr'

  useEffect(() => {
    if (i18n.resolvedLanguage !== currentLang) {
      void i18n.changeLanguage(currentLang)
    }
  }, [currentLang, i18n])

  const navItems = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/about', label: t('nav.about') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/blog', label: t('nav.blog') },
    { to: '/contact', label: t('nav.contact') },
  ]

  return (
    <>
      <header className="site-header">
        <div className="container nav-container">
          <NavLink className="brand" to={prefixLangPath(currentLang, '/')}>
            bekiremre.dev
          </NavLink>
          <div className="flex items-center gap-4">
            <nav className="site-nav site-nav--desktop">
              <ul>
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      className={({ isActive }) => (isActive ? 'active' : undefined)}
                      end={item.end}
                      to={prefixLangPath(currentLang, item.to)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <Button
              className="hidden h-8 w-12 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white shadow-sm backdrop-blur-sm hover:bg-white/10 sm:inline-flex"
              onClick={() => {
                const nextLang = currentLang === 'tr' ? 'en' : 'tr'
                const nextPath = swapLangInPath(location.pathname, nextLang)
                window.location.hash = `#${nextPath}`
              }}
              variant="ghost"
            >
              {currentLang.toUpperCase()}
            </Button>

            <Sheet onOpenChange={setIsSheetOpen} open={isSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  className="rounded-full border border-white/10 bg-white/5 text-white shadow-sm backdrop-blur-sm hover:bg-white/10 lg:hidden"
                  size="icon"
                  variant="ghost"
                >
                  {isSheetOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
                  <span className="sr-only">{isSheetOpen ? t('a11y.closeMenu') : t('a11y.openMenu')}</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                className="border-white/10 bg-[#0a1125]/95 text-white shadow-2xl backdrop-blur-xl"
                side="right"
              >
                {/* Metallic Noise Overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-70 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Mobile Language Toggle */}
                <div className="relative z-10 mt-8 mb-6 flex justify-center sm:hidden">
                  <Button
                    className="h-9 w-14 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10"
                    onClick={() => {
                      setIsSheetOpen(false)
                      const nextLang = currentLang === 'tr' ? 'en' : 'tr'
                      const nextPath = swapLangInPath(location.pathname, nextLang)
                      window.location.hash = `#${nextPath}`
                    }}
                    variant="ghost"
                  >
                    {currentLang.toUpperCase()}
                  </Button>
                </div>

                <nav className="relative z-10 mt-8 flex w-full flex-col items-center justify-center">
                  {navItems.map((item, index) => (
                    <div key={item.to} className="w-full flex flex-col items-center">
                      <SheetClose asChild>
                        <NavLink
                          className={({ isActive }) =>
                            cn(
                              'block w-full py-4 text-center text-lg font-medium transition-colors',
                              isActive
                                ? 'text-white'
                                : 'text-white/60 hover:text-white hover:bg-white/5'
                            )
                          }
                          end={item.end}
                          to={prefixLangPath(currentLang, item.to)}
                        >
                          {item.label}
                        </NavLink>
                      </SheetClose>
                      {/* Simple Divider */}
                      {index !== navItems.length - 1 && <div className="h-[1px] w-48 bg-white/10" />}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="site-footer">
        <div className="footer-content">
          <div className="container footer-main">
            <div className="footer-brand-col">
              <NavLink className="brand footer-logo" to={prefixLangPath(currentLang, '/')}>
                bekiremre.dev
              </NavLink>
              <p className="footer-desc">
                {t('footer.description')}
              </p>
              <div className="status-badge">
                <span className="status-dot"></span>
                <span>{t('footer.status')}</span>
              </div>
            </div>

            <div className="footer-links-col">
              <h3 className="footer-heading">{t('footer.navigation')}</h3>
              <ul className="footer-menu">
                <li>
                  <NavLink to={prefixLangPath(currentLang, '/')}>{t('nav.home')}</NavLink>
                </li>
                <li>
                  <NavLink to={prefixLangPath(currentLang, '/projects')}>{t('nav.projects')}</NavLink>
                </li>
                <li>
                  <NavLink to={prefixLangPath(currentLang, '/about')}>{t('nav.about')}</NavLink>
                </li>
                <li>
                  <NavLink to={prefixLangPath(currentLang, '/blog')}>{t('nav.blog')}</NavLink>
                </li>
                <li>
                  <NavLink to={prefixLangPath(currentLang, '/contact')}>{t('nav.contact')}</NavLink>
                </li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h3 className="footer-heading">{t('footer.links')}</h3>
              <ul className="footer-menu">
                <li>
                  <a href="https://github.com/BemreSTR" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/bekir-emre-sar%C4%B1p%C4%B1nar-316834175/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:bekiremrebusiness@gmail.com">Email</a>
                </li>
                <li>
                  <a href="/resume.pdf" target="_blank" rel="noreferrer">
                    CV / Resume
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h3 className="footer-heading">{t('footer.expertise')}</h3>
              <ul className="footer-menu">
                <li>
                  <span className="footer-link-text">{t('footer.expertiseItems.reactTs')}</span>
                </li>
                <li>
                  <span className="footer-link-text">{t('footer.expertiseItems.webMobile')}</span>
                </li>
                <li>
                  <span className="footer-link-text">{t('footer.expertiseItems.macos')}</span>
                </li>
                <li>
                  <span className="footer-link-text">{t('footer.expertiseItems.algoOop')}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="container footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Bekir Emre Sarıpınar. {t('footer.copyright')}
            </p>
            <div className="footer-legal">
              <a href="#">{t('footer.privacy')}</a>
              <a href="#">{t('footer.terms')}</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
