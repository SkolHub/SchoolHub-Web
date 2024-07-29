export default function AssignmentCard({
  title,
  subject,
  icon,
  due
}: {
  title: string;
  subject: string;
  icon: string;
  due: Date;
}) {
  return (
    <div className='flex justify-between gap-2 rounded-2xl bg-white px-4 py-2'>
      <div className='flex flex-col'>
        <h3 className='max-w-[10rem] break-words text-[0.875rem] font-semibold text-primary-900'>
          {title}
        </h3>
        <div className='flex items-center'>
          <img className='h-6' src={`/${icon}.png`} alt='icon' />
          <label className='text-xs font-semibold text-primary-700'>
            {subject}
          </label>
        </div>
      </div>
      <div>
        <label className='text-xs font-semibold text-primary-600'>
          {due.toDateString()}
        </label>
      </div>
    </div>
  );
}
