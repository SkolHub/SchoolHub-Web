import Link from 'next/link';

export default function TeacherClass({
  schoolClasses,
  subjects
}: {
  schoolClasses: string[];
  subjects: {
    icon: string;
    title: string;
  }[];
}) {
  if (subjects.length === 1) {
    return (
      <Link
        href='/teacher/subject/1/stream'
        className='flex items-center gap-3 rounded-[1.25rem] bg-white px-2.5 py-3'
      >
        <img className='max-w-6' src={`/${subjects[0].icon}.png`} alt='icon' />
        <div className='flex grow flex-col'>
          <label className='text-[0.9375rem] font-semibold text-primary-900'>
            {schoolClasses.join(', ')}
          </label>
          <label className='text-xs font-semibold text-primary-600'>
            {subjects[0].title}
          </label>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href='/teacher/subject/1/stream'
      className='flex flex-col gap-3 rounded-[1.25rem] bg-white py-4 pl-3 pr-4'
    >
      <h1 className='text-base font-semibold text-primary-900'>
        {schoolClasses.join(', ')}
      </h1>
      <div className='flex flex-col gap-4'>
        {subjects.map((subject, index) => (
          <div key={index} className='flex items-center justify-between'>
            <div className='flex items-center'>
              <img
                className='max-w-6'
                src={`/${subject.icon}.png`}
                alt={subject.icon}
              />
              <label className='text-base font-semibold text-primary-700'>
                {subject.title}
              </label>
            </div>
            <i className='fa fa-chevron-right text-primary-500' />
          </div>
        ))}
      </div>
    </Link>
  );
}
