import { Box, Typography, Button, Container } from '@mui/material';
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
      viewport={{ once: false, amount: 0.3, margin: '-100px 0px -100px 0px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Section 1: Title Section (Top) */}
      <Box sx={{ width: '100%', pt: 10, pb: 2 }}>
        <Container maxWidth="lg" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
          >
            <Typography
              variant="body2"
              sx={{
                mb: 1.5,
                color: 'primary.main',
                textTransform: 'uppercase',
                letterSpacing: 2,
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
            >
              Ready to Innovate
            </Typography>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <Typography
              variant="h1"
              component={motion.h1}
              variants={titleVariants}
              sx={{
                mb: 1.5,
                fontWeight: 700,
                color: 'text.primary',
                fontSize: { xs: '2.25rem', sm: '3rem', md: '4rem' },
                lineHeight: 1.2,
              }}
            >
              <motion.span variants={titleVariants}>
                Full Stack Engineer
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
                mb: 0.5,
                maxWidth: '600px',
                lineHeight: 1.8,
                color: 'text.secondary',
                fontSize: { xs: '0.95rem', sm: '1rem' },
                fontWeight: 400,
              }}
            >
              Software Engineer – Consultant
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
                whiteSpace: { xs: 'normal', sm: 'nowrap' },
              }}
            >
              Building scalable systems and products that perform reliably at real-world scale.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Section 2: Introduction Text (Middle - Full Width) */}
      <Box sx={{ width: '100%', py: 1 }}>
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
                borderRadius: 2,
                p: { xs: 1.5, sm: 2, md: 2.5 },
                maxWidth: '1000px',
                backgroundColor: 'background.paper',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  mb: 1,
                  color: 'text.primary',
                }}
              >
                I'm <strong>Manendra Pal Singh</strong>, a full-stack engineer with experience building and operating production-grade systems across high-growth startups and large-scale platforms. I specialize in backend engineering using Golang and Java, along with building modern web applications in React, and I'm comfortable owning features end-to-end — from data modeling and API design to production-ready user interfaces.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  mb: 1,
                  color: 'text.primary',
                }}
              >
                I've worked on high-traffic, low-latency systems where scalability, reliability, and observability are critical. My work includes designing cloud-native and distributed systems, building event-driven workflows, and ensuring systems perform reliably under real-world load. My primary stack includes Go, Java, React, PostgreSQL, and Kubernetes.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  mb: 0,
                  color: 'text.primary',
                }}
              >
                I'm product-minded and execution-focused, with a strong emphasis on clean architecture, performance, and long-term maintainability. I enjoy working in fast-moving environments while applying the engineering rigor required to build systems that scale confidently in production.
              </Typography>
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
                    href="/resume.pdf"
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
    </Box>
  );
};

export default HeroAbout;
