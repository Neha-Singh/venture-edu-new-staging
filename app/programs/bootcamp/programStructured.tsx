import React from "react";
import Image from 'next/legacy/image';
export default function ProgramStructured() {
    const programStructuredData = {
        title: "Program",
        subtitle: "Structure",
        description: "Investment ready idea in just 90 days",
        dataList: [
            {
                icon: "duration.svg",
                title: "Duration",
                list: ["It is 90 days program", "Progressive* in nature"]
            }, {
                icon: "format.svg",
                title: "Format",
                list: ["Hybrid - combines in person and live/recorded classes", "6 hours on weekend and 4 hours weekday classes "]
            }
        ]
    };
    return (<>
        <div className="lg:p-16 p-4 bg-white" >
            <div className="container mx-auto flex flex-col  items-center justify-center ">

                <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">{programStructuredData.title} <span className="text-blue-500">{programStructuredData.subtitle}</span></h2>
                <p className="text-center mb-4 md:mb-8 text-sm font-medium text-zinc-500">{programStructuredData.description}</p>
                
                <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:mt-8 mt-0 max-w-full lg:max-w-[70%] mx-auto" >
                    {programStructuredData?.dataList?.map((items, index) => (
                        <div key={index} className="rounded-md grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 items-start justify-start  gap-0 p-4" style={{ background: "#EEF8FF" }}>
                           <Image src={`/program/${items.icon}`} alt="Mentorship Model" className="dark:invert z-10 h-auto max-h-[48px]" width={48} height={48} priority  />
                           <div className="col-span-3 flex flex-col items-start justify-start">
                                <div className="text-lg font-bold text-zinc-800">{items.title}</div>
                                <ul className="list-disc list-outside text-xs text-zinc-800 flex flex-col gap-2 ml-4">
                                    {items.list.map((item, idx) => (<li key={idx} className="font-medium text-zinc-600">{item}</li>))}
                                </ul>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
    );
}

