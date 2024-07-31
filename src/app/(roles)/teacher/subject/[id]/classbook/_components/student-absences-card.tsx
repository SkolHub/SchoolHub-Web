import { Absence } from '@/api/grade';

export default function StudentAbsencesCard({
  absences
}: {
  absences: Absence[];
}) {
  return (
    <div className='flex flex-col gap-4 rounded-xl bg-white p-4'>
      <div className='flex items-center text-xs font-semibold text-primary-600'>
        <i className='fa fa-calendar pr-2 text-xl' />
        <label>Absences</label>
      </div>
      <div className='flex justify-between gap-4'>
        <div className='flex max-w-40 grow flex-col gap-2'>
          <h3 className='text-[0.875rem] font-semibold text-primary-600'>
            Date
          </h3>
          <div className='flex flex-col gap-1'>
            {absences.map((absence, index) => (
              <div key={index} className='flex items-center gap-2'>
                <label className='text-[0.875rem] font-semibold text-primary-900'>
                  {new Date(absence.date).toDateString()}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-[0.875rem] font-semibold text-primary-600'>
            Excused
          </h3>
          <div className='flex flex-col gap-1'>
            {absences.map((absence, index) => (
              <>
                {absence.excused ? (
                  <label
                    key={index}
                    className='flex items-center gap-2 text-xs font-semibold text-green-500'
                  >
                    <i className='fa fa-check-circle text-xl' />
                    Excused
                  </label>
                ) : (
                  <label
                    key={index}
                    className='flex items-center gap-2 text-xs font-semibold text-red-500'
                  >
                    <i className='fa fa-xmark-circle text-xl' />
                    Not excused
                  </label>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
