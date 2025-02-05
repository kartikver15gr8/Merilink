"use client";
import { UserType } from "@/lib/types";
import Merilink from "@/public/Merilink.png";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function Maintitle() {
  const [userdetails, setUserDetails] = useState<UserType | null>(null);

  const getUser = async () => {
    try {
      const apiUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/api/getme"
          : "https://www.meril.ink/api/getme";
      const response = await axios.get(apiUrl);
      setUserDetails(response.data);
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = () => {
    signOut();
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
    <div className=" md:w-[50%] h-min-screen my-auto z-40">
      <div className="flex flex-col justify-center items-center ">
        <div className="flex my-2 justify-center items-center w-[80px] h-[80px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[100px] 2xl:w-[100px] 2xl:h-[100px]  bg-blue-600 rounded-2xl">
          <Image
            className="w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-20 2xl:h-20"
            src={Merilink}
            alt=""
          />
        </div>
        <p className="text-2xl my-2 font-extrabold">Meril.ink</p>
      </div>

      <div className="flex flex-col justify-center items-center my-10">
        <p className="text-3xl font-extrabold sm:text-3xl md:text-5xl lg:text:6xl xl:text-6xl 2xl:text-7xl">
          A Link in Bio.
        </p>
        <p className="text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text:6xl xl:text-6xl 2xl:text-7xl">
          Rich and Beautiful.
        </p>

        <div className="flex flex-wrap justify-center my-4">
          <p className="text-xs sm:text-sm md:text-md lg:text:lg xl:text-xl 2xl:text-xl text-slate-400 ">
            Your personal page to show everything you are and create.
          </p>
        </div>
      </div>

      <div className="flex flex-col  items-center">
        {user && (
          <div>
            <p className="my-4 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-lg  hover:scale-110 translate-all duration-300">
              Welcome back {user} 👋🏼
            </p>
          </div>
        )}
        {userdetails && user && (
          <div className="flex flex-col justify-center ">
            <Link
              href={
                userdetails.profilehandle
                  ? `/${userdetails.profilehandle}`
                  : `/createhandle`
              }
            >
              <Button className="text-white my-1  font-bold text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-lg  w-44 h-12 sm:w-44 sm:h-12 md:w-72 md:h-14 lg:w-72 lg:h-14 xl:w-72 xl:h-14 2xl:w-72 2xl:h-14   rounded-xl hover:scale-105 transition-all duration-300">
                {userdetails.profilehandle
                  ? `Check your merilink`
                  : `create your merilink`}
              </Button>
            </Link>
            <Button
              onClick={handleSignOut}
              className=" my-1 bg-blues text-black font-bold text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-lg  w-44 h-12 sm:w-44 sm:h-12 md:w-72 md:h-14 lg:w-72 lg:h-14 xl:w-72 xl:h-14 2xl:w-72 2xl:h-14   rounded-xl hover:text-red-400 hover:bg-transparent transition-all duration-300  "
            >
              Logout
            </Button>
          </div>
        )}
        {!user && (
          <Link href="/login">
            <Button className="text-white font-bold text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-lg  w-44 h-12 sm:w-44 sm:h-12 md:w-72 md:h-14 lg:w-72 lg:h-14 xl:w-72 xl:h-14 2xl:w-72 2xl:h-14   rounded-xl hover:scale-105 transition-all duration-300">
              Create your Meril.ink
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
