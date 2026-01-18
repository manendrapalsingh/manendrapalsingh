import { Box, Container, Typography, Chip, Paper } from '@mui/material';

const Skills = () => {
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
      id="skills"
      sx={{
        py: 10,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Tech Stack & Tools
        </Typography>
        {Object.entries(skillCategories).map(([category, skills]) => (
          <Paper key={category} elevation={0} sx={{ p: { xs: 3, sm: 4 }, mb: 4, backgroundColor: 'background.default' }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
              {category}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    fontSize: '0.95rem',
                    height: 36,
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                />
              ))}
            </Box>
          </Paper>
        ))}
      </Container>
    </Box>
  );
};

export default Skills;
