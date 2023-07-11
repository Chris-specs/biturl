// Common
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'
// Prisma
// import { PrismaClient } from '@db/client'

// const db = new PrismaClient()

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const shortUrl = searchParams.get('short')

    if (shortUrl) {
        const data = await db.link.findUnique({
            where: {
                shortUrl: shortUrl ?? ''
            }
        })

        return NextResponse.json(data, {
            status: 200
        })
    }

    const data = await db.link.findMany()

    return NextResponse.json(data, {
        status: 200
    })
}

export async function POST(req: Request) {
    const { url, backHalf } = await req.json()
    const shortUrl = Math.random().toString().substring(2, 7)

    try {
        const data = await db.link.create({
            data: {
                url,
                shortUrl: backHalf !== '' ? backHalf : shortUrl
            }
        })

        return NextResponse.json(data, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message: 'An error has occurred!'
        }, {
            status: 400
        })
    }
}
