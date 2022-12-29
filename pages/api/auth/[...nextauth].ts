import NextAuth from "next-auth/next";
import second from 'next-auth/providers/spotify'
import { scopes } from "../../../config/spotify";
export default NextAuth({
    providers:[
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID as string,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
            authorization:{
                url:'https://accounts.spotify.com/authorize',
            params:{
                scope:scopes
            }
            }

        })
    ],
    pages:{
        signIn:'/login'
    }
})

function SpotifyProvider(arg0: { clientId: string; clientSecret: string; authorization: { url: string; params: { scope: string; }; }; }): import("next-auth/providers").Provider {
    throw new Error("Function not implemented.");
}
