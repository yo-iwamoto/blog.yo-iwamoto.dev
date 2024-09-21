import { cn } from "#src/lib/utils";
import type { ElementType, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  as?: ElementType;
  className?: string;
};

export function SizedBox({ children, as, className }: Props) {
  const Tag = as ?? "div";
  return (
    <Tag className={cn("max-w-4xl mx-auto px-4 lg:px-0", className)}>
      {children}
    </Tag>
  );
}
