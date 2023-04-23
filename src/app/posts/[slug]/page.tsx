import classNames from '@/styles/modules/mdxCOntent.module.scss';
import { PostBody } from '@/components/client/PostBody';
import { allPosts } from 'contentlayer/generated';
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

  return (
    <div className='px-4 py-10'>
      <div
        className={[
          'prose prose-code:font-normal prose-code:unset prose-code:before:hidden prose-code:after:hidden mx-auto',
          classNames.content,
        ].join(' ')}
      >
        <PostBody code={post.body.code} />
      </div>
    </div>
  );
}
