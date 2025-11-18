import React from "react";
import Image from 'next/legacy/image';
export default function OurValues() {
    const ourValuesData = [
        {
            image:"/about/ourPrinciples/curiosity.svg",
            titleText: "Curiosity",
            title: "जिज्ञासा",
            description:"Asking questions is the best path to continuous learning, development, and growth"
        },{
            image:"/about/ourPrinciples/firstPrinciples.svg",
            titleText:"First principles",
            title: "प्रथम सिद्धांत",
            description:"Analyzing problems from a fundamental perspective leads to insights and solutions"
        },{
            image:"/about/ourPrinciples/dharmicCapitalism.svg",
            titleText: "Dharmic capitalism",
            title:"धार्मिक पूंजीवाद",
            description:"Being a force, money by itself is neither good nor bad: it is what we make of it and how we use it"
        },{
            image:"/about/ourPrinciples/bharatFirst​.svg",
            titleText: "Bharat first",
            title: "भारत प्रथम",
            description:"Support founders building for Bharat and building for the world from Bharat"
        },{
            image:"/about/ourPrinciples/marketCycles.svg",
            titleText: "Market cycles",
            title: "मंडी चक्र​",
            description:"Understand the basics of market cycles and know where we currently stand"
        },{
            image:"/about/ourPrinciples/Integrity.svg",
            titleText: "Integrity",
            title: "सत्यनिष्ठा",
            description:"Must always reflect in our behavior towards colleagues, founders, and investors"
        }
    ]

    return (<>
        <section className="container mx-auto w-full flex flex-col items-center md:justify-start justify-start gap-2  md:py-12 py-6 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4 md:mb-8">Our Principles</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 items-start justify-start lg:grid-cols-3 gap-8">
                {ourValuesData?.map((value, index) => (
                    <div key={index} className="flex flex-col items-start justify-start gap-1 md:gap-1 md:space-y-2 space-y-0">
                        <div className="flex justify-start items-center gap-2">
                            <Image
                                className="dark:invert max-h-[64px] md:max-h-[64px] h-[auto] w-full max-w-[100%]"
                                src={value.image}
                                alt="logo"
                                width={64}
                                height={64}

                                // style={{ width: '100%', height: 'auto', maxHeight: '102px' }}
                            />
                            <div className="flex flex-col justify-between ">
                                <div className="text-lg md:text-lg font-normal text-zinc-900 whitespace-nowrap" dangerouslySetInnerHTML={{ __html: value.title }} />
                                <div className="text-lg md:text-lg font-bold text-zinc-900 whitespace-nowrap" dangerouslySetInnerHTML={{ __html: value.titleText }} />
                            </div>
                        </div>
                    <div className="text-xs md:text-sm font-medium text-zinc-500">{value.description}</div> 
                </div>
                ))
                }
            </div>
        </section>
    </>
    );
}
