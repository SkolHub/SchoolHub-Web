'use client';

import NavWrapper from '@/components/nav-bar/nav-wrapper';
import StudentClass from '@/components/nav-bar/student-class';
import { useGetStudentSubjectsWithStats } from '@/api/subject';

export default function StudentNav() {
  let subjects = useGetStudentSubjectsWithStats();

  if (subjects.isPending) {
    return <NavWrapper>Loading...</NavWrapper>;
  }

  if (subjects.isError) {
    return <NavWrapper>Error: {subjects.error.message}</NavWrapper>;
  }

  return (
    <NavWrapper>
      {subjects.data.map((schoolClass, index) => (
        <StudentClass key={index} {...schoolClass} />
      ))}
    </NavWrapper>
  );
}
