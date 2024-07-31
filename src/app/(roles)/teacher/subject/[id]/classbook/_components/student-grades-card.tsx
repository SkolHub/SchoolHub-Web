import { Progress } from '@nextui-org/progress';
import { Grade } from '@/api/grade';

export default function StudentGradesCard({
  grades
}: {
  grades: Grade[];
}) {
  return (
    <div className='flex flex-col gap-4 rounded-xl bg-white p-4'>
      <div className='flex items-center text-xs font-semibold text-primary-600'>
        <i className='fa fa-chart-simple pr-2 text-xl' />
        <label>Grades</label>
      </div>
      <div className='flex justify-between gap-4'>
        <div className='flex max-w-40 grow flex-col gap-2'>
          <h3 className='text-[0.875rem] font-semibold text-primary-600'>
            Grade
          </h3>
          <div className='flex flex-col gap-1'>
            {grades.map((grade, index) => (
              <div key={index} className='flex items-center gap-2'>
                <label>{grade.value}</label>
                <Progress
                  classNames={{
                    indicator: 'bg-secondary-500'
                  }}
                  value={+grade.value}
                  maxValue={10}
                  size='sm'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-[0.875rem] font-semibold text-primary-600'>
            Date
          </h3>
          <div className='flex flex-col gap-1'>
            {grades.map((grade, index) => (
              <div key={index} className='flex items-center gap-2'>
                <label className='text-[0.875rem] font-semibold text-primary-900'>
                  {new Date(grade.date).toDateString()}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
