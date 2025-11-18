import React from "react";
export default function PGPHomeBanner() {
    return (<>
        <div className="md:p-16 p-8 bg-zinc-100" >
            <div className="container  flex flex-col md:flex-row items-center lg:justify-center md:justify-between gap-4 md:gap-4">
                <div className="w-full md:max-w-[25%] lg:max-w-[30%]  text-center md:space-y-4 space-y-1 font-bold ">
                    <div className="md:text-4xl text-2xl text-blue-800 ">Key focus</div>
                    <div className="md:text-6xl text-4xl" style={{ background: "linear-gradient(135deg, #54B4FF 0%, #0E5CE7 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Areas</div>
                </div>
                <div className="w-full md:max-w-[70%] lg:max-w-[50%] space-y-4 text-lg text-gray-600 ">
                    <div className=" border-l-8 border-blue-200 pl-4 bg-white p-6">
                        <div className="text-2xl font-bold mb-2">Handholding till the first fundraise</div>
                        <div className="text-sm font-medium text-zinc-600">Turn high-potential ideas into fundable ventures</div>
                    </div>
                    <div className="mt-10 border-blue-700 border-l-8 pl-4 bg-white p-6">
                        <div className="text-2xl font-bold mb-2">Every participant works as a builder-in-residence</div>
                        <div className="text-sm font-medium text-zinc-600">Guided by investors, founders, and CXOs through the journey of transforming idea into a funded venture</div>
                    </div>
                </div>
            </div>
        </div>
    </>

    );
}

