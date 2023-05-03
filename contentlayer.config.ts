import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLink from 'rehype-external-links';
import rehypeShiftHeading from 'rehype-shift-heading';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'タイトル',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'slug',
      required: true,
    },
    postedAt: {
      type: 'date',
      description: '公開日',
      required: true,
    },
    lastUpdatedAt: {
      type: 'date',
      description: '最終更新日',
      required: true,
    },
    tags: {
      type: 'list',
      of: {
        type: 'string',
      },
      description: 'タグ',
      required: true,
    },
    draft: {
      type: 'boolean',
      description: '下書き状態であるかどうか',
      required: false,
      default: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      rehypeAccessibleEmojis,
      () =>
        rehypeShiftHeading({
          shift: 1,
        }),
      (option) =>
        rehypeAutolinkHeadings({
          ...option,
          behavior: 'wrap',
        }),
      (option) =>
        rehypeExternalLink({
          ...option,
          target: '_blank',
        }),
    ],
  },
});
