// Common
import NextLink from 'next/link'
// Utils
import { cn } from '@/utils/helpers/style'

type LinkVariant = 'main'| 'sidebar'

export default function Link({
    href,
    children,
    variant,
    className
}: {
    href: string
    children: React.ReactNode
    variant?: LinkVariant
    className?: string
}) {
    if (variant === 'main') {
        return (
            <NextLink
                href={href}
                className={cn(
                    'bg-sky-400/90 text-white font-medium rounded-lg px-6 py-2 transition-all',
                    'hover:bg-sky-400',
                    className
                )}
            >{ children }</NextLink>
        )
    }

    if (variant === 'sidebar') {
        return (
            <NextLink
                href={href}
                className={cn(
                    'text-white font-medium rounded-lg px-6 py-2 transition-all',
                    'hover:bg-sky-400',
                    className
                )}
            >{ children }</NextLink>
        )
    }

    return (
        <NextLink
            href={href}
            className={cn(
                'hover:text-sky-400',
                className
            )}
        >{ children }</NextLink>
    )
}
