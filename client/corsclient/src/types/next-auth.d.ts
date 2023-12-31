import "@/types/next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: any;
    accessToken?: string;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    user?: any;
  }
}
declare module "next-auth/client" {
  export interface Session {
    accessToken?: string;
  }
}
