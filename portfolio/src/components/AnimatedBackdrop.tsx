import { Box } from '@mui/material';

const AnimatedBackdrop = () => (
  <Box
    aria-hidden="true"
    sx={{
      position: 'fixed',
      inset: 0,
      zIndex: -1,
      overflow: 'hidden',
      pointerEvents: 'none',
      backgroundColor: '#07111f',
      backgroundImage: 'linear-gradient(rgba(56,189,248,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,.035) 1px, transparent 1px)',
      backgroundSize: '56px 56px',
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        width: '70vw',
        height: '140vh',
        left: '-55vw',
        top: '-20vh',
        background: 'linear-gradient(90deg, transparent, rgba(14,165,233,.09), rgba(94,234,212,.05), transparent)',
        transform: 'rotate(-16deg) translate3d(0, 0, 0)',
        willChange: 'transform, opacity',
        animation: 'ambientSweep 20s ease-in-out infinite',
        '@keyframes ambientSweep': {
          '0%, 100%': { transform: 'rotate(-16deg) translate3d(0, 0, 0)', opacity: 0.35 },
          '50%': { transform: 'rotate(-16deg) translate3d(185vw, 0, 0)', opacity: 0.85 },
        },
        '@media (prefers-reduced-motion: reduce)': { animation: 'none', opacity: 0.2 },
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        width: { xs: 320, md: 520 },
        height: { xs: 320, md: 520 },
        right: { xs: '-45%', md: '-10%' },
        top: '18%',
        borderRadius: '50%',
        border: '1px solid rgba(56,189,248,.12)',
        boxShadow: 'inset 0 0 80px rgba(14,165,233,.035), 0 0 80px rgba(14,165,233,.025)',
        willChange: 'transform, opacity',
        animation: 'orbreathe 12s ease-in-out infinite',
        '@keyframes orbreathe': {
          '0%, 100%': { transform: 'scale(.88)', opacity: 0.3 },
          '50%': { transform: 'scale(1.08)', opacity: 0.72 },
        },
        '@media (prefers-reduced-motion: reduce)': { animation: 'none', opacity: 0.25 },
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1,
        background: 'linear-gradient(90deg, transparent 4%, rgba(94,234,212,.45) 45%, rgba(56,189,248,.28) 65%, transparent 96%)',
        boxShadow: '0 0 20px rgba(94,234,212,.2)',
        willChange: 'transform, opacity',
        animation: 'globalScan 11s linear infinite',
        '@keyframes globalScan': {
          '0%': { transform: 'translate3d(0, -10vh, 0)', opacity: 0 },
          '12%, 85%': { opacity: 0.5 },
          '100%': { transform: 'translate3d(0, 110vh, 0)', opacity: 0 },
        },
        '@media (prefers-reduced-motion: reduce)': { animation: 'none', display: 'none' },
      }}
    />
    {Array.from({ length: 6 }).map((_, index) => (
      <Box
        key={index}
        sx={{
          position: 'absolute',
          left: `${7 + ((index * 29) % 88)}%`,
          top: `${8 + ((index * 37) % 82)}%`,
          width: index % 3 === 0 ? 4 : 2,
          height: index % 3 === 0 ? 4 : 2,
          borderRadius: '50%',
          backgroundColor: index % 2 ? 'primary.main' : 'secondary.main',
          boxShadow: '0 0 16px currentColor',
          opacity: 0.35,
          animation: `particleFloat ${7 + (index % 5)}s ease-in-out ${-index * 0.6}s infinite alternate`,
          '@keyframes particleFloat': {
            from: { transform: 'translate3d(0, 0, 0)', opacity: 0.18 },
            to: { transform: `translate3d(${index % 2 ? 18 : -18}px, -38px, 0)`, opacity: 0.65 },
          },
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
        }}
      />
    ))}
  </Box>
);

export default AnimatedBackdrop;
