// Technology brand colors mapping - shields.io "for-the-badge" style
// Uses consistent dark background with brand-colored logos
export const getTechColor = (techName: string): { bg: string; text: string; icon: string } => {
  const colorMap: Record<string, { bg: string; text: string; icon: string }> = {
    // Backend
    'Go': { bg: '#181818', text: '#ffffff', icon: '#00ADD8' },
    'Java': { bg: '#181818', text: '#ffffff', icon: '#ED8B00' },
    'JavaScript': { bg: '#181818', text: '#ffffff', icon: '#F7DF1E' },
    'TypeScript': { bg: '#181818', text: '#ffffff', icon: '#3178C6' },
    'Node.js': { bg: '#181818', text: '#ffffff', icon: '#339933' },
    'Express.js': { bg: '#181818', text: '#ffffff', icon: '#ffffff' },
    'Express': { bg: '#181818', text: '#ffffff', icon: '#ffffff' },
    
    // Frontend
    'React': { bg: '#181818', text: '#61DAFB', icon: '#61DAFB' },
    'Redux': { bg: '#181818', text: '#ffffff', icon: '#764ABC' },
    'Material UI': { bg: '#181818', text: '#ffffff', icon: '#007FFF' },
    'TailwindCSS': { bg: '#181818', text: '#ffffff', icon: '#06B6D4' },
    'HTML5': { bg: '#181818', text: '#ffffff', icon: '#E34F26' },
    'CSS3': { bg: '#181818', text: '#ffffff', icon: '#1572B6' },
    
    // Data/Infra
    'Kafka': { bg: '#181818', text: '#ffffff', icon: '#231F20' },
    'RabbitMQ': { bg: '#181818', text: '#ffffff', icon: '#FF6600' },
    'Redis': { bg: '#181818', text: '#ffffff', icon: '#DC382D' },
    'PostgreSQL': { bg: '#181818', text: '#ffffff', icon: '#336791' },
    'PostGIS': { bg: '#181818', text: '#ffffff', icon: '#336791' },
    'MongoDB': { bg: '#181818', text: '#ffffff', icon: '#47A248' },
    'Docker': { bg: '#181818', text: '#ffffff', icon: '#2496ED' },
    'Kubernetes': { bg: '#181818', text: '#ffffff', icon: '#326CE5' },
    'AWS': { bg: '#181818', text: '#ffffff', icon: '#FF9900' },
    'GCP': { bg: '#181818', text: '#ffffff', icon: '#4285F4' },
    
    // Tools
    'Git': { bg: '#181818', text: '#ffffff', icon: '#F05032' },
    'GitHub': { bg: '#181818', text: '#ffffff', icon: '#ffffff' },
    'Bitbucket': { bg: '#181818', text: '#ffffff', icon: '#0052CC' },
    'Postman': { bg: '#181818', text: '#ffffff', icon: '#FF6C37' },
    'Swagger': { bg: '#181818', text: '#ffffff', icon: '#85EA2D' },
    'Jest': { bg: '#181818', text: '#ffffff', icon: '#C21325' },
    
    // Additional
    'React.js': { bg: '#181818', text: '#61DAFB', icon: '#61DAFB' },
    'Node': { bg: '#181818', text: '#ffffff', icon: '#339933' },
    'REST API': { bg: '#181818', text: '#ffffff', icon: '#ffffff' },
    'Microservices': { bg: '#181818', text: '#ffffff', icon: '#ffffff' },
    'Event-Driven': { bg: '#181818', text: '#ffffff', icon: '#ffffff' },
    'SQL': { bg: '#181818', text: '#ffffff', icon: '#ffffff' },
    'CI/CD': { bg: '#181818', text: '#ffffff', icon: '#ffffff' },
  };

  return colorMap[techName] || { bg: '#181818', text: '#ffffff', icon: '#ffffff' };
};
