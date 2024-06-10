import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Links() {
  return (
    <div className="flex justify-center w-[50%] z-40">
      <div className=" flex justify-center flex-col">
        <p className="mt-20 text-2xl font-bold w-96 mb-10">
          Now, lets add your social media accounts to your page.
        </p>
        <CardInput imgURL="https://imgs.search.brave.com/elUwmwX2czWW05Hr_wFE1tLydj5NG9Lae-KKMPDJhM0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi81LzUzL1hf/bG9nb18yMDIzX29y/aWdpbmFsLnN2Zy82/NDBweC1YX2xvZ29f/MjAyM19vcmlnaW5h/bC5zdmcucG5n" />
        <CardInput imgURL="https://imgs.search.brave.com/byFHBr1DdRRfFH5DP9fZwjkEKZ1JRCf9kAwcSSa758M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzQ4LzUxLzU0/LzM2MF9GXzU0ODUx/NTQ3N19YemZjd3A1/ZmwxZmZoYmM1c08z/a0hrd3JMSFFRVW1N/OS5qcGc" />
        <CardInput imgURL="https://imgs.search.brave.com/uGDtHsxME6trYi3Pg1IQoYBs0ZNStLg4fOwcz9gYrwo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" />
        <CardInput imgURL="https://imgs.search.brave.com/rxX_fCW9OAIzMipnQzBbJ1zBRuCrYnOj1dS3MaeezE0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jYW1v/LmdpdGh1YnVzZXJj/b250ZW50LmNvbS8w/N2M5NDVhYjk4Y2Rh/YzEzZTNiZjJmNzAx/MWU4YTkwNTllZDk3/M2M3YzAzNjg5ZTRl/M2VjNjFjZDJhZjRl/YjdkLzY4NzQ3NDcw/NzMzYTJmMmY3Mzc1/NjI3Mzc0NjE2MzZi/MmU2MzZmNmQyZjY5/NmQ2NzJmNzM3NTYy/NzM3NDYxNjM2YjJl/NzA2ZTY3" />
        <CardInput imgURL="https://imgs.search.brave.com/0WgEuQBRctTMyQC3wTDDrG3UzaEmC3u4Z862Ym2ZLXU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzkxL09jdGljb25z/LW1hcmstZ2l0aHVi/LnN2Zw.svg" />
        <CardInput imgURL="https://imgs.search.brave.com/tjVOIzREE3KGD4zc-p2E1LFIPqq4ExC8i0piom9epBA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYwL2Qx/LzYxLzYwZDE2MTMx/YjdmNTI2YWMwYmY0/ZDFjZDE4OTg5MmFj/LmpwZw" />
        <CardInput imgURL="https://imgs.search.brave.com/i6ZZ0a2Oh27m7u0oUcIGvv9esf5xvqKboNrp8ofk1PQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSpzSGh0WWhh/Q2UyVWMzSVUwSWdL/d0lRLnBuZw" />
        <CardInput imgURL="https://imgs.search.brave.com/nK8QIJwqTpOiYIRcE2Q2kCu1MkKRZd20_3cFLzmxPVk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE5L1Nwb3RpZnlf/bG9nb193aXRob3V0/X3RleHQuc3Zn.svg" />
        <Button className="my-3 rounded-lg">Create</Button>
      </div>
    </div>
  );
}

function CardInput({ imgURL }: { imgURL: string }) {
  return (
    <div className=" flex">
      <div
        className={`w-14 h-14 bg-white shadow-lg border rounded-lg m-1 flex items-center justify-center`}
      >
        <Image className="" src={imgURL} alt="" width={30} height={30} />
      </div>
      <Input
        className="h-14 w-80 bg-slate-50 shadow-lg rounded-lg m-1 text-lg"
        placeholder="https://…"
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
