"use client";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
export default function OfflineEvents() {
    const eventsData = [
        {
            title: "C:C your idea",
            description: "Chat over coffee about your idea with series A+ founders in an informal setting and ask anything about venture building",
            features: ["Young founders", "Expert advice"],
            btnText: "Request Invite",
            imageBg: "/home/cc_your_idea.svg"
        },
        {
            title: "Uniiit days",
            description: "One idea, one institute, one winner. We collaborate with startups cells of colleges and organize demo days, and give grants upto INR 1lakh",
            features: ["Demo day", "Grants"],
            btnText: "Nominate your institution",
            imageBg: "/home/uniiit_days.svg"
        },
        {
            title: "Legacy 2.0",
            description: "Equip Family Business successors with skills for intergenerational business transfer </br> </br>",
            features: ["Succession planning", "Family business"],
            btnText: "Request invite",
            imageBg: "/home/legacy_2.0.svg"
        },
    ];

    return (
        <>
            <div className="py-6 md:py-12 bg-white w-full">
                <div className="flex flex-col items-center justify-center gap-2 mb-8">
                    <h2 className="text-4xl font-bold text-zinc-800">Meet us</h2>
                    <p className="text-center text-zinc-500 font-medium">Pitch. Connect. Grow.</p>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 ">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 container mx-auto px-0 ">
                        {
                            eventsData.map((event, index) => (
                                <div className="rounded-lg shadow hover:shadow-lg transition  overflow-clip position-relative" key={index} style={{ background: index === 1 ? "#D8EEFF" : "#EEF8FF" }} >
                                    <div className="p-4 ">
                                        <div className="flex items-start justify-start">
                                        {event.features?.length ? event.features.map((feature, idx) => (
                                            <div key={idx} className="whitespace-nowrap bg-white text-blue-800 px-2 py-1.5 rounded-md mr-2 mb-2 font-medium text-sm">
                                                <span style={{ background: "linear-gradient(135deg, #54B4FF 0%, #0E5CE7 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>{feature}</span>
                                            </div>
                                        )) : null}
                                        </div>
                                        <h3 className="text-2xl md:text-2xl xl:text-4xl py-4 text-blue-900 font-bold  ">{event.title} <sup className="text-xs relative top-[-20px] right-0 font-bold text-blue-800">TM</sup></h3>
                                        <p className="text-sm min-h-[80px] font-medium" dangerouslySetInnerHTML={{ __html: event.description }} />
                                    </div>
                                    <div className={"flex flex-col items-start justify-end gap-4 mt-4  md:h-[253px]  bg-cover bg-center h-[223px] min-h-[223px] w-full min-w-[100%]"} style={{position:"relative", backgroundImage: `url(${event.imageBg})`}} >
                                        <Link href="/contact" style={{ position: "absolute", bottom: "20px", left: "20px" }} className="flex items-center justify-center gap-1 my-2 p-2 bg-blue-800 hover:bg-blue-900 text-white font-medium rounded-lg  text-center text-sm cursor-pointer z-10" >{event.btnText} <IconChevronRight size={16} style={{ color: "white"}} /></Link>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    );
}
