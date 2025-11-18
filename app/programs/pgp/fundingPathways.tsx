import Image from 'next/legacy/image';
export default function FindingPathways() {
    return (<>
        <div className="md:p-16 p-4 bg-zinc-100" >
            <h2 className="hidden md:block text-2xl md:text-4xl font-bold text-center mb-8 text-zinc-600"><span className="text-blue-500" style={{ background: "linear-gradient(135deg, #54B4FF 0%, #0E5CE7 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Funding Pathways</span> Include</h2>
            <div className="hidden  container  md:flex flex-col md:flex-row items-center justify-center gap-0 position-relative">
                <div className="w-full lg:max-w-[30%] text-center space-y-4 font-bold ">
                    <Image
                        className="dark:invert h-auto w-full max-w-[482px]"
                        src="/program/funding_pathways.svg"
                        alt="fundingPathways"
                        width={482}
                        height={624}
                    />
                </div>
                <div className="z-10 w-full lg:max-w-[40%] space-y-8 text-lg text-gray-600 position-absolute top-0 left-0 -ml-8 [&_div]:border-l-8  [&_div]:border-blue-200 4 [&_div]:bg-white [&_div]:p-8  [&_div]:text-sm [&_div]:font-medium "> 
                    <div style={{ boxShadow: '0px 4px 20px 0px #00000040' }}>VenturEdu’s in-house accelerator fund</div>
                    <div style={{ boxShadow: '0px 4px 20px 0px #00000040' }}>200+ investment partners <span className="font-medium">(angels, syndicates, and micro-VCs, VCs, HNIs etc.)</span></div>
                    <div style={{ boxShadow: '0px 4px 20px 0px #00000040' }}>A combination of the above</div>
                </div>
            </div>
            <div className="w-full  md:hidden flex flex-col md:flex-row items-center justify-center gap-4 bg-[url(/program/fundingPathwaysInclude.svg)] p-6 [&_div]:border-l-8  [&_div]:border-blue-200 4 [&_div]:bg-white [&_div]:p-4  [&_div]:text-sm [&_div]:font-normal [&_div]:w-full">
                <h2 className=" text-2xl font-bold text-center mb-2 text-white">Funding Pathways Include</h2>
                <div>VenturEdu’s in-house accelerator fund</div>
                <div>200+ investment partners <span className="font-medium">(angels, syndicates, and micro-VCs, VCs, HNIs etc.)</span></div>
                <div>A combination of the above</div>
            </div>
        </div>
    </>

    );
}

