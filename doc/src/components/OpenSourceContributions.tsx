import { Box, Container, Typography, Card, CardContent, CardActions, Button, Chip, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { openSourceContributions } from '../data/openSource';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const OpenSourceContributions = () => {
  return (
    <Box
      id="open-source"
      sx={{
        py: 10,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mb: 2 }}>
          Open Source Contributions
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: '700px', mx: 'auto' }}>
          Contributing to open-source projects that enable decentralized networks and interoperability across platforms.
        </Typography>
        <Grid container spacing={4}>
          {openSourceContributions.map((contribution) => (
            <Grid item xs={12} md={6} key={contribution.id}>
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
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <GitHubIcon sx={{ mr: 1, color: 'primary.main', fontSize: 28 }} />
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                      {contribution.title}
                    </Typography>
                  </Box>
                  
                  {contribution.organization && (
                    <Typography variant="subtitle1" color="primary.main" gutterBottom>
                      {contribution.organization}
                    </Typography>
                  )}
                  
                  <Typography variant="body1" paragraph sx={{ mb: 2, minHeight: '60px' }}>
                    {contribution.description}
                  </Typography>
                  
                  {contribution.contributions && contribution.contributions.length > 0 && (
                    <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                      {contribution.contributions.slice(0, 3).map((contrib, idx) => (
                        <li key={idx}>
                          <Typography variant="body2" sx={{ mb: 0.5 }}>
                            {contrib}
                          </Typography>
                        </li>
                      ))}
                      {contribution.contributions.length > 3 && (
                        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mt: 1 }}>
                          +{contribution.contributions.length - 3} more contributions
                        </Typography>
                      )}
                    </Box>
                  )}
                  
                  {contribution.pullRequests && contribution.pullRequests.length > 0 && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        {contribution.pullRequests.length} Pull Request{contribution.pullRequests.length > 1 ? 's' : ''} merged
                      </Typography>
                    </Box>
                  )}
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {contribution.technologies.slice(0, 6).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'secondary.main',
                          color: 'white',
                          fontSize: '0.7rem',
                        }}
                      />
                    ))}
                    {contribution.technologies.length > 6 && (
                      <Chip
                        label={`+${contribution.technologies.length - 6} more`}
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
                <CardActions sx={{ p: 2, pt: 0, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Button
                    component={Link}
                    to={`/manendrapalsingh/opensource/${contribution.id}`}
                    variant="contained"
                    sx={{
                      backgroundColor: 'secondary.main',
                      color: 'white',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'secondary.dark',
                      },
                    }}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="outlined"
                    href={contribution.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<LaunchIcon />}
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
                    Repository
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OpenSourceContributions;
