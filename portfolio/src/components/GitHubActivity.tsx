import { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, Chip, CircularProgress, Container, Grid, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from 'framer-motion';
import { whileInViewFadeInUp } from '../utils/animations';

type GitHubProfile = {
  public_repos: number;
  followers: number;
  html_url: string;
};

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  updated_at: string;
};

const USERNAME = 'manendrapalsingh';

const GitHubActivity = () => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repositories, setRepositories] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const loadGitHubData = async () => {
      try {
        const [profileResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=12`, { signal: controller.signal }),
        ]);

        if (!profileResponse.ok || !reposResponse.ok) {
          throw new Error('GitHub API request failed');
        }

        const profileData = await profileResponse.json() as GitHubProfile;
        const repoData = await reposResponse.json() as GitHubRepo[];
        setProfile(profileData);
        setRepositories(repoData.filter((repo) => !repo.fork).slice(0, 6));
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          setRepositories([]);
        }
      } finally {
        setLoading(false);
      }
    };

    loadGitHubData();
    return () => controller.abort();
  }, []);

  return (
    <Box id="github" component="section" sx={{ py: 10, backgroundColor: 'rgba(13, 27, 45, 0.68)', backdropFilter: 'blur(10px)' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={whileInViewFadeInUp.initial}
          whileInView={whileInViewFadeInUp.whileInView}
          viewport={whileInViewFadeInUp.viewport}
          transition={whileInViewFadeInUp.transition}
        >
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Live GitHub Activity
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 720, mx: 'auto' }}>
              Public repository data is loaded directly from GitHub, so this section stays current as new work is published.
            </Typography>
            {profile && (
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2, flexWrap: 'wrap' }}>
                <Chip label={`${profile.public_repos} public repositories`} />
                <Chip label={`${profile.followers} followers`} />
              </Box>
            )}
          </Box>

          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
              <CircularProgress aria-label="Loading GitHub activity" />
            </Box>
          ) : repositories.length > 0 ? (
            <Grid container spacing={3}>
              {repositories.map((repo) => (
                <Grid item xs={12} sm={6} md={4} key={repo.id}>
                  <Card component={motion.div} whileHover={{ y: -8, borderColor: 'rgba(94,234,212,.45)' }} sx={{ height: '100%', border: '1px solid', borderColor: 'divider', background: 'linear-gradient(145deg, rgba(20,40,62,.9), rgba(8,19,33,.95))' }}>
                    <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h6" sx={{ mb: 1 }}>{repo.name}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, mb: 2 }}>
                        {repo.description || 'Public engineering project on GitHub.'}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2, flexWrap: 'wrap' }}>
                        {repo.language && <Chip size="small" label={repo.language} color="primary" />}
                        <Chip size="small" label={`${repo.stargazers_count} stars`} variant="outlined" />
                      </Box>
                      <Button href={repo.html_url} target="_blank" rel="noopener noreferrer" endIcon={<LaunchIcon />}>
                        View repository
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                Live GitHub data is temporarily unavailable.
              </Typography>
              <Button
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubIcon />}
                variant="contained"
              >
                View GitHub profile
              </Button>
            </Box>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default GitHubActivity;
