'use client';
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
export default function CountBanner() {
    const countBannerData = [
        { title: "Intensive", count: "80", unit: "hours", subtitle: "of training per week" },
        { title: "Heavy Touch", count: "5", unit: "mentors", subtitle: "Assigned for every idea" },
        { title: "Global Immersion", count: "30", unit: "days", subtitle: "Networking in Dubai" },
        { title: "Full Time", count: "14", unit: "month", subtitle: "In campus in Gurgaon" },
        { title: "Rapid Assesment", count: "15", unit: "days", subtitle: "Funding Readiness Feedback cycle" },
        { title: "Capital access", count: "200", unit: "investors", subtitle: "to pitch in 2 demo days/month" },
    ];

    return (<div className=" bg-blue-700 py-10 pl-0 md:pl-16 w-full">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-[100%] position-relative mt-0 md:-mt-24 z-10"
                plugins={[
                    Autoplay({
                        delay: 2000,
                        stopOnInteraction: true
                    }),
                ]}
            >
            <CarouselContent className="w-full flex gap-2 md:gap-4 px-4 ">
                    {/* <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 position-relative mt-0 md:-mt-24 z-10"> */}
                        {
                            countBannerData.map((item, index) => (
                                <CarouselItem key={index} className=" w-full h-[auto] max-w-[280px] md:max-w-[320px]">
                                    <div key={index} className="flex flex-col items-start justify-center gap-1 md:gap-2 p-4 md:p-6 bg-white shadow-lg rounded-lg">
                                        <h5 className="text-lg md:text-md font-medium text-zinc-800">{item.title}</h5>
                                        <div className="flex items-center gap-2">
                                            <h4 className="text-4xl md:text-6xl font-bold" style={{ background: "linear-gradient(135deg, #54B4FF 0%, #0E5CE7 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>{item.count}
                                                <sub className="text-xs md:text-2xl font-bold" style={{ background: "linear-gradient(135deg, #54B4FF 0%, #0E5CE7 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>{item.unit}</sub></h4>
                                        </div>
                                        <span className="text-xs md:text-sm font-medium text-zinc-600">{item.subtitle}</span>
                                    </div>
                                </CarouselItem>
                            ))
                        }
                    {/* </div> */}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
