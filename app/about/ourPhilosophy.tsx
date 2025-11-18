import React from "react";

export default function OurPhilosophy() {
    return (
        <>
            <div className="py-10 bg-white w-full lg:max-w-[70%] mx-auto mb-4">
                <div className="container mx-auto px-4 ">
                    <div className="grid grid-cols-1 md:grid-cols-1  gap-8">
                        <div className="w-full mx-auto  rounded-md bg-[url(/about/philosophy_bg_mobile.svg)] md:bg-[url(/about/philosophy_bg_desktop.svg)] bg-cover bg-center h-[300px] lg:h-[500px] p-6 flex flex-col items-center justify-center text-center gap-2 md:gap-6 space-y-2 md:space-y-5 ">
                            <div className="flex text-2xl md:text-4xl font-bold  text-white">Our Philosophy</div>
                            <div className="text-white md:text-2xl text-sm line-clamp-7  md:max-w-[85%] ">Venture building is one of the toughest journeys a person can take. An enterprise may begin with a spark of inspiration but turning that spark into something lasting requires more than intuition. It demands collaboration, trust, and teamwork; countless iterations and bold pivots; and above all, unwavering discipline. Every step is shaped by the people you work with, the lessons you embrace, and the grit you bring to the process</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
