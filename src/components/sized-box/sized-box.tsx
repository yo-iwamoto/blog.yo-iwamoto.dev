import type { ElementType, PropsWithChildren } from "react"
import { cn } from "#src/lib/utils"

type Props = PropsWithChildren & {
  as?: ElementType
  className?: string
}

export function SizedBox({ children, as, className }: Props) {
  const Tag = as ?? "div"
  return (
    <Tag className={cn("mx-auto max-w-4xl px-4 lg:px-0", className)}>
      {children}
    </Tag>
  )
}
