import { Box, Container, Typography, Paper, Chip, Button, Divider, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Box sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h4">Project not found</Typography>
        <Button onClick={() => navigate('/manendrapalsingh')} sx={{ mt: 2 }}>
          Back to Projects
        </Button>
      </Box>
    );
  }

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
          Back to Projects
        </Button>

        <Paper elevation={3} sx={{ p: { xs: 3, sm: 5 }, mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
            {project.title}
          </Typography>
          
          {project.company && (
            <Typography variant="h5" color="primary.main" gutterBottom>
              {project.company}
            </Typography>
          )}
          
          {project.role && (
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Role: {project.role}
            </Typography>
          )}
          
          {project.duration && (
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
              {project.duration}
            </Typography>
          )}

          <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
            {project.link && (
              <Button
                variant="contained"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<LaunchIcon />}
              >
                View Project
              </Button>
            )}
            {project.githubLink && (
              <Button
                variant="outlined"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  borderWidth: 2,
                  backgroundColor: 'transparent',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'primary.main',
                    color: 'white',
                  },
                  '&:focus': {
                    borderColor: 'primary.main',
                    backgroundColor: 'primary.main',
                    color: 'white',
                  },
                }}
              >
                View on GitHub
              </Button>
            )}
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
            Overview
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
            {project.longDescription || project.description}
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Key Features
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {project.features.map((feature, idx) => (
                  <li key={idx}>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      {feature}
                    </Typography>
                  </li>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Technologies Used
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {project.techStack.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'white',
                      fontSize: '0.875rem',
                    }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>

          {project.challenges && project.challenges.length > 0 && (
            <>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Challenges
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 4 }}>
                {project.challenges.map((challenge, idx) => (
                  <li key={idx}>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      {challenge}
                    </Typography>
                  </li>
                ))}
              </Box>
            </>
          )}

          {project.achievements && project.achievements.length > 0 && (
            <>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Key Achievements
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 4 }}>
                {project.achievements.map((achievement, idx) => (
                  <li key={idx}>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      {achievement}
                    </Typography>
                  </li>
                ))}
              </Box>
            </>
          )}

          {project.impact && (
            <>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Impact
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                {project.impact}
              </Typography>
            </>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default ProjectDetail;
