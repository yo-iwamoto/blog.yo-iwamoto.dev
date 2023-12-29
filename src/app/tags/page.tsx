import { Link } from "@/components/link";
import { Text } from "@/components/text";
import { getAllTags } from "@/repo/get-all-tags";

export const dynamic = "force-static";

export default async function Page() {
  const tags = await getAllTags();

  return (
    <div className="mt-8 grid gap-4">
      <ul className="flex flex-wrap gap-2">
        {tags.map(({ name, count, slug }) => (
          <li key={name}>
            <Link
              href={`/tags/${slug}`}
              className="group inline-block rounded-md p-1 focus-within:ring-2 focus-within:ring-neutral-500 focus:outline-none"
            >
              <Text className="text-lg underline-offset-4 group-hover:underline">
                {name}({count})
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
