import AssignmentCard from '@/components/assignment-card';
import { Post } from '@/api/post';

export default function AssignmentColumn({
  title,
  assignments
}: {
  title: string;
  assignments: Post[];
}) {
  return (
    <div className='flex w-[20.5rem] min-w-fit flex-col gap-5 rounded-[1.25rem] bg-white/60 px-4 pb-4 pt-5'>
      <div className='flex justify-between'>
        <h1 className='text-xl font-semibold text-primary-800'>{title}</h1>
        <label className='text-xl font-semibold text-primary-800'>
          {assignments.length}
        </label>
      </div>
      <div className='flex flex-col gap-2'>
        {assignments.map((assignment, index) => (
          <AssignmentCard key={index} {...assignment} />
        ))}
      </div>
    </div>
  );
}
