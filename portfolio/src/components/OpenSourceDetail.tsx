import { Box, Container, Typography, Paper, Chip, Button, Divider, Grid, Link as MuiLink } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { openSourceContributions } from '../data/openSource';
import { getTechIcon } from './TechStackIcons';
import { getTechColor } from '../utils/techColors';

const OpenSourceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const contribution = openSourceContributions.find((c) => c.id === id);

  if (!contribution) {
    return (
      <Box sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h4">Contribution not found</Typography>
        <Button onClick={() => navigate('/manendrapalsingh')} sx={{ mt: 2 }}>
          Back to Home
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
          Back to Home
        </Button>

        <Paper elevation={3} sx={{ p: { xs: 3, sm: 5 }, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <GitHubIcon sx={{ mr: 2, color: 'primary.main', fontSize: 40 }} />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 1 }}>
                {contribution.title}
              </Typography>
              {contribution.organization && (
                <Typography variant="h5" color="primary.main" gutterBottom>
                  {contribution.organization}
                </Typography>
              )}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
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
              View Repository
            </Button>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
            Overview
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
            {contribution.description}
          </Typography>

          {contribution.contributions && contribution.contributions.length > 0 && (
            <>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Contributions Summary
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 4 }}>
                {contribution.contributions.map((contrib, idx) => (
                  <li key={idx}>
                    <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.7 }}>
                      {contrib}
                    </Typography>
                  </li>
                ))}
              </Box>
            </>
          )}

          {contribution.pullRequests && contribution.pullRequests.length > 0 && (
            <>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Pull Requests ({contribution.pullRequests.length})
              </Typography>
              <Grid container spacing={3}>
                {contribution.pullRequests.map((pr) => (
                  <Grid item xs={12} key={pr.number}>
                    <Paper
                      elevation={1}
                      sx={{
                        p: 3,
                        border: '1px solid',
                        borderColor: 'divider',
                        '&:hover': {
                          borderColor: 'primary.main',
                          boxShadow: 2,
                        },
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                        <Box sx={{ flex: 1 }}>
                          <MuiLink
                            href={pr.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              textDecoration: 'none',
                              '&:hover': {
                                textDecoration: 'underline',
                              },
                            }}
                          >
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}>
                              #{pr.number}: {pr.title}
                            </Typography>
                          </MuiLink>
                          {pr.date && (
                            <Typography variant="body2" color="text.secondary">
                              Merged on {pr.date}
                            </Typography>
                          )}
                        </Box>
                        <Chip
                          label={pr.status === 'merged' ? 'Merged' : 'Closed'}
                          size="small"
                          sx={{
                            backgroundColor: pr.status === 'merged' ? 'success.main' : 'grey.500',
                            color: 'white',
                            fontWeight: 600,
                          }}
                        />
                      </Box>
                      <Button
                        variant="outlined"
                        size="small"
                        href={pr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<LaunchIcon />}
                        sx={{
                          mt: 1,
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
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </>
          )}

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
            Technologies Used
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {contribution.technologies.map((tech) => {
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

export default OpenSourceDetail;
