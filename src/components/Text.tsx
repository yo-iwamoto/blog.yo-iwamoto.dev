import { cn } from '@/lib/utils';
import type { PropsWithChildren } from 'react';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

type Props<T extends ElementType = 'div'> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export function Text({
  as: As = 'div',
  children,
  className,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <As
      className={cn('text-neutral-700 dark:text-neutral-100', className)}
      {...props}
    >
      {children}
    </As>
  );
}
