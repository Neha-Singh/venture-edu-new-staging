'use client';
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/legacy/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export default function BlogSlider() {
    const topBlog = [
        {
            id: "how-to-do-market-research",
            path_alias: "blogs/market-research-blog.svg",
            author: "By Preksha Razdan",
            title: "How to do market research?",
            image: "/blogs/market-research.svg",
            description: `Most startups die not because the product is bad, but because it solves a problem no one really cares about.`
        },{
            id: "understanding-business-models",
            path_alias: "blogs/business-models-blog.svg",
            author: "By Ninaad Singh Shekhawat",
            title: "Understanding Business Models",
            image: "/blogs/businessModels.svg",
            description: "The answer to this lies in their business model, which tells us about how a company creates and captures value in the market."
        }
        // ,{
        //     id: "understanding-business-models",
        //     path_alias: "blog/understanding-business-models",
        //     author: "By VenturEdu",
        //     title: "Lorem ipsum dolor sit amet, consectetur ",
        //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //     image: "/blogs/blog_blank_2.svg"
        // },{
        //     id: "understanding-business-models",
        //     path_alias: "blog/understanding-business-models",
        //     author: "By VenturEdu",
        //     title: "Lorem ipsum dolor sit amet, consectetur ",
        //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //     image: "/blogs/blog_blank_2.svg"
        // },{
        //     id: "understanding-business-models",
        //     path_alias: "blog/understanding-business-models",
        //     author: "By VenturEdu",
        //     title: "Lorem ipsum dolor sit amet, consectetur ",
        //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //     image: "/blogs/blog_blank_2.svg"
        // }
    ]
    return (<>
        <div className="w-full  md:my-6 my-2">

            <Carousel
                opts={{
                    align: "end",
                    loop: true,
                }}
                className="w-full max-w-[100%]  z-10"
                plugins={[
                    Autoplay({
                        delay: 2000,
                        stopOnInteraction: true
                    }),
                ]}
            >
                <CarouselContent className=" ">
                    {topBlog.map((blog, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 md:max-w-[25%] h-[auto] max-w-[75%]  ">
                            <div key={index} className=" text-left w-full flex flex-col items-start justify-start gap-4 mb-8">
                                <div className="w-full h-fit rounded-md  max-w-full max-h-[200px] ">
                                    <Image
                                        className="dark:invert  w-full h-full rounded-md max-w-[257px] max-h-[168px]"
                                        src={blog.image}
                                        alt="logo"
                                        width={257}
                                        height={178}
                                       
                                    />
                                </div>
                                <div className="text-zinc-600 ">
                                    <div className="text-zinc-600 text-xs mb-2 font-normal mt-1">{blog.author}</div>
                                    <div className="text-xs md:text-lg font-bold mb-1 line-clamp-1 block hover:text-blue-600 transition  cursor-pointer ">{blog.title}</div>
                                    <div className=" font-medium text-sm line-clamp-2"><div dangerouslySetInnerHTML={{ __html: blog.description }} /></div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}

                </CarouselContent>
            </Carousel>
        </div>
    </>
    );
}
