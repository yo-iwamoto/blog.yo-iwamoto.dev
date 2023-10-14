import { BreadCrumb } from '@/components/BreadCrumb';
import { EntryCard } from '@/components/EntryCard';
import { getPosts } from '@/data-access/getPosts';
import { getTagBySlug } from '@/data-access/getTagBySlug';
import { getTags } from '@/data-access/getTags';
import { env } from '@/lib/env';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';
import type { Metadata } from 'next';

export const revalidate = 86400;

type PageParams = {
  slug: string;
};

export async function generateStaticParams() {
  return (await getTags()).map((p) => ({ slug: p.slug })) satisfies PageParams[];
}

export async function generateMetadata({ params: { slug } }: { params: PageParams }) {
  const tag = await getTagBySlug({ slug });
  if (tag === null) {
    notFound();
  }

  return {
    metadataBase: new URL(env.WEBSITE_URL),
    title: `#${tag.name}のエントリ`,
  } satisfies Metadata;
}

export default async function Page({ params: { slug } }: { params: PageParams }) {
  const tag = await getTagBySlug({ slug });
  const posts = (await getPosts()).filter((post) => post.tags.some((tag) => tag.slug === slug));
  if (tag === null || posts.length < 0) {
    notFound();
  }

  return (
    <div className='px-4 py-10'>
      <div className='mx-auto max-w-[735px]'>
        <nav className='mb-6'>
          <BreadCrumb nodes={[{ title: `#${tag.name}のエントリ`, url: `/tags/${slug}` }]} />
        </nav>

        <h1 className='mb-4 text-2xl font-bold md:text-3xl xl:text-4xl'>#{tag.name} のエントリ</h1>

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
