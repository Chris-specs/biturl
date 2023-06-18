// Common
import { redirect } from 'next/navigation'
// Services
import { getUrlByShort } from '@/services/url'

export default async function RedirectPage({
    params
}: {
    params: { shortUrl: string }
}) {
    const res = await getUrlByShort(params.shortUrl)

    if (!res) {
        redirect('/')
    }

    redirect(res.url)
}
