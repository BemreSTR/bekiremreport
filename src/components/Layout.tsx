import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { MenuIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const Layout = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const navItems = [
    { to: '/', label: 'Ana Sayfa', end: true },
    { to: '/about', label: 'Hakkında' },
    { to: '/projects', label: 'Projeler' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'İletişim' },
  ]

  return (
    <>
      <header className="site-header">
        <div className="container nav-container">
          <NavLink className="brand" to="/">
            bekiremre.dev
          </NavLink>
          <nav className="site-nav site-nav--desktop">
            <ul>
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end={item.end} to={item.to}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Sheet onOpenChange={setIsSheetOpen} open={isSheetOpen}>
            <SheetTrigger asChild>
              <Button
                className="rounded-full border border-white/10 bg-white/5 text-white shadow-sm backdrop-blur-sm hover:bg-white/10 xl:hidden"
                size="icon"
                variant="ghost"
              >
                {isSheetOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
                <span className="sr-only">{isSheetOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              className="border-white/10 bg-[#0a1125]/95 text-white shadow-2xl backdrop-blur-xl"
              side="right"
            >
              <nav className="mt-12 flex flex-col items-center justify-center w-full">
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
                        to={item.to}
                      >
                        {item.label}
                      </NavLink>
                    </SheetClose>
                    {/* Simple Divider */}
                    {index !== navItems.length - 1 && (
                      <div className="h-[1px] w-48 bg-white/10" />
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <Outlet />

      <footer className="site-footer">
        <div className="footer-content">
          <div className="container footer-main">
            <div className="footer-brand-col">
              <NavLink className="brand footer-logo" to="/">
                bekiremre.dev
              </NavLink>
              <p className="footer-desc">
                Modern web teknolojileriyle kullanıcı odaklı, performanslı ve erişilebilir dijital ürünler
                geliştiriyorum.
              </p>
              <div className="status-badge">
                <span className="status-dot"></span>
                <span>Yeni projeler için uygun</span>
              </div>
            </div>

            <div className="footer-links-col">
              <h3 className="footer-heading">Gezinti</h3>
              <ul className="footer-menu">
                <li>
                  <NavLink to="/">Ana Sayfa</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">Projeler</NavLink>
                </li>
                <li>
                  <NavLink to="/about">Hakkında</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">İletişim</NavLink>
                </li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h3 className="footer-heading">Bağlantılar</h3>
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
              <h3 className="footer-heading">Uzmanlıklar</h3>
              <ul className="footer-menu">
                <li>
                  <span className="footer-link-text">Ürün Stratejisi</span>
                </li>
                <li>
                  <span className="footer-link-text">Teknik Mimari</span>
                </li>
                <li>
                  <span className="footer-link-text">Kullanıcı Deneyimi</span>
                </li>
                <li>
                  <span className="footer-link-text">Veri Görselleştirme</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="container footer-bottom">
            <p>&copy; {new Date().getFullYear()} Bekir Emre Sarıpınar. Tüm hakları saklıdır.</p>
            <div className="footer-legal">
              <a href="#">Gizlilik</a>
              <a href="#">Şartlar</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
