import React from "react";
import { Video } from "lucide-react";
import Image from "next/image";
import ImgBanner from "@/public/ImgBanner.png";

export default function DemoBanner() {
  return (
    <div className="w-full justify-center flex my-10">
      <div className="flex justify-center items-center bg-purple-500 w-[1100px] h-[700px] rounded-xl shadow-xl">
        <Image
          className="rounded-md shadow-xl"
          src={ImgBanner}
          alt=""
          width={900}
          height={500}
        />
      </div>
    </div>
  );
}
