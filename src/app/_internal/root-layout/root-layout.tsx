import { Link } from "#src/components/link";
import { SizedBox } from "#src/components/sized-box";
import type { PropsWithChildren } from "react";
import { NavLink } from "./nav-link";

export function RootLayoutRoot({ children }: PropsWithChildren) {
  return (
    <div className="flex bg-neutral-50 dark:bg-neutral-900 flex-col h-screen overflow-auto">
      {children}
    </div>
  );
}

export function RootLayoutHeader() {
  return (
    <header className="bg-white/70 dark:bg-white/5 backdrop-blur-sm sticky top-0 z-10">
      <SizedBox className="py-1 flex justify-between items-center">
        <Link
          href="/"
          className="font-bold py-1.5 text-lg inline-block hover:underline dark:text-neutral-300"
        >
          blog.yoiw.dev
        </Link>

        <nav>
          <ul className="flex gap-6">
            <li>
              <NavLink href="/">Posts</NavLink>
            </li>
            <li>
              <NavLink href="/tags">Tags</NavLink>
            </li>
          </ul>
        </nav>
      </SizedBox>
    </header>
  );
}

export function RootLayoutContent({ children }: PropsWithChildren) {
  return (
    <div className="grow">
      <SizedBox as="main">{children}</SizedBox>
    </div>
  );
}

export const RootLayout = {
  Root: RootLayoutRoot,
  Header: RootLayoutHeader,
  Content: RootLayoutContent,
};
