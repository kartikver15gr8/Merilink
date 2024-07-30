'use client';

import React, { useState } from 'react';
import Card from '@/components/Card';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { toast } from 'sonner';
import axios from 'axios';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function CreateHandle() {
    const session = useSession();

    const useremail = session.data?.user?.email;

    if (!useremail) {
        redirect('/');
    }

    const [hidden, setHidden] = useState('hidden');
    const [handle, setHandle] = useState('');
    const [isCreated, setIsCreated] = useState(false);
    if (isCreated) {
        redirect('/addlinks');
    }

    const createhandle = async () => {
        try {
            const apiUrl =
                process.env.NODE_ENV === 'development'
                    ? 'http://localhost:3000/api/createhandle'
                    : 'https://www.meril.ink/api/createhandle';
            const response = await axios.post(apiUrl, {
                handle: handle
            });
            console.log(handle);

            console.log(response.data);
            toast(JSON.stringify(response.data.msg));
            if (response.data.msg) {
                setIsCreated(true);
            }

            return response.data;
        } catch (error) {
            return error;
        }
    };

    const checkhandle = async () => {
        try {
            const apiUrl =
                process.env.NODE_ENV === 'development'
                    ? 'http://localhost:3000/api/checkhandle'
                    : 'https://www.meril.ink/api/checkhandle';
            const response = await axios.post(apiUrl, {
                userhandle: handle
            });

            console.log(response.data);
            console.log(response.data.status);

            toast(JSON.stringify(response.data.message));
            if (response.data.status == true) {
                setHidden('hidden');
            } else {
                setHidden('');
            }

            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex p-10 h-[100vh]">
            <div className="w-[50%] p-5 pl-10 flex flex-col justify-center ">
                <Link href="/" className="mb-10">
                    <Logo />
                </Link>
                <div className="w-[450px]">
                    <div className="mb-10">
                        <p className="text-3xl font-bold my-2">
                            Claim your handle!
                        </p>
                        <p className="text-slate-600 text-lg">
                            The good ones are still available 😉
                        </p>
                    </div>
                    <div className="">
                        <div className="flex">
                            <Input
                                className="rounded-lg mr-2 h-14 text-lg bg-slate-200"
                                placeholder="meril.ink/"
                                type="text"
                                onChange={(e) => {
                                    setHandle(e.target.value);
                                }}
                            ></Input>
                            <Button
                                onClick={checkhandle}
                                className="w-20 h-14 rounded-xl text-white hover:bg-blue-700 transition-all duration-300"
                            >
                                check
                            </Button>
                            <Button
                                onClick={createhandle}
                                className={`w-20 h-14 ${hidden} rounded-xl  ml-2 text-white bg-green-600 hover:bg-green-700 transition-all duration-300`}
                            >
                                create
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[50%] justify-center items-center flex p-10 ">
                <div className="">
                    <Card
                        className=" h-74 w-52 ml-24 -rotate-6 bg-red-200  border-slate-200 border-[1px] rounded-xl p-3"
                        imgUrl="https://imgs.search.brave.com/tjVOIzREE3KGD4zc-p2E1LFIPqq4ExC8i0piom9epBA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYwL2Qx/LzYxLzYwZDE2MTMx/YjdmNTI2YWMwYmY0/ZDFjZDE4OTg5MmFj/LmpwZw"
                        imgBg="bg-white"
                        title="Pinterest"
                        btnText="Follow"
                        btnColor="bg-red-600"
                        date="Fri 7 Jun"
                        handle="@JohnEdits"
                        bottomImg="https://i.pinimg.com/564x/15/ab/ed/15abed9de351feb04bd81a48031593fe.jpg"
                        bottomImgW={200}
                        bottomImgH={50}
                    />
                    <Card
                        imgUrl="https://imgs.search.brave.com/ZZVkPN-_cIr6ZXIsJ1d4-RndUMqDkIMUu_gRiPCf69I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuZ2l0aHViYXNz/ZXRzLmNvbS9hc3Nl/dHMvR2l0SHViLU1h/cmstZWEyOTcxY2Vl/Nzk5LnBuZw"
                        className="h-40 flex w-80 rotate-12 bg-slate-300  border-slate-200 border-[1px] rounded-xl p-3"
                        imgBg="bg-white"
                        title="GitHub"
                        btnText="Follow"
                        btnColor="bg-black"
                        date=""
                        handle="@kartikver15gr8"
                    />
                </div>
                <div>
                    <Card
                        className=" h-40 ml-4 w-40 rotate-6 bg-slate-200  border-slate-200 border-[1px] rounded-xl p-3"
                        imgUrl="https://imgs.search.brave.com/i6ZZ0a2Oh27m7u0oUcIGvv9esf5xvqKboNrp8ofk1PQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSpzSGh0WWhh/Q2UyVWMzSVUwSWdL/d0lRLnBuZw"
                        imgBg="bg-white"
                        title=" Medium"
                        btnText="Follow"
                        btnColor="bg-black"
                        date=""
                        handle="@Techbixx"
                        bottomImg=""
                    />
                    <Card
                        className="h-40 -ml-6 mt-10 w-80 -rotate-6 bg-green-200  border-slate-200 border-[1px] rounded-xl p-3"
                        imgUrl="data:image/png;base64,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"
                        imgBg="bg-white"
                        title="Spotify"
                        btnText="Play"
                        btnColor="bg-green-600"
                        date=""
                        handle="@kartikeyverma"
                        bottomImg=""
                    />
                    <Card
                        className="h-40 w-40 rotate-3 bg-blue-200  border-slate-200 border-[1px] rounded-xl p-3"
                        imgUrl="https://imgs.search.brave.com/0UqyB-Y6jbXUrXOLcePiSpF5jDlmb84vcwMLWyd_nbs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/MC8wNC9GYWNlYm9v/a19mX2xvZ29fJTI4/MjAyMSUyOS5zdmcv/NjQwcHgtRmFjZWJv/b2tfZl9sb2dvXyUy/ODIwMjElMjkuc3Zn/LnBuZw"
                        imgBg="bg-white"
                        title="Facebook"
                        btnText="Connect"
                        btnColor="bg-blue-600"
                        date=""
                        handle="@kartikeyverma"
                        bottomImg=""
                    />
                </div>
            </div>
        </div>
    );
}
