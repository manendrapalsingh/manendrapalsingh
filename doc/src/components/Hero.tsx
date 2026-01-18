import { Box, Typography, Button, Container, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const techBadges = ['Go', 'React', 'TypeScript', 'PostgreSQL'];

  const titleVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <Box
      id="hero"
      component={motion.section}
      initial="initial"
      animate="animate"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        position: 'relative',
        pt: 10,
        pb: 8,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
        >
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              opacity: 0.9,
              textTransform: 'uppercase',
              letterSpacing: 2,
              fontSize: '0.875rem',
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
              mb: 2,
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              lineHeight: 1.2,
            }}
          >
            <motion.span
              variants={titleVariants}
              style={{ display: 'block' }}
            >
              Full Stack
            </motion.span>
            <motion.span
              variants={titleVariants}
              style={{ display: 'block' }}
            >
              Engineer
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
              opacity: 0.95,
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
              mb: 4,
              maxWidth: '600px',
              lineHeight: 1.8,
              opacity: 0.9,
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            Enhancing digital experiences that are smooth, scalable, and made to impress.
          </Typography>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
            {techBadges.map((tech) => (
              <motion.div key={tech} variants={staggerItem}>
                <Chip
                  label={tech}
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', px: { xs: 2, sm: 0 } }}>
            <motion.div variants={staggerItem}>
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection('experience')}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1.25, sm: 1.5 },
                  fontSize: { xs: '0.95rem', sm: '1.1rem' },
                  backgroundColor: 'white',
                  color: 'primary.main',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Experience
              </Button>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection('contact')}
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
                Contact
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
