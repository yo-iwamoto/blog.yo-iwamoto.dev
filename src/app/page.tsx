import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';

export default function Page() {
  return (
    <nav className='py-16 px-4'>
      <div className='max-w-3xl mx-auto'>
        <ul>
          {allPosts.map(({ _id, url, title }) => (
            <li key={_id}>
              <Link href={url}>
                <p className='font-bold'>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
