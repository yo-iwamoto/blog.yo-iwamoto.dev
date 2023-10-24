import { PostCardList } from '@/components/PostCardList';
import { Text } from '@/components/Text';
import { getLatest10Posts } from '@/repo/getLatest10Posts';

export default function Page() {
  const posts = getLatest10Posts();

  return (
    <main className='mt-8 grid gap-4'>
      <Text className='px-2 text-xl'>最近のエントリ</Text>

      <PostCardList posts={posts} />
    </main>
  );
}
