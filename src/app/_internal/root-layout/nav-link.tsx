"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";
import { cn } from "#src/lib/utils";

type Props = PropsWithChildren<{
  href: string;
}>;

export function NavLink({ href, children }: Props) {
  const pathname = usePathname();
  const isCurrent = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      className={cn(
        "rounded-md py-1 text-lg text-neutral-700 underline-offset-4 hover:underline dark:text-neutral-100",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2",
      )}
    >
      {children}
    </Link>
  );
}
