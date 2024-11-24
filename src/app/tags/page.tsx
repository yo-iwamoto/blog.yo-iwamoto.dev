import type { Metadata } from "next";
import { Link } from "#src/components/link";
import { Text } from "#src/components/text";
import { allEntries } from "#src/data/contents";

export const metadata = {
  title: "Tags | blog.yoiw.dev",
  alternates: {
    canonical: "/tags/",
  },
} satisfies Metadata;

export const dynamic = "force-static";

export default async function Page() {
  const tags: { [key in string]: number } = {};
  for (const article of allEntries) {
    for (const tag of article.meta.tags) {
      tags[tag] = (tags[tag] ?? 0) + 1;
    }
  }

  return (
    <div className="mt-8 grid gap-4">
      <ul className="flex flex-wrap gap-2">
        {Object.entries(tags).map(([tag, count]) => (
          <li key={tag}>
            <Link
              href={`/tags/${tag}`}
              className="group inline-block rounded-md p-1 focus-within:ring-2 focus-within:ring-neutral-500 focus:outline-none"
            >
              <Text className="text-lg underline-offset-4 group-hover:underline">
                {tag}({count})
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
