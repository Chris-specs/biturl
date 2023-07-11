// Common
import NextLink from 'next/link'
// Utils
import { cn } from '@/utils/style'

export default function Link({
    href,
    children,
    main,
    className
}: {
    href: string
    children: React.ReactNode
    main?: boolean
    className?: string
}) {
    if (main) {
        return (
            <NextLink
                href={href}
                className={cn(
                    'bg-sky-400/90 text-white font-medium rounded-lg px-6 py-2 transition-all',
                    'hover:bg-sky-400',
                    'disabled:opacity-50 disabled:hover:bg-sky-400/90 disabled:cursor-not-allowed',
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
