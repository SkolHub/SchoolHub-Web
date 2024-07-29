export default function StudentHeaderCard() {
  return (
    <div className='flex flex-col gap-4 rounded-xl bg-white p-4'>
      <h1 className='text-base font-semibold text-primary-900'>
        Alice Popescu
      </h1>
      <div className='flex justify-center'>
        <div className='flex grow basis-0 flex-col items-center'>
          <label className='text-base font-semibold text-green-600'>
            {4}/{5}
          </label>
          <span className='text-center text-xs font-medium text-primary-700'>
            grades
          </span>
        </div>
        <div className='border-left-white/70 h-10 self-center border-l-1' />
        <div className='flex grow basis-0 flex-col items-center'>
          <label className='text-base font-semibold text-green-600'>
            {4.7}
          </label>
          <span className='text-center text-xs font-medium text-primary-700'>
            average
          </span>
        </div>
        <div className='border-left-white/70 h-10 self-center border-l-1' />
        <div className='flex grow basis-0 flex-col items-center'>
          <label className='text-base font-semibold text-red-600'>{4}</label>
          <span className='text-center text-xs font-medium text-primary-700'>
            absences
          </span>
        </div>
      </div>
    </div>
  );
}
