import { PostCardList } from '@/components/PostCardList';
import { Text } from '@/components/Text';
import { getLatest10PostsByTags } from '@/repo/getLatest10PostsByTags';
import { notFound } from 'next/navigation';

type PageProps = {
  params: {
    tag: string;
  };
};

export default function Page({ params: { tag } }: PageProps) {
  const posts = getLatest10PostsByTags(tag);
  if (posts.length === 0) {
    notFound();
  }

  return (
    <main className='mt-8 grid gap-4'>
      <Text className='px-2 text-xl'>
        「<span className='font-bold'>{tag}</span>
        」についてのエントリ
      </Text>

      <PostCardList posts={posts} />
    </main>
  );
}
