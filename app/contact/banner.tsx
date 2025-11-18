import React from "react";

export default function Banner() {
    return (<>
        <section className="bg-[url(/contact_mobile.svg)]  md:bg-[url(/contact_desktop.svg)] bg-cover bg-center md:h-[308px] lg:h-[488px] h-[200px] flex flex-col items-center md:justify-center justify-around text-center gap-2 px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
        </section>
    </>
    );
}
