import React from "react";
import Image from 'next/legacy/image';
export default function MentorshipModel() {
    const mentorshipModelData = {
        title: "Mentorship Model:",
        highlight:"The V-Unit",
        description: "Brings structured business and strategy frameworks",
        dataList: [
            {
                name: "Chief Mentor",
                image: "/chiefMentor.svg",
                details: "A Series A+ founder who co-builds with you and holds equity"
            }, {
                name: "Financial Advisor",
                image: "/financialAdvisor.svg",
                details: "Specializes in fundraising, valuations, and investor strategy"
            }, {
                name: "GTM Leader",
                image: "/gtmLeader.svg",
                details: "Crafts the growth and customer acquisition roadmap"
            }, {
                name: "Knowledge Partner",
                image: "/knowledgePartner.svg",
                details: "Brings structured business and strategy frameworks"
            },{
                name: "Brand Lead",
                image: "/brandLead.svg",
                details: "Shapes the narrative,design, and communication"
            }
        ]
    }

    return (<>
        <div className="md:p-8 p-4 bg-zinc-100" style={{ background: "#EEF8FF" }}>
            <div className="container  flex flex-col  items-center justify-center mx-auto ">
                <div className="text-2xl md:text-4xl font-bold text-center text-zinc-600 mb-1">{mentorshipModelData.title} <span className="text-blue-500" style={{ background: "linear-gradient(135deg, #54B4FF 0%, #0E5CE7 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>{mentorshipModelData.highlight}<sup className="text-xs relative top-[-20px] right-0 font-bold text-blue-500">TM</sup></span></div>
                <p className="text-lg font-medium text-zinc-600">{mentorshipModelData.description}</p>
                <div className="w-full flex flex-wrap justify-center items-center gap-4 mt-8 ">
                    {mentorshipModelData.dataList?.map((item, index) => (
                        <div key={index} className="w-full md:max-w-[47%] lg:max-w-[311px] max-w-full bg-white p-4  hover:shadow-lg mt-4 space-y-2 border-blue-300 border-b-8 flex flex-col items-start justify-start text-left"> 
                            <div><Image src={item.image} alt="Mentorship Model" className="dark:invert max-h-[32px] h-auto" width={32} height={32} priority  /></div>
                            <div className="font-bold text-2xl text-zinc-800">{item.name}</div>
                            <div className="font-medium text-zinc-600 text-sm">{item.details}</div>
                        </div>
                    ))}

                </div>
                <p className="text-zinc-600 md:text-sm text-xs font-normal mt-8 text-center md:max-w-[60%] max-w-full w-full mx-auto">This model ensures every venture receives the same operational rigor as early-stage startups, these are not one off workshops this is actual boardroom style working</p>

            </div>
        </div>
    </>
    );
}


