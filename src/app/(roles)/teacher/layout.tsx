import { ReactNode } from 'react';
import TeacherNav from '@/components/nav-bar/teacher-nav';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex h-screen w-screen overflow-hidden'>
      <TeacherNav />
      <div className='flex grow flex-col gap-6 overflow-hidden px-8 pt-6'>
        {children}
      </div>
    </div>
  );
}
