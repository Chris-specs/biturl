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
                className='w-full max-w-4xl border border-gray-800 rounded-3xl p-10'
            >
                <fieldset className='mb-4'>
                    <label className='block'>URL to short</label>
                    <Input type='url' name='url' placeholder='Type your URL here' required className='py-3' />
                </fieldset>
                <div className='w-full grid grid-cols-12 gap-8'>
                    <fieldset className='col-span-3 mb-8'>
                        <label className='block'>Domain</label>
                        <Input type='text' placeholder="biturl.vercel.app" className='rounded-r-sm py-3' />
                    </fieldset>
                    <fieldset className='col-span-9'>
                        <label className='block'>Back-half</label>
                        <Input type='text' name="backHalf" placeholder="example:favorite-link" className='rounded-l-sm py-3' />
                    </fieldset>
                </div>
                <Button className='w-1/4'>Shorten</Button>
            </form>
            { urlShortened && <p>{urlShortened}</p> }
        </>
    )
}
