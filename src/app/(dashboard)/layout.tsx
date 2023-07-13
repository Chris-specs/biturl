import Link from '@/components/base/Link'
import { getAuthSession } from '@/lib/auth'
import { MENU_ITEMS } from '@/utils/constants/sidebar'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    const session = await getAuthSession()

    if (!session) {
        redirect('/sign-in')
    }

    return (
        <div className='w-full h-[calc(100vh-96px)] flex'>
            <aside className='w-fit h-full bg-slate-900 border-r border-sky-900'>
                <ul className='px-4 py-4'>
                    {MENU_ITEMS.map(({ name, path, icon }) => (
                        <li key={ name }>
                            <Link href={path} variant='sidebar' className='flex gap-2'>{icon}{ name }</Link>
                        </li>
                    ))}
                </ul>
            </aside>
            <div>{ children }</div>
        </div>
    )
}
