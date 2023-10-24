import { FavButtonClient } from './client';
import { getFavCount } from '@/repo/getFavCount';

type Props = {
  slug: string;
};

export async function FavButton({ slug }: Props) {
  const favCount = await getFavCount(slug);

  return <FavButtonClient slug={slug} favCount={favCount} />;
}
