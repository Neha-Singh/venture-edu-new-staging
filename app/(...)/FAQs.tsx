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
            question: "Is PGP like an MBA or an accelerator?",
            answer: "It combines both. The program integrates academic rigor on par with top B-schools with accelerator-style venture building. Participants receive formal education, hands-on co-building with experts, and direct access to capital.",
        },
        {
            question: "What makes this different from a traditional MBA?",
            answer: "Instead of just learning business theory, participants build and fund their ventures while studying. The outcome is not just a degree but a company, co-founder network, and access to capital.",
        },
        {
            question: "Can two people apply together as co-founders?",
            answer: 'Yes, provided this is explicitly mentioned in the application form."',
        },
        {
            question: "How does the admissions process work?",
            answer: '<b>Admissions follow a dossier-based method with the -heaviest weight on your idea-:</b></br></br>' +
                "<b>Round 1:</b>" +
                "Consists of two parts </br>" +
                "<ul>" +
                    "<li>Part 1: Fill a detailed application form out with your idea, its vision, and key details</li>" +
                    "<li>Part 2: Take a 45 min assessment, VET* and submit the score</li>"+
                "</ul> </br>" +
                "<b>Round 2:</b>" +
                "In person presentation to a panel of Investors, academics and CXOs Defend the idea and it's scalability potential </br><br/>" +
                "<b>Round 3:</b>" +
                "Release of merit list with waiting list and offer roll out"
        }
    ];

    const toggleAccordion = (index: number) => {
        const allAccordionIcon = document.querySelectorAll('img.accordionIcon');
        if (allAccordionIcon){
            allAccordionIcon.forEach((iconImage) => {  (iconImage as HTMLImageElement).src = "/Add_round_duotone.svg"; });
        }
        const icon = document.getElementById(`icon-${index}`);
        if (!icon) return;
        const img = icon as HTMLImageElement;
       
        const hasClassOpened = icon.classList.contains('opened');
        if (hasClassOpened){
            icon.classList.remove('opened');
            icon.classList.add('close');
            img.src = "/Add_round_duotone.svg";
        }else{
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
            <div className="py-12 bg-white w-full">
               
                <div className="container mx-auto  px-4 md:px-4 sm:px-4 lg:px-4 xl:px-0">
                    <div className="flex flex-col items-center justify-center gap-2 mb-8">
                        <h2 className="text-2xl md:text-4xl font-bold">Frequently Asked <Link href="/programs" className="text-primary  underline-offset-4 hover:underline cursor-pointer">Questions</Link></h2>
                    </div>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full md:w-full mx-auto sm:w-full lg:w-full xl:w-1/2"
                        defaultValue="item-0"
                    >
                        {AccordionData.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-none" id={`content-${index}`}>
                                <AccordionTrigger  className="cursor-pointer hover:text-primary hover:no-underline font-medium [&_svg]:hidden" onClick={() => toggleAccordion(index)}>{item.question}
                                    <Image
                                        className="dark:invert max-w-[24px] h-auto accordionIcon close"
                                        src="/Add_round_duotone.svg"
                                        alt="logo"
                                        width={24}
                                        height={24}
                                        id={`icon-${index}`}
                                    />
                                </AccordionTrigger>
                                <AccordionContent className="text-sm text-muted-foreground text-justify" ><div dangerouslySetInnerHTML={{ __html: item.answer }} /></AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div >
        </>
    );
}
