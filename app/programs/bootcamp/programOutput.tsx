import React from "react";
import Image from 'next/legacy/image';
export default function MentorshipModel() {
    const mentorshipModelData = {
        title: "Program ",
        highlight:"Outcomes",
        description: "You’ll walk away with complete, investor-ready materials and the confidence to decide if your idea deserves full-time pursuit.",
        dataList: [
            {
                name: "Financial Model",
                image: "/program/bootcamps/financialModel.svg",
                details: "Clear projections, revenue assumptions, and cost structures investors expect"
            }, {
                name: "Business Plan",
                image: "/program/bootcamps/businessPlan.svg",
                details: "A validated thesis of market opportunity, scalability, and competitive advantage"
            }, {
                name: "GTM Plan",
                image: "/program/bootcamps/gtmPlan.svg",
                details: "A comprehensive Go To Market document tailored to your startup"
            }, {
                name: "Pitch Deck",
                image: "/program/bootcamps/pitchDeck.svg",
                details: "A structured narrative that aligns with how VCs assess and evaluate potential investments"
            }, {
                name: "Certificate of Completion",
                image: "/program/bootcamps/certificateofCompletion.svg",
                details: "Showcase your understanding of investment concepts and gain professional credibility"
            }, {
                name: "Demo Day",
                image: "/program/bootcamps/demoDay.svg",
                details: "At the end of the course you will pitch the idea to an investor panel"
            }
        ]
    }

    return (<>
        <div className="md:p-8 p-4  bg-white" >
            <div className="container  flex flex-col  items-center justify-center  mx-auto">
                <div className="text-2xl md:text-4xl font-bold text-center">{mentorshipModelData.title} <span className="text-blue-500">{mentorshipModelData.highlight}</span></div>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:mt-8 mt-4 ">
                    {mentorshipModelData.dataList?.map((item, index) => (
                        <div key={index} className="w-full bg-white p-4 shadow-sm  hover:shadow-lg mt-4 space-y-2 border-blue-300 border-b-8 flex flex-col items-start justify-start text-left"> 
                            <div> <Image src={item.image} alt="Mentorship Model" className="dark:invert max-h-[32px] h-auto" width={32} height={32} priority  /></div>
                            <div className="font-bold text-2xl text-zinc-800">{item.name}</div>
                            <div className="font-medium text-sm text-zinc-700">{item.details}</div>
                        </div>
                    ))}

                </div>
                <p className="md:text-lg text-sm font-medium md:mt-8 mt-4 text-center md:max-w-[70%] max-w-full w-full mx-auto">{mentorshipModelData.description}</p>

            </div>
        </div>
    </>
    );
}


