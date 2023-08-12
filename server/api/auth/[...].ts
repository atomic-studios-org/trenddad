// file: ~/server/api/auth/[...].ts
//@ts-ignore
import { NuxtAuthHandler } from '#auth'
import GoogleProvider from "next-auth/providers/google";

export default NuxtAuthHandler({
    secret: '2389u234jfn49i38rh234n293e8u1987fvhdsnew12bn80dyghb23',
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GoogleProvider.default({
           clientId: process.env.GOOGLE_ID,
           clientSecret: process.env.GOOGLE_SECRET
        })
      
    ]
})
