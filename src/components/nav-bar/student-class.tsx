import { StudentSubjectModel } from '@/lib/types';
import StudentSubject from '@/components/nav-bar/student-subject';

export default function StudentClass({
  title,
  subjects
}: {
  title: string;
  subjects: StudentSubjectModel[];
}) {
  return (
    <div>
      {/*Add for sticky class titles: "bg-white-overlap sticky left-0 top-0"*/}
      <h3 className='text-[0.9375rem] font-semibold text-primary-900 bg-white-overlap sticky left-0 top-0'>
        {title}
      </h3>
      <div className='flex flex-col gap-2'>
        {subjects.map((subject, index) => (
          <StudentSubject key={index} {...subject} />
        ))}
      </div>
    </div>
  );
}
