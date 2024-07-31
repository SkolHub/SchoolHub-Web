'use client';

import PostList from '@/components/post-list';
import { Post, useGetTeacherSubjectPosts } from '@/api/post';

export default function Stream({ params: { id } }: { params: { id: string } }) {
  const posts = useGetTeacherSubjectPosts(id);

  if (posts.isPending) {
    return <p>Loading...</p>;
  }

  if (posts.isError) {
    return <p>Error: {posts.error.message}</p>;
  }

  return (
    <div
      key='stream'
      className='mb-4 box-border flex grow flex-col gap-2.5 overflow-hidden rounded-[1.25rem] bg-white/70 px-4 pt-4'
    >
      <div className='flex h-full flex-col gap-2.5 overflow-auto pb-4 scrollbar-hide'>
        {/*@ts-ignore*/}
        <PostList posts={posts.data as Post[]} />
      </div>
    </div>
  );
}
