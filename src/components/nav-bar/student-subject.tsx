import { Subject } from '@/api/subject';
import Link from 'next/link';

export default function StudentSubject(subject: Subject) {
  return (
    <Link
      href={`/student/subject/${subject.id}/stream`}
      className='flex cursor-pointer items-center gap-1 rounded-[1.25rem] bg-white px-2.5 py-3'
    >
      <img className='max-w-10' src={`/${subject.icon}.png`} alt='icon' />
      <div className='flex grow cursor-pointer flex-col'>
        <label className='text-[0.9375rem] font-semibold text-primary-900'>
          {subject.name}
        </label>
        <label className='text-xs font-semibold text-primary-600'>
          {(subject.teachers ?? []).map((teacher) => teacher.name).join(', ')}
        </label>
      </div>
    </Link>
  );
}
