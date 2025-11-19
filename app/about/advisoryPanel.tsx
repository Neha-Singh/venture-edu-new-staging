"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
export default function AdvisoryPanel() {
  const advisoryPanelData = {
    title: "Advisory Panel",
    description: "Veterans of Bharat&apos;s startup ecosystem",
    features: [
      {
        image: "/about/niyat_maru.svg",
        name: "Niyant Maru",
        designation: "Ex-CFO",
        company: "Vistara Airways",
        link: "https://www.linkedin.com/in/niyant-maru-58440930/?originalSubdomain=in",
        logo: [
          "/about/advisory/vistara.svg",
          "/about/advisory/tata_realty.svg",
        ],
      },
      {
        image: "/about/saurabh_aggarwal.svg",
        name: "Sorabh Agarwal",
        designation: "Co-Founder",
        company: "Angel Bay",
        link: "https://www.linkedin.com/in/sorabh-agarwal-52277a1/",
        logo: ["/about/advisory/angel-bay.svg", "/about/advisory/anglebay.svg"],
      },
      {
        image: "/about/aditiya_v_jain.svg",
        name: "Aditya V. Jain",
        designation: "ED",
        company: "BCG",
        link: "https://www.linkedin.com/in/adityavjain/",
        logo: ["/about/advisory/BCG.svg", "/about/advisory/evalue.svg"],
      },
      {
        image: "/about/amit_dharod.svg",
        name: "Amit Dharod",
        designation: "MD",
        company: "JM Financial",
        link: "http://linkedin.com/in/amit-dharod-b7698b5",
        logo: ["/about/advisory/jm_financial.svg", "/about/advisory/ge.svg"],
      },
      {
        image: "/about/vimal_kumar.svg",
        name: "Vimal Kumar",
        designation: "ED",
        company: "JP Morgan Chase & Co.",
        link: "http://linkedin.com/in/vimalgoyal",
        logo: ["/about/advisory/jp_morgon.svg", "/about/advisory/nt.svg"],
      },
    ],
  };
  return (
    <>
      <div className="md:py-12 py-4  bg-white w-full">
        <div className="flex flex-col items-center justify-center gap-2 md:mb-8 mb-4">
          <h2 className="text-2xl md:text-4xl font-bold text-zinc-700">
            Advisory Panel
          </h2>
          <p className="text-center">
            {" "}
            Experts from private markets, credit & financial services
          </p>
        </div>
        <div className="pl-4 lg:pl-16 mx-auto w-full ">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-[100%]"
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: true,
              }),
            ]}
          >
            <CarouselContent>
              {advisoryPanelData?.features?.map((feature, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/4 lg:mx-6 lg:max-w-[25%] h-[auto] max-w-[45%] p-2 "
                >
                  <div className=" flex flex-col items-start justify-center gap-0  shadow-md rounded-md relative">
                    <Link
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="z-40  hover:shadow-xl hover:scale-115 h-[24px] w-[24px] bg-[url(/about/linkedin.svg)] bg-contain"
                      style={{
                        position: "absolute",
                        right: "8px",
                        top: "8px",
                        cursor: "pointer",
                      }}
                    />
                    <div className="w-full">
                      <Image
                        className="dark:invert w-full bg-[url(/about/AdvisoryAbout_bg.svg)] bg-contain bg-no-repeat"
                        src={feature.image}
                        alt="logo"
                        width={307}
                        height={493}
                        priority
                      />
                    </div>
                    <div className=" w-full py-2 px-3 bg-blue-50">
                      <div className="text-zinc-600 font-bold text-sm md:text-2xl">
                        {feature.name}
                      </div>
                      <div className="flex items-center justify-start mt-1  w-full">
                        {feature.logo?.length
                          ? feature.logo.map((logo, idx) => (
                              <div
                                key={idx}
                                className="max-h-[30px] max-w-[50%] whitespace-nowrap text-blue-800 pr-1.5 py-1.5 rounded-md mr-2 mb-2 font-medium  "
                              >
                                <Image
                                  className="dark:invert  h-auto w-full  rounded-xs"
                                  src={logo}
                                  alt="logo"
                                  width={70}
                                  height={18}
                                />
                              </div>
                            ))
                          : null}
                      </div>
                      {/* <div className="text-xs md:text-xs font-medium text-zinc-500"><span className="text-blue-800">{feature.designation},</span> {feature.company}</div> */}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
                    <CarouselNext /> */}
          </Carousel>
        </div>
      </div>
    </>
  );
}
