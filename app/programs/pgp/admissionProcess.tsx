'use client';
import React from "react";

export default function AdmissionProcess() {
    const admissionProcessData = {
        title: "Admission Process",
        description: "Evaluation will be done by a panel of",
        durationTime: "30 investors",
        roundData: [
            {
                isActive:false,
                bgImage: "/admissionProcess.svg",
                title: "Round 1",
                list: ["Fill a detailed application form out with your idea, its vision, and key details", "Take a 45 min assessment, VET* and submit the score"]
            },{
                isActive: true,
                bgImage: "/admissionProcess.svg",
                title: "Round 2",
                list: ["In person presentation to a panel of Investors, academics and CXOs", "Defend the idea and it's scalability potential"]
            },{
                isActive: false,
                bgImage: "/admissionProcess.svg",
                title: "Round 3",
                list: ["Release of merit list with waiting list and offer roll out"]
            }
        ]
    }
    return (<>
        <div className="lg:p-16 p-8 bg-zinc-100" >
            <div className="w-full text-center mb-8 flex flex-col items-center justify-center gap-2">
                <div className="text-4xl font-bold text-zinc-600">{admissionProcessData.title}</div>
                <div className="text-sm text-gray-600 ">{admissionProcessData.description} <span className="text-blue-600">{admissionProcessData.durationTime}</span></div>
            </div>
            <div className="container flex flex-col md:flex-row items-start justify-center gap-4 lg:max-w-[70%] w-full  mx-auto">
                {admissionProcessData.roundData.map((round, index) => (
                    <div key={index} className={`w-full min-w-1/3 bg-[url(/program/admissionProcess.svg)] hover:bg-[url(/program/admissionProcess_active.svg)] hover:[&_ul]:text-zinc-800 hover:[&_div]:text-zinc-800 bg-no-repeat bg-cover  rounded-md  space-y-4 p-8 flex flex-col items-start justify-start min-h-[220px]   relative`}>
                        {/* <Image src={`/program/${round.bgImage}`} alt="Mentorship Model" className="dark:invert" width={50} height={50} priority style={{ width: '100%', height: 'auto', maxHeight: '50px' }} /> */}
                        <div className="text-lg font-bold text-white hover:text-zinc-800 ">{round.title}</div>
                        <ul className="list-disc text-sm text-white hover:text-zinc-600 flex flex-col gap-4 font-medium">
                                {round.list.map((item, idx) => (<li key={idx}>{item}</li>))}
                            </ul>
                    </div>
                ))}
            </div>
        </div>
    </>

    );
}

