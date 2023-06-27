'use client'

// Common
import { useState } from 'react'
// Services
import { addShortUrl } from '@/services/url'
import Input from '@/components/base/Input'
import Button from '../base/Button'

export default function ShortUrlForm() {
    const [urlShortened, setUrlShortened] = useState<string | undefined>()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.currentTarget))
        const res = await addShortUrl(JSON.stringify(data))
        if (res) {
            setUrlShortened(res.shortUrl)
        }
    }
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className='w-full max-w-5xl bg-slate-900 border border-sky-700 shadow-2xl shadow-sky-400/30 rounded-3xl p-10'
            >
                <fieldset className='mb-4'>
                    <label className='block font-medium mb-1'>URL to short</label>
                    <Input type='url' name='url' placeholder='Type your URL here' required className='py-3' />
                </fieldset>
                <fieldset className='w-full mb-12'>
                    <label className='block font-medium mb-1'>Back-half</label>
                    <div className='w-full h-fit relative'>
                        <div className='w-fit flex items-center gap-1 lg:gap-0.5 absolute top-1/2 -translate-y-1/2 left-3'>
                            <span className='text-2xl font-pacifico text-sky-400'>B</span>
                            <span className='hidden lg:block text-slate-300'>iturl.vercel.app</span>
                            <span className='text-2xl text-slate-300'>/</span>
                        </div>
                        <Input type='text' name="backHalf" placeholder="example:favorite-link" className='pl-12 lg:pl-[157px] py-3' />
                    </div>
                </fieldset>
                <Button className='w-full lg:max-w-xs py-3'>Shorten</Button>
            </form>
            { urlShortened && <p>{urlShortened}</p> }
        </>
    )
}
