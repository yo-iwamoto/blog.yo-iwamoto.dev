/* eslint-disable react/no-unknown-property */

import { NextResponse } from 'next/server';
import { ImageResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const GET = (req: NextRequest) => {
  const title = req.nextUrl.searchParams.get('title');
  if (title === null) {
    return NextResponse.json({ error: 'title is required' }, { status: 400 });
  }

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
