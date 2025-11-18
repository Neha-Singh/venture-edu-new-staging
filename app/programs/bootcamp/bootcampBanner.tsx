import React from "react";
import Image from 'next/legacy/image';

export default function PGPHomeBanner() {
    return (<>
        <div className="" style={{ background: "#EEF8FF" }}>
            <div className="container mx-auto  flex flex-col md:flex-row items-center justify-between  gap-2 md:gap-10  px-4">
                <div className="w-full md:max-w-[50%] mx-auto md:text-left text-center  space-y-4 pt-5 md:pt-0">
                    <h1 className="text-2xl font-bold leading-tight text-blue-800 md:text-4xl sm:text-6xl">Investment <br className="hidden md:block" /> Readiness <br className="block md:hidden" /> Bootcamp</h1>
                    <p ><b>A 90-day intensive course built for professionals and business heirs </b><br className="hidden md:block" /> who want to validate their startup ideas against investor expectations</p>
                    <div className="mb-8 cursor-default bg-blue-900 text-white px-4 py-3 rounded-sm md:max-w-[220px] w-full">Admissions starting soon</div>
                </div>
                <div className=" flex justify-center">
                    <Image
                        className="dark:invert h-auto w-full max-w-[741px]"
                        src="/program/bootcapmBanner.svg"
                        alt="logo"
                        width={741}
                        height={796}
                        priority
                    />
                </div>
            </div>
        </div>
       </>
    );
}