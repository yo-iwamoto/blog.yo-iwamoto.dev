import { getAllTags } from "@/repo/get-all-tags";

export async function generateStaticParams() {
  const tags = await getAllTags();

  return tags.map(({ slug }) => ({
    params: { slug },
  }));
}
