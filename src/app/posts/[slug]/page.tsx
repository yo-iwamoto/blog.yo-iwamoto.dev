import { Text } from '@/components/Text';
import { getPost } from '@/repo/getPost';
import { notFound } from 'next/navigation';

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

  return <Text className='text-2xl font-bold'>{post.title}</Text>;
}
