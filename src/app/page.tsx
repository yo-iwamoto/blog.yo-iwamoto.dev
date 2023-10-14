import { EntryCard } from '@/components/EntryCard';
import { getPosts } from '@/data-access/getPosts';
import { env } from '@/lib/env';
import { Fragment } from 'react';
import type { Metadata } from 'next';

export const revalidate = 86400;

export const metadata = {
  metadataBase: new URL(env.WEBSITE_URL),
  title: 'blog.yoiw.dev',
} satisfies Metadata;

export default async function Page() {
  const allPosts = await getPosts();

  return (
    <nav className='px-4 py-16'>
      <div className='mx-auto max-w-[735px]'>
        <ul>
          {allPosts
            .filter((post) => !post.draft)
            .map((post, i) => (
              <Fragment key={post._id}>
                <li>
                  <EntryCard post={post} />
                </li>
                {i !== allPosts.length - 1 && <hr />}
              </Fragment>
            ))}
        </ul>
      </div>
    </nav>
  );
}
