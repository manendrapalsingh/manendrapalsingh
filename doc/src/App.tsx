import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import theme from './theme';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroAbout from './components/HeroAbout';
import Experience from './components/Experience';
import PortfolioShowcase from './components/PortfolioShowcase';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import OpenSourceDetail from './components/OpenSourceDetail';
import ExperienceDetail from './components/ExperienceDetail';

function HomePage() {
  useEffect(() => {
    // Add scroll snap behavior and hardware acceleration for smooth animations
    const style = document.createElement('style');
    style.textContent = `
      * {
        scroll-behavior: smooth;
      }
      html {
        scroll-behavior: smooth;
      }
      main {
        scroll-snap-type: y proximity;
        -webkit-overflow-scrolling: touch;
      }
      section[id] {
        scroll-snap-align: start;
        scroll-snap-stop: always;
      }
      [data-framer-motion-component],
      section[data-framer-motion-component] {
        will-change: transform, opacity;
        transform: translateZ(0);
        backface-visibility: hidden;
        perspective: 1000px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      @media (prefers-reduced-motion: reduce) {
        * {
          scroll-behavior: auto;
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <main style={{ overflowY: 'auto', height: '100vh' }}>
      <HeroAbout />
      <Experience />
      <PortfolioShowcase />
      <Contact />
    </main>
  );
}

const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          exit={pageTransition.exit}
          transition={pageTransition.transition}
          style={{ minHeight: '100vh', position: 'relative' }}
        >
          <Routes>
            <Route path="/manendrapalsingh" element={<HomePage />} />
            <Route
              path="/manendrapalsingh/project/:id"
              element={<ProjectDetail />}
            />
            <Route
              path="/manendrapalsingh/opensource/:id"
              element={<OpenSourceDetail />}
            />
            <Route
              path="/manendrapalsingh/experience/:id"
              element={<ExperienceDetail />}
            />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--motion-reduce', '1');
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
