import { Box, Typography, Button, Container, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const HeroAbout = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <Box
      id="hero"
      component={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      sx={{
        minHeight: { xs: 'auto', md: '94svh' },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Section 1: Title Section (Top) */}
      <Box sx={{ width: '100%', pt: { xs: 13, md: 17 }, pb: 3 }}>
        <Container maxWidth="lg" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
          >
            <Chip
              label="Senior Software Developer · Alpheya"
              sx={{
                mb: 3,
                color: 'secondary.light',
                border: '1px solid rgba(94,234,212,.26)',
                backgroundColor: 'rgba(94,234,212,.08)',
                fontWeight: 700,
              }}
            />
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <Typography
              variant="h1"
              component={motion.h1}
              variants={titleVariants}
              sx={{
                mb: 2,
                fontWeight: 800,
                maxWidth: 950,
                fontSize: { xs: '2.7rem', sm: '4rem', md: '5.5rem' },
                lineHeight: 0.98,
                letterSpacing: '-0.055em',
              }}
            >
              <motion.span variants={titleVariants}>
                I build resilient platforms that stay fast at scale.
              </motion.span>
            </Typography>
          </motion.div>

          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: 1,
                maxWidth: '600px',
                lineHeight: 1.8,
                color: 'text.secondary',
                fontSize: { xs: '0.95rem', sm: '1rem' },
                fontWeight: 400,
              }}
            >
              Backend engineering · Platform reliability · AI-assisted operations
            </Typography>
          </motion.div>

          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
          >
            <Typography
              variant="h6"
              component="p"
              sx={{
                lineHeight: 1.8,
                color: 'text.primary',
                fontSize: { xs: '0.95rem', sm: '1.1rem' },
                maxWidth: 820,
              }}
            >
              Go, TypeScript, Kubernetes and multi-cloud systems—from 10 ms APIs to multi-zone recovery and proactive SRE automation.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Section 2: Introduction Text (Middle - Full Width) */}
      <Box sx={{ width: '100%', py: 2 }}>
        <Container maxWidth="lg" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.5 }}
          >
            <Box
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 4,
                p: { xs: 2.5, sm: 3, md: 4 },
                maxWidth: '1050px',
                backgroundColor: 'rgba(13,27,45,.72)',
                backdropFilter: 'blur(18px)',
                boxShadow: '0 24px 70px rgba(0, 0, 0, 0.24)',
              }}
            >
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.25fr .75fr' }, gap: 4, alignItems: 'center' }}>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.95rem', sm: '1.05rem' }, lineHeight: 1.8, color: 'text.primary' }}>
                  I'm <strong>Manendra Pal Singh</strong>, a Senior Software Developer with 4+ years of experience building and operating production-grade systems across wealth technology, digital payments, mobility, lending, and decentralized infrastructure. I specialize in backend and platform engineering using Go, TypeScript, Kubernetes, and cloud-native architecture.
                </Typography>
                <Box sx={{ border: '1px solid rgba(94,234,212,.22)', borderRadius: 2.5, overflow: 'hidden', backgroundColor: 'rgba(3,10,19,.8)', textAlign: 'left', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
                  <Box sx={{ display: 'flex', gap: .75, px: 2, py: 1.25, borderBottom: '1px solid', borderColor: 'divider' }}>
                    {['#fb7185', '#fbbf24', '#5eead4'].map((color) => <Box key={color} sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: color }} />)}
                    <Typography sx={{ ml: 1, fontFamily: 'inherit', fontSize: '.68rem', color: 'text.secondary' }}>platform.status</Typography>
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: '.78rem', color: 'secondary.main', mb: 1 }}>$ kubectl get platform</Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: '.72rem', color: 'text.secondary', mb: .7 }}>REGION&nbsp;&nbsp;&nbsp; azure-multizone</Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: '.72rem', color: 'text.secondary', mb: .7 }}>STATUS&nbsp;&nbsp;&nbsp; <Box component="span" sx={{ color: 'secondary.main' }}>● HEALTHY</Box></Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: '.72rem', color: 'text.secondary' }}>RELEASE&nbsp;&nbsp; biweekly / automated</Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2.5, mt: 3, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
                {[['99.99%', 'availability target'], ['10 ms', 'API latency'], ['20K', 'requests / minute'], ['18', 'EV operators']].map(([value, label]) => (
                  <Box key={label}>
                    <Typography variant="h4" color="secondary.main" sx={{ fontWeight: 800, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>{value}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: '.09em', fontSize: '.68rem' }}>{label}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Section 3: Action Buttons (Bottom) */}
      <Box sx={{ width: '100%', py: 2, pb: 4 }}>
        <Container maxWidth="lg" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', px: { xs: 2, sm: 0 } }}>
              <motion.div variants={staggerItem}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<DownloadIcon />}
                    href="/manendrapalsingh/resume.pdf"
                    target="_blank"
                    sx={{
                      px: { xs: 3, sm: 4 },
                      py: { xs: 1.25, sm: 1.5 },
                      fontSize: { xs: '0.95rem', sm: '1.1rem' },
                      borderColor: 'white',
                      color: 'white',
                      borderWidth: 2,
                      backgroundColor: 'transparent',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                        borderColor: 'primary.main',
                        transform: 'translateY(-2px)',
                      },
                      '&:focus': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                        borderColor: 'primary.main',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Download CV
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div variants={staggerItem}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => scrollToSection('experience')}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      px: { xs: 3, sm: 4 },
                      py: { xs: 1.25, sm: 1.5 },
                      fontSize: { xs: '0.95rem', sm: '1.1rem' },
                      borderColor: 'white',
                      color: 'white',
                      borderWidth: 2,
                      backgroundColor: 'transparent',
                      fontWeight: 600,
                      '&:hover': {
                        borderColor: 'primary.main',
                        backgroundColor: 'primary.main',
                        color: 'white',
                        transform: 'translateY(-2px)',
                      },
                      '&:focus': {
                        borderColor: 'primary.main',
                        backgroundColor: 'primary.main',
                        color: 'white',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    View Experience
                  </Button>
                </motion.div>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>
      <Box sx={{ borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider', overflow: 'hidden', py: 1.5, backgroundColor: 'rgba(3,10,19,.55)' }}>
        <Box
          sx={{
            display: 'flex',
            width: 'max-content',
            gap: 5,
            whiteSpace: 'nowrap',
            animation: 'techTicker 30s linear infinite',
            willChange: 'transform',
            '@keyframes techTicker': { to: { transform: 'translate3d(-50%, 0, 0)' } },
            '@media (prefers-reduced-motion: reduce)': { animation: 'none', transform: 'none' },
          }}
        >
          {[...Array(2)].flatMap((_, copy) => ['GO', 'TYPESCRIPT', 'KUBERNETES', 'AZURE', 'TERRAFORM', 'FLUX', 'DATADOG', 'OPENFGA'].map((tech) => (
            <Typography key={`${copy}-${tech}`} sx={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: '.72rem', letterSpacing: '.16em', color: 'text.secondary' }}>
              <Box component="span" sx={{ color: 'secondary.main', mr: 1 }}>◆</Box>{tech}
            </Typography>
          )))}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroAbout;
