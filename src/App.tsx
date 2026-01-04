import { lazy, Suspense } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

const About = lazy(() => import('./pages/About'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Contact = lazy(() => import('./pages/Contact'))
const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Projects = lazy(() => import('./pages/Projects'))

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
