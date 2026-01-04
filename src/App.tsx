import { Suspense } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'

const App = () => (
  <HashRouter>
    <Suspense fallback={<div className="flex h-screen w-full items-center justify-center bg-[#000510] text-white">Loading...</div>}>
      <Routes>
        <Route element={<Navigate replace to="/tr" />} path="/" />
        <Route element={<Layout />} path=":lang">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  </HashRouter>
)

export default App
