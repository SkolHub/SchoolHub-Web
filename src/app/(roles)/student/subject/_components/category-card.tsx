import { ReactNode } from 'react';

export default function CategoryCard({
  title,
  icon,
  children
}: {
  title: string;
  icon: string;
  children: ReactNode;
}) {
  return (
    <div className='flex flex-col rounded-2xl bg-white px-5 pb-8 pt-3'>
      <div className='flex items-center justify-between gap-8'>
        <div className='flex items-center gap-2'>
          <i className={`fa ${icon} text-xl text-primary-800`} />
          <label className='text-base font-semibold text-primary-800'>
            {title}
          </label>
        </div>
        <i className='fa fa-chevron-right text-primary-700' />
      </div>
      <div className='flex grow flex-col justify-center gap-7'>{children}</div>
    </div>
  );
}
