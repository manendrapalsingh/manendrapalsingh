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
      background: '#07111f',
      '&::before, &::after': {
        content: '""',
        position: 'absolute',
        width: { xs: 360, md: 680 },
        height: { xs: 360, md: 680 },
        borderRadius: '50%',
        filter: 'blur(90px)',
        opacity: 0.16,
        animation: 'auroraDrift 18s ease-in-out infinite alternate',
      },
      '&::before': {
        top: '-18%',
        right: '-12%',
        background: '#0ea5e9',
      },
      '&::after': {
        bottom: '-28%',
        left: '-14%',
        background: '#14b8a6',
        animationDelay: '-8s',
      },
      '@keyframes auroraDrift': {
        '0%': { transform: 'translate3d(-5%, -3%, 0) scale(0.92)' },
        '55%': { transform: 'translate3d(8%, 10%, 0) scale(1.08)' },
        '100%': { transform: 'translate3d(-2%, 18%, 0) scale(0.98)' },
      },
      '@media (prefers-reduced-motion: reduce)': {
        '&::before, &::after': { animation: 'none' },
      },
    }}
  >
    {Array.from({ length: 12 }).map((_, index) => (
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
