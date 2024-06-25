import React from 'react';
import Image from 'next/image';
import Merilink from '@/public/Merilink.png';

export default function Logo() {
    return (
        <div>
            <Image
                className="hover:rotate-180 transition-all duration-300"
                src={Merilink}
                width={100}
                height={100}
                alt=""
            />
        </div>
    );
}
