import { formatDate } from '@/lib/formatDate';
import { BreadCrumb } from '@/components/BreadCrumb';
import { PostBody } from '@/components/PostBody';
import { newtAdmin } from '@/lib/newt';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Post } from '@/data-access/types';

export const dynamic = 'force-dynamic';

type PageParams = {
  slug: string;
};

export default async function Page({ params: { slug } }: { params: PageParams }) {
  if (process.env.NODE_ENV !== 'development') {
    notFound();
  }

  const post = await newtAdmin.getFirstContent<Post>({
    appUid: 'blog-yoiw-dev',
    modelUid: 'article',
    query: {
      slug,
    },
  });
  if (post === null) {
    notFound();
  }

  const { title, publishDate, body, tags } = post;

  return (
    <div className='px-4 py-10'>
      <div className='mx-auto max-w-[735px]'>
        <nav className='mb-6'>
          <BreadCrumb nodes={[{ title, url: `/posts/${slug}` }]} />
        </nav>

        <article>
          <div className='mb-12'>
            <h1 className='mb-4 text-2xl font-bold md:text-3xl xl:text-4xl'>{title}</h1>
            <div className='flex items-center gap-2'>
              <time dateTime={publishDate}>{formatDate(publishDate)}</time>
              <span className='flex gap-2'>
                {tags.map((tag) => (
                  <Link
                    key={tag._id}
                    className='rounded-md bg-neutral-900 px-2 py-1 text-sm text-white hover:bg-neutral-700'
                    href={`/tags/${tag.slug}`}
                  >
                    #{tag.name}
                  </Link>
                ))}
              </span>
            </div>
          </div>

          <PostBody body={body} />
        </article>

        <footer className='mx-auto max-w-[735px]'>
          <nav>
            <BreadCrumb nodes={[{ title, url: `/posts/${slug}` }]} />
          </nav>
        </footer>
      </div>
    </div>
  );
}
