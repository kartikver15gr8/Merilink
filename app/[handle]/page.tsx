'use client';
import SocialCard from '@/components/SocialCard';
import { Button } from '@/components/ui/button';
import { LinksType, UserType } from '@/lib/types';
import Merilink from '@/public/Merilink.png';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Handle({ params }: any) {
    const [handle, setHandle] = useState(params.handle);
    const [status, setStatus] = useState('');
    const [user, setUser] = useState<UserType | null>(null);
    const [userLinks, setUserLinks] = useState<LinksType | null>(null);
    const [bioactive, setBioActive] = useState(false);
    const [bio, setBio] = useState('');
    const [bg, setBg] = useState('');

    const updateBioHandler = async () => {
        try {
            const apiUrl =
                process.env.NODE_ENV === 'development'
                    ? 'http://localhost:3000/api/updatebio'
                    : 'https://www.meril.ink/api/updatebio';
            const response = await axios.post(apiUrl, {
                newBio: bio
            });
            console.log(response.data);
            window.location.reload();
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const session = useSession();
    const userName = session?.data?.user?.name;

    useEffect(() => {
        const getUserHandleDetails = async () => {
            try {
                const apiUrl =
                    process.env.NODE_ENV === 'development'
                        ? `http://localhost:3000/api/gethandleinfo/?handle=${handle}`
                        : `https://www.meril.ink/api/gethandleinfo/?handle=${handle}`;
                const response = await axios.post(apiUrl);
                setUser(response.data.user);
                setUserLinks(response.data.links);
            } catch (error) {
                console.error('Error fetching user handle details:', error);
            }
        };

        getUserHandleDetails();
    }, [handle]);

    useEffect(() => {}, [user, userLinks]);

    return (
        <div
            className={`min-h-screen flex flex-col md:flex-row p-5 justify-center  ${bg}`}
        >
            <div className="flex flex-col justify-between w-full md:w-[45%] p-5 m-1">
                <div className="mt-10 ml-5">
                    {user?.image && (
                        <Image
                            className="rounded-full "
                            src={user?.image}
                            alt=""
                            width={200}
                            height={200}
                        />
                    )}
                    <div className="">
                        <p className="text-2xl md:text-4xl font-extrabold my-5">
                            {user?.name}
                        </p>
                        {!bioactive && (
                            <p className="text-sm md:text-lg w-[80%]">
                                {user?.bio}
                            </p>
                        )}
                        {bioactive && (
                            <div className="">
                                <textarea
                                    onChange={(e) => {
                                        setBio(e.target.value);
                                    }}
                                    className="border w-fit rounded-lg p-2"
                                    name="bio"
                                    id="bio"
                                    rows={5}
                                    cols={40}
                                >
                                    {user?.bio}
                                </textarea>
                                <br></br>
                            </div>
                        )}

                        {userName == user?.name && (
                            <Button
                                className="mt-5 mr-2 hover:bg-red-800 transition-all duration-300"
                                onClick={() => {
                                    if (bioactive) {
                                        setBioActive(false);
                                    } else {
                                        setBioActive(true);
                                    }
                                }}
                            >
                                {bioactive ? 'cancel' : 'edit'}
                            </Button>
                        )}

                        {bioactive && (
                            <Button
                                className="mt-5 bg-sky-600 hover:bg-sky-800 transition-all duration-300"
                                onClick={updateBioHandler}
                            >
                                save
                            </Button>
                        )}
                    </div>
                </div>
                <div className="hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex p-1 bg-slate-100 shadow-lg border w-fit rounded-lg items-center">
                    <Link
                        href="/"
                        className="m-1 border-slate-500 flex justify-center items-center w-10 h-10 border shadow-lg rounded-lg hover:bg-sky-700 transition-all duration-300"
                    >
                        <Image src={Merilink} width={30} height={30} alt="" />
                    </Link>

                    <div className="h-10 w-[1px] mx-2 bg-slate-400 rounded-full"></div>
                    <p className="mr-2 text-slate-700">Meril.ink</p>
                </div>
            </div>
            <div className="w-full md:w-[55%] flex flex-wrap p-2 m-1">
                {userName == user?.name && (
                    <Link
                        href="/addlinks"
                        className="hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex absolute right-10 bottom-10 p-1 shadow-lg border-2 hover:bg-sky-700 transition-all duration-300 border-sky-600 w-fit rounded-full items-center"
                    >
                        <Image
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23474747' d='M20.71 7.04c-.34.34-.67.67-.68 1c-.03.32.31.65.63.96c.48.5.95.95.93 1.44s-.53 1-1.04 1.5l-4.13 4.14L15 14.66l4.25-4.24l-.96-.96l-1.42 1.41l-3.75-3.75l3.84-3.83c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25l9.56-9.57l3.75 3.75L6.75 21H3z'/%3E%3C/svg%3E"
                            width={30}
                            height={30}
                            alt=""
                        />
                    </Link>
                )}

                {userLinks?.twitter && (
                    <SocialCard
                        socialHandle={userLinks?.twitter}
                        className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-slate-200 border-slate-200 border-[1px] rounded-xl p-3 my-2"
                        cardIcon="https://imgs.search.brave.com/elUwmwX2czWW05Hr_wFE1tLydj5NG9Lae-KKMPDJhM0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi81LzUzL1hf/bG9nb18yMDIzX29y/aWdpbmFsLnN2Zy82/NDBweC1YX2xvZ29f/MjAyM19vcmlnaW5h/bC5zdmcucG5n"
                        imgBg="bg-white"
                        title=" Twitter"
                        btnText="Follow"
                        btnColor="bg-black"
                        date=""
                        handle={
                            `${userLinks?.twitter?.split('.com/')[1]}` || ''
                        }
                        bottomImg=""
                    />
                )}
                {userLinks?.github && (
                    <SocialCard
                        socialHandle={userLinks.github}
                        className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-slate-400 border-slate-200 border-[1px] rounded-xl p-3 my-2"
                        cardIcon="https://imgs.search.brave.com/0WgEuQBRctTMyQC3wTDDrG3UzaEmC3u4Z862Ym2ZLXU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzkxL09jdGljb25z/LW1hcmstZ2l0aHVi/LnN2Zw.svg"
                        imgBg="bg-white"
                        title=" GitHub"
                        btnText="Follow"
                        btnColor="bg-black"
                        date=""
                        handle={`${userLinks?.github?.split('.com/')[1]}` || ''}
                        bottomImg=""
                    />
                )}
                {userLinks?.linkedin && (
                    <SocialCard
                        socialHandle={userLinks.linkedin}
                        className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-blue-200 border-slate-200 border-[1px] rounded-xl p-3 my-2"
                        cardIcon="https://imgs.search.brave.com/uGDtHsxME6trYi3Pg1IQoYBs0ZNStLg4fOwcz9gYrwo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
                        imgBg="bg-white"
                        title=" LinkedIn"
                        btnText="Connect"
                        btnColor="bg-blue-700"
                        date=""
                        handle={
                            `${userLinks?.linkedin?.split('.com/in/')[1]}` || ''
                        }
                        bottomImg=""
                    />
                )}
                {userLinks?.instagram && (
                    <SocialCard
                        socialHandle={userLinks.instagram}
                        className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-pink-300 border-slate-200 border-[1px] rounded-xl p-3 my-2"
                        cardIcon="https://imgs.search.brave.com/FmUZXvAg5PpCriub4NHVAjY6hRUWXwVRkivCyUpMac0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzMyLzIwLzAz/LzM2MF9GXzUzMjIw/MDM4Ml9LTDZDRGFa/Y3VzaVpPOW5PNVRE/N2hXUUV6OEtvNkJa/Qi5qcGc"
                        imgBg="bg-white"
                        title=" Instagram"
                        btnText="Connect"
                        btnColor="bg-red-700"
                        date=""
                        handle={
                            `${userLinks.instagram.split('.com/')[1]}` || ''
                        }
                        bottomImg=""
                    />
                )}
                {userLinks?.figma && (
                    <SocialCard
                        socialHandle={userLinks.figma}
                        className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-blue-200 border-slate-200 border-[1px] rounded-xl p-3 my-2"
                        cardIcon="https://imgs.search.brave.com/vW62EhmdMfk7HjQovK_01sgTw5y8V14RQQYtRb1jONQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzMzL0ZpZ21hLWxv/Z28uc3Zn.svg"
                        imgBg="bg-white"
                        title=" Figma"
                        btnText="Follow"
                        btnColor="bg-blue-500"
                        date=""
                        handle={''}
                        bottomImg=""
                    />
                )}
                {userLinks?.twitch && (
                    <SocialCard
                        socialHandle={userLinks.twitch}
                        className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-violet-200 border-slate-200 border-[1px] rounded-xl p-3 my-2"
                        cardIcon="https://imgs.search.brave.com/HaoOZpxMxVaE1iMr6c5fWSEvOAur9f0saa6nhJcmdwU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvdHdpdGNoL3R3/aXRjaF9QTkcyNy5w/bmc"
                        imgBg="bg-white"
                        title=" Twitch"
                        btnText="Connect"
                        btnColor="bg-violet-700"
                        date=""
                        handle={`${userLinks.twitch.split('.com/')[1]}` || ''}
                        bottomImg=""
                    />
                )}
                {userLinks?.medium && (
                    <SocialCard
                        socialHandle={userLinks.medium}
                        className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-slate-300 border-slate-200 border-[1px] rounded-xl p-3 my-2"
                        cardIcon="https://imgs.search.brave.com/i6ZZ0a2Oh27m7u0oUcIGvv9esf5xvqKboNrp8ofk1PQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSpzSGh0WWhh/Q2UyVWMzSVUwSWdL/d0lRLnBuZw"
                        imgBg="bg-white"
                        title="Medium"
                        btnText="Check"
                        btnColor="bg-slate-700"
                        date=""
                        handle={`${userLinks.medium.split('.com/')[1]}` || ''}
                        bottomImg=""
                    />
                )}
                {userLinks?.gumroad && (
                    <SocialCard
                        socialHandle={userLinks.gumroad}
                        className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-pink-200 border-slate-200 border-[1px] rounded-xl p-3 my-2"
                        cardIcon="https://imgs.search.brave.com/zgZ-NMCvxGO98tFUk3cdR57_9WR2P_s-WsMdftEN2P8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWd1bXJvYWQtNzY2/MjI4OS02Mjk3MjI1/LnBuZz9mPXdlYnAm/dz0yNTY"
                        imgBg="bg-white"
                        title=" Gumroad"
                        btnText="Connect"
                        btnColor="bg-pink-700"
                        date=""
                        handle={`${userLinks.gumroad.split('.com/')[1]}` || ''}
                        bottomImg=""
                    />
                )}
                {userLinks?.hashnode && (
                    <SocialCard
                        socialHandle={userLinks.hashnode}
                        className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-slate-100 border-slate-200 border-[1px] rounded-xl p-3 my-2"
                        cardIcon="https://imgs.search.brave.com/lkG6CsVp-z9pcLTFLHPpVOZXr5LvUbZ7qYCxtD0F-Ls/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vcHJhY3RpY2Fs/ZGV2L2ltYWdlL2Zl/dGNoL3MtLTdTSDBR/QmVuLS0vY19saW1p/dCxmX2F1dG8sZmxf/cHJvZ3Jlc3NpdmUs/cV9hdXRvLHdfODAw/L2h0dHBzOi8vY2Ru/Lmhhc2hub2RlLmNv/bS9yZXMvaGFzaG5v/ZGUvaW1hZ2UvdXBs/b2FkL3YxNjQ3MTUy/NzA5MzI0L0JncUhF/aVI4dy5wbmc"
                        imgBg="bg-white"
                        title=" Hashnode"
                        btnText="Follow"
                        btnColor="bg-blue-700"
                        date=""
                        handle={`${userLinks.hashnode.split('.com/')[1]}` || ''}
                        bottomImg=""
                    />
                )}
                {userLinks?.youtube && (
                    <SocialCard
                        socialHandle={userLinks.youtube}
                        className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-red-200 border-slate-200 border-[1px] rounded-xl p-3 my-2"
                        cardIcon="https://imgs.search.brave.com/byFHBr1DdRRfFH5DP9fZwjkEKZ1JRCf9kAwcSSa758M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzQ4LzUxLzU0/LzM2MF9GXzU0ODUx/NTQ3N19YemZjd3A1/ZmwxZmZoYmM1c08z/a0hrd3JMSFFRVW1N/OS5qcGc"
                        imgBg="bg-white"
                        title=" YouTube"
                        btnText="Connect"
                        btnColor="bg-red-700"
                        date=""
                        handle={`${userLinks.youtube.split('.com/')[1]}` || ''}
                        bottomImg=""
                    />
                )}
                {userLinks?.producthunt && (
                    <SocialCard
                        socialHandle={userLinks.producthunt}
                        className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-orange-300 border-slate-200 border-[1px] rounded-xl p-3 my-2"
                        cardIcon="https://imgs.search.brave.com/2HhRpdDKVswhS02oyyFfKYZkLiRm4HyUISKzIXPO724/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9wcm9kdWN0LWh1/bnQuc3Zn.svg"
                        imgBg="bg-white"
                        title=" Product Hunt"
                        btnText="Follow"
                        btnColor="bg-orange-700"
                        date=""
                        handle={
                            `${userLinks.producthunt.split('.com/')[1]}` || ''
                        }
                        bottomImg=""
                    />
                )}
                {userLinks?.substack && (
                    <SocialCard
                        socialHandle={userLinks.substack}
                        className="h-40 mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-orange-200 border-slate-200 border-[1px] rounded-xl p-3 my-2"
                        cardIcon="https://imgs.search.brave.com/rxX_fCW9OAIzMipnQzBbJ1zBRuCrYnOj1dS3MaeezE0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jYW1v/LmdpdGh1YnVzZXJj/b250ZW50LmNvbS8w/N2M5NDVhYjk4Y2Rh/YzEzZTNiZjJmNzAx/MWU4YTkwNTllZDk3/M2M3YzAzNjg5ZTRl/M2VjNjFjZDJhZjRl/YjdkLzY4NzQ3NDcw/NzMzYTJmMmY3Mzc1/NjI3Mzc0NjE2MzZi/MmU2MzZmNmQyZjY5/NmQ2NzJmNzM3NTYy/NzM3NDYxNjM2YjJl/NzA2ZTY3"
                        imgBg="bg-white"
                        title=" Substack"
                        btnText="Follow"
                        btnColor="bg-orange-900"
                        date=""
                        handle={
                            `${userLinks?.linkedin?.split('.com/in/')[1].slice(0, -1)}` ||
                            ''
                        }
                        bottomImg=""
                    />
                )}
            </div>
            <div className="h-14 sticky sm:sticky md:absolute lg:absolute xl:absolute 2xl:absolute bg-slate-100 bottom-10 rounded-lg flex p-1 shadow-lg border w-fit   items-center ">
                <div
                    onClick={() => {
                        setBg(
                            'bg-gradient-to-r from-[#FFF3B1] via-[#FFD0D3] to-[#FFACF5]'
                        );
                    }}
                    className="m-1 border-slate-500 flex justify-center items-center w-10 h-10 border shadow-lg rounded-lg hover:rotate-180 transition-all duration-500 bg-gradient-to-r from-[#FFF3B1] via-[#FFD0D3] to-[#FFACF5]"
                ></div>
                <div
                    onClick={() => {
                        setBg(
                            'bg-gradient-to-r from-[#8954FB] via-[#4887B3] to-[#06BA6A]'
                        );
                    }}
                    className="m-1 border-slate-500 flex justify-center items-center w-10 h-10 border shadow-lg rounded-lg hover:rotate-180 transition-all duration-500 bg-gradient-to-r from-[#8954FB] via-[#4887B3] to-[#06BA6A]"
                ></div>
                <div
                    onClick={() => {
                        setBg(
                            'bg-gradient-to-r from-[#2695bd] via-[#4abcde] to-[#9bebee]'
                        );
                    }}
                    className="m-1 border-slate-500 flex justify-center items-center w-10 h-10 border shadow-lg rounded-lg hover:rotate-180 transition-all duration-500 bg-gradient-to-r from-[#2695bd] via-[#4abcde] to-[#9bebee] "
                ></div>
                <div
                    onClick={() => {
                        setBg('bg-amber-100');
                    }}
                    className="m-1 border-slate-500 flex justify-center items-center w-10 h-10 border shadow-lg rounded-lg hover:rotate-180 transition-all duration-500 bg-amber-100"
                ></div>
                <div
                    onClick={() => {
                        setBg('bg-indigo-400');
                    }}
                    className="m-1 border-slate-500 flex justify-center items-center w-10 h-10 border shadow-lg rounded-lg hover:rotate-180 transition-all duration-500 bg-indigo-400"
                ></div>
            </div>
        </div>
    );
}
