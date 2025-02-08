"use client";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
import { LinksType } from "@/lib/types";
import { iconsArray } from "@/lib/svgLinkArr";
import substackIcon from "@/public/icons/substackSvg.avif";

export default function Links() {
  const [instagram, setInstagram] = useState("");
  const [youtube, setYouTube] = useState("");
  const [github, setGitHub] = useState("");
  const [substack, setSubstack] = useState("");
  const [linkedin, setLinkedIn] = useState("");
  const [twitter, setTwitter] = useState("");
  const [medium, setMedium] = useState("");
  const [figma, setFigma] = useState("");
  const [twitch, setTwitch] = useState("");
  const [producthunt, setProductHunt] = useState("");
  const [gumroad, setGumroad] = useState("");
  const [hashnode, setHashnode] = useState("");

  const [userLinks, setUserLinks] = useState<LinksType | null>(null);

  const getLinks = async () => {
    try {
      const apiUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/api/getlinks"
          : "https://www.meril.ink/api/getlinks";
      const response = await axios.get(apiUrl);
      const linksData = response.data;
      console.log(response.data);
      setInstagram(linksData.instagram || "");
      setYouTube(linksData.youtube || "");
      setGitHub(linksData.github || "");

      setSubstack(linksData.substack || "");
      setLinkedIn(linksData.linkedin || "");
      setTwitter(linksData.twitter || "");
      setMedium(linksData.medium || "");

      setFigma(linksData.figma || "");
      setTwitch(linksData.twitch || "");
      setProductHunt(linksData.producthunt || "");
      setGumroad(linksData.gumroad || "");
      setHashnode(linksData.hashnode || "");
      // console.log(response.data.twitter);

      setUserLinks(response.data);
      console.log(userLinks);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  const addHandles = async () => {
    try {
      const apiUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/api/updatelinks"
          : "https://www.meril.ink/api/updatelinks";
      const response = await axios.post(apiUrl, {
        instagram: instagram,
        twitter: twitter,
        linkedin: linkedin,
        github: github,
        youtube: youtube,
        figma: figma,
        hashnode: hashnode,
        medium: medium,
        producthunt: producthunt,
        gumroad: gumroad,
        substack: substack,
        twitch: twitch,
      });
      console.log(response.data);
      window.location.href = "/";
      // return response.data;
    } catch (error) {
      return error;
    }
  };

  const iconsSvgs = iconsArray;

  return (
    <div className="flex justify-center w-[50%] z-40">
      <div className=" flex justify-center flex-col">
        <p className="mt-20 text-2xl font-bold w-96 mb-10">
          Now, lets add your social media accounts to your page.
        </p>
        <div className="flex flex-col scroll-smooth overflow-y-auto h-[62vh] scrollbar-hide">
          <CardInput
            imgURL={iconsSvgs.X}
            setValue={setTwitter}
            placeholder={userLinks?.twitter || "https://…"}
            value={twitter}
          />
          <CardInput
            imgURL={iconsSvgs.Github}
            setValue={setGitHub}
            placeholder={userLinks?.github || "https://…"}
            value={github}
          />
          <CardInput
            imgURL={iconsSvgs.YouTube}
            setValue={setYouTube}
            placeholder={userLinks?.youtube || "https://…"}
            value={youtube}
          />
          <CardInput
            imgURL={iconsSvgs.LinkedIn}
            setValue={setLinkedIn}
            placeholder={userLinks?.linkedin || "https://…"}
            value={linkedin}
          />
          <CardInput
            imgURL={substackIcon}
            setValue={setSubstack}
            placeholder={userLinks?.substack || "https://…"}
            value={substack}
          />

          <CardInput
            imgURL={iconsSvgs.Medium}
            setValue={setMedium}
            placeholder={userLinks?.medium || "https://…"}
            value={medium}
          />

          <CardInput
            imgURL={iconsSvgs.Gumroad}
            setValue={setGumroad}
            placeholder={userLinks?.gumroad || "https://…"}
            value={gumroad}
          />
          <CardInput
            imgURL={iconsSvgs.ProductHunt}
            setValue={setProductHunt}
            placeholder={userLinks?.producthunt || "https://…"}
            value={producthunt}
          />
          <CardInput
            imgURL={iconsSvgs.Instagram}
            setValue={setInstagram}
            placeholder={userLinks?.instagram || "https://…"}
            value={instagram}
          />
          <CardInput
            imgURL={iconsSvgs.Figma}
            setValue={setFigma}
            placeholder={userLinks?.figma || "https://…"}
            value={figma}
          />
          <CardInput
            imgURL={iconsSvgs.Hashnode}
            setValue={setHashnode}
            placeholder={userLinks?.hashnode || "https://…"}
            value={hashnode}
          />
          <CardInput
            imgURL={iconsSvgs.Twitch}
            setValue={setTwitch}
            placeholder={userLinks?.twitch || "https://…"}
            value={twitch}
          />
        </div>

        <Button
          onClick={addHandles}
          className="my-5 shadow-lg rounded-lg hover:scale-105 transition-all duration-300"
        >
          Save
        </Button>
      </div>
    </div>
  );
}

function CardInput({
  imgURL,
  setValue,
  placeholder,
  value,
}: {
  imgURL: string | StaticImageData;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  value: string;
}) {
  return (
    <div className=" flex">
      <div
        className={`w-14 h-14 bg-white shadow-lg border rounded-lg m-1 flex items-center justify-center`}
      >
        <Image className="" src={imgURL} alt="" width={30} height={30} />
      </div>
      <Input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="h-14 w-80 shadow-lg rounded-lg m-1 text-lg bg-[#F7F7F7]"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

// data: {
//   userHandle: user.profilehandle,
//   userId: user.id,
//   instagram: instagram,
//   twitter: twitter,
//   twitch: twitch,
//   linkedin: linkedin,
//   youtube: youtube,
//   gumroad: gumroad,
//   producthunt: producthunt,
//   medium: medium,
//   substack: substack,
//   figma: figma,
//   github: github,
//   hashnode: hashnode,
// },
