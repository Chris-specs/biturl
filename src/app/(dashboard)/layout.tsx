import SidebarItem from '@/components/layout/SidebarItem'
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
                <ul className='flex flex-col gap-2 px-4 py-4'>
                    {MENU_ITEMS.map(item => (
                        <li key={ item.name }>
                            <SidebarItem {...item} />
                        </li>
                    ))}
                </ul>
            </aside>
            <div>{ children }</div>
        </div>
    )
}
