import { PrismaClient } from '@prisma/client'

declare global {
    // eslint-disable-next-line no-var, no-unused-vars
  var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export const db = prisma
