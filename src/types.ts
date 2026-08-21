export type ProjectCategory = 'all' | 'game' | 'vr' | 'ai' | 'algorithms';

export interface Project {
  id: string;
  title: string;
  category: 'game' | 'vr' | 'ai' | 'algorithms';
  categoryLabel: string;
  subtitle: string;
  description: string;
  longDescription: string;
  coverImage: string;
  screenshots?: string[];
  tags: string[];
  techStack: string[];
  year: string;
  featured?: boolean;
  status?: string;
  metrics?: {
    label: string;
    value: string;
  };
  links: {
    github?: string;
    itchio?: string;
    liveDemo?: string;
    videoUrl?: string;
  };
  features: string[];
  technicalHighlights: string[];
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  type: 'education' | 'project' | 'award' | 'certification';
  typeLabel: string;
  description: string;
  achievements: string[];
  skills: string[];
  accentColor: 'teal' | 'orange' | 'amber' | 'blue';
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient", "Familiar"
    experience: string;
    categoryTag: string;
  }[];
}

export interface FocusArea {
  id: string;
  title: string;
  projectCount: string;
  description: string;
  iconName: string;
  bgColor: string;
  iconBg: string;
  textColor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  count: string;
  description: string;
  iconType: 'game' | 'ai' | 'code' | 'architecture';
  bgColor: string;
}

export interface RecognitionItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  quote: string;
  year: string;
  tag: string;
  avatarText: string;
}

export interface PersonalInfo {
  name: string;
  greeting: string;
  tagline: string;
  bio: string;
  education: string;
  educationDetail: string;
  email: string;
  phone: string;
  location: string;
  status: string;
  languages: {
    language: string;
    level: string;
  }[];
  socialLinks: {
    github: string;
    itchio: string;
    email: string;
  };
  avatarUrl?: string;
  stats: {
    label: string;
    value: string;
    suffix?: string;
    description: string;
  }[];
}

