import { getAllTags } from '@/repo/getAllTags';

export function generateStaticParams() {
  const tags = getAllTags();

  return tags.map((tag) => ({
    params: { tag },
  }));
}
