import React from "react";
import Image from 'next/legacy/image';

export default function PGPHomeBanner() {
    return (<>
        <div className="" style={{ background: "#EEF8FF" }}>
            <div className="container mx-auto  flex flex-col md:flex-row items-center justify-between  gap-2 md:gap-10  px-4">
                <div className="w-full lg:max-w-[33%] mx-auto md:text-left text-center  space-y-4 pt-5 md:pt-0">
                    <h1 className="text-3xl font-bold leading-tight text-blue-800  lg:text-4xl">Post Graduate Program in Entrepreneurship</h1>
                    <p>You become a founder, co-build with veterans, and raise capital before graduating</p>
                    <div className="mt-8 cursor-default bg-blue-900 text-white px-4 py-3 rounded-sm md:max-w-[230px] w-full">Admissions starting soon</div>
                </div>
                <div className="flex justify-center">
                    <Image
                        className="dark:invert max-h-[700px] h-auto w-full max-w-[741px]"
                        src="/program/pgp_Banner.svg"
                        alt="logo"
                        width={741}
                        height={700}
                        priority
                    />
                </div>
            </div>
        </div>
       </>
    );
}