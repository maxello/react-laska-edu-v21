import { useLayoutEffect, type ReactNode } from 'react'
import HomePage from '../pages/HomePage.tsx';
import GalleryPage from '../pages/GalleryPage.tsx';
import App from '../App.tsx'
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import AboutPage from '../pages/AboutPage.tsx';
import EventsPage from '../pages/EventsPage.tsx';
import GalleryModal from '../components/GalleryModal.tsx';
import GalleryItemPage from '../pages/GalleryItemPage.tsx';

const RouterWrapper = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    if (location.pathname.includes("/gallery")) {
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);
  return children;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <RouterWrapper>
      <Routes location={state?.backgroundLocation || location}>
        <Route element={<App />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="gallery/:id" element={<GalleryItemPage />} />
        </Route>
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="gallery/:id" element={<GalleryModal />} />
        </Routes>
      )}
    </RouterWrapper>
  )
}

const Router = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default Router