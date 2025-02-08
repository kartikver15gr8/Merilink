import { iconsArray } from "@/lib/svgLinkArr";
import Card from "./Card";

const iconsSvgs = iconsArray;
export default function Leftpane() {
  return (
    <div className="p-4 hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex flex-col w-[25%]">
      <Card
        className=" h-40 ml-24 mt-2 w-40 rotate-6 bg-slate-200  border-slate-200 border-[1px] rounded-xl p-3"
        imgUrl={iconsSvgs.X}
        imgBg="bg-white"
        title="X formerly twitter"
        btnText="Follow"
        btnColor="bg-black"
        date=""
        handle="@KartikeyStack"
        bottomImg=""
      />
      <Card
        className="h-40 -ml-1 mt-10 w-80 -rotate-6 bg-red-100  border-slate-200 border-[1px] rounded-xl p-3"
        imgUrl={iconsSvgs.YouTube}
        imgBg="bg-white"
        title="YouTube"
        btnText="Follow"
        btnColor="bg-red-600"
        date=""
        handle="@harkirat1"
        bottomImg=""
      />
      <Card
        className="h-40 w-40 rotate-3 bg-blue-200  border-slate-200 border-[1px] rounded-xl p-3"
        imgUrl={iconsSvgs.LinkedIn}
        imgBg="bg-white"
        title="LinkedIn"
        btnText="Follow"
        btnColor="bg-blue-600"
        date=""
        handle="@narendramodi"
        bottomImg=""
      />
    </div>
  );
}
