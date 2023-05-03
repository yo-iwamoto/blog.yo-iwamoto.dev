import { cn } from '@/lib/cn';
import { formatDate } from '@/lib/formatDate';
import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata = {
  title: 'blog.yoiw.dev',
} satisfies Metadata;

export default function Page() {
  return (
    <nav className='px-4 py-16'>
      <div className='mx-auto max-w-[735px]'>
        <ul>
          {allPosts
            .filter((post) => !post.draft)
            .map(({ _id, url, title, postedAt, tags }, i) => (
              <li
                key={_id}
                className={cn('py-8', {
                  'border-t': i > 0,
                })}
              >
                <Link href={url} className='hover:text-gray-600 focus-visible:outline-indigo-400'>
                  <article className='grid gap-2'>
                    <p className='text-xl font-bold md:text-3xl'>{title}</p>
                    <span className='flex items-center gap-2'>
                      <time dateTime={postedAt}>{formatDate(postedAt)}</time>
                      <span>
                        {tags.map((tag) => (
                          <span key={tag} className='rounded-md bg-gray-900 px-2 py-1 text-sm text-white'>
                            #{tag}
                          </span>
                        ))}
                      </span>
                    </span>
                  </article>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}
