import { NextAuthOptions, getServerSession } from 'next-auth'
import { db } from './db'
// import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
    // adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/sign-in'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    callbacks: {
        async session({ token, session }) {
            if (token && session.user) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
                session.user.username = token.username
            }
            // console.log('SESSION CALLBACK CALLED ->', { token, session })
            return session
        },
        async jwt({ token, user }) {
            // console.log('JWT CALLBACK CALLED ->', { token, user })

            const dbUser = await db.user.findFirst({
                where: {
                    email: token.email
                }
            })

            // // console.log('JWT DBUSER ->', dbUser)

            if (!dbUser) {
                token.id = user.id
                // // console.log('JWT TOKEN ->', token)

                await db.user.create({
                    data: {
                        id: token.id,
                        name: token.name,
                        email: token.email,
                        image: token.picture
                    }
                })

                // console.log('JWT USER CREATED ->', userCreated)
                return token
            }

            if (!dbUser.username) {
                await db.user.update({
                    where: {
                        id: dbUser.id
                    },
                    data: {
                        username: Math.random().toString(36).slice(2, 9) +
                        Math.random().toString(36).toUpperCase().slice(2, 9)
                    }
                })
                // console.log('JWT USER UPDATED ->', userUpdated)
            }

            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image,
                username: dbUser.username
            }
        },
        redirect() {
            return '/'
        }
    }
}

export const getAuthSession = () => getServerSession(authOptions)
