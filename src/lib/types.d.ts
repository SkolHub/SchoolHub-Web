import { ReactNode } from 'react';

export interface StudentSubjectModel {
  icon: string;
  title: string;
  teachers: string[];
}

export interface AnimatedTabModel {
  static: ReactNode;
  animated: ReactNode;
}
