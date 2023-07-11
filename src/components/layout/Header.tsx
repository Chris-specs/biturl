import NextLink from 'next/link'
import Link from '../base/Link'
import { Icon } from '../base/Icon'
import Container from './Container'
import { getAuthSession } from '@/lib/auth'
import UserMenu from './UserMenu'

export default async function Header() {
    const session = await getAuthSession()

    return (
        <header className="px-4">
            <Container>
                <nav className="w-full h-24 flex justify-between items-center">
                    <NextLink href='/' className='text-4xl font-pacifico text-white'>
                        <span className='text-sky-400'>Bit</span>url
                    </NextLink>
                    <div className='flex items-center gap-4'>
                        {
                            session
                                ? <UserMenu user={session.user} />
                                : <Link href='/sign-in' main>Sign in</Link>
                        }
                        <hr className='w-[1px] h-7 bg-slate-400/50 border-0' />
                        <NextLink href='https://github.com/Chris-specs/biturl' target='_blank'>
                            <Icon.github className='w-6 h-6'/>
                        </NextLink>
                    </div>
                </nav>
            </Container>
        </header>
    )
}
