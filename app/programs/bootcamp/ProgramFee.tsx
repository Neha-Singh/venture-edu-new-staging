'use client';
import React from "react";
export default function ProgramFee() {
    
    return (<>
        <div className=" bg-zinc-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2" >
            <div className="md:p-16 p-8 flex items-center justify-center font-bold text-4xl text-zinc-700">Program &nbsp;<span className="text-blue-500">Fee</span> </div>
            <div className="md:p-16 p-8 bg-blue-500 flex items-center justify-center text-4xl text-white font-black"><h2 className="text-center font-bold">INR 400,000<sub className="text-xs font-bold">+GST</sub></h2></div>
        </div>
    </>

    );
}

