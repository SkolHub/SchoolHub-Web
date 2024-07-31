import SelectableItemList from '@/components/selectable-item-list';
import { Subject } from '@/api/subject';

export default function SubjectList({
  subjects,
  selected,
  onSelected = () => undefined
}: {
  subjects: Subject[];
  selected: number;
  onSelected?: (index: number) => void;
}) {
  return (
    <div className='h-full w-[30rem] overflow-y-auto overflow-x-hidden rounded-l-[1.25rem] bg-white px-4 pt-7'>
      <h1 className='pl-2 text-xl pb-2 font-semibold text-primary-900'>
        Overall average -{' '}
        {(
          subjects.reduce(
            (accumulator, currentValue) =>
              accumulator + (currentValue.average ?? 0),
            0
          ) / subjects.length
        ).toFixed(2)}
      </h1>
      <SelectableItemList
        items={subjects}
        selected={selected}
        onSelected={onSelected}
      />
    </div>
  );
}
