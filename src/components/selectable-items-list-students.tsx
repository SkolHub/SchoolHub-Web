import { cn } from '@nextui-org/theme';
import { SubjectStudent } from '@/api/subject';
import { useRouter } from 'next/navigation';

export default function SelectableItemsListStudents({
  items,
  selected,
  onSelected = () => undefined,
  className = '',
  subjectID
}: {
  items: SubjectStudent[];
  selected: number;
  onSelected?: (index: number) => void;
  className?: string;
  subjectID: string;
}) {
  const router = useRouter();
  return (
    <div className={className}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'flex cursor-pointer items-center rounded-[0.635rem] px-1.5',
            +item.student.id == selected ? 'bg-secondary-500' : ''
          )}
          onClick={() => {
            onSelected(+item.student.id);
            router.push(
              `/teacher/subject/${subjectID}/classbook/${item.student.id}`
            );
          }}
        >
          <div className='flex grow items-center justify-between gap-4 border-b-1 border-b-black/5 py-2.5'>
            <h3
              className={cn(
                'text-[0.9375rem] font-semibold',
                +item.student.id == selected
                  ? 'text-primary-50'
                  : 'text-primary-900'
              )}
            >
              {item.student.name}
            </h3>
            {/*<div className='flex gap-4'>*/}
            {/*  <div className='flex flex-col items-center'>*/}
            {/*    <label*/}
            {/*      className={cn(*/}
            {/*        'text-[0.9375rem] font-semibold',*/}
            {/*        +item.id == selected*/}
            {/*          ? 'text-primary-50'*/}
            {/*          : 'text-primary-900'*/}
            {/*      )}*/}
            {/*    >*/}
            {/*      {item.grades}/{item.metadata.minGrades}*/}
            {/*    </label>*/}
            {/*    <span*/}
            {/*      className={cn(*/}
            {/*        'text-[0.6875rem] font-medium',*/}
            {/*        +item.id == selected*/}
            {/*          ? 'text-primary-100'*/}
            {/*          : 'text-primary-700'*/}
            {/*      )}*/}
            {/*    >*/}
            {/*      grades*/}
            {/*    </span>*/}
            {/*  </div>*/}
            {/*  <div className='flex flex-col items-center'>*/}
            {/*    <label*/}
            {/*      className={cn(*/}
            {/*        'text-[0.9375rem] font-semibold',*/}
            {/*        +item.id == selected*/}
            {/*          ? 'text-primary-50'*/}
            {/*          : 'text-primary-900'*/}
            {/*      )}*/}
            {/*    >*/}
            {/*      {item.average?.toFixed(2)}*/}
            {/*    </label>*/}
            {/*    <span*/}
            {/*      className={cn(*/}
            {/*        'text-[0.6875rem] font-medium',*/}
            {/*        +item.id == selected*/}
            {/*          ? 'text-primary-100'*/}
            {/*          : 'text-primary-700'*/}
            {/*      )}*/}
            {/*    >*/}
            {/*      average*/}
            {/*    </span>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      ))}
    </div>
  );
}
