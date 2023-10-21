/* eslint-disable react/no-unknown-property */

import { getPosts } from '@/data-access/getPosts';
import { ImageResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function generateStaticParams() {
  return (await getPosts())
    .filter((post) => !post.draft)
    .map((post) => ({
      slug: post._id,
    }));
}

type Parameter = {
  params: {
    slug: string;
  };
};

export const GET = async (_: NextRequest, { params: { slug } }: Parameter) => {
  const title = (await getPosts()).find((p) => p.slug === slug)?.title;

  return new ImageResponse(
    (
      <div tw='bg-neutral-200 flex w-full p-12 h-full justify-center items-center'>
        <div tw='p-12 h-full bg-white rounded-2xl shadow-lg shadow-neutral-400 flex flex-col justify-between text-white'>
          <p tw='text-6xl text-neutral-800'>{title}</p>
          <p tw='text-3xl text-neutral-800 flex justify-end'>blog.yoiw.dev</p>
        </div>
      </div>
    )
  );
};
