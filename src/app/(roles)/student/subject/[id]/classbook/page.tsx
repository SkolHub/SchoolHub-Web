'use client';

import GradesCard from '@/components/grades-card';
import AbsencesCard from '@/components/absences-card';
import AnimatedPage from '@/components/animated-page';
import {
  useGetStudentSubjectAbsences,
  useGetStudentSubjectGrades
} from '@/api/grade';

export default function Classbook({
  params: { id }
}: {
  params: {
    id: string;
  };
}) {
  const grades = useGetStudentSubjectGrades(+id);
  const absences = useGetStudentSubjectAbsences(+id);

  if (grades.isPending || absences.isPending) {
    return <h1>Loading...</h1>;
  }

  if (grades.isError || absences.isError) {
    return <h1>Error</h1>;
  }

  return (
    <AnimatedPage
      key='classboook'
      className='flex flex-col overflow-auto pb-4 scrollbar-hide'
    >
      <section className='flex gap-4 rounded-[1.25rem] bg-white/70 p-4 max-sm:flex-col'>
        <GradesCard className='grow basis-0' grades={grades.data} />
        <AbsencesCard className='grow basis-0' absences={absences.data} />
      </section>
    </AnimatedPage>
  );
}
