import { cn } from '@/lib/cn';
import { formatDate } from '@/lib/formatDate';
import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';

export default function Page() {
  return (
    <nav className='py-16 px-4'>
      <div className='max-w-3xl mx-auto'>
        <ul>
          {allPosts.map(({ _id, url, title, postedAt }, i) => (
            <li
              key={_id}
              className={cn('py-8', {
                'border-t': i > 0,
              })}
            >
              <Link href={url} className='focus-visible:outline-indigo-400'>
                <article>
                  <p className='font-bold text-xl md:text-3xl'>{title}</p>
                  <time dateTime={postedAt}>{formatDate(postedAt)}</time>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
