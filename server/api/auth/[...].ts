// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth'
import DiscordProvider from 'next-auth/providers/discord'

export default NuxtAuthHandler({
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        DiscordProvider.default({
           clientId: process.env.DISCORD_ID,
           clientSecret: process.env.DISCORD_SECRET
        })
    ]
})
