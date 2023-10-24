import { cn } from '@/lib/utils';
import type { ElementType, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  as?: ElementType;
  className?: string;
}>;

export function SizedContainer({ as: As = 'div', children, className }: Props) {
  return (
    <As className={cn('mx-auto max-w-5xl px-4', className)}>{children}</As>
  );
}
