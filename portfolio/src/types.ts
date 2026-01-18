export interface Project {
  id: string;
  title: string;
  company?: string;
  description: string;
  longDescription?: string;
  features: string[];
  techStack: string[];
  link?: string;
  githubLink?: string;
  duration?: string;
  role?: string;
  challenges?: string[];
  achievements?: string[];
  impact?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  shortDescription: string;
  achievements: string[];
  technologies: string[];
  projectTitle?: string;
  projectLink?: string;
  companyWebsite?: string;
  abstractDescription?: string;
  fullDescription?: string;
}

export interface Skill {
  name: string;
  category: 'backend' | 'frontend' | 'infra' | 'tools';
}

export interface OpenSourceContribution {
  id: string;
  title: string;
  description: string;
  repository: string;
  organization?: string;
  contributions?: string[];
  pullRequests?: Array<{
    number: number;
    title: string;
    url: string;
    status: 'merged' | 'closed';
    date?: string;
  }>;
  technologies: string[];
}
