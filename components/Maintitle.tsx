"use client";
import Merilink from "@/public/Merilink.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import Reveal from "./Reveal";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { UserType } from "@/lib/types";
import axios from "axios";
import { toast } from "sonner";

export default function Maintitle() {
  const [userdetails, setUserDetails] = useState<UserType | null>(null);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/getme");
      console.log(response.data);
      setUserDetails(response.data);

      setUserDetails(response.data);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const session = useSession();
  const user = session.data?.user?.name;
  if (!user) {
    toast("Sign in to explore all features");
  }

  return (
    <div className=" w-[50%] z-40">
      <div className="flex flex-col justify-center items-center mt-32">
        <div className="flex my-2 justify-center items-center w-[100px] h-[100px] bg-blue-600 rounded-2xl">
          <Image src={Merilink} alt="" width={90} height={90} />
        </div>
        <p className="text-2xl my-2 font-extrabold">Meril.ink</p>
      </div>

      <div className="flex flex-col justify-center items-center my-10">
        <p className="text-3xl font-extrabold sm:text-3xl md:text-5xl lg:text:6xl xl:text-6xl 2xl:text-7xl">
          A Link in Bio.
        </p>
        <p className="text-3xl font-extrabold sm:text-3xl md:text-5xl lg:text:6xl xl:text-6xl 2xl:text-7xl">
          But Rich and Beautiful.
        </p>
        <p className="text-xs sm:text-sm md:text-md lg:text:lg xl:text-xl 2xl:text-xl text-slate-400 my-4">
          Your personal page to show everything you are and create.
        </p>
      </div>

      <div className="flex flex-col  items-center">
        {user && (
          <div>
            <p className="my-4 text-lg hover:scale-110 translate-all duration-300">
              Welcome back {user} 👋🏼
            </p>
          </div>
        )}
        {userdetails?.profilehandle && (
          <Link href={`/${userdetails.profilehandle}`}>
            <Button className="text-white font-bold text-lg w-72 h-14 rounded-xl hover:scale-105 transition-all duration-300">
              Check your Meril.ink
            </Button>
          </Link>
        )}
        {!userdetails?.profilehandle && (
          <Link href="/createhandle">
            <Button className="text-white font-bold text-lg w-72 h-14 rounded-xl hover:scale-105 transition-all duration-300">
              Create your Meril.ink
            </Button>
          </Link>
        )}
        {!user && (
          <Link href="/login">
            <p className="my-4 text-lg hover:scale-110 translate-all duration-300">
              Sign in
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}
