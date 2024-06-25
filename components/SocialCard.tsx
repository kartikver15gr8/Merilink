import Image from 'next/image';
import { Button } from './ui/button';
export default function SocialCard({
    cardIcon,
    title,
    btnText,
    btnColor,
    date,
    handle,
    imgBg,
    className,
    bottomImg,
    bottomImgH,
    bottomImgW,
    socialHandle
}: {
    cardIcon: string;
    title: string;
    btnText: string;
    btnColor: string;
    date: string;
    handle?: string;
    className: string;
    imgBg: string;
    bottomImg?: string;
    bottomImgW?: number;
    bottomImgH?: number;
    socialHandle: string;
}) {
    return (
        <a
            href={socialHandle}
            target="_blank"
            className={`${className} shadow-xl hover:scale-110 transition-all duration-300`}
        >
            <div className="">
                <div
                    className={`${imgBg} w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center`}
                >
                    <Image
                        className=""
                        src={cardIcon}
                        alt=""
                        width={30}
                        height={30}
                    />
                </div>
                <div className="mt-1">
                    <p className="">{title}</p>
                    <p className="text-sm font-bold">{handle}</p>
                    <p className="">{date}</p>
                </div>
                <Button className={`${btnColor} mt-2 h-8 rounded-full`}>
                    {btnText}
                </Button>
            </div>

            {bottomImg && bottomImgH && bottomImgW && (
                <div className="mt-2 p-1">
                    <Image
                        className="rounded-lg shadow-xl border-slate-300 border"
                        src={bottomImg}
                        alt="img"
                        width={bottomImgW}
                        height={bottomImgH}
                    />
                </div>
            )}
        </a>
    );
}
