import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomeBanner() {
    return (<>
        <section className="bg-[url(/home/homePageMobile.svg)]  md:bg-[url(/home/homepagebanner.svg)] bg-cover bg-center md:h-[400px] lg:h-[600px] h-[600px] flex flex-col items-center md:justify-center justify-around text-center gap-2 px-4 py-12">
           <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">PGP in Entrepreneurship</h1>
                <p className="text-lg md:text-xl text-white max-w-2xl font-medium">that co-builds and funds your ideas</p>
           </div>
            <Link href={"./brochure/PGP_Admission_Brochure.pdf"} target="_blank" className="bg-blue-800 text-white px-6 py-2 rounded-sm my-8  cursor-pointer font-bold hover:bg-blue-900">Download Brochure</Link>
            <p className="text-sm md:text-lg text-white font-medium">Join the <Link href="/contact" className="text-white underline underline-offset-4 hover:text-primary cursor-pointer font-bold"> waiting list</Link></p>
        </section>
    </>
    );
}
