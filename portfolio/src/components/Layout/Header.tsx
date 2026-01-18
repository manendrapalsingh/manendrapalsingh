import { AppBar, Toolbar, Button, Box, useScrollTrigger } from '@mui/material';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    setScrolled(trigger);
  }, [trigger]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/manendrapalsingh') {
      navigate('/manendrapalsingh');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  };

  const handleHomeClick = () => {
    navigate('/manendrapalsingh');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppBar
      component={motion.nav}
      position="fixed"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      sx={{
        backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
        boxShadow: scrolled ? 2 : 0,
        transition: 'all 0.3s ease',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      }}
    >
      <Toolbar 
        sx={{ 
          justifyContent: 'space-between',
          maxWidth: '1200px',
          mx: 'auto',
          width: '100%',
          px: { xs: 2, sm: 3 },
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={handleHomeClick}
            sx={{
              color: 'text.primary',
              fontWeight: 700,
              fontSize: '1.1rem',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            Manendra Pal Singh
          </Button>
        </motion.div>
        <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1 }, flexWrap: 'wrap' }}>
          {sections.map((section) => (
            <motion.div
              key={section.id}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Button
                onClick={() => scrollToSection(section.id)}
                sx={{
                  color: 'text.primary',
                  fontWeight: 500,
                  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '0.95rem' },
                  minWidth: 'auto',
                  px: { xs: 1, sm: 1.5 },
                  textTransform: 'none',
                  position: 'relative',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: 'primary.main',
                    },
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {section.label}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
