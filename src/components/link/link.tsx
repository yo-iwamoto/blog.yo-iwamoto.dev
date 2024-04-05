import NextLink, { type LinkProps } from "next/link";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<LinkProps> & {
  className?: string;
};

export function Link({ children, href, className }: Props) {
  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  );
}
