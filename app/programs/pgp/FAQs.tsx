"use client";
import React, { useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
    const AccordionData = [
        {
            question: "How long is the program?",
            answer: "The program runs full-time for 14 months, across two countries (with an immersion sprint in Dubai), and is fully residential.",
        },
        {
            question: "Who can apply for the program?",
            answer: `<p>The program is open to all, but it is the best for four founder archetypes: </p></br>`+
            `<p>Aspiring entrepreneurs who are currently students– undergraduates who want to start building without giving up 2 years in a traditional MBA to learn business fundamentals, to develop network</p></br>`+
            `<p>Early-stage founders – those seeking structured business education, access to VCs, marketing and growth professional and strategic guidance in one place"</p></br>`+
            `<p>Family business successors – next- generation leaders preparing to professionalize and scale in a high - accountability environment.</p></br>`+
            `<p>Working professionals – individuals with just an idea, little or no business education, and a desire to transition into entrepreneurship without going through academic-heavy courses.</br>`
        },
        {
            question: "What startup-building resources will I have access to?",
            answer: `<p>Participants gain:</p></br>` +
                `<p>Strategy Capsule: 1:1 access to Fortune 500 advisors and MBB consultants.</p></br>` +
                `<p>Growth Lab: 24/7 access to production studios, design, content, and marketing support.</p></br>` +
                `<p>Capital Access: 3–5 pitch days monthly to provide you access to 100+ investors</p></br>` +
                `<p>Rigorous Business Education: Core business learning with peer-to-peer and case-based formats, designed and delivered by world class academicians</p></br>` 
        },
        {
            question: "What are the possible program outcomes?",
            answer: `<p><b>1.Launch their own VC-backed venture</b></p></br>` +
                `<p>Every participant gets multiple pitch opportunities to raise from 100+ VC partners, with 3–5 curated pitch days every month during the program.</p></br >` +
                `<p> The top 30% of the cohort receive an assured investment offer from our in-house accelerator fund.</p></br>` +
                `<p> Participants can choose to raise capital from the in -house accelerator, external investor partners, or both.</p></br >` +
                `<p><b>2.Secure co-founder roles</b></p></br >` +
                `<p>Structured co-founder matchmaking ensures participants can join other high-potential ventures being incubated on campus.</p></br >` +
                `<p><b>3.Extended incubation</b></p></br >` +
                `<p>Participants can stay on campus for up to 6 additional months at no extra cost, retaining access to mentors, infrastructure, and investor connect in case the idea needs more time</p></br >` +
                `<p><b>4.Leverage Industry Immersion for Strategic Roles</b></p></br >` +
                `<p>Participants have to go through a mandatory 2-month salaried immersion with Series A+ startup CXOs, working on high-stakes business problems.</></br>` +
                `<p>Performance is formally evaluated, building a credible track record to apply to highly paid coveted Founder’s Office or strategic roles in the host or our 50 + partner startups.</p></br >` +
                `<p>ideal for participants whose ideas are not immediately funded, it is a way to stay embedded in startup culture while having financial stability starting venture building again.</p></br>` 
        }
    ];
    const toggleAccordion = (index: number) => {
        const allAccordionIcon = document.querySelectorAll('img.accordionIcon');
        if (allAccordionIcon) {
            allAccordionIcon.forEach((iconImage) => { (iconImage as HTMLImageElement).src = "/Add_round_duotone.svg"; });
        }
        const icon = document.getElementById(`icon-${index}`);
        if (!icon) return;
        const img = icon as HTMLImageElement;
        const hasClassOpened = icon.classList.contains('opened');
        if (hasClassOpened) {
            icon.classList.remove('opened');
            icon.classList.add('close');
            img.src = "/Add_round_duotone.svg";
        } else {
            icon.classList.add('opened');
            icon.classList.remove('close');
            img.src = "/minus.svg";
        }
    }
      useEffect(() => {
            const icon = document.getElementById(`icon-0`);
          if (icon) {
              (icon as HTMLImageElement).src = "/minus.svg";
              icon.classList.add("opened");
              icon.classList.remove('close');
          }
        }, []);

    return (
        <>
            <div className="py-6 lg:py-12 bg-white w-full">
                <div className="container mx-auto  px-4 md:px-0">
                    <div className="flex flex-col items-center justify-center gap-2 mb-8">
                        <h2 className="text-2xl md:text-4xl font-bold text-zinc-600">Frequently Asked <Link href="/programs" className="text-primary  underline-offset-4 hover:underline cursor-pointer">Questions</Link></h2>
                    </div>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full lg:w-1/2 mx-auto"
                        defaultValue="item-0"
                    >
                        {AccordionData.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-none" id={`content-${index}`}>
                                <AccordionTrigger className="cursor-pointer hover:text-primary hover:no-underline font-medium [&_svg]:hidden " onClick={() => toggleAccordion(index)}>{item.question}
                                    <Image
                                        className="dark:invert accordionIcon close h-auto max-w-[24px]"
                                        src="/Add_round_duotone.svg"
                                        alt="logo"
                                        width={24}
                                        height={24}
                                        id={`icon-${index}`}
                                    />
                                </AccordionTrigger>
                                <AccordionContent className="text-sm text-muted-foreground text-justify font-medium"><div dangerouslySetInnerHTML={{ __html: item.answer }} /></AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div >
        </>
    );
}
