"use client";
import Link from "next/link";
import Mobilemenu from "./Mobilemenu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-24">
      <div className="md:hidden lg:block w-[20%]">
        <Link href={"/"} className="font-bold text-xl text-blue-600">
          FxrSocial
        </Link>
      </div>
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        <div className="flex gap-6 text-gray-600">
          <Link href={"/"} className="flex gap-2 items-center">
            <Image
              src={"/home.png"}
              alt="Homepage"
              height={16}
              width={16}
              className="w-4 h-4"
            />
            <span>Homepage</span>
          </Link>
          <Link href={"/"} className="flex gap-2 items-center">
            <Image
              src={"/friends.png"}
              alt="Homepage"
              height={16}
              width={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href={"/"} className="flex gap-2 items-center">
            <Image
              src={"/stories.png"}
              alt="Homepage"
              height={16}
              width={16}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
          <Image src={"/search.png"} alt="" width={14} height={14} />
        </div>
      </div>
      <div className="w-[30%] flex items-center gap-4 xl:gap8 justify-end">
        <ClerkLoading>
          <div className="inline-block h4 w4 animate-spin rounded-full border-2 border-gray-500" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="flex items-center gap-8">
              <div className="cursor-pointer">
                <Image
                  src={"/people.png"}
                  alt="people"
                  width={20}
                  height={20}
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  src={"/messages.png"}
                  alt="people"
                  width={20}
                  height={20}
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  src={"/notifications.png"}
                  alt="people"
                  width={20}
                  height={20}
                />
              </div>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image src={"/noAvatar.png"} alt="" width={20} height={20} />
              <Link href={"/sign-in"}>Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <Mobilemenu />
      </div>
    </div>
  );
};

export default Navbar;
