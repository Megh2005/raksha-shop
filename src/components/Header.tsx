"use client";

import Link from "next/link";
import { FcShop } from "react-icons/fc";
import { IoMdAddCircle } from "react-icons/io";
import { IoLogIn } from "react-icons/io5";
import { BiSolidLogInCircle, BiSolidLogOutCircle } from "react-icons/bi";
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import Image from "next/image";

export default function Header({ session }: { session: Session | null }) {
  return (
    <header className="border-b p-4 flex justify-between">
      <Link
        className="text-purple-600 font-extrabold text-3xl flex gap-2"
        href="/"
      >
        <FcShop className="text-4xl text-purple-600" />
        Raksha Marketplace
      </Link>
      <nav className="gap-4 *:border *:rounded-lg *:font-bold *:px-2 *:py-1 *:bg-transperent *:text-purple-600 flex">
        <Link href="/new" className="hover:bg-purple-800 border-4 flex align-middle justify-center items-center gap-1 hover:text-white border-purple-600 duration-500 ease-in-out">
          <IoMdAddCircle className="text-xl" />
          Add Product
        </Link>
        {!session?.user && (
          <>
            <button
              onClick={() => signIn("google")}
              className="hover:bg-purple-800 border-4 flex align-middle justify-center items-center gap-1 hover:text-white border-purple-600 duration-500 ease-in-out"
            >
              <IoLogIn className="text-2xl" />
              Login
            </button>
            <button className="hover:bg-purple-800 border-4 flex align-middle justify-center items-center gap-1 hover:text-white border-purple-600 duration-500 ease-in-out">
              <BiSolidLogInCircle className="text-2xl" />
              Register
            </button>
          </>
        )}
        {session?.user && (
          <>
            <Link href={"/account"}>
              <Image
                src={session.user.image as string}
                alt={"avatar"}
                width={34}
                height={34}
                className="rounded-md relative"
              />
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
