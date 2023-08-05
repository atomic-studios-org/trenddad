// file: ~/server/api/auth/[...].ts
//@ts-ignore
import { NuxtAuthHandler } from '#auth'
import DiscordProvider from 'next-auth/providers/discord'

export default NuxtAuthHandler({
    secret: '2389u234jfn49i38rh234n293e8u19ew12bn80dyghb23',
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        DiscordProvider.default({
           clientId: process.env.DISCORD_ID,
           clientSecret: process.env.DISCORD_SECRET
        })
    ]
})
