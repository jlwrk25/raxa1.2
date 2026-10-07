export interface ClientProfile {
  id: string;
  name: string;
  accountId: string;
  userId: string;
  trialDaysLeft: number;
  modules: string[];
}

export interface CommentItem {
  id: string;
  name: string;
  comment: string;
  rating: number;
  reply?: string;
  date: string;
  color: string;
}

export type ActiveModal = 'login' | 'meetJuan' | 'privacy' | 'support' | 'about' | 'projects' | 'trial' | null;

export interface ModuleInfo {
  id: string;
  title: string;
  description: string;
  iconType: string;
  x: string;
  y: string;
  w?: string;
  h?: string;
  isLg?: boolean;
}
