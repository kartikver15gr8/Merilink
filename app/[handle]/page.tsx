"use client";

import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Merilink from "@/public/Merilink.png";

export default function Handle({ params }: any) {
  const [handle, setHandle] = useState(params.handle);
  const [status, setStatus] = useState("");

  const session = useSession();
  const useremail = session.data?.user?.email;

  useEffect(() => {
    const getHandle = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/checkhandle",
          { userhandle: handle }
        );

        setStatus(JSON.stringify(response.data));
      } catch (error) {}
    };

    getHandle();
  }, [handle]);

  return (
    <div className="min-h-screen flex p-5 justify-center">
      <div className="flex flex-col justify-between  w-[50%] p-5 m-1">
        <div className="mt-10 ml-5">
          {session.data?.user?.image && (
            <Image
              className="rounded-full "
              src={session.data?.user?.image}
              alt=""
              width={200}
              height={200}
            />
          )}
          <div className="">
            <p className="text-4xl font-extrabold my-5">
              {session.data?.user?.name}
            </p>
            <p className="text-lg w-[80%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae et iste optio sed laboriosam alias. Hic quisquam, ex
              iusto cum reprehenderit incidunt quas?
            </p>
          </div>
        </div>
        <div className="flex p-1 shadow-lg border w-fit rounded-lg items-center">
          <div className="m-1 flex justify-center items-center w-10 h-10 border shadow-lg rounded-lg hover:bg-slate-300 transition-all duration-500">
            <Image src={Merilink} width={30} height={30} alt="" />
          </div>
          {/* <div className="m-1 w-10 h-10 flex justify-center items-center border shadow-lg rounded-lg hover:bg-slate-300 transition-all duration-500"></div>
          <div className="m-1 w-10 h-10 flex justify-center items-center border shadow-lg rounded-lg hover:bg-slate-300 transition-all duration-500"></div> */}
          <div className="h-10 w-[1px] mx-2 bg-slate-400 rounded-full"></div>
          <p className="mr-2 text-slate-500">Meril.ink</p>
        </div>
      </div>
      <div className=" w-[50%] flex flex-wrap p-2 m-1">
        <Card
          className="h-40  w-40  bg-slate-200  border-slate-200 border-[1px] rounded-xl p-3"
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
          className="h-40  w-40  bg-slate-200  border-slate-200 border-[1px] rounded-xl p-3"
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
          className="h-40  w-40  bg-slate-200  border-slate-200 border-[1px] rounded-xl p-3"
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
          className="h-40  w-40  bg-slate-200  border-slate-200 border-[1px] rounded-xl p-3"
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
          className="h-40  w-40  bg-slate-200  border-slate-200 border-[1px] rounded-xl p-3"
          imgUrl="https://imgs.search.brave.com/i6ZZ0a2Oh27m7u0oUcIGvv9esf5xvqKboNrp8ofk1PQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSpzSGh0WWhh/Q2UyVWMzSVUwSWdL/d0lRLnBuZw"
          imgBg="bg-white"
          title=" Medium"
          btnText="Follow"
          btnColor="bg-black"
          date=""
          handle="@Techbixx"
          bottomImg=""
        />
      </div>
      <div className=" h-14 absolute bg-slate-100 bottom-10 rounded-lg flex p-1 shadow-lg border w-fit  items-center ">
        <div className="m-1 flex justify-center items-center w-10 h-10 border shadow-lg rounded-lg hover:bg-slate-300 transition-all duration-500">
          <svg
            className="w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21"
          >
            <path
              fill="none"
              stroke="#64758B"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.5 7.5l1-1a2.828 2.828 0 1 1 4 4l-1 1m-3 3l-1 1a2.828 2.828 0 1 1-4-4l1-1m1 3l5-5"
            />
          </svg>
        </div>
        <div className="m-1 flex justify-center items-center w-10 h-10 border shadow-lg rounded-lg hover:bg-slate-300 transition-all duration-500">
          <svg
            className="w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21"
          >
            <path
              fill="none"
              stroke="#64758B"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.5 7.5l1-1a2.828 2.828 0 1 1 4 4l-1 1m-3 3l-1 1a2.828 2.828 0 1 1-4-4l1-1m1 3l5-5"
            />
          </svg>
        </div>
        <div className="m-1 flex justify-center items-center w-10 h-10 border shadow-lg rounded-lg hover:bg-slate-300 transition-all duration-500">
          <svg
            className="w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21"
          >
            <path
              fill="none"
              stroke="#64758B"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.5 7.5l1-1a2.828 2.828 0 1 1 4 4l-1 1m-3 3l-1 1a2.828 2.828 0 1 1-4-4l1-1m1 3l5-5"
            />
          </svg>
        </div>
        {/* <div className="m-1 w-10 h-10 flex justify-center items-center border shadow-lg rounded-lg hover:bg-slate-300 transition-all duration-500"></div>
          <div className="m-1 w-10 h-10 flex justify-center items-center border shadow-lg rounded-lg hover:bg-slate-300 transition-all duration-500"></div> */}
        <div className="h-10 w-[1px] mx-2 bg-slate-400 rounded-full"></div>

        <div className="m-1 flex justify-center items-center w-10 h-10 border shadow-lg rounded-full hover:bg-slate-300 transition-all duration-500">
          <svg
            className="w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21"
          >
            <path
              fill="none"
              stroke="#64758B"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.5 7.5l1-1a2.828 2.828 0 1 1 4 4l-1 1m-3 3l-1 1a2.828 2.828 0 1 1-4-4l1-1m1 3l5-5"
            />
          </svg>
        </div>
        <div className="m-1 flex justify-center items-center w-10 h-10 border shadow-lg rounded-full hover:bg-blue-300 transition-all duration-500">
          <svg
            className="w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21"
          >
            <path
              fill="none"
              stroke="#64758B"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.5 7.5l1-1a2.828 2.828 0 1 1 4 4l-1 1m-3 3l-1 1a2.828 2.828 0 1 1-4-4l1-1m1 3l5-5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
