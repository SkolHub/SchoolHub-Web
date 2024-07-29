import { cn } from '@nextui-org/theme';

export default function SelectableItemList({
  items,
  selected,
  onSelected = () => undefined,
  className = ''
}: {
  items: {
    icon?: string;
    title: string;
    grades: number;
    maxGrades: number;
    average: number;
  }[];
  selected: number;
  onSelected?: (index: number) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      {items.map((item, index) => (
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
          {item.icon ? (
            <img className='w-9' src={`/${item.icon}.png`} alt='icon' />
          ) : (
            ''
          )}
          <div className='flex grow items-center justify-between gap-4 border-b-1 border-b-black/5 py-2.5'>
            <h3
              className={cn(
                'text-[0.9375rem] font-semibold',
                index === selected ? 'text-primary-50' : 'text-primary-900'
              )}
            >
              {item.title}
            </h3>
            <div className='flex gap-4'>
              <div className='flex flex-col items-center'>
                <label
                  className={cn(
                    'text-[0.9375rem] font-semibold',
                    index === selected ? 'text-primary-50' : 'text-primary-900'
                  )}
                >
                  {item.grades}/{item.maxGrades}
                </label>
                <span
                  className={cn(
                    'text-[0.6875rem] font-medium',
                    index === selected ? 'text-primary-100' : 'text-primary-700'
                  )}
                >
                  grades
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <label
                  className={cn(
                    'text-[0.9375rem] font-semibold',
                    index === selected ? 'text-primary-50' : 'text-primary-900'
                  )}
                >
                  {item.average}
                </label>
                <span
                  className={cn(
                    'text-[0.6875rem] font-medium',
                    index === selected ? 'text-primary-100' : 'text-primary-700'
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
  );
}
