import { IconSearch } from "@tabler/icons-react";
import Image from 'next/image';

export default function EventsList() {
    const eventsListData ={
        title: "Events",
        description: "We meet, mentor and reward the ideas from young entrepreneurs across the world",
        popularEvents: {
            eventImage: "/event/eventWebinar.svg",
            title: "Entrepreneurship 101, Chitkara X Microsoft",
            description: "VenturEdu was recently under part of Entrepreneurship 101, presented by Chitkara University, Punjab with support from Microsoft, AngelBlue and Re-skilll",
            date: "13 Oct’25",
            time: "13:50pm",
            location: "New Delhi",
        },
        latestEvents: {
            title: "The Latest",
            eventList: [
                {
                    eventImage: "/event/eventWebinar.svg",
                    title: "Entrepreneurship 101 by Chitkara University",
                    description: "VenturEdu was recently under part of Entrepreneurship 101, presented by Chitkara University, Punjab with support from Microsoft, AngelBlue and Reskilll",
                    date: "08 Oct’25",
                    time: "03:00pm",
                    location: "New Delhi",
                },{
                    eventImage: "/event/accelerationBlog.svg",
                    title: "Acceleration Program 2.0 at IISER Mohali.",
                    description: "The top 5 signs we discussed that indicate you do not have PMF: Weak user engagement, Long sales cycles, low conversions, Zero or limited customer referrals",
                    date: "14 Oct’25",
                    time: "13:50pm",
                    location: "New Delhi",
                },{
                    eventImage: "/event/MNNIT.svg",
                    title: "Renaissance B- plan(fish tank), MNNIT - A",
                    description: "The B-Plan event, held under Renaissance 9.0, brought forward some of the most innovative and entrepreneurial minds on campus.",
                    date: "02 Nov’25",
                    time: "10:00am",
                    location: "Prayagraj",
                }
            ]
        },
        // trendingEvents: {
        //     title: "Trending",
        //     eventList: [
        //         {
        //             eventImage: "/event/event.svg",
        //             title: "Lorem ipsum dolor sit amet, consectetur ",
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //             date: "13 Oct’25",
        //             time: "13:50pm",
        //             location: "New Delhi",
        //         }, {
        //             eventImage: "/event/event.svg",
        //             title: "Lorem ipsum dolor sit amet, consectetur ",
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //             date: "13 Oct’25",
        //             time: "13:50pm",
        //             location: "New Delhi",
        //         }, {
        //             eventImage: "/event/event.svg",
        //             title: "Lorem ipsum dolor sit amet, consectetur ",
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //             date: "13 Oct’25",
        //             time: "13:50pm",
        //             location: "New Delhi",
        //         },
        //     ]
        // },
        // howToBuildStartup: {
        //     title: "How to build a startup",
        //     eventList: [
        //         {
        //             eventImage: "/event/event.svg",
        //             title: "Lorem ipsum dolor sit amet, consectetur ",
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //             date: "13 Oct’25",
        //             time: "13:50pm",
        //             location: "New Delhi",
        //         }, {
        //             eventImage: "/event/event.svg",
        //             title: "Lorem ipsum dolor sit amet, consectetur ",
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //             date: "13 Oct’25",
        //             time: "13:50pm",
        //             location: "New Delhi",
        //         }, {
        //             eventImage: "/event/event.svg",
        //             title: "Lorem ipsum dolor sit amet, consectetur ",
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //             date: "13 Oct’25",
        //             time: "13:50pm",
        //             location: "New Delhi",
        //         },
        //     ]
        // },
        // howToBuildStartupEvent: {
        //     title: "How to build a startup",
        //     eventList: [
        //         {
        //             eventImage: "/event/event.svg",
        //             title: "Lorem ipsum dolor sit amet, consectetur ",
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //             date: "13 Oct’25",
        //             time: "13:50pm",
        //             location: "New Delhi",
        //         }, {
        //             eventImage: "/event/event.svg",
        //             title: "Lorem ipsum dolor sit amet, consectetur ",
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //             date: "13 Oct’25",
        //             time: "13:50pm",
        //             location: "New Delhi",
        //         }, {
        //             eventImage: "/event/event.svg",
        //             title: "Lorem ipsum dolor sit amet, consectetur ",
        //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //             date: "13 Oct’25",
        //             time: "13:50pm",
        //             location: "New Delhi",
        //         },
        //     ]
        // },
    }
    return (<>
        <section className="mb-8 container mx-auto w-full p-4 ">
            <div className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 md:mt-8 mt-4">
                <div className="md:col-span-3">
                    <h1 className="text-3xl md:text-5xl font-black mb-4" style={{ background: "linear-gradient(135deg, #1573FB 0%, #17479E 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>{eventsListData?.title}</h1>
                    <p className="font-medium text-lg text-zinc-600">{eventsListData?.description}</p>
                </div>
                <div className="w-full block">
                    <div className="flex  md:gap-4 gap-2 items-center justify-between bg-blue-100  rounded-md  w-full  ">
                        <input type="email" id="subscribeEmail" name="subscribeEmail" className="w-full max-w-[90%] p-2 focus:outline-none bg-transparent" placeholder="Enter your email" />
                        <button aria-label="Submit" className="outline-none icon-button p-2"><IconSearch /></button>
                    </div>
                </div>
            </div>
            <hr className="container my-8 w-full bg-zinc-500 mx-auto" />
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:mt-8 mt-4">
                <Image
                    className="dark:invert rounded-sm h-auto max-h-[500px]"
                    src={eventsListData?.popularEvents.eventImage}
                    alt="popularEvents"
                    width={600}
                    height={500}
                />
                <div className="w-full md:max-w-[80%]">
                    <div className="text-2xl md:text-3xl font-semibold mb-4 mt-0" style={{ background: "linear-gradient(135deg, #1573FB 0%, #17479E 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>{eventsListData?.popularEvents.title} </div>
                    <div className="text-zinc-500 font-medium text-sm line-clamp-5 text-justify">{eventsListData?.popularEvents.description}</div>
                    <div className="flex items-center justify-start gap-2 mt-4 text-zinc-500 font-medium text-sm">
                        <div>{eventsListData?.popularEvents.date}</div>
                        <div className="flex items-center justify-start gap-1"><div className="bg-zinc-500 h-1.5 w-1.5 rounded-full" />{eventsListData?.popularEvents.time}</div>
                        <div className="flex items-center justify-start gap-1"><div className="bg-zinc-500 h-1.5 w-1.5 rounded-full" />{eventsListData?.popularEvents.location}</div>
                    </div>
                </div>
            </div>
            <hr className="container my-8 w-full bg-zinc-500 mx-auto" />
            <div className="w-full grid grid-cols-1">
                <h1 className="text-2xl md:text-4xl font-bold mb-1" style={{ background: "linear-gradient(135deg, #1573FB 0%, #17479E 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}> {eventsListData?.latestEvents.title}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-4 mt-2">
                   {
                    eventsListData?.latestEvents?.eventList?.map((event, index) => (
                        <div key={index}>  
                        <div className=" max-h-[250px] overflow-hidden rounded-sm border-1 border-zinc-50  hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer"> 
                            <Image
                                className="dark:invert w-full"
                                src={event.eventImage}
                                alt="logo"
                                width={450}
                                height={300}
                            />
                       </div>
                            <div className="">
                                <div className="text-zinc-600 text-2xl md:text-2xl font-bold mb-4 mt-5" >{event.title} </div>
                                <div className="text-zinc-500 font-medium text-sm  line-clamp-3">{event.description}</div>
                                <div className="flex items-center justify-start gap-2 mt-4 text-zinc-500 font-medium text-sm">
                                    <div>{event.date}</div>
                                    <div className="flex items-center justify-start gap-1"><div className="bg-zinc-500 h-1.5 w-1.5 rounded-full" />{event.time}</div>
                                    <div className="flex items-center justify-start gap-1"><div className="bg-zinc-500 h-1.5 w-1.5 rounded-full" />{event.location}</div>
                                </div>
                            </div>
                        </div>
                    ))
                   }
                </div>
            </div>
        </section>
    </>
    );
}

