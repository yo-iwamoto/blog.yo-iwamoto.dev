import classNames from '@/styles/modules/mdxContent.module.scss';
import { PostBody } from '@/components/client/PostBody';
import { allPosts } from 'contentlayer/generated';
import { cn } from '@/lib/cn';
import { formatDate } from '@/lib/formatDate';
import { BreadCrumb } from '@/components/BreadCrumb';
import { websiteUrl } from '@/lib/url';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

type PageParams = {
  slug: string;
};

export function generateStaticParams() {
  return allPosts
    .filter((post) => !post.draft)
    .map((post) => ({
      slug: post._id,
    })) satisfies PageParams[];
}

export function generateMetadata({ params: { slug } }: { params: PageParams }) {
  const post = allPosts.find((post) => post.slug === slug);
  if (post === undefined) return null;

  return {
    title: post.title,
    openGraph: {
      type: 'article',
      title: `${post.title} | blog.yoiw.dev`,
      url: `${websiteUrl}${post.url}`,
      images: [{ url: `${websiteUrl}/api/thumbnail.png?title=${post.title}` }],
      locale: 'ja',
      siteName: 'blog.yoiw.dev',
    },
    twitter: {
      card: 'summary',
    },
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
    tags,
  } = post;

  return (
    <div className='px-4 py-10'>
      <div className='mx-auto max-w-[735px]'>
        <nav className='mb-6'>
          <BreadCrumb nodes={[{ title: slug, url }]} />
        </nav>

        <article>
          <div className='mb-12'>
            <h1 className='mb-4 text-2xl font-bold md:text-3xl xl:text-4xl'>{title}</h1>
            <div className='flex items-center gap-2'>
              <time dateTime={postedAt}>{formatDate(postedAt)}</time>
              <span>
                {tags.map((tag) => (
                  <Link key={tag} className='rounded-md bg-gray-900 px-2 py-1 text-sm text-white' href={`/tags/${tag}`}>
                    #{tag}
                  </Link>
                ))}
              </span>
            </div>
          </div>

          <div
            className={cn(
              'prose-code:unset prose prose-sm mx-auto md:prose-lg prose-code:font-normal prose-code:before:hidden prose-code:after:hidden',
              'prose-h1:text-xl prose-pre:p-2 prose-pre:text-sm md:prose-h1:text-3xl md:prose-pre:text-base',
              'mb-20',
              classNames.content
            )}
          >
            <PostBody code={code} />
          </div>
        </article>

        <footer className='mx-auto max-w-[735px]'>
          <nav>
            <BreadCrumb nodes={[{ title: slug, url }]} />
          </nav>
        </footer>
      </div>
    </div>
  );
}
