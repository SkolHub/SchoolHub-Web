import { StudentSubjectModel } from '@/lib/types';
import StudentSubject from '@/components/nav-bar/student-subject';
import Link from 'next/link';

export default function StudentClass({
  title,
  subjects
}: {
  title: string;
  subjects: StudentSubjectModel[];
}) {
  return (
    <Link href='/student/subject/1/stream'>
      <h3 className='sticky left-0 top-[-2px] bg-white-overlap text-[0.9375rem] font-semibold text-primary-900'>
        {title}
      </h3>
      <div className='flex flex-col gap-2'>
        {subjects.map((subject, index) => (
          <StudentSubject key={index} {...subject} />
        ))}
      </div>
    </Link>
  );
}
