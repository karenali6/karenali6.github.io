import React from 'react'
import './custom.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Layout from './pages/Layout'
import Home from './pages/Home'
import MyStory from './pages/MyStory'
import Projects from './pages/Projects'
import ProjectsOverview from './pages/ProjectsOverview'
import BrandDesign from './pages/BrandDesign'
import BadgeDesign from './pages/BadgeDesign'
import BoothDesign from './pages/BoothDesign'
import EFSet from './pages/EFSet'
import WebDesign from './pages/WebDesign'
import ReHome from './pages/ReHome'
import LetsTalk from './pages/LetsTalk'
import NoPage from './pages/NoPage'
import Resume from './pages/Resume'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="my-story" element={<MyStory />} />
            <Route path="projects" element={<Projects />}>
              <Route index element={<ProjectsOverview />} />
              <Route path="brand-design" element={<BrandDesign />} />
              <Route path="badge-design" element={<BadgeDesign />} />
              <Route path="booth-design" element={<BoothDesign />} />
              <Route path="ef-set" element={<EFSet />} />
              <Route path="web-design" element={<WebDesign />} />
              <Route path="re-home" element={<ReHome />} />
            </Route>
            <Route path="lets-talk" element={<LetsTalk />} />
            <Route path="*" element={<NoPage />} />
            <Route path="resume" element={<Resume />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App