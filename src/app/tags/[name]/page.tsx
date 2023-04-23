import { allPosts } from 'contentlayer/generated';
import { cn } from '@/lib/cn';
import { formatDate } from '@/lib/formatDate';
import { BreadCrumb } from '@/components/BreadCrumb';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

type PageParams = {
  name: string;
};

export function generateStaticParams() {
  const tags = Array.from(new Set(allPosts.flatMap((post) => post.tags)));

  return tags.map((name) => ({ name })) satisfies PageParams[];
}

export function generateMetadata({ params: { name } }: { params: PageParams }) {
  return {
    title: `#${name} のエントリ`,
  } satisfies Metadata;
}

export default function Page({ params: { name } }: { params: PageParams }) {
  const posts = allPosts.filter((posts) => posts.tags.includes(name));
  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className='py-10 px-4'>
      <div className='max-w-[735px] mx-auto'>
        <nav className='mb-6'>
          <BreadCrumb nodes={[{ title: `${name}のエントリ`, url: `/tags/${name}` }]} />
        </nav>

        <h1 className='font-bold text-2xl md:text-3xl xl:text-4xl mb-4'>#{name} のエントリ</h1>

        <ul>
          {posts.map(({ _id, url, title, postedAt, tags }, i) => (
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
    </div>
  );
}
