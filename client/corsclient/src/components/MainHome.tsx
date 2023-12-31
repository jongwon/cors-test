"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

interface Props {}

const MainHome = ({}: Props) => {
  const { data: session } = useSession();

  const logout = () => {
    signOut();
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <Link href="/test/test1"> 파일 업로드 페이지 </Link>
      </div>
      <div>
        <button onClick={logout}>로그아웃</button>
      </div>
    </main>
  );
};

export default MainHome;
