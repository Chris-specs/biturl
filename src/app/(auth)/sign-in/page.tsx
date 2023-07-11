import { Icon } from '@/components/base/Icon'
import Link from '@/components/base/Link'
import UserAuthForm from '@/components/custom/UserAuthForm'
import Container from '@/components/layout/Container'

export default function SignInPage() {
    return (
        <section className='w-full mt-8 px-4'>
            <Container maxWidth={768}>
                <Link
                    href='/'
                    className='w-fit flex items-center gap-2'
                >
                    <Icon.back className='w-4 h-4'/>{' '}
                Go back to home
                </Link>

                <div className='flex flex-col justify-center items-center gap-6 mt-12'>
                    <p className='text-4xl text-slate-200 font-medium'>Welcome back</p>
                    <p className='w-full max-w-xs font-light text-center'>By continuing, you are setting up a Biturl account and agree to our User Agreement and Privacy Policy.</p>
                    <UserAuthForm />
                </div>
            </Container>
        </section>
    )
}
