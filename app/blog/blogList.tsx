import { IconSearch } from "@tabler/icons-react";
import React from "react";
import Image from 'next/legacy/image';
import Link from "next/link";

export default function BlogList() {
    const blogListData = {
        title: "Blogs",
        blogList: {
            title: "VenturEdu blogs",
            topSelectedDetails: {
                id:"how-to-do-market-research",
                path_alias:"blog/how-to-do-market-research",
                author: "By Preksha Razdan",
                title: "How to do market research?",
                description:`<p>“A staggering 42 % of startups meet their demise due to absence of market need”</p> </br>`+
                `<p>Most startups die not because the product is bad, but because it solves a problem no one really cares about.So before building, the first step is to find a real, significant problem.One that actually matters to people.One that hurts enough that they would pay to fix it.</p>`,
                image: "/blogs/market-research.svg"
            },
            topBlog: [
                {
                    id: "understanding-business-models",
                    path_alias: "blog/understanding-business-models",
                    author: "By Ninaad Singh Shekhawat",
                    title: "Understanding Business Models",
                    description: "The answer to this lies in their business model, which tells us about how a company creates and captures value in the market.",
                    image: "/blogs/businessModels.svg"
                },
                {
                    id: "how-to-do-market-research",
                    path_alias: "blog/how-to-do-market-research",
                    author: "By VenturEdu",
                    title: "Lorem ipsum dolor sit amet, consectetur ",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "/blogs/blog_blank_2.svg"
                },
                {
                    id: "understanding-business-models",
                    path_alias: "blog/understanding-business-models",
                    author: "By VenturEdu",
                    title: "Lorem ipsum dolor sit amet, consectetur ",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "/blogs/blog_blank_2.svg"
                }
            ],
            latestBlog: [
                {
                    id: "how-to-do-market-research",
                    path_alias: "blog/how-to-do-market-research",
                    author: "By Preksha Razdan",
                    title: "How to do market research?",
                    description: `<p>Most startups die not because the product is bad, but because it solves a problem no one really cares about.</p>`,
                    image: "/blogs/market-research-blog.svg"
                },
                {
                    id: "Understanding-Business-Models",
                    path_alias: "blog/understanding-business-models",
                    author: "By Ninaad Singh Shekhawat",
                    title: "Understanding Business Models",
                    description: "The answer to this lies in their business model, which tells us about how a company creates and captures value in the market.",
                    image: "/blogs/business-models-blog.svg"
                }
            ]
        }
    }
    return (<>
        <section className=" mb-5 container mx-auto w-full p-4 md:p-0">
            <div>
                <div className="col-span-3 my-6">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">{blogListData.blogList.title}</h1>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-start justify-start ">
                    <div className="flex flex-col items-start justify-start gap-2 text-left">
                        <div className="w-full rounded-md  max-w-full">
                            <Image
                                className="dark:invert rounded-md w-full h-auto"
                                src={blogListData.blogList.topSelectedDetails.image}
                                alt="logo"
                                width={644}
                                height={400}
                              
                            //style={{ width: '100%', height: 'auto', maxHeight: '600px' }}
                            />
                        </div>
                        <div className="text-zinc-600">
                            <div className="text-zinc-600 text-xs mt-1 mb-4 font-normal">{blogListData.blogList.topSelectedDetails.author}</div>
                            <Link href={blogListData.blogList.topSelectedDetails.path_alias} className="hover:text-blue-600 transition text-2xl md:text-4xl font-bold mb-4 block ">{blogListData.blogList.topSelectedDetails.title}</Link>
                            <div className=" font-medium text-xs md:text-sm text-justify line-clamp-5 text-zinc-500"><div dangerouslySetInnerHTML={{ __html: blogListData.blogList.topSelectedDetails.description }} /></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4">
                        {blogListData.blogList?.topBlog.map((blog, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-left items-start justify-start">
                                <div className="max-w-full">
                                <Image
                                    className="dark:invert  w-full h-auto rounded-md"
                                    src={blog.image}
                                    alt="logo"
                                    width={300}
                                    height={210}
                                    
                                // style={{ width: '100%', height: 'auto', maxHeight: '178px' }}
                                />
                                </div>
                                <div className="text-zinc-600 ">
                                    <div className="text-zinc-600 text-xs mb-4 font-normal">{blog.author}</div>
                                    <Link href={blog.path_alias} className="hover:text-blue-600 transition text-2xl  md:text-lg font-bold mb-4">{blog.title}</Link>
                                    <div className=" font-medium text-sm  text-zinc-600"><div dangerouslySetInnerHTML={{ __html: blog.description }} /></div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>

            <div className="bg-blue-100 mb-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-10 items-center justify-start md:mt-8 mt-4 px-4 md:px-16 py-8 rounded-sm">
                <div className="w-full text-blue-900 text-2xl md:text-4xl font-medium md:leading-12">  Never miss any update from VenturEdu</div>
                <div>
                    <div className="font-semibold text-xs md:text-sm text-zinc-900 mb-2">Leave us your email </div>
                    <div className="flex  md:gap-4 gap-2 items-center justify-between  px-2 py-2 bg-white  w-full rounded-sm  ">
                        <input type="email" id="subscribeEmail" name="subscribeEmail" className="w-full max-w-[90%] p-2 focus:outline-none bg-transparent" placeholder="abc@gmail.com" />
                        <button className="bg-blue-700 text-xs md:text-sm text-white px-2 py-2 rounded-sm hover:bg-blue-600 transition md:min-w-[150px] min-w-[100px]">submit</button>
                    </div>
                </div>
            </div>


            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-start justify-start">
                {blogListData.blogList?.latestBlog.map((blog, index) => (
                    <div key={index} className="flex flex-col items-start justify-start gap-4 text-left mb-4 md:mb-8">
                        <div className="w-full h-auto rounded-md  max-w-full">
                            <Image
                                className="dark:invert w-full h-auto rounded-md"
                                src={blog.image}
                                alt="logo"
                                width={644}
                                height={400}
                               
                            />
                        </div>
                        <div className="text-zinc-600">
                            <div className=" text-xs mt-1 mb-4 font-normal">{blog.author}</div>
                            <Link href={blog.path_alias} className="text-2xl md:text-3xl font-semibold mb-2 block hover:text-blue-600 transition">{blog.title}</Link>
                            <div className=" font-medium text-xs md:text-sm text-justify text-zinc-500"><div dangerouslySetInnerHTML={{ __html: blog.description }} /> </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
    );
}