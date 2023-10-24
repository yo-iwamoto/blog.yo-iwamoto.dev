'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  href: string;
}>;

export function HeaderNavLink({ href, children }: Props) {
  const pathname = usePathname();
  const isCurrent = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isCurrent ? 'page' : undefined}
      className='py-2 text-lg text-neutral-700 underline-offset-4 hover:underline dark:text-neutral-100'
    >
      {children}
    </Link>
  );
}
