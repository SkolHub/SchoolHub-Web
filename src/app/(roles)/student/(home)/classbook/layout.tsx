'use client';

import SubjectList from '@/app/(roles)/student/(home)/classbook/_components/subject-list';
import { ReactNode, useState } from 'react';
import AnimatedPage from '@/components/animated-page';
import { useRouter } from 'next/navigation';
import { useGetStudentSubjectsWithStats } from '@/api/subject';

export default function Layout({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<number>(-1);
  const router = useRouter();
  const subjects = useGetStudentSubjectsWithStats();

  function onSelect(index: number) {
    setSelected(index);
    router.push(`/student/classbook/${index}`);
  }

  if (subjects.isPending) {
    return <p>Loading...</p>;
  }

  if (subjects.isError) {
    return <p>Error: {subjects.error.message}</p>;
  }

  return (
    <AnimatedPage key='classbook'>
      <SubjectList
        subjects={subjects.data[0].subjects}
        selected={selected}
        onSelected={onSelect}
      />
      <div className='flex h-full grow flex-col gap-4 overflow-y-auto overflow-x-hidden rounded-r-[1.25rem] bg-white/60 p-[1.875rem]'>
        {children}
      </div>
    </AnimatedPage>
  );
}
