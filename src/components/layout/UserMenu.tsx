'use client'

import { cn } from '@/utils/style'
import Image from 'next/image'
import { signOut } from 'next-auth/react'
import { User } from 'next-auth'

export default async function UserMenu({ user }: {user?: User}) {
    return (
        <div className={cn(
            'group relative'
        )}>
            <div className='w-8 h-8 rounded-full relative overflow-hidden'>
                <Image src={user?.image as string} alt={user?.name as string} fill className='object-cover' />
            </div>
            <div className={cn(
                'hidden pt-4 absolute top-full right-0 transition-all',
                'group-hover:block'
            )}>
                <ul className='w-fit flex flex-col gap-2 bg-slate-900 border border-sky-700 shadow-xl shadow-sky-400/30 rounded-xl p-4'>
                    <li className='cursor-not-allowed'>Profile</li>
                    <li className='min-w-max'><button onClick={() => signOut()}>Sign out</button></li>
                </ul>
            </div>
        </div>
    )
}
