import { cn } from '@nextui-org/theme';

export default function SubjectList({
  subjects,
  selected,
  onSelected = () => undefined
}: {
  subjects: {
    icon: string;
    title: string;
    grades: number;
    maxGrades: number;
    average: number;
  }[];
  selected: number;
  onSelected?: (index: number) => void;
}) {
  return (
    <div className='h-full w-[30rem] overflow-y-auto overflow-x-hidden rounded-l-[1.25rem] bg-white px-4 pt-7'>
      <h1 className='pl-2 text-xl font-semibold text-primary-900'>
        Overall average -{' '}
        {(
          subjects.reduce(
            (accumulator, currentValue) => accumulator + currentValue.average,
            0
          ) / subjects.length
        ).toFixed(2)}
      </h1>
      <div>
        {subjects.map((subject, index) => (
          <div
            key={index}
            className={cn(
              'flex items-center rounded-[0.635rem] px-1.5',
              index === selected ? 'bg-secondary-500' : ''
            )}
            onClick={() => {
              onSelected(index);
            }}
          >
            <img className='w-9' src={`/${subject.icon}.png`} alt='icon' />
            <div className='flex grow items-center justify-between gap-4 border-b-1 border-b-black/5 py-2.5'>
              <h3
                className={cn(
                  'text-[0.9375rem] font-semibold',
                  index === selected ? 'text-primary-50' : 'text-primary-900'
                )}
              >
                {subject.title}
              </h3>
              <div className='flex gap-4'>
                <div className='flex flex-col items-center'>
                  <label
                    className={cn(
                      'text-[0.9375rem] font-semibold',
                      index === selected
                        ? 'text-primary-50'
                        : 'text-primary-900'
                    )}
                  >
                    {subject.grades}/{subject.maxGrades}
                  </label>
                  <span
                    className={cn(
                      'text-[0.6875rem] font-medium',
                      index === selected
                        ? 'text-primary-100'
                        : 'text-primary-700'
                    )}
                  >
                    grades
                  </span>
                </div>
                <div className='flex flex-col items-center'>
                  <label
                    className={cn(
                      'text-[0.9375rem] font-semibold',
                      index === selected
                        ? 'text-primary-50'
                        : 'text-primary-900'
                    )}
                  >
                    {subject.average}
                  </label>
                  <span
                    className={cn(
                      'text-[0.6875rem] font-medium',
                      index === selected
                        ? 'text-primary-100'
                        : 'text-primary-700'
                    )}
                  >
                    average
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
