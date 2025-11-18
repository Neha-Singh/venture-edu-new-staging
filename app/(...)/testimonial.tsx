import Image from 'next/legacy/image';
export default function Testimonials() {
    return (
        <section className="py-12 bg-gray-50 w-full " style={{ background: "rgba(238, 248, 255, 1)" }}>
            <div className="container mx-auto px-4 ">
                <div className="flex items-center justify-items-start gap-8 flex-col md:flex-row px-4 md:px-0">
                    <Image
                        className="dark:invert h-auto max-w-[314px]"
                        src="/home/ceo_message.svg"
                        alt="logo"
                        width={314}
                        height={314}
                        
                    />

                    <div className="flex flex-col items-center md:items-start justify-center gap-4 text-center md:text-left">
                        <Image
                            className="dark:invert h-auto md:max-w-[121px] max-w-[70px]"
                            src="/quat.svg"
                            alt="logo"
                            width={121}
                            height={32}
                            objectPosition="center"
                            
                            //style={{ width: '100%', height: 'auto', maxWidth: '121px' }}
                        />
                        <div className=" text-sm md:text-2xl  font-normal text-gray-700">Our mission is to move the needle of startup culture in India by providing access to knowledge and capital to the first-time young founders.</div>
                        <div>
                            <div className="text-2xl font-bold text-blue-900">Kulmani Rana</div>
                            <div className="md:text-sm text-xs font-medium text-zinc-600">Founder and CEO, VenturEdu</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
