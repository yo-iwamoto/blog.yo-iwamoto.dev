import { Text } from './Text';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { Post } from 'contentlayer/generated';

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className={cn(
        'group grid gap-2 rounded-md p-3 hover:bg-neutral-200 dark:hover:bg-neutral-800',
        'focus-within:bg-neutral-200 focus-within:ring-2 focus-within:ring-neutral-500 focus-within:ring-offset-2 focus:outline-none dark:focus-within:bg-neutral-800',
      )}
    >
      <Text className='text-2xl font-bold'>{post.title}</Text>

      <div className='flex items-end gap-4'>
        <Text className='text-sm'>
          {new Date(post.postedAt).toISOString().split('T')[0]}
        </Text>

        <div className='flex flex-wrap items-center gap-2'>
          {post.tags.map((tag) => (
            <Text
              key={tag}
              as='span'
              className='rounded-lg bg-neutral-800 px-2 py-0.5 text-neutral-200 dark:bg-neutral-200 dark:text-neutral-800'
            >
              {tag}
            </Text>
          ))}
        </div>
      </div>
    </Link>
  );
}
