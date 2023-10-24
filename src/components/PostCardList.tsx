import PostCard from './PostCard';
import type { Post } from 'contentlayer/generated';

type Props = {
  posts: Post[];
};

export function PostCardList({ posts }: Props) {
  return (
    <ul className='grid gap-2'>
      {posts.map((post) => (
        <li key={post._id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
