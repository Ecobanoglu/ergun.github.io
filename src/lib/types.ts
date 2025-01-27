export interface IExperienceItem {
  title: string;
  company?: string;
  time: string;
  location: string;
  type: string;
  description: string[];
  tags: string[];
}

export interface IValue {
  title: string;
  value: string;
}

export interface IAbility {
  title: string;
  items: string[];
}

interface IProjectLink {
  source?: string;
  live?: string;
}
export interface IProject {
  title: string;
  image?: string;
  description: string;
  tags?: string[];
  links: IProjectLink;
}
