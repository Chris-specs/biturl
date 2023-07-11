'use client'

import { useState } from 'react'
import Button from '../base/Button'
import { signIn } from 'next-auth/react'
import { Icon } from '../base/Icon'

export default function UserAuthForm() {
    const [isLoading, setIsLoading] = useState(false)

    const loginWithGoogle = async () => {
        try {
            setIsLoading(true)
            await signIn('google')
        } catch (error) {
            console.log('ERROR WHEN SIGN IN -> ', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='w-full'>
            <Button
                onClick={loginWithGoogle}
                disabled={isLoading}
                className='w-full flex justify-center items-center gap-2'
            >
                { isLoading ? <Icon.loading className='animate-[spin_1s_linear_infinite] h-5' /> : <Icon.google className='w-6 h-6'/>}
                Google
            </Button>
        </div>
    )
}
