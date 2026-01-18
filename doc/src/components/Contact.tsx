import { Box, Container, Typography, Paper, IconButton, Grid, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { SiDocker } from 'react-icons/si';
import SendIcon from '@mui/icons-material/Send';
import { whileInViewFadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const Contact = () => {
  const socialLinks = [
    {
      icon: <GitHubIcon sx={{ fontSize: 32 }} />,
      url: 'https://github.com/manendrapalsingh',
      label: 'Github',
      text: '@manendrapalsingh',
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: 32 }} />,
      url: 'https://www.linkedin.com/in/manendra-pal-singh/',
      label: 'LinkedIn',
      text: 'Let\'s Connect on LinkedIn',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 32 }} />,
      url: 'mailto:manendra16200singh@gmail.com',
      label: 'Email',
      text: 'manendra16200singh@gmail.com',
    },
    {
      icon: <SiDocker style={{ fontSize: 32 }} />,
      url: 'https://hub.docker.com/u/manendrapalsingh',
      label: 'Docker Hub',
      text: '@manendrapalsingh',
    },
  ];

  return (
    <Box
      id="contact"
      component={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3, margin: '-100px 0px -100px 0px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      sx={{
        minHeight: '100vh',
        py: 10,
        backgroundColor: 'background.default',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <motion.div
          initial={whileInViewFadeInUp.initial}
          whileInView={whileInViewFadeInUp.whileInView}
          viewport={whileInViewFadeInUp.viewport}
          transition={whileInViewFadeInUp.transition}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mb: 2, fontWeight: 700 }}>
            Contact Me
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}>
            Got a question? Send me a message, and I'll get back to you soon.
          </Typography>
        </motion.div>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={whileInViewFadeInUp.initial}
              whileInView={whileInViewFadeInUp.whileInView}
              viewport={whileInViewFadeInUp.viewport}
              transition={whileInViewFadeInUp.transition}
            >
              <Paper elevation={2} sx={{ p: { xs: 3, sm: 4 }, height: '100%', borderRadius: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                  Get in Touch
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  Have something to discuss? Send me a message and let's talk.
                </Typography>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <motion.div variants={staggerItem}>
                      <TextField
                        label="Your Name"
                        variant="outlined"
                        fullWidth
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                      <TextField
                        label="Your Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                      <TextField
                        label="Your Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          type="submit"
                          variant="outlined"
                          size="large"
                          endIcon={<SendIcon />}
                          sx={{
                            mt: 2,
                            borderColor: 'white',
                            color: 'white',
                            borderWidth: 2,
                            backgroundColor: 'transparent',
                            '&:hover': {
                              backgroundColor: 'primary.main',
                              color: 'white',
                              borderColor: 'primary.main',
                            },
                            '&:focus': {
                              backgroundColor: 'primary.main',
                              color: 'white',
                              borderColor: 'primary.main',
                            },
                          }}
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </motion.div>
                  </Box>
                </motion.div>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={whileInViewFadeInUp.initial}
              whileInView={whileInViewFadeInUp.whileInView}
              viewport={whileInViewFadeInUp.viewport}
              transition={whileInViewFadeInUp.transition}
            >
              <Paper elevation={2} sx={{ p: { xs: 3, sm: 4 }, height: '100%', borderRadius: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Connect With Me
                </Typography>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {socialLinks.map((social) => (
                      <motion.div key={social.label} variants={staggerItem}>
                        <Box
                          component={motion.a}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 8, scale: 1.02 }}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            p: 2,
                            textDecoration: 'none',
                            color: 'inherit',
                            borderRadius: 2,
                            border: '2px solid',
                            borderColor: 'divider',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <IconButton
                            sx={{
                              color: 'primary.main',
                              '&:hover': {
                                color: 'primary.dark',
                              },
                            }}
                          >
                            {social.icon}
                          </IconButton>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                              {social.label === 'LinkedIn' ? 'Let\'s Connect' : social.label}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {social.text}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
