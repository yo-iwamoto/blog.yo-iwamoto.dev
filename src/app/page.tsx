import { EntryCard } from '@/components/EntryCard';
import { mockPosts } from '@/lib/mock';
import { Fragment } from 'react';
import type { Metadata } from 'next';

export const revalidate = 86400;

export const metadata = {
  title: 'blog.yoiw.dev',
} satisfies Metadata;

export default function Page() {
  const allPosts = mockPosts;

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
