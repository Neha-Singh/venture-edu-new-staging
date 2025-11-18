import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/legacy/image';


export default function OurPrograms() {
    const programs = [
        {
            title: "PGP in Entreprenership",
            description: "Apply with an Idea and graduate with a funded startup",
            duration: "14 Month Residency Program",
            images:"/home/pgp_program.svg",
            link: "/programs/pgp",
            features: [
                {
                    icon: "/investmentAccess.svg",
                    title: "Capital access",
                    detail: "Assured investment offer to top 30% of the class, via in house accelerator"
                },
                {
                    icon: "/internship.svg",
                    title: "Investor network",
                    detail: "Pitch you idea to 100+ investor in a 1:1 fashion demo days every month"
                },
                {
                    icon: "/immersion.svg",
                    title: "Immersion",
                    detail: "Work alongside Series A+ founders"
                },
                {
                    icon: "/globalImmersion.svg",
                    title: "Global immersion",
                    detail: "1 month residency in Dubai"
                }
            ]
        },
        {
            title: "Investor Readiness Bootcamp",
            description: "Ensure your idea meets the investor bar",
            duration: "90 days hybrid program",
            images: "/home/bootcamp_program.svg",
            link: "/programs/bootcamp",
            features: [
                {
                    icon: "/fundingClarity.svg",
                    title: "Funding clarity",
                    detail: "Determine whether your idea is best suited for venture capital, angel investment, or strategic funding"
                },
                {
                    icon: "/workCompatibleFormat.svg",
                    title: "Work compatible format",
                    detail: "Weekend in-person sessions, weekday online modules, and project-based progression"
                },
                {
                    icon: "/investorReadyOutputs.svg",
                    title: "Investor ready outputs",
                    detail: "Develop a financial model, business plan, and pitch deck aligned with investors expectations"
                },
                {
                    icon: "/riskFreeValidation.svg",
                    title: "Risk free validation",
                    detail: "Assess if your idea deserves a full-time commitment before resigning or committing significant resources"
                }
            ]
        }
    ];

    return (
        <section className="py-12 bg-gray-50 w-full ">
            <div className="container mx-auto px-4  ">
                <div className="flex flex-col items-center justify-center gap-1 mb-8">
                    <h2 className="text-4xl font-bold text-zinc-700">Our Programs</h2>
                    <p className="text-center text-zinc-600 font-medium">Courses designed by Investors</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 container mx-auto px-0">
                    {
                        /* Program Cards */
                        programs.map((program, index) => (
                            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition" key={index}>
                                <Image
                                    className="dark:invert h-auto w-full "
                                    src={program?.images}
                                    alt="program"
                                    width={592}
                                    height={465}
                                />
                                <Button size="sm" className="btn btn-primary my-4 ">{program.duration}</Button>
                                <h3 className="text-xl font-semibold mb-1">{program.title}</h3>
                                <p className="text-sm text-zinc-500 font-medium">{program.description}</p>
                                <ul className="list-none  mt-2 text-sm flex flex-col ">
                                    {/* Feature List */}
                                    {program.features.map((feature, ind) => (
                                        <li className="flex items-start justify-self-start gap-4 my-2 min-h-[60px]" key={ind}>
                                            <div className="mt-2">
                                                <Image
                                                    className="dark:invert "
                                                    src={`/home/${feature.icon}`}
                                                    alt="logo"
                                                    width={32}
                                                    height={32}
                                                />
                                            </div>
                                            <div className="flex flex-col text-sm">
                                                <div className="text-lg font-semibold text-gray-800">{feature.title}</div>
                                                <div className="text-sm font-medium text-gray-500 lg:min-h-[50px] min-h-[55px]" dangerouslySetInnerHTML={{ __html: feature.detail }} />
                                               
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <Link href={program.link} style={{ textDecoration: "none", display: "block", width: "100%" }} className="w-full my-4 p-4 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-lg block text-center text-sm">Explore Now</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
