import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      // connect to db
      // check if user exisit
      // if not then add user to db
      // return true to allow sign in
    },
    // mods the session object
    async session({ session }) {
      // get user from db
      // assign the user id to the session
      //  return session
    },
  },
};
