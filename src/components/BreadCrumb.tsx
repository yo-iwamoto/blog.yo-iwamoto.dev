'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  nodes: {
    title: string;
    url: string;
  }[];
};

export const BreadCrumb = ({ nodes }: Props) => {
  const pathname = usePathname();

  return (
    <ol className='flex items-center overflow-scroll'>
      {[{ title: 'Home', url: '/' }, ...nodes].map((node, i) => {
        const current = pathname === node.url;

        return (
          <li key={node.url} className='flex items-center' aria-current={current ? 'page' : undefined}>
            {i > 0 && (
              <span aria-hidden='true' className='select-none px-2'>
                &gt;
              </span>
            )}

            <Link
              className='whitespace-nowrap text-indigo-400 hover:underline focus:outline-none focus-visible:ring-2'
              href={node.url}
            >
              {node.title}
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
