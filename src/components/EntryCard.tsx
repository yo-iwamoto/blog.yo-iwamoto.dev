import { formatDate } from '@/lib/formatDate';
import Link from 'next/link';
import type { Post } from '@/data-access/types';

type Props = {
  post: Post;
};

export function EntryCard({ post: { title, publishDate, tags, slug } }: Props) {
  return (
    <Link href={`/posts/${slug}`} className='group block py-8 hover:text-neutral-600 focus-visible:outline-indigo-400'>
      <article className='grid gap-2'>
        <p className='text-xl font-bold underline-offset-4 group-hover:underline md:text-3xl'>{title}</p>
        <span className='flex items-center gap-2'>
          <time dateTime={publishDate}>{formatDate(publishDate)}</time>
          <span className='flex gap-2'>
            {tags.map((tag) => (
              <span key={tag._id} className='rounded-md bg-neutral-900 px-2 py-1 text-sm text-white'>
                #{tag.name}
              </span>
            ))}
          </span>
        </span>
      </article>
    </Link>
  );
}
