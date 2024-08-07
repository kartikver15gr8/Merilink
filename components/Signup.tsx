"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Card from "@/components/Card";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export default function Signup() {
  const session = useSession();
  const user = session.data?.user;

  const signInGitHub = () => {
    signIn("github");
  };

  if (user) {
    redirect("/");
  }

  return (
    <div className="flex p-10 h-[100vh]">
      <div className="w-[50%] p-10 flex flex-col justify-center">
        <Link href="/" className="mb-10">
          <Logo />
        </Link>
        <div className="w-[450px]">
          <div className="mb-20">
            <p className="text-3xl font-bold my-2">Create your account</p>
            <p className="text-slate-600 text-lg">
              Good to have you on Meril.ink!
            </p>
          </div>
          <div className="">
            <div className="flex">
              <Input
                className="rounded-lg mr-2 h-14 w-[49%] bg-slate-200"
                placeholder="Email"
                type="text"
              ></Input>
              <Input
                className="rounded-lg mr-2 h-14 w-[49%] bg-slate-200"
                placeholder="Password"
                type="password"
              ></Input>
            </div>
            <p className="text-blue-800 text-sm underline mt-2 mb-5">
              Reset Password
            </p>
            <Button
              onClick={() => {
                toast.message("magiclink is under development", {
                  description: "Sign in with either GitHub or Google",
                });
              }}
              className="w-full h-12 my-3"
            >
              Sign up
            </Button>
          </div>
          <p className="font-bold">OR</p>
          <div className="my-3 flex">
            <Button onClick={signInGitHub} className="h-12 w-full my-1 mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-2 w-6"
                viewBox="0 0 16 16"
              >
                <path
                  fill="white"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                />
              </svg>
              <p>Sign up with GitHub</p>
            </Button>
            <Button className="h-12 w-full my-1 ml-1">
              <svg
                className="mx-2 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#7b7f83"
                  d="M12.222 5.977a5.402 5.402 0 0 1 3.823 1.496l2.868-2.868A9.61 9.61 0 0 0 12.222 2a9.996 9.996 0 0 0-8.937 5.51l3.341 2.59a5.96 5.96 0 0 1 5.596-4.123"
                  opacity="0.7"
                />
                <path
                  fill="#a1a3a7"
                  d="M3.285 7.51a10.013 10.013 0 0 0 0 8.98l3.341-2.59a5.913 5.913 0 0 1 0-3.8z"
                />
                <path
                  fill="#cfd4dd"
                  d="M15.608 17.068A6.033 6.033 0 0 1 6.626 13.9l-3.34 2.59A9.996 9.996 0 0 0 12.221 22a9.547 9.547 0 0 0 6.618-2.423z"
                  opacity="0.5"
                />
                <path
                  fill="#e7eef9"
                  d="M21.64 10.182h-9.418v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018l-.01.006l.01-.006l3.232 2.51a9.753 9.753 0 0 0 2.982-7.35c0-.687-.06-1.371-.182-2.046"
                  opacity="0.25"
                />
              </svg>
              <p>Sign up with Google</p>
            </Button>
          </div>
          <Link href="/login">
            <p className="text-slate-600 mt-3">or login</p>
          </Link>
        </div>
      </div>
      <div className="w-[50%] justify-center items-center flex p-10 ">
        <div className="">
          <Card
            className=" h-74 w-52 ml-24 -rotate-6 bg-red-200  border-slate-200 border-[1px] rounded-xl p-3"
            imgUrl="https://imgs.search.brave.com/tjVOIzREE3KGD4zc-p2E1LFIPqq4ExC8i0piom9epBA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYwL2Qx/LzYxLzYwZDE2MTMx/YjdmNTI2YWMwYmY0/ZDFjZDE4OTg5MmFj/LmpwZw"
            imgBg="bg-white"
            title="Pinterest"
            btnText="Follow"
            btnColor="bg-red-600"
            date="Fri 7 Jun"
            handle="@JohnEdits"
            bottomImg="https://i.pinimg.com/564x/15/ab/ed/15abed9de351feb04bd81a48031593fe.jpg"
            bottomImgW={200}
            bottomImgH={50}
          />
          <Card
            imgUrl="https://imgs.search.brave.com/ZZVkPN-_cIr6ZXIsJ1d4-RndUMqDkIMUu_gRiPCf69I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuZ2l0aHViYXNz/ZXRzLmNvbS9hc3Nl/dHMvR2l0SHViLU1h/cmstZWEyOTcxY2Vl/Nzk5LnBuZw"
            className="h-40 flex w-80 rotate-12 bg-slate-300  border-slate-200 border-[1px] rounded-xl p-3"
            imgBg="bg-white"
            title="GitHub"
            btnText="Follow"
            btnColor="bg-black"
            date=""
            handle="@kartikver15gr8"
          />
        </div>
        <div>
          <Card
            className=" h-40 ml-4 w-40 rotate-6 bg-slate-200  border-slate-200 border-[1px] rounded-xl p-3"
            imgUrl="https://imgs.search.brave.com/i6ZZ0a2Oh27m7u0oUcIGvv9esf5xvqKboNrp8ofk1PQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSpzSGh0WWhh/Q2UyVWMzSVUwSWdL/d0lRLnBuZw"
            imgBg="bg-white"
            title=" Medium"
            btnText="Follow"
            btnColor="bg-black"
            date=""
            handle="@Techbixx"
            bottomImg=""
          />
          <Card
            className="h-40 -ml-6 mt-10 w-80 -rotate-6 bg-green-200  border-slate-200 border-[1px] rounded-xl p-3"
            imgUrl="https://imgs.search.brave.com/nK8QIJwqTpOiYIRcE2Q2kCu1MkKRZd20_3cFLzmxPVk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE5L1Nwb3RpZnlf/bG9nb193aXRob3V0/X3RleHQuc3Zn.svg"
            imgBg="bg-white"
            title="Spotify"
            btnText="Play"
            btnColor="bg-green-600"
            date=""
            handle="@kartikeyverma"
            bottomImg=""
          />
          <Card
            className="h-40 w-40 rotate-3 bg-blue-200  border-slate-200 border-[1px] rounded-xl p-3"
            imgUrl="https://imgs.search.brave.com/0UqyB-Y6jbXUrXOLcePiSpF5jDlmb84vcwMLWyd_nbs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/MC8wNC9GYWNlYm9v/a19mX2xvZ29fJTI4/MjAyMSUyOS5zdmcv/NjQwcHgtRmFjZWJv/b2tfZl9sb2dvXyUy/ODIwMjElMjkuc3Zn/LnBuZw"
            imgBg="bg-white"
            title="Facebook"
            btnText="Connect"
            btnColor="bg-blue-600"
            date=""
            handle="@kartikeyverma"
            bottomImg=""
          />
        </div>
      </div>
    </div>
  );
}
