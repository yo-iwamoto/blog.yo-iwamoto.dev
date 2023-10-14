import type { PropsWithChildren } from 'react';

export const revalidate = 86400;

export default function Layout({ children }: PropsWithChildren) {
  return children;
}
