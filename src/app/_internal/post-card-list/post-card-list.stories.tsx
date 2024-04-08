import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { PostCardList } from "./post-card-list";

type Article = ComponentPropsWithoutRef<typeof PostCardList.Card>["article"];

function Component({ articles }: { articles: Article[] }) {
  return (
    <div className="max-w-4xl mx-auto">
      <PostCardList.Root>
        {articles.map((article) => (
          <PostCardList.Card key={article.meta.slug} article={article} />
        ))}
      </PostCardList.Root>
    </div>
  );
}

const meta = {
  component: Component,
  args: {
    articles: [
      {
        content: "Hello world!",
        meta: {
          title: "Hello, world!",
          tags: ["hello", "world"],
          publishedAt: "2022-01-01",
          slug: "hello-world",
        },
      },
      {
        content: "Storybook の使い方を紹介していきます。",
        meta: {
          title: "Storybook の使い方",
          tags: ["storybook", "react"],
          publishedAt: "2022-03-08",
          slug: "storybook-how-to",
        },
      },
      {
        content: "React の基本を学びます。",
        meta: {
          title: "React の基本",
          tags: ["react"],
          publishedAt: "2022-03-09",
          slug: "react-basics",
        },
      },
    ],
  },
} satisfies Meta<typeof Component>;

export default meta;

export const Default = {} satisfies StoryObj<typeof meta>;
