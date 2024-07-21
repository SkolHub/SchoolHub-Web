import { ReactNode } from 'react';
import StudentNav from '@/components/student-nav';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex w-screen h-screen'>
      <StudentNav />
      <main>{children}</main>
    </div>
  );
}
