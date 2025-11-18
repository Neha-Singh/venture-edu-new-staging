import React from "react";
import Image from 'next/legacy/image';
export default function WhoIsItFor() {
    const whoIsItForData = {
        title: "Who is it",
        highlight: "for?",
        description: "If you want structure, accountability, and investor-aligned clarity before taking the leap.",
        dataList: [
            {
                name: "Working Professionals",
                image: "/program/bootcamps/workingProfessionals.svg",
                details: "Mid-career leaders in marketing, product, finance, or strategy roles who want to test their startup ideas without leaving their jobs."
            }, {
                name: "Family Business Heirs",
                image: "/program/bootcamps/familyBusinessHeirs.svg",
                details: "Successors seeking to transform legacy assets into modern ventures, build independent credibility, and raise capital"
            }
        ]
    }
    return (<>
        <div className="md:p-8 p-8 bg-zinc-100" >
            <div className="container  flex flex-col items-center justify-center gap-2 md:gap-2 lg:max-w-[60%] max-w-full w-full mx-auto">
                <div className="text-4xl font-bold text-center">Who is it <span className="text-blue-500">for?</span></div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6  mt-4  ">
                    {whoIsItForData.dataList?.map((item, index) => (
                        <div key={index} className="w-full  mt-4  flex flex-col items-start justify-start text-left ">
                            <Image src={item.image} alt="Mentorship Model" className="dark:invert md:rounded-t-none rounded-t-md max-h-[372px] h-auto" width={448} height={372} priority  />
                            <div className="w-full bg-white p-4  rounded-b-md">
                                <div className="font-bold text-2xl pt-2 text-blue-900 mb-2">{item.name}</div>
                                <div className="font-medium text-sm text-zinc-600">{item.details}</div>
                            </div>
                        </div>
                    ))}

                </div>
                {/* <p className="md:text-lg text-sm font-medium md:mt-8 mt-4 text-center md:max-w-[70%] max-w-full w-full mx-auto">{whoIsItForData.description}</p> */}

            </div>
        </div>
    </>

    );
}

