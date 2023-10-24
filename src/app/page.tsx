import { Text } from '@/components/Text';
import { getLatest10Posts } from '@/repo/getLatest10Posts';

export default function Page() {
  const posts = getLatest10Posts();

  return (
    <main>
      <Text className='text-2xl font-bold'>最近のエントリ</Text>

      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <a href={`/posts/${post.slug}`}>
              <Text>{post.title}</Text>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
