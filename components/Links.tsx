"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import axios from "axios";

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

export default function Links() {
  const [instagram, setInstagram] = useState("");
  const [youtube, setYouTube] = useState("");
  const [github, setGitHub] = useState("");
  const [spotify, setSpotify] = useState("");
  const [substack, setSubstack] = useState("");
  const [linkedin, setLinkedIn] = useState("");
  const [twitter, setTwitter] = useState("");
  const [medium, setMedium] = useState("");
  const [pinterest, setPinterest] = useState("");
  const [figma, setFigma] = useState("");
  const [twitch, setTwitch] = useState("");
  const [producthunt, setProductHunt] = useState("");
  const [gumroad, setGumroad] = useState("");
  const [hashnode, setHashnode] = useState("");

  const [userLinks, setUserLinks] = useState<LinksType | null>(null);

  const getLinks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/getlinks");
      console.log(response.data);
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
      const response = await axios.post("http://localhost:3000/api/addlinks", {
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
      return response.data;
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="flex justify-center w-[50%] z-40">
      <div className=" flex justify-center flex-col">
        <p className="mt-20 text-2xl font-bold w-96 mb-10">
          Now, lets add your social media accounts to your page.
        </p>
        <div className="flex flex-col overflow-auto overflow-y-scroll h-[62vh] scrollbar-hide">
          <CardInput
            imgURL="https://imgs.search.brave.com/elUwmwX2czWW05Hr_wFE1tLydj5NG9Lae-KKMPDJhM0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi81LzUzL1hf/bG9nb18yMDIzX29y/aWdpbmFsLnN2Zy82/NDBweC1YX2xvZ29f/MjAyM19vcmlnaW5h/bC5zdmcucG5n"
            setValue={setTwitter}
            placeholder={userLinks?.twitter || "https://…"}
          />
          <CardInput
            imgURL="https://imgs.search.brave.com/0WgEuQBRctTMyQC3wTDDrG3UzaEmC3u4Z862Ym2ZLXU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzkxL09jdGljb25z/LW1hcmstZ2l0aHVi/LnN2Zw.svg"
            setValue={setGitHub}
            placeholder={userLinks?.github || "https://…"}
          />
          <CardInput
            imgURL="https://imgs.search.brave.com/byFHBr1DdRRfFH5DP9fZwjkEKZ1JRCf9kAwcSSa758M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzQ4LzUxLzU0/LzM2MF9GXzU0ODUx/NTQ3N19YemZjd3A1/ZmwxZmZoYmM1c08z/a0hrd3JMSFFRVW1N/OS5qcGc"
            setValue={setYouTube}
            placeholder={userLinks?.youtube || "https://…"}
          />
          <CardInput
            imgURL="https://imgs.search.brave.com/uGDtHsxME6trYi3Pg1IQoYBs0ZNStLg4fOwcz9gYrwo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
            setValue={setLinkedIn}
            placeholder={userLinks?.linkedin || "https://…"}
          />
          <CardInput
            imgURL="https://imgs.search.brave.com/rxX_fCW9OAIzMipnQzBbJ1zBRuCrYnOj1dS3MaeezE0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jYW1v/LmdpdGh1YnVzZXJj/b250ZW50LmNvbS8w/N2M5NDVhYjk4Y2Rh/YzEzZTNiZjJmNzAx/MWU4YTkwNTllZDk3/M2M3YzAzNjg5ZTRl/M2VjNjFjZDJhZjRl/YjdkLzY4NzQ3NDcw/NzMzYTJmMmY3Mzc1/NjI3Mzc0NjE2MzZi/MmU2MzZmNmQyZjY5/NmQ2NzJmNzM3NTYy/NzM3NDYxNjM2YjJl/NzA2ZTY3"
            setValue={setSubstack}
            placeholder={userLinks?.substack || "https://…"}
          />

          <CardInput
            imgURL="https://imgs.search.brave.com/tjVOIzREE3KGD4zc-p2E1LFIPqq4ExC8i0piom9epBA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYwL2Qx/LzYxLzYwZDE2MTMx/YjdmNTI2YWMwYmY0/ZDFjZDE4OTg5MmFj/LmpwZw"
            setValue={setPinterest}
            placeholder={"https://…"}
          />
          <CardInput
            imgURL="https://imgs.search.brave.com/i6ZZ0a2Oh27m7u0oUcIGvv9esf5xvqKboNrp8ofk1PQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSpzSGh0WWhh/Q2UyVWMzSVUwSWdL/d0lRLnBuZw"
            setValue={setMedium}
            placeholder={"https://…"}
          />
          <CardInput
            imgURL="https://imgs.search.brave.com/nK8QIJwqTpOiYIRcE2Q2kCu1MkKRZd20_3cFLzmxPVk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE5L1Nwb3RpZnlf/bG9nb193aXRob3V0/X3RleHQuc3Zn.svg"
            setValue={setSpotify}
            placeholder={"https://…"}
          />
          <CardInput
            imgURL="https://imgs.search.brave.com/zgZ-NMCvxGO98tFUk3cdR57_9WR2P_s-WsMdftEN2P8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWd1bXJvYWQtNzY2/MjI4OS02Mjk3MjI1/LnBuZz9mPXdlYnAm/dz0yNTY"
            setValue={setGumroad}
            placeholder={userLinks?.gumroad || "https://…"}
          />
          <CardInput
            imgURL="https://imgs.search.brave.com/2HhRpdDKVswhS02oyyFfKYZkLiRm4HyUISKzIXPO724/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9wcm9kdWN0LWh1/bnQuc3Zn.svg"
            setValue={setProductHunt}
            placeholder={userLinks?.producthunt || "https://…"}
          />
          <CardInput
            imgURL="https://imgs.search.brave.com/FmUZXvAg5PpCriub4NHVAjY6hRUWXwVRkivCyUpMac0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzMyLzIwLzAz/LzM2MF9GXzUzMjIw/MDM4Ml9LTDZDRGFa/Y3VzaVpPOW5PNVRE/N2hXUUV6OEtvNkJa/Qi5qcGc"
            setValue={setInstagram}
            placeholder={userLinks?.instagram || "https://…"}
          />
          <CardInput
            imgURL="https://imgs.search.brave.com/vW62EhmdMfk7HjQovK_01sgTw5y8V14RQQYtRb1jONQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzMzL0ZpZ21hLWxv/Z28uc3Zn.svg"
            setValue={setFigma}
            placeholder={userLinks?.figma || "https://…"}
          />
          <CardInput
            imgURL="https://imgs.search.brave.com/lkG6CsVp-z9pcLTFLHPpVOZXr5LvUbZ7qYCxtD0F-Ls/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vcHJhY3RpY2Fs/ZGV2L2ltYWdlL2Zl/dGNoL3MtLTdTSDBR/QmVuLS0vY19saW1p/dCxmX2F1dG8sZmxf/cHJvZ3Jlc3NpdmUs/cV9hdXRvLHdfODAw/L2h0dHBzOi8vY2Ru/Lmhhc2hub2RlLmNv/bS9yZXMvaGFzaG5v/ZGUvaW1hZ2UvdXBs/b2FkL3YxNjQ3MTUy/NzA5MzI0L0JncUhF/aVI4dy5wbmc"
            setValue={setHashnode}
            placeholder={userLinks?.hashnode || "https://…"}
          />
          <CardInput
            imgURL="https://imgs.search.brave.com/HaoOZpxMxVaE1iMr6c5fWSEvOAur9f0saa6nhJcmdwU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvdHdpdGNoL3R3/aXRjaF9QTkcyNy5w/bmc"
            setValue={setTwitch}
            placeholder={userLinks?.twitch || "https://…"}
          />
        </div>

        <Button onClick={addHandles} className="my-3 rounded-lg">
          Create
        </Button>
      </div>
    </div>
  );
}

function CardInput({
  imgURL,
  setValue,
  placeholder,
}: {
  imgURL: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
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
        className="h-14 w-80 bg-slate-50 shadow-lg rounded-lg m-1 text-lg"
        placeholder={placeholder}
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
