import type { Post, Tag } from '@/types/Post';

export const mockTags = [
  { _id: '1', slug: 'react', name: 'React' },
  { _id: '2', slug: 'html', name: 'HTML' },
  { _id: '3', slug: 'nextjs', name: 'Next.js' },
] satisfies Tag[];

export const mockPosts = [
  {
    _id: 'はじめての投稿です。',
    slug: 'first-post',
    title: 'first post',
    postedAt: '2021-10-01T00:00:00.000Z',
    tags: [
      { _id: '1', slug: 'react', name: 'React' },
      { _id: '2', slug: 'html', name: 'HTML' },
    ],
    draft: false,
    body: '<p>Hello World!</p>',
  },
  {
    _id: '2',
    slug: 'second-post',
    title: 'ブログをリプレイスしたやで',
    postedAt: '2021-10-01T00:00:00.000Z',
    tags: [
      { _id: '1', slug: 'react', name: 'React' },
      { _id: '2', slug: 'nextjs', name: 'Next.js' },
    ],
    draft: false,
    body: '<p>Hello World!</p>',
  },
  {
    _id: '3',
    slug: 'third-post',
    title: 'ゆっくりしていってね',
    postedAt: '2021-10-01T00:00:00.000Z',
    tags: [
      { _id: '1', slug: 'react', name: 'React' },
      { _id: '2', slug: 'nextjs', name: 'Next.js' },
    ],
    draft: true,
    body: '<p>Hello World!</p>',
  },
  {
    _id: '4',
    slug: 'fourth-post',
    title: 'ゆっくりしていってね',
    postedAt: '2021-10-01T00:00:00.000Z',
    tags: [
      { _id: '1', slug: 'react', name: 'React' },
      { _id: '2', slug: 'html', name: 'HTML' },
    ],
    draft: false,
    body: '<p>Hello World!</p>',
  },
] satisfies Post[];
