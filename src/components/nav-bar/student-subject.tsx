import { StudentSubjectModel } from '@/lib/types';

export default function StudentSubject({
  title,
  teachers,
  icon
}: StudentSubjectModel) {
  return (
    <div className='flex items-center gap-3 rounded-[1.25rem] bg-white px-2.5 py-3'>
      <img className='max-w-6' src={`/${icon}.png`} alt='icon' />
      <div className='flex grow flex-col'>
        <label className='text-[0.9375rem] font-semibold text-primary-900'>
          {title}
        </label>
        <label className='text-xs font-semibold text-primary-600'>
          {teachers.join(', ')}
        </label>
      </div>
    </div>
  );
}
