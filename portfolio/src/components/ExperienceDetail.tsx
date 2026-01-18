import { Box, Container, Typography, Paper, Chip, Button, Divider } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { experiences } from '../data/experiences';
import { getTechIcon } from './TechStackIcons';
import { getTechColor } from '../utils/techColors';

const ExperienceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const experience = experiences.find((e) => e.id === id);

  if (!experience) {
    return (
      <Box sx={{ py: 10, textAlign: 'center', minHeight: '100vh', backgroundColor: 'background.default' }}>
        <Typography variant="h4">Experience not found</Typography>
        <Button onClick={() => navigate('/manendrapalsingh')} sx={{ mt: 2 }}>
          Back to Home
        </Button>
      </Box>
    );
  }

  // Handle special cases for links
  const companyWebsite = experience.company === 'CoffeeBeans Consulting LLP'
    ? 'https://coffeebeans.io/'
    : experience.companyWebsite;

  return (
    <Box
      sx={{
        py: 10,
        minHeight: '100vh',
        backgroundColor: 'background.default',
        pt: 12,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/manendrapalsingh')}
          sx={{ mb: 4 }}
        >
          Back to Experience
        </Button>

        <Paper elevation={3} sx={{ p: { xs: 3, sm: 5 }, mb: 4, borderRadius: 3 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
            {experience.title}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, flexWrap: 'wrap' }}>
            {companyWebsite ? (
              <Typography
                variant="h5"
                component="a"
                href={companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontWeight: 600,
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: 'white',
                  },
                }}
              >
                {experience.company}
              </Typography>
            ) : (
              <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                {experience.company}
              </Typography>
            )}
          </Box>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
            {experience.location} | {experience.period}
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
            Overview
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
            {experience.shortDescription}
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
            Key Achievements
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 4 }}>
            {experience.achievements.map((achievement, idx) => (
              <li key={idx}>
                <Typography variant="body1" sx={{ mb: 1.5, lineHeight: 1.7 }}>
                  {achievement}
                </Typography>
              </li>
            ))}
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
            Technologies Used
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {experience.technologies.map((tech) => {
              const icon = getTechIcon(tech);
              const colors = getTechColor(tech);
              return (
                <motion.div key={tech} whileHover={{ scale: 1.05, y: -2 }}>
                  <Chip
                    icon={icon || undefined}
                    label={tech}
                    sx={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      height: 28,
                      backgroundColor: colors.bg,
                      color: colors.text,
                      borderRadius: '4px',
                      transition: 'all 0.2s ease',
                      '& .MuiChip-icon': {
                        color: colors.icon,
                        fontSize: '16px',
                        marginLeft: '6px',
                        marginRight: '4px',
                      },
                      '& .MuiChip-label': {
                        paddingLeft: icon ? '0px' : '8px',
                        paddingRight: '8px',
                        fontSize: '0.875rem',
                      },
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                      },
                    }}
                  />
                </motion.div>
              );
            })}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ExperienceDetail;
