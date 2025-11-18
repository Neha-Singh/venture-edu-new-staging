import React from "react";
import Image from 'next/legacy/image';
export default function ProgramStructured() {
    const programStructuredData = {
        title: "How the",
        subtitle: "program is structured?",
        description: "Idea to fundraise in 14 months",
        dataList: [
            {
                icon: "Idea_refinement.svg",
                duration: "April - July",
                name: "Idea refinement",
                details: "Work with mentors to refine the idea"
            },{
                icon: "pgp_validation.svg",
                duration: "August/September",
                name: "Validation",
                details: "Pitch to global investors in Dubai for early feedback for 1 month"
            },{
                icon: "pgp_Immersion.svg",
                duration: "November - December",
                name: "Immersion",
                details: "Immersion with series A+ funded startups"
            },{
                icon: "pgp_fundraise.svg",
                duration: "January - April",
                name: "Fundraise",
                details: "Revenue generation and Pre- seed / Seed raise"
            }
        ]
    };
    return (<>
        <div className="lg:p-16 p-4 bg-white  " >
            <div className="container  flex flex-col  items-center justify-center ">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-zinc-600">{programStructuredData.title} <span className="text-blue-500" style={{ background: "linear-gradient(135deg, #54B4FF 0%, #0E5CE7 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>{programStructuredData.subtitle}</span></h2>
                {/* <p className="text-center mb-4 md:mb-8 text-sm font-medium text-zinc-500">{programStructuredData.description}</p> */}
                <div className="w-full flex md:flex-row flex-col justify-between items-start gap-4 md:mt-8 mt-0">
                    {programStructuredData.dataList?.map((item, index) => (
                        <div key={index} className="w-full md:max-w-[25%] max-w-full bg-white p-4  md:mt-4 mt-0 space-y-1  flex flex-col items-center justify-start text-center relative">
                            <div className="md:block hidden">
                                {(index !== 0) && <div  style={{position: 'absolute', top: '56px', left: '-120px', width: '100%', maxWidth: '225px', height: '2px', backgroundColor: '#4B5563'}} />}
                                {(index !== programStructuredData.dataList.length - 1) && <div style={{ position: 'absolute', top: '39px', right: '-25px' }} className=""><Image src={`/program/expand_left_double.svg`} alt="expand_left_double" className="dark:invert z-10 h-auto max-h-[36px]" width={36} height={36} priority /></div>}
                            </div>
                            {(index !== 0) && <div className="md:hidden block" style={{ transform: 'rotate(90deg)', position: 'absolute', top: '-29px', left:'-6px', right:'0' }} ><Image src={`/program/expand_left_double.svg`} alt="expand_left_double" className="dark:invert z-99 h-auto max-h-[36px] " width={30} height={56} priority /></div>}
                            {(index !== 0) && <div className="md:hidden block h-[50px] w-0.5 bg-zinc-800  mt-[-40px] mb-2"/>}
                            <Image src={`/program/${item.icon}`} alt="Mentorship Model" className="dark:invert z-10 h-auto max-h-[84px]" width={84} height={84} priority  />
                            <div className="font-semibold text-xs text-blue-400 mt-2">{item.duration}</div>
                            <div className="font-bold text-lg text-zinc-800">{item.name}</div>
                            <div className="font-medium text-zinc-600 text-sm">{item.details}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
    );
}

