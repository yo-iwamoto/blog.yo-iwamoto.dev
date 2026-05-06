import type { PropsWithChildren } from "react"
import { Link } from "#src/components/link"
import { SizedBox } from "#src/components/sized-box"
import { NavLink, navLinkStyle } from "./nav-link"

export function RootLayoutRoot({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen flex-col overflow-auto bg-neutral-50 dark:bg-neutral-900">
      {children}
    </div>
  )
}

export function RootLayoutHeader() {
  return (
    <header className="sticky top-0 z-10 bg-white/70 backdrop-blur-sm dark:bg-white/5">
      <SizedBox className="flex items-center justify-between py-1">
        <Link
          href="/"
          className="inline-block py-1.5 text-lg font-bold hover:underline dark:text-neutral-300"
        >
          blog.yo-iwamoto.me
        </Link>

        <nav>
          <ul className="flex gap-6">
            <li>
              <NavLink href="/">Posts</NavLink>
            </li>
            <li>
              <NavLink href="/tags">Tags</NavLink>
            </li>
            <li>
              <a href="https://yoiw.dev" className={navLinkStyle}>
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </SizedBox>
    </header>
  )
}

export function RootLayoutContent({ children }: PropsWithChildren) {
  return (
    <div className="grow">
      <SizedBox as="main">{children}</SizedBox>
    </div>
  )
}

export const RootLayout = {
  Root: RootLayoutRoot,
  Header: RootLayoutHeader,
  Content: RootLayoutContent,
}
