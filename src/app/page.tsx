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
    <nav className='py-16 px-4'>
      <div className='max-w-[735px] mx-auto'>
        <ul>
          {allPosts.map(({ _id, url, title, postedAt, tags }, i) => (
            <li
              key={_id}
              className={cn('py-8', {
                'border-t': i > 0,
              })}
            >
              <Link href={url} className='focus-visible:outline-indigo-400 hover:text-gray-600'>
                <article className='grid gap-2'>
                  <p className='font-bold text-xl md:text-3xl'>{title}</p>
                  <span className='flex items-center gap-2'>
                    <time dateTime={postedAt}>{formatDate(postedAt)}</time>
                    <span>
                      {tags.map((tag) => (
                        <span key={tag} className='text-sm px-2 py-1 text-white bg-gray-900 rounded-md'>
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
