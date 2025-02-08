"use client";
import SocialCard from "@/components/SocialCard";
import { Button } from "@/components/ui/button";
import { iconsArray } from "@/lib/svgLinkArr";
import { LinksType, UserType } from "@/lib/types";
import Merilink from "@/public/Merilink.png";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const iconsSvgs = iconsArray;

export default function Handle({ params }: any) {
  const [handle, setHandle] = useState(params.handle);
  const [status, setStatus] = useState("");
  const [user, setUser] = useState<UserType | null>(null);
  const [userLinks, setUserLinks] = useState<LinksType | null>(null);
  const [bioactive, setBioActive] = useState(false);
  const [bio, setBio] = useState("");
  const [bg, setBg] = useState("");

  const updateBioHandler = async () => {
    try {
      const apiUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/api/updatebio"
          : "https://www.meril.ink/api/updatebio";
      const response = await axios.post(apiUrl, {
        newBio: bio,
      });
      console.log(response.data);
      window.location.reload();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const session = useSession();
  const userName = session?.data?.user?.name;

  useEffect(() => {
    const getUserHandleDetails = async () => {
      try {
        const apiUrl =
          process.env.NODE_ENV === "development"
            ? `http://localhost:3000/api/gethandleinfo/?handle=${handle}`
            : `https://www.meril.ink/api/gethandleinfo/?handle=${handle}`;
        const response = await axios.post(apiUrl);
        setUser(response.data.user);
        setUserLinks(response.data.links);
      } catch (error) {
        console.error("Error fetching user handle details:", error);
      }
    };

    getUserHandleDetails();
  }, [handle]);

  useEffect(() => {}, [user, userLinks]);

  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row p-5 justify-center  ${bg}`}
    >
      <div className="flex flex-col justify-between w-full md:w-[45%] p-5 m-1">
        <div className="mt-10 ml-5">
          {user?.image && (
            <Image
              className="rounded-full border-2 border-[#cccaca]"
              src={user?.image}
              alt=""
              width={200}
              height={200}
            />
          )}
          <div className="">
            <p className="text-2xl md:text-4xl font-extrabold my-5">
              {user?.name}
            </p>
            {!bioactive && (
              <p className="text-sm md:text-lg w-[80%]">{user?.bio}</p>
            )}
            {bioactive && (
              <div className="">
                <textarea
                  onChange={(e) => {
                    setBio(e.target.value);
                  }}
                  className="border w-fit rounded-lg p-2"
                  name="bio"
                  id="bio"
                  rows={5}
                  cols={40}
                >
                  {user?.bio}
                </textarea>
                <br></br>
              </div>
            )}

            {userName == user?.name && (
              <Button
                className="mt-5 mr-2 hover:bg-red-800 transition-all duration-300"
                onClick={() => {
                  if (bioactive) {
                    setBioActive(false);
                  } else {
                    setBioActive(true);
                  }
                }}
              >
                {bioactive ? "cancel" : "edit"}
              </Button>
            )}

            {bioactive && (
              <Button
                className="mt-5 bg-sky-600 hover:bg-sky-800 transition-all duration-300"
                onClick={updateBioHandler}
              >
                save
              </Button>
            )}
          </div>
        </div>
        <div className="hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex p-1 bg-slate-100 shadow-lg border w-fit rounded-lg items-center">
          <Link
            href="/"
            className="m-1 border-slate-500 flex justify-center items-center w-10 h-10 border shadow-lg rounded-lg hover:bg-sky-700 transition-all duration-300"
          >
            <Image src={Merilink} width={30} height={30} alt="" />
          </Link>

          <div className="h-10 w-[1px] mx-2 bg-[#F7F7F7] rounded-full"></div>
          <p className="mr-2 text-slate-700">Meril.ink</p>
        </div>
      </div>
      <div className="w-full md:w-[55%] flex flex-wrap p-2 m-1">
        {userName == user?.name && (
          <Link
            href="/addlinks"
            className="hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex absolute right-10 bottom-10 p-1 shadow-lg border-2 hover:bg-sky-700 transition-all duration-300 border-[#c1bfbf] w-fit rounded-full items-center"
          >
            <Image
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23474747' d='M20.71 7.04c-.34.34-.67.67-.68 1c-.03.32.31.65.63.96c.48.5.95.95.93 1.44s-.53 1-1.04 1.5l-4.13 4.14L15 14.66l4.25-4.24l-.96-.96l-1.42 1.41l-3.75-3.75l3.84-3.83c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25l9.56-9.57l3.75 3.75L6.75 21H3z'/%3E%3C/svg%3E"
              width={30}
              height={30}
              alt=""
            />
          </Link>
        )}

        {userLinks?.twitter && (
          <SocialCard
            socialHandle={userLinks?.twitter}
            className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-slate-200 border-slate-200 border-[1px] rounded-xl p-3 my-2"
            cardIcon={iconsSvgs.X}
            imgBg="bg-white"
            title=" Twitter"
            btnText="Follow"
            btnColor="bg-black"
            date=""
            handle={`${userLinks?.twitter?.split(".com/")[1]}` || ""}
            bottomImg=""
          />
        )}
        {userLinks?.github && (
          <SocialCard
            socialHandle={userLinks.github}
            className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-slate-400 border-slate-200 border-[1px] rounded-xl p-3 my-2"
            cardIcon={iconsSvgs.Github}
            imgBg="bg-white"
            title=" GitHub"
            btnText="Follow"
            btnColor="bg-black"
            date=""
            handle={`${userLinks?.github?.split(".com/")[1]}` || ""}
            bottomImg=""
          />
        )}
        {userLinks?.linkedin && (
          <SocialCard
            socialHandle={userLinks.linkedin}
            className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-blue-200 border-slate-200 border-[1px] rounded-xl p-3 my-2"
            cardIcon={iconsSvgs.LinkedIn}
            imgBg="bg-white"
            title=" LinkedIn"
            btnText="Connect"
            btnColor="bg-blue-700"
            date=""
            handle={`${userLinks?.linkedin?.split(".com/in/")[1]}` || ""}
            bottomImg=""
          />
        )}
        {userLinks?.instagram && (
          <SocialCard
            socialHandle={userLinks.instagram}
            className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-pink-300 border-slate-200 border-[1px] rounded-xl p-3 my-2"
            cardIcon={iconsSvgs.Instagram}
            imgBg="bg-white"
            title=" Instagram"
            btnText="Connect"
            btnColor="bg-red-700"
            date=""
            handle={`${userLinks.instagram.split(".com/")[1]}` || ""}
            bottomImg=""
          />
        )}
        {userLinks?.figma && (
          <SocialCard
            socialHandle={userLinks.figma}
            className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-blue-200 border-slate-200 border-[1px] rounded-xl p-3 my-2"
            cardIcon={iconsSvgs.Figma}
            imgBg="bg-white"
            title=" Figma"
            btnText="Follow"
            btnColor="bg-blue-500"
            date=""
            handle={""}
            bottomImg=""
          />
        )}
        {userLinks?.twitch && (
          <SocialCard
            socialHandle={userLinks.twitch}
            className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-violet-200 border-slate-200 border-[1px] rounded-xl p-3 my-2"
            cardIcon={iconsSvgs.Twitch}
            imgBg="bg-white"
            title=" Twitch"
            btnText="Connect"
            btnColor="bg-violet-700"
            date=""
            handle={`${userLinks.twitch.split(".com/")[1]}` || ""}
            bottomImg=""
          />
        )}
        {userLinks?.medium && (
          <SocialCard
            socialHandle={userLinks.medium}
            className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-slate-300 border-slate-200 border-[1px] rounded-xl p-3 my-2"
            cardIcon={iconsSvgs.Medium}
            imgBg="bg-white"
            title="Medium"
            btnText="Check"
            btnColor="bg-slate-700"
            date=""
            handle={`${userLinks.medium.split(".com/")[1]}` || ""}
            bottomImg=""
          />
        )}
        {userLinks?.gumroad && (
          <SocialCard
            socialHandle={userLinks.gumroad}
            className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-pink-200 border-slate-200 border-[1px] rounded-xl p-3 my-2"
            cardIcon={iconsSvgs.Gumroad}
            imgBg="bg-white"
            title=" Gumroad"
            btnText="Connect"
            btnColor="bg-pink-700"
            date=""
            handle={`${userLinks.gumroad.split(".com/")[1]}` || ""}
            bottomImg=""
          />
        )}
        {userLinks?.hashnode && (
          <SocialCard
            socialHandle={userLinks.hashnode}
            className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-slate-100 border-slate-200 border-[1px] rounded-xl p-3 my-2"
            cardIcon={iconsSvgs.Hashnode}
            imgBg="bg-white"
            title=" Hashnode"
            btnText="Follow"
            btnColor="bg-blue-700"
            date=""
            handle={`${userLinks.hashnode.split(".com/")[1]}` || ""}
            bottomImg=""
          />
        )}
        {userLinks?.youtube && (
          <SocialCard
            socialHandle={userLinks.youtube}
            className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-red-200 border-slate-200 border-[1px] rounded-xl p-3 my-2"
            cardIcon={iconsSvgs.YouTube}
            imgBg="bg-white"
            title=" YouTube"
            btnText="Connect"
            btnColor="bg-red-700"
            date=""
            handle={`${userLinks.youtube.split(".com/")[1]}` || ""}
            bottomImg=""
          />
        )}
        {userLinks?.producthunt && (
          <SocialCard
            socialHandle={userLinks.producthunt}
            className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-orange-300 border-slate-200 border-[1px] rounded-xl p-3 my-2"
            cardIcon={iconsSvgs.ProductHunt}
            imgBg="bg-white"
            title=" Product Hunt"
            btnText="Follow"
            btnColor="bg-orange-700"
            date=""
            handle={`${userLinks.producthunt.split(".com/")[1]}` || ""}
            bottomImg=""
          />
        )}
        {userLinks?.substack && (
          <SocialCard
            socialHandle={userLinks.substack}
            className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-orange-200 border-slate-200 border-[1px] rounded-xl p-3 my-2"
            cardIcon={iconsSvgs.Substack}
            imgBg="bg-white"
            title=" Substack"
            btnText="Follow"
            btnColor="bg-orange-900"
            date=""
            handle={
              `${userLinks?.linkedin?.split(".com/in/")[1].slice(0, -1)}` || ""
            }
            bottomImg=""
          />
        )}
      </div>
      <div className="h-14 sticky sm:sticky md:absolute lg:absolute xl:absolute 2xl:absolute bg-slate-100 bottom-10 rounded-lg flex p-1 shadow-lg border w-fit   items-center ">
        <div
          onClick={() => {
            setBg("bg-gradient-to-r from-[#FFF3B1] via-[#FFD0D3] to-[#FFACF5]");
          }}
          className="m-1 border-slate-500 flex justify-center items-center w-10 h-10 border shadow-lg rounded-lg hover:rotate-180 transition-all duration-500 bg-gradient-to-r from-[#FFF3B1] via-[#FFD0D3] to-[#FFACF5]"
        ></div>
        <div
          onClick={() => {
            setBg("bg-gradient-to-r from-[#8954FB] via-[#4887B3] to-[#06BA6A]");
          }}
          className="m-1 border-slate-500 flex justify-center items-center w-10 h-10 border shadow-lg rounded-lg hover:rotate-180 transition-all duration-500 bg-gradient-to-r from-[#8954FB] via-[#4887B3] to-[#06BA6A]"
        ></div>
        <div
          onClick={() => {
            setBg("bg-gradient-to-r from-[#2695bd] via-[#4abcde] to-[#9bebee]");
          }}
          className="m-1 border-slate-500 flex justify-center items-center w-10 h-10 border shadow-lg rounded-lg hover:rotate-180 transition-all duration-500 bg-gradient-to-r from-[#2695bd] via-[#4abcde] to-[#9bebee] "
        ></div>
        <div
          onClick={() => {
            setBg("bg-amber-100");
          }}
          className="m-1 border-slate-500 flex justify-center items-center w-10 h-10 border shadow-lg rounded-lg hover:rotate-180 transition-all duration-500 bg-amber-100"
        ></div>
        <div
          onClick={() => {
            setBg("bg-indigo-400");
          }}
          className="m-1 border-slate-500 flex justify-center items-center w-10 h-10 border shadow-lg rounded-lg hover:rotate-180 transition-all duration-500 bg-indigo-400"
        ></div>
      </div>
    </div>
  );
}
