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
            question: "Will this program fit into my full-time work or business schedule?",
            answer: "Yes. The bootcamp is designed specifically for working professionals and business operators. You’ll spend around 6 hours on weekends for in-person sessions and 4 hours on weekdays through live or recorded online modules.",
        },
        {
            question: "Do I need a fully formed startup idea to join, or can I come with just a concept?",
            answer: "You don’t need a finished business plan. A concept, area of interest, or problem statement is enough. The program helps you refine it into an investor-assessable, market-ready idea.",
        },
        {
            question: "What kind of investors or mentors will I interact with during the bootcamp?",
            answer: "Sessions are conducted by startup operators, angel investors, and early-stage fund partners  professionals who’ve scaled real ventures. You’ll get practical, investability-focused feedback, not academic theory.",
        },
        {
            question: "Does completing the program guarantee access to funding or introductions?",
            answer: "No program can guarantee funding. VentureEdu helps you determine if your idea is ready for funding and which capital type  venture, angel, or strategic  fits best. Qualified founders are also introduced to investor networks.",
        },
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
                        <h2 className="text-2xl md:text-4xl font-bold">Frequently Asked <Link href="/programs" className="text-primary  underline-offset-4 hover:underline cursor-pointer">Questions</Link></h2>
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
                                        //style={{ width: '100%', height: 'auto', maxWidth: '24px' }}
                                        id={`icon-${index}`}
                                    />
                                </AccordionTrigger>
                                <AccordionContent className="text-sm text-muted-foreground text-justify"><div dangerouslySetInnerHTML={{ __html: item.answer }} /></AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div >
        </>
    );
}
