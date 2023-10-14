import { cn } from '@/lib/cn';
import { formatDate } from '@/lib/formatDate';
import { BreadCrumb } from '@/components/BreadCrumb';
import { mockPosts } from '@/lib/mock';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

type PageParams = {
  name: string;
};

export function generateMetadata({ params: { name } }: { params: PageParams }) {
  return {
    title: `#${name} のエントリ`,
  } satisfies Metadata;
}

export default function Page({ params: { name } }: { params: PageParams }) {
  const posts = mockPosts;
  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className='px-4 py-10'>
      <div className='mx-auto max-w-[735px]'>
        <nav className='mb-6'>
          <BreadCrumb nodes={[{ title: `${name}のエントリ`, url: `/tags/${name}` }]} />
        </nav>

        <h1 className='mb-4 text-2xl font-bold md:text-3xl xl:text-4xl'>#{name} のエントリ</h1>

        <ul>
          {posts.map(({ _id, url, title, postedAt, tags }, i) => (
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
    </div>
  );
}
