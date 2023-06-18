'use client'

// Common
import { useState } from 'react'
// Services
import { addShortUrl } from '@/services/url'

export default function HomePage() {
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
        <section className='w-full flex flex-col items-center'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label className='block'>URL to convert</label>
                    <input type='url' name="url" placeholder="Type your URL here" required />
                </fieldset>
                <fieldset>
                    <label className='block'>Back-half</label>
                    <input type='text' name="backHalf" placeholder="example:favorite-link" />
                </fieldset>
                <button>Shorten</button>
            </form>
            { urlShortened && <p>{urlShortened}</p> }
        </section>
    )
}
