'use client';
import Image from 'next/image';
import Merilink from '@/public/Merilink.png';
import { useRouter } from 'next/navigation';
export default function Footer() {
    const router = useRouter();
    return (
        // <div className="flex flex-col w-full justify-center items-center">
        //   <div className="flex flex-col items-center my-5">
        //     <Image
        //       className=" opacity-60"
        //       src={Merilink}
        //       width={50}
        //       height={50}
        //       alt=""
        //     />
        //     <p className="font-bold text-lg my-4">
        //       Designed in Bharat, Built by Kartikey
        //     </p>
        //   </div>
        //   <div className="flex mb-10">
        //     <p className="mx-3 text-black hover:text-slate-400">Log in</p>
        //     <p className="mx-3 text-black hover:text-slate-400">About</p>
        //     <p className="mx-3 text-black hover:text-slate-400">Changelog</p>
        //     <p className="mx-3 text-black hover:text-slate-400">Join the team</p>
        //     <p className="mx-3 text-black hover:text-slate-400">Explore</p>
        //     <p className="mx-3 text-black hover:text-slate-400">
        //       Download Brand Assets
        //     </p>
        //   </div>
        //   {/* <div className="mb-20">
        //     <Image
        //       src="https://global-uploads.webflow.com/6335b33630f88833a92915fc/63ee477e4688e939cf07c4c3_phbadge.svg"
        //       height={200}
        //       width={200}
        //       alt=""
        //     />
        //   </div> */}
        //   <div className="h-1 w-[80%] bg-slate-300 mt-10"></div>
        //   <div className="h-20 flex justify-center items-center">
        //     <p>© 2024 Meril.ink pvt ltd | All Rights Reserved</p>
        //   </div>
        // </div>
        <div className="flex flex-col w-full justify-center items-center">
            <div className="flex flex-col items-center my-5">
                <Image
                    className="opacity-80"
                    src={Merilink}
                    width={40}
                    height={40}
                    alt=""
                />
                <p className="font-bold text-base md:text-lg my-2 md:my-4 text-center">
                    Designed in Bharat, Built by Kartikey
                </p>
            </div>
            <div className="flex cursor-pointer flex-wrap justify-center mb-5 md:mb-10">
                <p className="mx-2 md:mx-3 text-black hover:text-slate-600  mb-2 md:mb-0">
                    Log in
                </p>
                <p className="mx-2 md:mx-3 text-black hover:text-slate-600 mb-2 md:mb-0">
                    About
                </p>
                <p className="mx-2 md:mx-3 text-black hover:text-slate-600 mb-2 md:mb-0">
                    Changelog
                </p>
                <p className="mx-2 md:mx-3 text-black hover:text-slate-600 mb-2 md:mb-0">
                    Join the team
                </p>
                <p className="mx-2 md:mx-3 text-black hover:text-slate-600 mb-2 md:mb-0">
                    Explore
                </p>
                <p className="mx-2 md:mx-3 text-black hover:text-slate-600 mb-2 md:mb-0">
                    Download Brand Assets
                </p>
            </div>
            <div className="h-1 w-[80%] md:w-[60%] bg-slate-300 mt-10"></div>
            <div className="h-20 flex justify-center items-center px-4">
                <p className="text-center">
                    © {new Date().getFullYear()}
                    <span
                        onClick={() => {
                            router.push('/');
                        }}
                        className="mx-1 hover:text-blue-600 transition-all duration-200 cursor-pointer"
                    >
                        {'Meril.ink'}
                    </span>
                    Pvt.Ltd. | All Rights Reserved
                </p>
            </div>
        </div>
    );
}
