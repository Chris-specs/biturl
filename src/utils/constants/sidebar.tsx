import { Icon } from '@/components/base/Icon'

export const MENU_ITEMS = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: <Icon.dashboard className="w-5 h-5" />
    },
    {
        name: 'Links',
        path: '/links',
        icon: <Icon.link className="w-6 h-6" />
    },
    {
        name: 'Settings',
        path: '/settings',
        icon: <Icon.gear className="w-6 h-6" />
    }
]
