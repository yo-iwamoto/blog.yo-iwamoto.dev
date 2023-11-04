import { env } from '@/config/env';
import { getPost } from '@/repo/getPost';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/server';

export { generateStaticParams } from './generateStaticParams';

export const runtime = 'edge';

type PageProps = {
  params: {
    slug: string;
  };
};

export default function Imge({ params: { slug } }: PageProps) {
  const post = getPost(slug);
  if (post === undefined) {
    notFound();
  }

  return new ImageResponse(
    (
      <div tw='bg-neutral-200 flex w-full p-12 h-full justify-center items-center'>
        <div tw='p-12 h-full w-full bg-white rounded-2xl shadow-lg shadow-neutral-400 flex flex-col justify-between text-white'>
          <p tw='text-6xl text-neutral-800'>{post.title}</p>
          <div tw='flex w-full items-end justify-between'>
            <img
              src={`${env.WEBSITE_URL}/me.jpg`}
              height={150}
              width={150}
              alt=''
              tw='rounded-full'
            />

            <p tw='text-3xl text-neutral-800'>blog.yoiw.dev</p>
          </div>
        </div>
      </div>
    ),
  );
}
