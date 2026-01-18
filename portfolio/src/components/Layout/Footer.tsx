import { Box, IconButton, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { SiDocker } from 'react-icons/si';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Footer = () => {
  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/manendrapalsingh', label: 'GitHub' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/manendra-pal-singh/', label: 'LinkedIn' },
    { icon: <EmailIcon />, url: 'mailto:manendra16200singh@gmail.com', label: 'Email' },
    { icon: <SiDocker />, url: 'https://hub.docker.com/u/manendrapalsingh', label: 'Docker Hub' },
  ];

  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: 'transparent',
        py: 1,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        minHeight: 'auto',
      }}
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <motion.div variants={staggerItem}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  component={motion.a}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  sx={{
                    color: 'text.primary',
                    fontSize: '1rem',
                    padding: '4px',
                    '&:hover': {
                      color: 'primary.main',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </motion.div>
          <motion.div variants={staggerItem}>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.7rem', whiteSpace: 'nowrap' }}>
              © {new Date().getFullYear()} Manendra Pal Singh. All rights reserved.
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Footer;
