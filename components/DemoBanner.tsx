import React from "react";
import { Video } from "lucide-react";
import Image from "next/image";
import ImgBanner from "@/public/ImgBanner.png";

export default function DemoBanner() {
  return (
    <div className="w-full m-1 justify-center flex my-10">
      <div className="flex p-4 justify-center items-center bg-purple-500  h-[300px] w-[450px] rounded-xl shadow-xl sm:w-[500px] sm:h-[350px] md:w-[600px] md:h-[380px] lg:w-[900px] lg:h-[550px]  xl:w-[1150px] xl:h-[600px] 2xl:w-[1200px] 2xl:h-[650px]">
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
