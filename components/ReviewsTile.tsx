import Image from "next/image";
import { Button } from "./ui/button";

export default function ReviewsTile() {
  return (
    <div className="my-10 md:my-20 flex flex-col justify-center items-center">
      <div className="mb-4">
        <p className="font-bold text-xl md:text-2xl text-center">
          Join thousands of inspiring creatives
        </p>
      </div>
      <div className="flex flex-wrap justify-center my-4 md:my-10">
        <Image
          className="rounded-full mx-1 mb-2 md:mb-0"
          src="https://global-uploads.webflow.com/6335b33630f88833a92915fc/63e570b1f143e37a72b1fad1_usIbgiSkU0Imjd6R-5mi0qgTz_400x400%2520(1).jpg"
          width={50}
          height={50}
          alt=""
        />
        <Image
          className="rounded-full mx-1 mb-2 md:mb-0"
          src="https://global-uploads.webflow.com/6335b33630f88833a92915fc/63e5704bcb847d69c5e67a51_BHbSeVGx_400x400-1.jpg"
          width={50}
          height={50}
          alt=""
        />
        <Image
          className="rounded-full mx-1 mb-2 md:mb-0"
          src="https://global-uploads.webflow.com/6335b33630f88833a92915fc/63e5704bcb847d3c76e67a52_l8mvVzVMjCWFcPLY-rogie-avatar.png"
          width={50}
          height={50}
          alt=""
        />
        <Image
          className="rounded-full mx-1 mb-2 md:mb-0"
          src="https://global-uploads.webflow.com/6335b33630f88833a92915fc/63e5704b59270ea352472043_unnamed-1.png"
          width={50}
          height={50}
          alt=""
        />
        <Image
          className="rounded-full mx-1 mb-2 md:mb-0"
          src="https://global-uploads.webflow.com/6335b33630f88833a92915fc/63e570b14e03f119f08dfa37_bbbb.jpeg"
          width={50}
          height={50}
          alt=""
        />
        <Image
          className="rounded-full mx-1 mb-2 md:mb-0"
          src="https://global-uploads.webflow.com/6335b33630f88833a92915fc/63e570b1ab482462908a5179_josh.jpeg"
          width={50}
          height={50}
          alt=""
        />
        <Image
          className="rounded-full mx-1 mb-2 md:mb-0"
          src="https://global-uploads.webflow.com/6335b33630f88833a92915fc/63e570b1b9606146579fcc1b_Aa.png"
          width={50}
          height={50}
          alt=""
        />
        <Image
          className="rounded-full mx-1 mb-2 md:mb-0"
          src="https://global-uploads.webflow.com/6335b33630f88833a92915fc/63e5704b4e03f10f408deeaa_FZNLckJkr4vO8ovq-andy-adams-barry-phipps-square-WEB.jpg"
          width={50}
          height={50}
          alt=""
        />
      </div>
      <Button className="flex items-center justify-center bg-black text-white rounded-full py-2 px-4 hover:bg-gray-800 transition-colors duration-300">
        <p className="mr-2">Explore the most creative Merilinks</p>
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 15"
        >
          <path
            fill="#ffffff"
            fillRule="evenodd"
            d="M8 1h6v6h-1V2.707L1.854 13.854l-.708-.708L12.293 2H8z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </div>
  );
}
