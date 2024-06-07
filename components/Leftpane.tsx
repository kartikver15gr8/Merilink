import Card from "./Card";

export default function Leftpane() {
  return (
    <div className="p-4 flex flex-col w-[25%]">
      <Card
        className=" h-40 ml-24 w-40 rotate-6 bg-slate-200  border-slate-200 border-[1px] rounded-xl p-3"
        imgUrl="https://imgs.search.brave.com/elUwmwX2czWW05Hr_wFE1tLydj5NG9Lae-KKMPDJhM0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi81LzUzL1hf/bG9nb18yMDIzX29y/aWdpbmFsLnN2Zy82/NDBweC1YX2xvZ29f/MjAyM19vcmlnaW5h/bC5zdmcucG5n"
        imgBg="bg-white"
        title="X formerly twitter"
        btnText="Follow"
        btnColor="bg-black"
        date=""
        handle="@KartikeyStack"
        bottomImg=""
      />
      <Card
        className="h-40 -ml-6 mt-10 w-80 -rotate-6 bg-red-100  border-slate-200 border-[1px] rounded-xl p-3"
        imgUrl="https://imgs.search.brave.com/byFHBr1DdRRfFH5DP9fZwjkEKZ1JRCf9kAwcSSa758M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzQ4LzUxLzU0/LzM2MF9GXzU0ODUx/NTQ3N19YemZjd3A1/ZmwxZmZoYmM1c08z/a0hrd3JMSFFRVW1N/OS5qcGc"
        imgBg="bg-white"
        title="YouTube"
        btnText="Follow"
        btnColor="bg-red-600"
        date=""
        handle="@kartikeyverma"
        bottomImg=""
      />
      <Card
        className="h-40 w-40 rotate-3 bg-blue-200  border-slate-200 border-[1px] rounded-xl p-3"
        imgUrl="https://imgs.search.brave.com/uGDtHsxME6trYi3Pg1IQoYBs0ZNStLg4fOwcz9gYrwo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
        imgBg="bg-white"
        title="LinkedIn"
        btnText="Follow"
        btnColor="bg-blue-600"
        date=""
        handle="@kartikeyverma"
        bottomImg=""
      />
    </div>
  );
}
