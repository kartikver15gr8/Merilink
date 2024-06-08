import Image from "next/image";
import { Button } from "./ui/button";

export default function Features() {
  return (
    <div className="flex flex-col p-10 justify-center items-center h-[700px]">
      <div className="flex justify-center w-[80%]">
        <p className="text-3xl font-bold sm:text-3xl md:text-4xl lg:text:5xl xl:text-5xl 2xl:text-5xl">
          A quick, seamless and powerful link in bio
        </p>
      </div>
      <div className="flex  mt-20">
        <div className="w-[350px] flex-col h-[400px] bg-slate-100 border-slate-200 border mx-4 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 items-center flex">
          <div className="w-72 rounded-full flex items-center justify-center text-xl mt-20 bg-black h-20 hover:scale-105 transition-all duration-300">
            <p className="font-bold text-white ">meril.ink/me</p>
          </div>
          <div className="w-72 flex-col rounded-full flex items-center justify-center text-lg  mt-20 h-20">
            <p>Share your in link bio seamlessly</p>
            <p>in just a few clicks</p>
          </div>
        </div>
        <div className="w-[350px] flex-col h-[400px] bg-slate-100 border-slate-200 border mx-4 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 items-center pt-16 flex">
          <div className="w-64 rounded-full flex items-center  text-xl my-1 bg-sky-300 h-16 hover:scale-105 transition-all duration-300">
            <svg
              className="w-10 mx-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                fill="#005eff"
                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"
              />
            </svg>
            <p className="w-20 h-[14px] rounded-full bg-blue-400"></p>
          </div>
          <div className="w-64 rounded-full flex items-center  text-xl my-1 bg-slate-300 h-16 hover:scale-105 transition-all duration-300">
            <svg
              className="w-10 mx-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                color="black"
              >
                <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109" />
                <path d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.613-1.614L17 17h-2.778l-3.028-4.193" />
              </g>
            </svg>
            <p className="w-20 h-[14px] rounded-full bg-slate-400"></p>
          </div>
          <div className="w-64 rounded-full flex items-center  text-xl my-1 bg-red-300 h-16 hover:scale-105 transition-all duration-300">
            <svg
              className="mx-4 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                fill="#ff0000"
                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104l.022.26l.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105l-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006l-.087-.004l-.171-.007l-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103l.003-.052l.008-.104l.022-.26l.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007l.172-.006l.086-.003l.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
              />
            </svg>

            <p className="w-20 h-[14px] rounded-full bg-red-400"></p>
          </div>

          <div className="w-full flex-col rounded-full flex items-center justify-center text-md  mt-5 h-20">
            <p>Customize your Meril.ink to match your</p>
            <p>brand. Make it feel like you</p>
          </div>
        </div>

        <div className="w-[350px] flex-col h-[400px] bg-slate-100 border-slate-200 border mx-4 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 items-center pt-16 flex">
          <div className="flex mb-20">
            <div className="bg-sky-500 w-20 h-20 rounded-xl mx-1 flex justify-center items-center text-white font-bold hover:scale-105 transition-all duration-300">
              <p>8</p>
            </div>
            <div className="bg-violet-300 w-20 h-20 rounded-full mx-1 flex justify-center items-center text-white font-bold hover:scale-105 transition-all duration-300">
              <p>Jun</p>
            </div>
            <div className="bg-blue-500 w-20 h-20 rounded-xl mx-1  flex justify-center items-center text-white font-bold hover:scale-105 transition-all duration-300">
              <p>2:44am</p>
            </div>
          </div>
          <div className="w-full flex-col rounded-full flex items-center justify-center text-md  mt-10 h-20">
            <p>Customize your Meril.ink to match your</p>
            <p>brand. Make it feel like you</p>
          </div>
        </div>
      </div>
    </div>
  );
}
