"use client";
import Merilink from "@/public/Merilink.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import Reveal from "./Reveal";
import { useSession } from "next-auth/react";

export default function Maintitle() {
  const session = useSession();
  const user = session.data?.user?.name;
  return (
    <div className=" w-[50%]">
      <div className="flex flex-col justify-center items-center mt-32">
        <div className="flex my-2 justify-center items-center w-[100px] h-[100px] bg-blue-600 rounded-2xl">
          <Image src={Merilink} alt="" width={90} height={90} />
        </div>
        <p className="text-2xl my-2 font-extrabold">Meril.ink</p>
      </div>

      <div className="flex flex-col justify-center items-center my-10">
        <p className="text-6xl font-extrabold">A Link in Bio.</p>
        <p className="text-6xl font-extrabold">But Rich and Beautiful.</p>
        <p className="text-xl text-slate-400 my-4">
          Your personal page to show everything you are and create.
        </p>
      </div>

      <div className="flex flex-col  items-center">
        <Link href="/createhandle">
          <Button className="text-white font-bold text-lg w-72 h-14 rounded-xl hover:scale-105 transition-all duration-300">
            Create your Merilink
          </Button>
        </Link>
        {!user && (
          <Link href="/login">
            <p className="my-4 text-lg hover:scale-110 translate-all duration-300">
              login
            </p>
          </Link>
        )}
        {user && (
          <Link href="/login">
            <p className="my-4 text-lg hover:scale-110 translate-all duration-300">
              Welcome back {user} 👋🏼
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}
