import React from 'react';
import Image from 'next/image';
import ImgBannerTwo from '@/public/ImgBannerTwo.png';
export default function DemoBanner() {
    return (
        <div className="w-full  justify-center flex my-2 sm:my-2 px-1 md:my-10 lg:my-10 xl:my-10 2xl:my-10">
            <div className="flex p-2 justify-center items-center bg-purple-500  h-[230px] w-[450px] rounded-xl shadow-xl sm:w-[500px] sm:h-[350px] md:w-[600px] md:h-[380px] lg:w-[900px] lg:h-[550px]  xl:w-[1150px] xl:h-[600px] 2xl:w-[1200px] 2xl:h-[650px]">
                <Image
                    className="rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
                    src={ImgBannerTwo}
                    alt=""
                    width={900}
                    height={500}
                />
            </div>
        </div>
    );
}
