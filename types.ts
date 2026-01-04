
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  objective: string;
  tools: string[];
  approach: string;
  outcome: string;
  year: string;
  role: string;
  link?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Publication {
  title: string;
  abstract: string;
  date: string;
  link?: string;
}

export enum Section {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  PROJECTS = 'PROJECTS',
  SKILLS = 'SKILLS',
  PUBLICATIONS = 'PUBLICATIONS'
}
