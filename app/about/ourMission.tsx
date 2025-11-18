import React from "react";
import Image from 'next/image';
export default function OurMission() {

    return (<>
        <section className="container mx-auto w-full flex flex-col items-center md:justify-start justify-start gap-2 px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-1 items-start justify-start lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2 lg:gap-4 items-start justify-start">
                <div className="w-full flex items-center md:items-start justify-center  md:justify-start gap-2 md:text-left text-center">
                <h2 className="text-xs md:text-sm font-semibold text-blue-800 mb-2 md:mb-4 bg-blue-50 p-2 rounded-md">Our Mission</h2>
                </div>
                    <h1 className="text-1xl md:text-3xl font-bold text-zinc-700 mb-4 text-center md:text-left">To create a place where idea-stage founders will co-build with:</h1>
                    <ul className="p-4 [&_li]:flex [&_li]:items-center [&_li]:gap-4 lg:p-8 bg-blue-50 rounded-md list-none space-y-4 lg:space-y-13 text-sm md:text-lg lg:text-lg font-medium text-blue-950 w-full">
                        <li> <Image className="dark:invert" src={"/about/academicians.svg"} alt="academicians" width={28} height={28}  /> World-class academicians</li>
                        <li> <Image className="dark:invert" src={"/about/companies.svg"} alt="companies" width={28} height={28}  />  Advisors of Fortune 500 companies</li>      
                        <li> <Image className="dark:invert" src={"/about/startups.svg"} alt="startups" width={28} height={28}  /> CXOs of multi-million-dollar startups</li>
                        <li> <Image className="dark:invert" src={"/about/creators.svg"} alt="creators" width={28} height={28}  /> Award-winning advertisers and creators</li>
                        <li> <Image className="dark:invert" src={"/about/brands.svg"} alt="brands" width={28} height={28}  />  Investors who invested in iconic brands</li>
                    </ul>
                </div>
                <div className="flex  gap-8 items-start justify-start">
                    <div className="flex flex-col gap-8 ">
                        <Image
                            className="dark:invert rounded-sm lg:max-h-[404px] h-auto"
                            src="/about/about_our_mission.svg"
                            alt="logo"
                            width={356}
                            height={454}
                        />
                        <div className="bg-blue-50 rounded-md py-4 px-2">
                            <div className="text-sm md:text-lg font-medium text-zinc-800 mb-0 p-1 ">Intensive</div>
                            <div className="text-4xl md:text-5xl font-bold mb-2" style={{ background: "linear-gradient(135deg, #54B4FF 0%, #0E5CE7 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>80<sub className="text-[16px]" style={{ background: "linear-gradient(135deg, #54B4FF 0%, #0E5CE7 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }} >hours</sub></div>
                            <div className="text-xs md:text-sm font-medium text-zinc-600">of training per week</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 ">
                        <div className="bg-blue-50 rounded-md py-4 px-2">
                            <div className="text-sm md:text-lg font-medium text-zinc-800 mb-0 p-1 ">Full Month</div>
                            <div className="text-4xl md:text-5xl font-bold mb-2" style={{ background: "linear-gradient(135deg, #54B4FF 0%, #0E5CE7 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>14<sub className="text-[16px]" style={{ background: "linear-gradient(135deg, #54B4FF 0%, #0E5CE7 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>month</sub></div>
                            <div className="text-xs md:text-sm font-medium  text-zinc-600">In campus in Gurgaon</div>
                        </div>
                        <Image
                            className="dark:invert rounded-sm max-h-[504px] h-auto "
                            src="/about/about_our_mission_0.svg"
                            alt="logo"
                            width={356}
                            height={554}
                        />
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}
