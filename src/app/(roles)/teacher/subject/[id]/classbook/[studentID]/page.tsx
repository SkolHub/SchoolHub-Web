'use client';

import { useGetStudentAbsences, useGetStudentGrades } from '@/api/grade';
import StudentHeaderCard from '@/app/(roles)/teacher/subject/[id]/classbook/_components/student-header-card';
import StudentGradesCard from '@/app/(roles)/teacher/subject/[id]/classbook/_components/student-grades-card';
import StudentAbsencesCard from '@/app/(roles)/teacher/subject/[id]/classbook/_components/student-absences-card';

export default function Page({
  params: { id, studentID }
}: {
  params: { id: string; studentID: string };
}) {
  const grades = useGetStudentGrades({
    subjectID: id,
    studentID: studentID
  });
  const absences = useGetStudentAbsences({
    subjectID: id,
    studentID: studentID
  });

  if (grades.isPending || absences.isPending) {
    return <p>Loading...</p>;
  }

  if (grades.isError || absences.isError) {
    return <p>Error...</p>;
  }

  return (
    <div>
      {/*<div className='flex h-full grow flex-col gap-4 overflow-y-auto overflow-x-hidden rounded-[1.25rem] bg-white/60 p-[1.875rem] sm:rounded-l-[0] sm:rounded-r-[1.25rem]'>*/}
      {+id !== -1 ? (
        <div className='gap-4'>
          <StudentHeaderCard studentID={studentID.toString()} subjectID={id} />
          <StudentGradesCard grades={grades.data} />
          <StudentAbsencesCard absences={absences.data} />
        </div>
      ) : (
        <h1 className='flex h-full w-full items-center justify-center text-center text-[2rem] font-semibold text-primary-400'>
          No student selected
        </h1>
      )}
    </div>
  );
}
