import { StudentSubjectModel } from '@/lib/types';
import StudentSubject from '@/components/nav-bar/student-subject';
import Link from 'next/link';
import { Subject } from '@/api/subject';

export default function StudentClass({
  name,
  subjects
}: {
  name: string;
  subjects: Subject[];
}) {
  return (
    <div>
      <h3 className='sticky left-0 top-[-2px] bg-white-overlap text-[0.9375rem] font-semibold text-primary-900'>
        {name}
      </h3>
      <div className='flex flex-col gap-2'>
        {subjects.map((subject, index) => (
          <StudentSubject key={index} {...subject} />
        ))}
      </div>
    </div>
  );
}
