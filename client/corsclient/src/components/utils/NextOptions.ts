import CredentialProvider from "next-auth/providers/credentials";
import { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import axios from "axios";

const NextOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: "Credential",
      credentials: {
        username: { label: "Username", type: "username" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (
        credentials: Record<"username" | "password", string> | undefined,
        req: any
      ): Promise<any> => {
        // console.log("===1", credentials);
        const resp = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/login`,
          {
            username: credentials?.username,
            password: credentials?.password,
          }
        );
        // console.log("===2", resp.data);
        // console.log("로그인 ", resp.data.accessToken);

        if (resp.status !== 200) {
          throw new Error("아이디 또는 비밀번호가 잘못되었습니다.");
        }

        const user = await (
          await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/account`, {
            headers: {
              Authorization: `Bearer ${resp.data.accessToken}`,
            },
          })
        ).json();

        // console.log("===3");
        // console.log("유저 ", user);

        if (user) {
          return {
            user,
            token: {
              accessToken: resp.data.accessToken,
            },
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async (param: any): Promise<any> => {
      const { token, user } = param;
      if (user) {
        token.accessToken = user.token.accessToken;
        token.user = user.user;
      }
      return token;
    },

    async session({
      session,
      token,
      user,
    }: {
      session: Session;
      token: JWT;
      user: any;
    }) {
      session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
  },
};

export default NextOptions;
