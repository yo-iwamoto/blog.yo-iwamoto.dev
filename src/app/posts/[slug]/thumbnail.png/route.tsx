/* eslint-disable react/no-unknown-property */

import { mockPosts } from '@/lib/mock';
import { ImageResponse } from 'next/server';
import type { NextRequest } from 'next/server';

type Parameter = {
  params: {
    slug: string;
  };
};

export const GET = async (_: NextRequest, { params: { slug } }: Parameter) => {
  const title = mockPosts.find((p) => p.slug === slug)?.title;

  return new ImageResponse(
    (
      <div tw='bg-black flex w-full h-full justify-center items-center'>
        <div tw='p-12 w-4/5 h-[60%] bg-[#090909] rounded-2xl shadow-lg shadow-gray-400 flex flex-col justify-between text-white'>
          <p tw='text-6xl'>{title}</p>
          <p tw='text-2xl flex justify-end'>blog.yoiw.dev</p>
        </div>
      </div>
    )
  );
};
