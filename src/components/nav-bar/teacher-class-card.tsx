import Link from 'next/link';
import { TeacherClass } from '@/api/subject';

export default function TeacherClassCard({
  schoolClass
}: {
  schoolClass: TeacherClass;
}) {
  if (schoolClass.subjects.length === 1) {
    return (
      <Link
        href={`/teacher/subject/${schoolClass.subjects[0].id}/stream`}
        className='flex items-center gap-1 rounded-[1.25rem] bg-white px-2.5 py-3'
      >
        <img
          className='max-w-10'
          src={`/${schoolClass.subjects[0].icon}.png`}
          alt='icon'
        />
        <div className='flex grow flex-col'>
          <label className='text-[0.9375rem] font-semibold text-primary-900'>
            {schoolClass.schoolClasses.map((s) => s.name).join(', ')}
          </label>
          <label className='text-xs font-semibold text-primary-600'>
            {schoolClass.subjects[0].name}
          </label>
        </div>
      </Link>
    );
  }

  return (
    <div
      className='flex flex-col gap-3 rounded-[1.25rem] bg-white py-4 pl-3 pr-4'
    >
      <h1 className='text-base font-semibold text-primary-900'>
        {schoolClass.schoolClasses.map((s) => s.name).join(', ')}
      </h1>
      <div className='flex flex-col gap-4'>
        {schoolClass.subjects.map((subject, index) => (
          <Link href={`/teacher/subject/${subject.id}/stream`} key={index} className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <img
                className='max-w-8'
                src={`/${subject.icon}.png`}
                alt={subject.icon}
              />
              <label className='text-base font-semibold text-primary-700'>
                {subject.name}
              </label>
            </div>
            <i className='fa fa-chevron-right text-primary-500' />
          </Link>
        ))}
      </div>
    </div>
  );
}
