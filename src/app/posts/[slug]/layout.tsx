import type { PropsWithChildren } from 'react';
import 'highlight.js/styles/vs2015.css';

export const revalidate = 86400;

export default function Layout({ children }: PropsWithChildren) {
  return children;
}
