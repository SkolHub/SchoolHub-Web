import { Post } from '@/lib/types';
import Announcement from '@/components/announcement';
import Assignment from '@/components/assignment';

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.map((post, index) =>
        post.type === 'Announcement' ? (
          <Announcement key={index} {...post} />
        ) : (
          <Assignment key={index} {...post} />
        )
      )}
    </>
  );
}
