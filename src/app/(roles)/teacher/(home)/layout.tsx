'use client';

import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import { TabModel } from '@/lib/types';
import TeacherHeader from '@/components/teacher-header';

const tabs: TabModel[] = [
  {
    title: 'Assignments',
    href: '/teacher/assignments',
    icon: 'fa-file-lines'
  }
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <TeacherHeader tabs={tabs} />
      <AnimatePresence initial={false} mode='popLayout'>
        <main className='w-full grow overflow-hidden pb-4'>{children}</main>
      </AnimatePresence>
    </>
  );
}
