import { PostBody } from './_components/PostBody';
import { getPost } from '@/repo/getPost';
import { Text } from '@/components/Text';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type PageProps = {
  params: {
    slug: string;
  };
};

export default function Page({ params: { slug } }: PageProps) {
  const post = getPost(slug);
  if (post === null) {
    notFound();
  }

  return (
    <main className='my-8 grid gap-2'>
      <Text className='text-2xl font-bold md:text-3xl lg:text-4xl'>
        {post.title}
      </Text>

      <div className='flex items-end gap-4'>
        <Text className='text-sm'>
          {new Date(post.postedAt).toISOString().split('T')[0]}
        </Text>

        <div className='flex flex-wrap items-center gap-2'>
          {post.tags.map((tag) => (
            <Link
              href={`/tags/${tag}`}
              key={tag}
              className='group rounded-lg focus-within:ring-2 focus-within:ring-neutral-500 focus-within:ring-offset-1 focus:outline-none dark:focus-within:ring-offset-2 dark:focus-within:ring-offset-neutral-800'
            >
              <Text
                as='span'
                className='rounded-lg bg-neutral-800 px-2 py-0.5 text-neutral-200 hover:bg-neutral-600 group-focus-within:bg-neutral-600 dark:bg-neutral-200 dark:text-neutral-800 dark:hover:bg-neutral-400 dark:group-focus-within:bg-neutral-400'
              >
                {tag}
              </Text>
            </Link>
          ))}
        </div>
      </div>

      <PostBody code={post.body.code} />
    </main>
  );
}
