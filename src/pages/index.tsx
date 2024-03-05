import Head from "next/head";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  const user = useUser();
  // console.log({ user });

  return (
    <>
      <UserButton />
      <div>Your home page's content can go here.</div>
    </>
  );
}
