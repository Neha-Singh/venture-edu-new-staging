
import Link from "next/link";

export default function WhyWeExist() {
    return (
        <>
            <div className="py-0 bg-white w-full">
                <div className="container mx-auto px-4 ">
                    <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
                        <div className="rounded-md hidden md:block text-4xl md:text-[80px] font-bold  text-gray-900 h-[360px] p-6   " style={{ background: "#EEF8FF"}}>
                            <div style={{ background: "linear-gradient(135deg, #54B4FF 0%, #0E5CE7 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Why<br /> We <br />Exist</div>
                        </div>
                        <div className="col-span-2 rounded-md bg-[url(/home/Why_we_exist.svg)] bg-cover bg-center h-[360px] p-6 flex flex-col items-center justify-center text-center gap-2 min-w-[75%] ">
                            <div className="md:hidden flex text-4xl font-bold  text-white">Why We Exist</div>
                            <div className="text-white md:text-2xl text-sm line-clamp-7 md:max-w-[80%] font-medium">To create a comprehensive venture building ecosystem where early-stage founders can transform their contrarian ideas into scalable and enduring companies</div>
                            <Link href="/about" className="flex items-center justify-center gap-1 my-2 p-2 bg-white hover:bg-amber-50 text-blue-900  rounded-sm  text-center text-sm cursor-pointer z-10 font-medium" >About us</Link> 
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
