'use client'

import { useSelectedLayoutSegment } from 'next/navigation'
import Link from '../base/Link'
import { cn } from '@/utils/helpers/style'

export default function SidebarItem({
    name,
    path,
    icon
}: {
    name: string
    path: string
    icon: JSX.Element
}) {
    const segment = useSelectedLayoutSegment()

    return (
        <Link
            href={path}
            variant='main'
            className={cn(
                'flex gap-2 items-center',
                segment !== name.toLowerCase() && 'bg-transparent hover:bg-transparent hover:text-sky-400'
            )}
        >{ icon }{ name }</Link>
    )
}
