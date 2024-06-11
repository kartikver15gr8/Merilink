"use client";

import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Merilink from "@/public/Merilink.png";

type UserType = {
  id: string;
  emailVerified: Date | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  password: string | null;
  name: string | null;
  avatar: string | null;
  profilehandle: string | null;
};

type LinksType = {
  figma: string | null;
  github: string | null;
  gumroad: string | null;
  hashnode: string | null;
  id: 1;
  instagram: string | null;
  linkedin: string | null;
  medium: string | null;
  producthunt: string | null;
  substack: string | null;
  twitch: string | null;
  twitter: string | null;
  userHandle: string | null;
  userId: string;
  youtube: string | null;
};

export default function Handle({ params }: any) {
  const [handle, setHandle] = useState(params.handle);
  const [status, setStatus] = useState("");
  const [user, setUser] = useState<UserType | null>(null);
  const [userLinks, setUserLinks] = useState<LinksType | null>(null);

  const session = useSession();
  const useremail = session?.data?.user?.email;

  useEffect(() => {
    const getUserHandleDetails = async () => {
      try {
        const response = await axios.post(
          `http://localhost:3000/api/gethandleinfo/?handle=${handle}`
        );
        setUser(response.data.user);
        setUserLinks(response.data.links);
      } catch (error) {
        console.error("Error fetching user handle details:", error);
      }
    };

    getUserHandleDetails();
  }, [handle]);

  useEffect(() => {
    console.log(`user: ${JSON.stringify(user)}`);
    console.log(`userLinks: ${JSON.stringify(userLinks)}`);
  }, [user, userLinks]);

  return (
    <div className="min-h-screen flex p-5 justify-center">
      <div className="flex flex-col justify-between  w-[50%] p-5 m-1">
        <div className="mt-10 ml-5">
          {user?.image && (
            <Image
              className="rounded-full "
              src={user?.image}
              alt=""
              width={200}
              height={200}
            />
          )}
          <div className="">
            <p className="text-4xl font-extrabold my-5">{user?.name}</p>
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

          <div className="h-10 w-[1px] mx-2 bg-slate-400 rounded-full"></div>
          <p className="mr-2 text-slate-500">Meril.ink</p>
        </div>
      </div>
      <div className=" w-[50%] flex flex-wrap p-2 m-1">
        <Card
          className="h-40 mx-1  w-40  bg-slate-200  border-slate-200 border-[1px] rounded-xl p-3"
          imgUrl="https://imgs.search.brave.com/elUwmwX2czWW05Hr_wFE1tLydj5NG9Lae-KKMPDJhM0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi81LzUzL1hf/bG9nb18yMDIzX29y/aWdpbmFsLnN2Zy82/NDBweC1YX2xvZ29f/MjAyM19vcmlnaW5h/bC5zdmcucG5n"
          imgBg="bg-white"
          title=" Twitter"
          btnText="Follow"
          btnColor="bg-black"
          date=""
          handle={`${userLinks?.twitter?.split(".com/")[1]}`}
          bottomImg=""
        />
        <Card
          className="h-40 mx-1 w-40  bg-slate-200  border-slate-200 border-[1px] rounded-xl p-3"
          imgUrl="https://imgs.search.brave.com/0WgEuQBRctTMyQC3wTDDrG3UzaEmC3u4Z862Ym2ZLXU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzkxL09jdGljb25z/LW1hcmstZ2l0aHVi/LnN2Zw.svg"
          imgBg="bg-white"
          title=" GitHub"
          btnText="Follow"
          btnColor="bg-black"
          date=""
          handle={`${userLinks?.github?.split(".com/")[1]}`}
          bottomImg=""
        />
        <Card
          className="h-40 mx-1 w-80  bg-blue-200  border-slate-200 border-[1px] rounded-xl p-3"
          imgUrl="https://imgs.search.brave.com/uGDtHsxME6trYi3Pg1IQoYBs0ZNStLg4fOwcz9gYrwo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
          imgBg="bg-white"
          title=" LinkedIn"
          btnText="Connect"
          btnColor="bg-blue-700"
          date=""
          handle={`${userLinks?.linkedin?.split(".com/in/")[1].slice(0, -1)}`}
          bottomImg=""
        />
        <Card
          className="h-40 mx-1 w-40  bg-red-200  border-slate-200 border-[1px] rounded-xl p-3"
          imgUrl="https://imgs.search.brave.com/uGDtHsxME6trYi3Pg1IQoYBs0ZNStLg4fOwcz9gYrwo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
          imgBg="bg-white"
          title=" Instagram"
          btnText="Connect"
          btnColor="bg-red-700"
          date=""
          handle={`Instagram`}
          bottomImg=""
        />
        <Card
          className="h-40 mx-1 w-40  bg-white  border-slate-200 border-[1px] rounded-xl p-3"
          imgUrl="https://imgs.search.brave.com/0WgEuQBRctTMyQC3wTDDrG3UzaEmC3u4Z862Ym2ZLXU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzkxL09jdGljb25z/LW1hcmstZ2l0aHVi/LnN2Zw.svg"
          imgBg="bg-white"
          title=" Figma"
          btnText="Follow"
          btnColor="bg-blue-500"
          date=""
          handle={`myfigma`}
          bottomImg=""
        />
        <Card
          className="h-40 mx-1 w-80  bg-violet-200  border-slate-200 border-[1px] rounded-xl p-3"
          imgUrl="https://imgs.search.brave.com/uGDtHsxME6trYi3Pg1IQoYBs0ZNStLg4fOwcz9gYrwo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
          imgBg="bg-white"
          title=" Twitch"
          btnText="Connect"
          btnColor="bg-violet-700"
          date=""
          handle={`myTwitch`}
          bottomImg=""
        />
        <Card
          className="h-40 mx-1 w-80  bg-slate-200  border-slate-200 border-[1px] rounded-xl p-3"
          imgUrl="https://imgs.search.brave.com/uGDtHsxME6trYi3Pg1IQoYBs0ZNStLg4fOwcz9gYrwo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
          imgBg="bg-white"
          title="Medium"
          btnText="Check"
          btnColor="bg-slate-700"
          date=""
          handle={`kartikey`}
          bottomImg=""
        />
        <Card
          className="h-40 mx-1 w-40  bg-purple-200  border-slate-200 border-[1px] rounded-xl p-3"
          imgUrl="https://imgs.search.brave.com/uGDtHsxME6trYi3Pg1IQoYBs0ZNStLg4fOwcz9gYrwo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
          imgBg="bg-white"
          title=" Gumroad"
          btnText="Connect"
          btnColor="bg-pink-700"
          date=""
          handle={`myGumroad`}
          bottomImg=""
        />
        <Card
          className="h-40 mx-1 w-40  bg-white  border-slate-200 border-[1px] rounded-xl p-3"
          imgUrl="https://imgs.search.brave.com/uGDtHsxME6trYi3Pg1IQoYBs0ZNStLg4fOwcz9gYrwo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
          imgBg="bg-white"
          title=" Hashnode"
          btnText="Follow"
          btnColor="bg-blue-700"
          date=""
          handle={`${userLinks?.linkedin?.split(".com/in/")[1].slice(0, -1)}`}
          bottomImg=""
        />
        <Card
          className="h-40 mx-1 w-80  bg-red-200  border-slate-200 border-[1px] rounded-xl p-3"
          imgUrl="https://imgs.search.brave.com/uGDtHsxME6trYi3Pg1IQoYBs0ZNStLg4fOwcz9gYrwo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
          imgBg="bg-white"
          title=" YouTube"
          btnText="Connect"
          btnColor="bg-red-700"
          date=""
          handle={`YouTube`}
          bottomImg=""
        />
        <Card
          className="h-40 mx-1 w-40  bg-orange-200 border-slate-200 border-[1px] rounded-xl p-3"
          imgUrl="https://imgs.search.brave.com/uGDtHsxME6trYi3Pg1IQoYBs0ZNStLg4fOwcz9gYrwo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
          imgBg="bg-white"
          title=" Product Hunt"
          btnText="Follow"
          btnColor="bg-orange-700"
          date=""
          handle={`${userLinks?.linkedin?.split(".com/in/")[1].slice(0, -1)}`}
          bottomImg=""
        />
        <Card
          className="h-40 mx-1 w-40  bg-orange-400  border-slate-200 border-[1px] rounded-xl p-3"
          imgUrl="https://imgs.search.brave.com/uGDtHsxME6trYi3Pg1IQoYBs0ZNStLg4fOwcz9gYrwo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
          imgBg="bg-white"
          title=" Substack"
          btnText="Follow"
          btnColor="bg-orange-900"
          date=""
          handle={`${userLinks?.linkedin?.split(".com/in/")[1].slice(0, -1)}`}
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
