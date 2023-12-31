import NextAuth from "next-auth/next";
import NextAuthOptions from "@/components/utils/NextOptions";

const handler = NextAuth(NextAuthOptions);

export { handler as GET, handler as POST };
