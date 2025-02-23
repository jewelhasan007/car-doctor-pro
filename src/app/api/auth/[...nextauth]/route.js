import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authInfo = {
session : {
    strategy : "jwt",
    maxAge : 30 * 24 * 60 * 60
},
providers : [
    CredentialsProvider({
        credentials : {
            email : {},
            password : {}
        },
        async authorize (credentials){
            return true;
        }
    }),
],
callbacks : {},
pages : {
    signIn: '/login'
}
}

const handler = NextAuth(authInfo)

export {handler as GET, handler as POST}


/***
 * import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

export const authInfo = {
    secret : process.env.NEXT_PUBLIC_API_SECRET,
    session : {
        strategy : "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    providers : [
CredentialsProvider({
    credentials : {
        email : { label : "Email", type : "text", required : true, placeholder : "Your Email",},
        password : { label : "Password", type : "password", required : true, placeholder : "Password",},
       
    },
    async authorize(credentials) {
        const {email, password} = credentials;
        if(!credentials){
            return null;
        }
      if(email){
        const currentUser = users.find((user)=> user.email === email)
        if(currentUser){
            if(currentUser.password === password){
                return currentUser;
            }
        }
      }
      return null;
    }
}),
    ],
    callbacks : {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
              token.type = user.type
            }
            return token;
          },
          async session({ session, token }) {
            session.user.type = token.type
            return session;
          }
        },
        providers: [
            GoogleProvider({
              clientId: process.env.GOOGLE_CLIENT_ID,
              clientSecret: process.env.GOOGLE_CLIENT_SECRET
            })
          ]

}

const handler = NextAuth( authInfo)

const users = [
    {
        id : 1,
        name : "Asad",
        email : "asad@gmail.com",
        type : "admin",
        password : "password",
        image : "https://picsum.photos/200/300"
    },
    {
        id : 2,
        name : "Bokul",
        email : "bokul@gmail.com",
        type : "moderator",
        password : "password",
         image : "https://picsum.photos/200/300"
    },
    {
        id : 3,
        name : "Karim",
        email : "karim@gmail.com",
        type : "user",
        password : "password",
        image : "https://picsum.photos/200/300"
    }
]

export {handler as GET, handler as POST}
 * 
 * 
 */