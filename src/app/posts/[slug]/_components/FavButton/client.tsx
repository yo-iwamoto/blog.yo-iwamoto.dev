'use client';

import { favAction } from './action';
import { cn } from '@/lib/utils';
import { ThumbsUpIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { z } from 'zod';

const favedSchema = z.array(z.string());

type Props = {
  slug: string;
  favCount: number;
};

export function FavButtonClient({ slug, favCount }: Props) {
  const [currentFaved, setCurrentFaved] = useState<string[] | null>(null);
  const [isFaved, setIsFaved] = useState(false);
  const [favCountLocal, setFavCountLocal] = useState(favCount);

  // get initial value from local storage
  useEffect(() => {
    const faved = favedSchema.parse(
      JSON.parse(localStorage.getItem('faved') ?? '[]'),
    );
    setCurrentFaved(faved);
    if (faved.includes(slug)) {
      setIsFaved(true);
    }
  }, [slug]);

  const onClick = async () => {
    setFavCountLocal((prev) => prev + 1);
    if (!isFaved) {
      setIsFaved(true);
    }
    await favAction({ slug });

    if (!currentFaved?.includes(slug)) {
      localStorage.setItem(
        'faved',
        JSON.stringify([...(currentFaved ?? []), slug]),
      );
    }
  };

  if (currentFaved === null) {
    return null;
  }

  return (
    <button
      type='button'
      className={cn(
        'flex h-14 w-14 flex-col items-center justify-center gap-0.5 rounded-full transition-all focus-within:ring-2 focus-within:ring-indigo-700/50 focus-within:ring-offset-2 focus:outline-none active:scale-110',
        {
          ['bg-indigo-700 text-white hover:bg-indigo-600']: isFaved,
          ['border border-neutral-400 bg-white text-indigo-700 hover:bg-indigo-100']:
            !isFaved,
        },
      )}
      onClick={onClick}
    >
      <span className='sr-only'>「いいね」する</span>
      <ThumbsUpIcon className='h-6 w-6' />
      <span className='text-xs'>{favCountLocal}</span>
    </button>
  );
}
