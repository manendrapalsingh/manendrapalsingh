import { ThemeProvider, CssBaseline, Box, CircularProgress } from '@mui/material';
import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import theme from './theme';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import AnimatedBackdrop from './components/AnimatedBackdrop';

const HeroAbout = lazy(() => import('./components/HeroAbout'));
const Experience = lazy(() => import('./components/Experience'));
const EngineeringJourney = lazy(() => import('./components/EngineeringJourney'));
const PortfolioShowcase = lazy(() => import('./components/PortfolioShowcase'));
const Contact = lazy(() => import('./components/Contact'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));
const OpenSourceDetail = lazy(() => import('./components/OpenSourceDetail'));
const ExperienceDetail = lazy(() => import('./components/ExperienceDetail'));

function LoadingFallback() {
  return (
    <Box
      role="status"
      aria-label="Loading portfolio content"
      sx={{ minHeight: '40vh', display: 'grid', placeItems: 'center' }}
    >
      <CircularProgress />
    </Box>
  );
}

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const targetId = (location.state as { scrollTo?: string } | null)?.scrollTo || location.hash.replace('#', '');
    if (!targetId) return;

    const delays = [0, 250, 700, 1500];
    const timers = delays.map((delay, index) => window.setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        if (index === 0) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          const root = document.documentElement;
          const previousBehavior = root.style.scrollBehavior;
          root.style.scrollBehavior = 'auto';
          window.scrollTo(0, target.offsetTop - 72);
          window.requestAnimationFrame(() => { root.style.scrollBehavior = previousBehavior; });
        }
        if (index === delays.length - 1) {
          window.history.replaceState({}, '', '/manendrapalsingh/');
        }
      }
    }, delay));

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [location.hash, location.state]);

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
      body {
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      section[id] {
        scroll-margin-top: 72px;
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
    <main>
      <Suspense fallback={<LoadingFallback />}>
        <HeroAbout />
        <Experience />
        <EngineeringJourney />
        <PortfolioShowcase />
        <Contact />
      </Suspense>
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
          <Suspense fallback={<LoadingFallback />}>
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
              <Route path="/" element={<Navigate to="/manendrapalsingh" replace />} />
              <Route path="*" element={<Navigate to="/manendrapalsingh" replace />} />
            </Routes>
          </Suspense>
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
      <AnimatedBackdrop />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
