import { BreadCrumb } from '@/components/BreadCrumb';
import { EntryCard } from '@/components/EntryCard';
import { mockPosts, mockTags } from '@/lib/mock';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';
import type { Metadata } from 'next';

export const revalidate = 86400;

type PageParams = {
  slug: string;
};

export function generateMetadata({ params: { slug } }: { params: PageParams }) {
  const tags = mockTags;
  const tagName = tags.find((tag) => tag.slug === slug)?.name;
  if (tagName === undefined) {
    notFound();
  }

  return {
    title: `#${tagName}のエントリ`,
  } satisfies Metadata;
}

export default function Page({ params: { slug } }: { params: PageParams }) {
  const tags = mockTags;
  const tagName = tags.find((tag) => tag.slug === slug)?.name;
  if (tagName === undefined) {
    notFound();
  }

  const posts = mockPosts.filter((post) => post.tags.some((tag) => tag.slug === slug));
  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className='px-4 py-10'>
      <div className='mx-auto max-w-[735px]'>
        <nav className='mb-6'>
          <BreadCrumb nodes={[{ title: `#${tagName}のエントリ`, url: `/tags/${slug}` }]} />
        </nav>

        <h1 className='mb-4 text-2xl font-bold md:text-3xl xl:text-4xl'>#{tagName} のエントリ</h1>

        <ul>
          {posts.map((post, i) => (
            <Fragment key={post._id}>
              <li>
                <EntryCard post={post} />
              </li>
              {i !== posts.length - 1 && <hr />}
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
