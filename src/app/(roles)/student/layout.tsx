import { ReactNode } from 'react';
import StudentNav from '@/components/nav-bar/student-nav';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex h-screen w-screen'>
      <StudentNav />
      <div className='flex grow flex-col gap-5 px-8 pt-6'>{children}</div>
    </div>
  );
}
