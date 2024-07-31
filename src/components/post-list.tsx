import Announcement from '@/components/announcement';
import Assignment from '@/components/assignment';
import { Post } from '@/api/post';

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.map((post, index) =>
        post.type === 'announcement' ? (
          <Announcement key={index} {...post} />
        ) : (
          <Assignment key={index} {...post} />
        )
      )}
    </>
  );
}
