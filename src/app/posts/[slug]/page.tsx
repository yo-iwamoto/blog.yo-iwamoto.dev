import classNames from '@/styles/modules/mdxCOntent.module.scss';
import { PostBody } from '@/components/client/PostBody';
import { allPosts } from 'contentlayer/generated';
import { cn } from '@/lib/cn';
import { formatDate } from '@/lib/formatDate';
import { BreadCrumb } from '@/components/BreadCrumb';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type PageParams = {
  slug: string;
};

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._id,
  })) satisfies PageParams[];
}

export function generateMetadata({ params: { slug } }: { params: PageParams }) {
  const post = allPosts.find((post) => post.slug === slug);
  if (post === undefined) return null;

  return {
    title: post.title,
  } satisfies Metadata;
}

export default function Page({ params: { slug } }: { params: PageParams }) {
  const post = allPosts.find((post) => post.slug === slug);
  if (post === undefined) {
    notFound();
  }
  const {
    title,
    postedAt,
    body: { code },
    url,
  } = post;

  return (
    <div className='px-4 py-10'>
      <div className='max-w-[735px] mx-auto mb-16'>
        <nav className='mb-6'>
          <BreadCrumb nodes={[{ title, url }]} />
        </nav>
        <h1 className='font-bold text-2xl md:text-3xl xl:text-4xl mb-4'>{title}</h1>
        <time dateTime={postedAt}>{formatDate(postedAt)}</time>
      </div>

      <div
        className={cn(
          'prose prose-sm md:prose-lg prose-code:font-normal prose-code:unset prose-code:before:hidden prose-code:after:hidden mx-auto',
          'prose-h1:text-xl md:prose-h1:text-3xl',
          classNames.content
        )}
      >
        <PostBody code={code} />
      </div>
    </div>
  );
}
