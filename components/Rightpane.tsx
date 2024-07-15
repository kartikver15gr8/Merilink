import Card from "./Card";
import Reveal from "./Reveal";

export default function Rightpane() {
  return (
    <div className="p-4  w-[25%] hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex">
      <div className="p-4 ">
        <Card
          className=" h-74 w-52 ml-24 -rotate-6 bg-orange-200  border-slate-200 border-[1px] rounded-xl p-3"
          imgUrl="https://imgs.search.brave.com/rxX_fCW9OAIzMipnQzBbJ1zBRuCrYnOj1dS3MaeezE0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jYW1v/LmdpdGh1YnVzZXJj/b250ZW50LmNvbS8w/N2M5NDVhYjk4Y2Rh/YzEzZTNiZjJmNzAx/MWU4YTkwNTllZDk3/M2M3YzAzNjg5ZTRl/M2VjNjFjZDJhZjRl/YjdkLzY4NzQ3NDcw/NzMzYTJmMmY3Mzc1/NjI3Mzc0NjE2MzZi/MmU2MzZmNmQyZjY5/NmQ2NzJmNzM3NTYy/NzM3NDYxNjM2YjJl/NzA2ZTY3"
          imgBg="bg-white"
          title="Substack"
          btnText="subscribe"
          btnColor="bg-orange-800"
          date="Fri 7 Jun"
          handle="@kartikeyverma"
          bottomImg="https://imgs.search.brave.com/ZCy5FWgn1OX1WtqWGXFV__2ljeskkOi1vQX083-sFfI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdWJz/dGFja2NvdXJzZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDIvSG93LXRv/LVVzZS1JbWFnZXMt/YW5kLUdyYXBoaWNz/LWluLVN1YnN0YWNr/LU5ld3NsZXR0ZXIu/cG5n"
          bottomImgW={200}
          bottomImgH={50}
        />
        <Card
          imgUrl="https://imgs.search.brave.com/ZZVkPN-_cIr6ZXIsJ1d4-RndUMqDkIMUu_gRiPCf69I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuZ2l0aHViYXNz/ZXRzLmNvbS9hc3Nl/dHMvR2l0SHViLU1h/cmstZWEyOTcxY2Vl/Nzk5LnBuZw"
          className="h-40 w-80 rotate-12 bg-slate-300  border-slate-200 border-[1px] rounded-xl p-3"
          imgBg="bg-white"
          title="GitHub"
          btnText="Follow"
          btnColor="bg-black"
          date=""
          handle="@antfu"
          bottomImg=""
        />
        {/* <Card
          className="h-40 w-40 rotate-3 bg-blue-200  border-slate-200 border-[1px] rounded-xl p-3"
          imgUrl="https://imgs.search.brave.com/uGDtHsxME6trYi3Pg1IQoYBs0ZNStLg4fOwcz9gYrwo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
          imgBg="bg-white"
          title="LinkedIn"
          btnText="Follow"
          btnColor="bg-blue-600"
          date=""
          handle="@kartikeyverma"
        /> */}
      </div>
    </div>
  );
}
