import { Box, Chip, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const chapters = [
  {
    code: '01 / WEALTH PLATFORM',
    company: 'Alpheya',
    title: 'Reliable multi-tenant product and platform engineering',
    description: 'Operating ten services across five Azure environments while improving multi-zone resilience, disaster recovery, GitOps delivery, and production operations.',
    signals: ['99.99% target', '15 min zonal recovery', '4 hr DR', 'AI release + SRE tools'],
  },
  {
    code: '02 / NATIONAL EV NETWORK',
    company: 'NPCI · Beckn Protocol',
    title: 'Interoperability for distributed charging infrastructure',
    description: 'Built Go services, event-driven workflows, geospatial discovery, backpressure handling, and cross-network observability for a decentralized EV ecosystem.',
    signals: ['18 CPOs', 'Kafka + RabbitMQ', 'PostGIS', 'OAuth 2.0 + OIDC'],
  },
  {
    code: '03 / HIGH-SCALE MOBILITY',
    company: 'Gojek',
    title: 'Low-latency booking and resilient payment flows',
    description: 'Optimized production ride-booking systems, migrated services to Kubernetes, and supported idempotent high-throughput payment integrations.',
    signals: ['10 ms latency', '10K–20K RPM', '2K transactions/min', '3 services migrated'],
  },
  {
    code: '04 / DIGITAL LENDING',
    company: 'Sigma Infosolutions',
    title: 'Configurable loan origination at banking scale',
    description: 'Designed Go microservices, workflow orchestration, React administration tools, reusable UI foundations, RBAC, and production delivery pipelines.',
    signals: ['800 branches', '3,000 users', '100+ APIs', '6–7 products'],
  },
];

const EngineeringJourney = () => (
  <Box id="journey" component="section" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'rgba(4, 12, 23, 0.76)' }}>
    <Container maxWidth="lg">
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '.7fr 1.3fr' }, gap: { xs: 5, md: 9 } }}>
        <Box sx={{ position: { md: 'sticky' }, top: { md: 120 }, alignSelf: 'start' }}>
          <Typography sx={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', color: 'secondary.main', letterSpacing: '.14em', fontSize: '.75rem', mb: 2 }}>
            $ history --impact
          </Typography>
          <Typography variant="h2" sx={{ mb: 2 }}>Systems I’ve shipped.</Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
            A career spanning wealth technology, national digital infrastructure, high-volume mobility, and configurable banking products—built across backend, cloud, and frontend surfaces.
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', '&::before': { content: '""', position: 'absolute', left: { xs: 12, sm: 18 }, top: 18, bottom: 18, width: 1, background: 'linear-gradient(#5eead4, rgba(56,189,248,.15))' } }}>
          {chapters.map((chapter, index) => (
            <Box
              key={chapter.code}
              component={motion.article}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: .3 }}
              transition={{ duration: .5, delay: index * .08 }}
              sx={{ position: 'relative', pl: { xs: 5, sm: 7 }, pb: index === chapters.length - 1 ? 0 : 5 }}
            >
              <Box sx={{ position: 'absolute', left: { xs: 7, sm: 13 }, top: 8, width: 11, height: 11, borderRadius: '50%', backgroundColor: 'secondary.main', boxShadow: '0 0 0 5px rgba(94,234,212,.1), 0 0 24px rgba(94,234,212,.55)' }} />
              <Box sx={{ p: { xs: 2.5, sm: 3.5 }, border: '1px solid', borderColor: 'divider', borderRadius: 3, background: 'linear-gradient(145deg, rgba(15,33,52,.92), rgba(7,17,31,.92))', transition: 'transform .3s ease, border-color .3s ease, box-shadow .3s ease', '&:hover': { transform: 'translateY(-5px)', borderColor: 'rgba(94,234,212,.38)', boxShadow: '0 24px 60px rgba(0,0,0,.24)' } }}>
                <Typography sx={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', color: 'primary.main', fontSize: '.68rem', letterSpacing: '.12em', mb: 1 }}>{chapter.code}</Typography>
                <Typography variant="h5" sx={{ mb: .5 }}>{chapter.title}</Typography>
                <Typography color="secondary.main" sx={{ fontWeight: 700, mb: 1.5 }}>{chapter.company}</Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.75, mb: 2.5 }}>{chapter.description}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {chapter.signals.map((signal) => <Chip key={signal} label={signal} size="small" variant="outlined" />)}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
);

export default EngineeringJourney;
