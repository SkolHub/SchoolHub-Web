'use client';

import SubjectHeaderCard from '@/app/(roles)/student/(home)/classbook/_components/subject-header-card';
import {
  useGetStudentSubjectAbsences,
  useGetStudentSubjectGrades
} from '@/api/grade';
import { useGetStudentSubjectsWithStats } from '@/api/subject';
import GradesCard from '@/components/grades-card';
import AbsencesCard from '@/components/absences-card';

export default function Page({ params }: { params: { id: string } }) {
  const grades = useGetStudentSubjectGrades(+params.id);
  const absences = useGetStudentSubjectAbsences(+params.id);
  const subjects = useGetStudentSubjectsWithStats();

  if (grades.isPending || absences.isPending || subjects.isPending) {
    return <h1>Loading...</h1>;
  }

  if (grades.isError || absences.isError || subjects.isError) {
    return <h1>Error</h1>;
  }

  const subject = subjects.data
    ?.at(0)
    ?.subjects.find((subject) => subject.id == params.id);

  console.log(params.id);

  const subjectGrades = grades.data?.length;
  const maxGrades = subject?.metadata.minGrades;
  const average = subject?.average;
  const absencesCount = absences.data?.length;
  const unexcusedAbsences = absences.data?.filter(
    (absence) => !absence.excused
  ).length;

  return (
    <>
      {+params.id !== -1 ? (
        <>
          <SubjectHeaderCard
            {...subject}
            average={average ?? 0}
            grades={subjectGrades ?? 0}
            maxGrades={maxGrades}
            absences={absencesCount ?? 0}
            unexcusedAbsences={unexcusedAbsences ?? 0}
            title={subject?.name ?? ''}
            icon={subject?.icon ?? 'books'}
            assessmentChance={0}
            teachers={subject?.teachers?.map((teacher) => teacher.name) ?? ['']}
          />
          <GradesCard grades={grades.data} />
          <AbsencesCard absences={absences.data} />
        </>
      ) : (
        <h1 className='flex h-full w-full items-center justify-center text-[2rem] font-semibold text-primary-400'>
          No subject selected
        </h1>
      )}
    </>
  );
}
