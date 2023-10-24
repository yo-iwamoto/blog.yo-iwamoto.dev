import { HeaderNavLink } from './HeaderNavLink';
import { SizedContainer } from '@/components/SizedContainer';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Header() {
  return (
    <SizedContainer className='flex items-center justify-between py-4'>
      <Link
        href='/'
        className={cn(
          'rounded-md py-1 font-mono text-xl font-bold text-neutral-700 underline-offset-8 hover:underline dark:text-neutral-100',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2',
        )}
      >
        blog.yoiw.dev
      </Link>

      <nav>
        <ul className='flex gap-6'>
          <li>
            <HeaderNavLink href='/'>Posts</HeaderNavLink>
          </li>
          <li>
            <HeaderNavLink href='/tags'>Tags</HeaderNavLink>
          </li>
        </ul>
      </nav>
    </SizedContainer>
  );
}
