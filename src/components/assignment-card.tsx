import { Post } from '@/api/post';

export default function AssignmentCard(post: Post) {
  return (
    <div className='flex justify-between gap-2 rounded-2xl bg-white px-4 py-2'>
      <div className='flex flex-col'>
        <h3 className='max-w-[10rem] break-words text-[0.875rem] font-semibold text-primary-900'>
          {post.title}
        </h3>
        <div className='flex items-center'>
          <label className='text-xs font-semibold text-primary-700'>
            {post.subjectName}
          </label>
        </div>
      </div>
      <div>
        <label className='text-xs font-semibold text-primary-600'>
          {new Date(post.dueDate).toLocaleDateString()}
        </label>
      </div>
    </div>
  );
}
