import { Box, Container, Typography, Card, CardContent, CardActions, Button, Chip, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: 10,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Projects
        </Typography>
        <Grid container spacing={{ xs: 3, sm: 4 }}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  {project.company && (
                    <Typography variant="subtitle1" color="primary.main" gutterBottom>
                      {project.company}
                    </Typography>
                  )}
                  {project.duration && (
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {project.duration}
                    </Typography>
                  )}
                  <Typography variant="body1" paragraph sx={{ mb: 2, minHeight: '60px' }}>
                    {project.description}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx}>
                        <Typography variant="body2" sx={{ mb: 0.5 }}>
                          {feature}
                        </Typography>
                      </li>
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.techStack.slice(0, 6).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'primary.light',
                          color: 'white',
                          fontSize: '0.7rem',
                        }}
                      />
                    ))}
                    {project.techStack.length > 6 && (
                      <Chip
                        label={`+${project.techStack.length - 6} more`}
                        size="small"
                        sx={{
                          backgroundColor: 'grey.300',
                          color: 'text.primary',
                          fontSize: '0.7rem',
                        }}
                      />
                    )}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    component={Link}
                    to={`/manendrapalsingh/project/${project.id}`}
                    size="small"
                    sx={{ color: 'primary.main', fontWeight: 600 }}
                  >
                    View Details
                  </Button>
                  {project.link && (
                    <Button
                      size="small"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<LaunchIcon />}
                      sx={{ color: 'primary.main' }}
                    >
                      Live Site
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button
                      size="small"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: 'primary.main' }}
                    >
                      GitHub
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
