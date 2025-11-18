import { IconMailFilled, IconMapPinFilled } from "@tabler/icons-react";
import React from "react";
import ContactForms from "./contactForms";

export default function ContactUs() {
    return (<>
        <section className="container mx-auto w-full flex flex-col items-center md:justify-start justify-start gap-2 px-4 py-4 md:py-12">
            <div className="w-full mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">Leave us your email</h1>
                <p className="text-sm md:text-lg text-zinc-500  max-w-2xl">Fill the details below and enquire about programs you’re interested in. Also you can book a  general counselling session to clear your doubts</p>
            </div>
            <div className="w-full flex-col lg:flex-row flex gap-5 md:gap-10 md:mt-8">
                <ContactForms />
                <div className="flex gap-5 lg:gap-10 flex-col md:flex-row lg:flex-col items-center flex-wrap justify-between lg:flex-nowrap md:flex-nowrap w-full  lg:max-w-[416px]">
                    <div className="text-center flex flex-col gap-2 items-center justify-center w-full bg-blue-50 rounded-md p-4 min-h-[150px] md:min-h-[240px]  ">
                        <IconMailFilled size={"54px"} className="text-blue-800" />
                        <div className="text-zinc-800 text-lg md:text-2xl font-bold">Our email</div>
                        <div className="text-zinc-600 text-xs md:text-sm font-normal">info@venturedu.com</div>
                    </div>
                    <div className="flex text-center flex-col gap-2 items-center justify-center w-full bg-blue-50 rounded-md p-4 min-h-[150px] md:min-h-[240px]  ">
                        <IconMapPinFilled size={"54px"} className="text-blue-800" />
                        <div className="text-zinc-800 text-lg md:text-2xl font-bold">Our address</div>
                        <div className="text-zinc-600 text-xs md:text-sm font-normal">WeWork Two Horizon Centre, Golf Course Road, 5th Floor, DLF Two Horizon Centre, DLF Phase 5, Gurugram, HR 122002</div>
                    </div>
                </div>
               
            </div>
        </section>
    </>
    );
}
