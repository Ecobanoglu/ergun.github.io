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
