import { PostSectionModel } from '@/lib/types';
import PostList from '@/components/post-list';

export function PostSection({ posts, name }: PostSectionModel) {
  return (
    <div className='flex flex-col gap-4 rounded-[1.25rem] bg-white/70 p-4'>
      <h1 className='text-xl font-semibold text-primary-900'>{name}</h1>
      <div className='flex flex-col gap-2.5'>
        <PostList posts={posts} />
      </div>
    </div>
  );
}
