import type { PropsWithChildren } from "react";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "#src/lib/utils";

type Props<T extends ElementType> = {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export function Text<T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: PropsWithChildren<Props<T>>) {
  const As = as ?? "div";

  return (
    <As
      className={cn("text-neutral-700 dark:text-neutral-300", className)}
      {...props}
    >
      {children}
    </As>
  );
}
