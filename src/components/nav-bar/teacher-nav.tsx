'use client';

import NavWrapper from '@/components/nav-bar/nav-wrapper';
import TeacherClassCard from '@/components/nav-bar/teacher-class-card';
import { useGetTeacherSubjects } from '@/api/subject';

export default function TeacherNav() {
  const schoolClasses = useGetTeacherSubjects();

  if (schoolClasses.isPending) {
    return <p>Loading...</p>;
  }

  if (schoolClasses.isError) {
    return <p>Error: {schoolClasses.error.message}</p>;
  }

  return (
    <NavWrapper className='gap-2'>
      {schoolClasses.data.map((schoolClass, index) => (
        <TeacherClassCard key={index} schoolClass={schoolClass} />
      ))}
    </NavWrapper>
  );
}
