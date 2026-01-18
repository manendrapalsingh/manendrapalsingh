import { Box, Container, Typography, Tabs, Tab, Paper, Card, CardContent, CardActions, Button, Chip, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { projects } from '../data/projects';
import { openSourceContributions } from '../data/openSource';
import { whileInViewFadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import { getTechIcon } from './TechStackIcons';
import { getTechColor } from '../utils/techColors';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`portfolio-tabpanel-${index}`}
      aria-labelledby={`portfolio-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const PortfolioShowcase = () => {
  // Projects tab hidden - set to true when ready to show projects
  const SHOW_PROJECTS_TAB = false;
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const skillCategories = {
    'Backend & Architecture': ['Go', 'Java', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'REST API', 'Microservices', 'Event-Driven'],
    'Frontend': ['React', 'Redux', 'TypeScript', 'JavaScript', 'Material UI', 'TailwindCSS', 'HTML5', 'CSS3'],
    'Data, Infra & Observability': [
      'Kafka',
      'RabbitMQ',
      'Redis',
      'PostgreSQL',
      'PostGIS',
      'MongoDB',
      'SQL',
      'Docker',
      'Kubernetes',
      'Helm',
      'AWS',
      'GCP',
      'CI/CD',
      'Prometheus',
      'Grafana',
    ],
    'Tools & Platforms': ['Git', 'GitHub', 'Bitbucket', 'SonarQube', 'Postman', 'Swagger', 'Jest'],
  };

  return (
    <Box
      id="portfolio"
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
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
              Portfolio Showcase
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
              Explore my journey through projects, open source contributions, and technical expertise. Each section represents a milestone in my continuous learning path.
            </Typography>
          </Box>
        </motion.div>

        <Paper 
          elevation={3} 
          sx={{ 
            borderRadius: 3, 
            overflow: 'hidden',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            sx={{
              borderBottom: 2,
              borderColor: 'divider',
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                py: 2.5,
                minHeight: 64,
              },
              '& .Mui-selected': {
                color: 'primary.main',
              },
              '& .MuiTabs-indicator': {
                height: 3,
                borderRadius: '3px 3px 0 0',
              },
            }}
          >
            {SHOW_PROJECTS_TAB && (
              <Tab
                icon={<CodeIcon sx={{ mb: 0.5 }} />}
                iconPosition="start"
                label="Projects"
                id="portfolio-tab-0"
                aria-controls="portfolio-tabpanel-0"
              />
            )}
            <Tab
              icon={<BuildIcon sx={{ mb: 0.5 }} />}
              iconPosition="start"
              label="Open Source"
              id={`portfolio-tab-${SHOW_PROJECTS_TAB ? 1 : 0}`}
              aria-controls={`portfolio-tabpanel-${SHOW_PROJECTS_TAB ? 1 : 0}`}
            />
            <Tab
              icon={<SchoolIcon sx={{ mb: 0.5 }} />}
              iconPosition="start"
              label="Tech Stack"
              id={`portfolio-tab-${SHOW_PROJECTS_TAB ? 2 : 1}`}
              aria-controls={`portfolio-tabpanel-${SHOW_PROJECTS_TAB ? 2 : 1}`}
            />
          </Tabs>

          <Box sx={{ p: { xs: 3, sm: 4 } }}>
            <AnimatePresence mode="wait">
              {SHOW_PROJECTS_TAB && (
                <TabPanel value={value} index={0} key="projects">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    <Grid container spacing={3}>
                      {projects.map((project) => (
                        <Grid item xs={12} md={6} lg={4} key={project.id}>
                          <motion.div variants={staggerItem}>
                            <Card
                              component={motion.div}
                              whileHover={{ y: -12, scale: 1.02 }}
                              sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 3,
                                border: '1px solid',
                                borderColor: 'divider',
                                transition: 'all 0.3s ease',
                              }}
                            >
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                          {project.title}
                        </Typography>
                        {project.company && (
                          <Typography variant="subtitle2" color="primary.main" gutterBottom>
                            {project.company}
                          </Typography>
                        )}
                        <Typography variant="body2" paragraph sx={{ mb: 2, color: 'text.secondary', minHeight: '60px' }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                          {project.techStack.slice(0, 4).map((tech) => (
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
                        </Box>
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0 }}>
                        {project.link && (
                          <Button
                            size="small"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            endIcon={<LaunchIcon />}
                            sx={{ color: 'primary.main' }}
                          >
                            Live Demo
                          </Button>
                        )}
                        <Button
                          component={Link}
                          to={`/manendrapalsingh/project/${project.id}`}
                          size="small"
                          endIcon={<ArrowForwardIcon />}
                          sx={{ color: 'primary.main', fontWeight: 600 }}
                        >
                          Details
                        </Button>
                      </CardActions>
                            </Card>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </motion.div>
                </motion.div>
              </TabPanel>
              )}

              <TabPanel value={value} index={SHOW_PROJECTS_TAB ? 1 : 0} key="opensource">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    <Grid container spacing={3}>
                      {openSourceContributions.map((contribution) => (
                        <Grid item xs={12} md={6} key={contribution.id}>
                          <motion.div variants={staggerItem}>
                            <Card
                              component={motion.div}
                              whileHover={{ y: -12, scale: 1.02 }}
                              sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 3,
                                border: '1px solid',
                                borderColor: 'divider',
                                transition: 'all 0.3s ease',
                              }}
                            >
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                          {contribution.title}
                        </Typography>
                        {contribution.organization && (
                          <Typography variant="subtitle2" color="primary.main" gutterBottom>
                            {contribution.organization}
                          </Typography>
                        )}
                        <Typography variant="body2" paragraph sx={{ mb: 2, color: 'text.secondary', minHeight: '60px' }}>
                          {contribution.description}
                        </Typography>
                        {contribution.pullRequests && (
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {contribution.pullRequests.length} Pull Request{contribution.pullRequests.length > 1 ? 's' : ''} merged
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button
                          component={Link}
                          to={`/manendrapalsingh/opensource/${contribution.id}`}
                          variant="outlined"
                          size="small"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
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
                          Details
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
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
                          Repository
                        </Button>
                      </CardActions>
                            </Card>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </motion.div>
                </motion.div>
              </TabPanel>

              <TabPanel value={value} index={SHOW_PROJECTS_TAB ? 2 : 1} key="techstack">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {Object.entries(skillCategories).map(([category, skills]) => (
                    <motion.div
                      key={category}
                      initial={whileInViewFadeInUp.initial}
                      whileInView={whileInViewFadeInUp.whileInView}
                      viewport={whileInViewFadeInUp.viewport}
                      transition={whileInViewFadeInUp.transition}
                    >
                      <Paper elevation={0} sx={{ p: { xs: 3, sm: 4 }, mb: 4, backgroundColor: 'background.default', borderRadius: 3 }}>
                        <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
                          {category}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                          {skills.map((skill) => {
                            const icon = getTechIcon(skill);
                            const colors = getTechColor(skill);
                            return (
                              <motion.div key={skill} whileHover={{ scale: 1.05, y: -2 }}>
                                <Chip
                                  icon={icon || undefined}
                                  label={skill}
                                  sx={{
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    height: 28,
                                    backgroundColor: colors.bg,
                                    color: colors.text,
                                    cursor: 'pointer',
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
                    </motion.div>
                  ))}
                </motion.div>
              </TabPanel>
            </AnimatePresence>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default PortfolioShowcase;
