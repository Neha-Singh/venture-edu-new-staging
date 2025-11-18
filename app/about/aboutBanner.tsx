import React from "react";
import Link from "next/link";
export default function AboutBanner() {
    return (<>
        <section className="bg-[url(/about/mobile.svg)]  md:bg-[url(/about/desktop.svg)] bg-cover bg-center md:h-[400px] lg:h-[600px] h-[600px] flex flex-col items-center md:justify-evenly justify-around text-center gap-2 px-4 py-12">
           <div className="text-center w-full flex flex-col items-center justify-center gap-2">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Venture school designed by Investors</h1>
                <p className="text-lg md:text-xl text-white max-w-2xl text-center ">Learn to create a startup that attracts capital, from the people who deploy it</p>
           </div>
            <p className="text-sm md:text-lg text-white font-medium">Join the <Link href="/contact" className="text-white underline underline-offset-4 hover:text-primary cursor-pointer font-bold"> waiting list</Link></p>
       </section>
    </>
    );
}
