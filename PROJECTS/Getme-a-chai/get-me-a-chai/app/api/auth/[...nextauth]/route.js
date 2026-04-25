import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from '@/models/User';
import Payments from "@/models/Payments";
import connectDB from "@/db/connectDb";


export const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // secret: process.env.NEXTAUTH_SECRET,

callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    if (account.provider == "github") {
      // connect to DB
     await connectDB();

      // check if the user
      const currentUser = await User.findOne({ email: user.email });
      if (!currentUser) {
        const newUser = new User.create({
          email: user.email,
          username: user.email.split("@")[0],
        })
        await newUser.save()
        user.name = newUser.username
      }
      return true
      
    }
  },
  
}
  
});


export { handler as GET, handler as POST };
