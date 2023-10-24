import { Text } from '@/components/Text';
import { getAllTags } from '@/repo/getAllTags';
import Link from 'next/link';

export default function Page() {
  const tags = getAllTags();

  return (
    <main className='mt-8 grid gap-4'>
      <ul className='flex flex-wrap gap-2'>
        {tags.map(({ name, count }) => (
          <li key={name}>
            <Link
              href={`/tags/${name}`}
              className='group inline-block rounded-md p-1 focus-within:ring-2 focus-within:ring-neutral-500 focus:outline-none'
            >
              <Text className='text-lg underline-offset-4 group-hover:underline'>
                {name}({count})
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
