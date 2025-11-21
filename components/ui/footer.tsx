"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "@tanstack/react-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as NAVIGATION from "@/constants/navigationConstants";
import { IconMailFilled, IconMapPinFilled } from "@tabler/icons-react";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Input } from "@/components/ui/input";
import { Field, FieldError } from "@/components/ui/field";

import { submitForm } from "@/app/contact/formActions";

function FooterSection() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const path = pathname.split("/")[1];
  const isValidRout = NAVIGATION?.VALID_ROUTER.includes(`/${path}`);
  const [errorState, setErrorState] = useState<string | null>(null);
  const [responseData, setResponseData] = useState({ message: "", code: null });
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseData({ message: "", code: null });

    setErrorState(null);

    const apiPayload = {
      first_name: "Subscriber",
      email: form.state.values.email,
      message: `Newsletter Subscription`,
      source: "698",
      contact_number: "9999999999",
      contact_number_dial_code: "+91",
      contact_number_country_id: "103",
      institute_id: 9482,
      add_db: 1,
    };

    if (form.state.values.email === "") {
      setErrorState("Email is required.");
      return;
    }
    if (!form.state.values.email.includes("@")) {
      setErrorState("Invalid email address.");
      return;
    }

    setIsLoading(true);

    const postContactFormResponse = await submitForm(apiPayload);
    setResponseData(postContactFormResponse);
    if (postContactFormResponse.code === 200) {
      form.reset();
      setTimeout(function () {
        setResponseData((prev) => ({ ...prev, message: "" }));
      }, 5000);
    }
    setIsLoading(false);
  };

  return (
    <section
      className="w-full border-b  bg-background  z-10 "
      style={{
        boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
        background: "#17479E",
        marginBottom: "59px",
      }}
    >
      <div
        className="bg-white h-[60px] border-t"
        style={{ boxShadow: "0px -1px 2px 0px #00000014" }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
          <div className="h-[60px] flex items-center justify-start gap-4">
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/VenturEdu.Global"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:invert"
              >
                <Image
                  className="dark:invert"
                  src="/facebook.svg"
                  alt="logo"
                  width={32}
                  height={32}
                  priority
                />
              </Link>
              <Link
                href="https://www.instagram.com/venturedu.global/"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:invert"
              >
                <Image
                  className="dark:invert"
                  src="/instagram.svg"
                  alt="logo"
                  width={32}
                  height={32}
                  priority
                />
              </Link>
              <Link
                href=" https://www.linkedin.com/company/venturedu/"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:invert"
              >
                <Image
                  className="dark:invert"
                  src="/link.svg"
                  alt="logo"
                  width={32}
                  height={32}
                  priority
                />
              </Link>
              <Link
                href=" https://x.com/VenturEduGlobal"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:invert"
              >
                <Image
                  className="dark:invert"
                  src="/xicon.svg"
                  alt="logo"
                  width={32}
                  height={32}
                  priority
                />
              </Link>
              <Link
                href="https://www.youtube.com/@venturedu.global"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:invert"
              >
                <Image
                  className="dark:invert"
                  src="/youtube.svg"
                  alt="logo"
                  width={32}
                  height={32}
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-start gap-2 lg:gap-4 px-4  ">
        <div
          className="flex flex-col md:flex-row items-start justify-between gap-2 md:gap-4 lg:gap-32 w-full md:pt-4 pt-0 md:pb-1  pb-1"
          style={{ boxShadow: "0px -1px 2px 0px #00000014" }}
        >
          <div className="flex md:items-start md:justify-start items-center justify-center md:flex-col gap-2 md:gap-4 w-full md:max-w-[40%] lg:max-w-[35%]">
            <div className="min-w-[100px]">
              <Image
                className="dark:invert max-w-full  md:w-auto h-auto"
                src="/footerLogo.svg"
                alt="logo"
                width={130}
                height={130}
                priority
              />
            </div>
            <div className="text-white pt-6 md:pt-0">
              <div className="hidden md:flex font-bold text-sm md:text-xl text-white mb-4">
                Contact Us
              </div>
              <div className="flex items-start gap-2 mb-2 md:mb-4">
                <IconMailFilled className="text-blue-300" />{" "}
                <span className="text-white text-[12px] md:text-sm font-medium">
                  info@venturedu.com
                </span>
              </div>
              <div className="flex items-start gap-2 ">
                <div className="h-[24px] min-w-[24px]">
                  <IconMapPinFilled className="text-blue-300" />
                </div>{" "}
                <span className="text-white text-[12px] md:text-sm font-medium text-left">
                  WeWork Two Horizon Centre, Golf Course Road, 5th Floor, DLF
                  Two Horizon Centre, DLF Phase 5, Gurugram, HR 122002
                </span>
              </div>
            </div>
          </div>

          <div className="w-full  md:max-w-[60%] lg:max-w-[65%] pt-4 md:pt-16">
            <div className="font-bold  text-sm md:text-xl text-white md:mb-4 mb-2 hidden md:block">
              Company
            </div>
            <ul className="items-center md:gap-6 gap-4 text-lg md:text-lg text-white  font-medium flex flex-wrap justify-start  md:mb-1 mb-2">
              <li className="hover:underline underline-offset-8 decoration-2 decoration-white cursor-pointer">
                <Link href="/"> Home</Link>
              </li>
              <li className="hover:underline underline-offset-8 decoration-2 decoration-white cursor-pointer">
                <Link href="/about">About Us</Link>
              </li>
              <li className="hover:underline underline-offset-8 decoration-2 decoration-white cursor-pointer">
                <Link href="/programs">Programs</Link>
              </li>
              <li className="hover:underline underline-offset-8 decoration-2 decoration-white cursor-pointer">
                <Link href="/events">Events</Link>
              </li>
              {/* <li className="hover:underline underline-offset-8 decoration-2 decoration-white cursor-pointer"><Link href="/blog">Blog</Link></li> */}
            </ul>
            <div className="font-bold text-sm md:text-xl text-white mb-2 md:mb-4 pt-2 md:pt-10">
              Stay Updated
            </div>

            <form>
              <div className="flex  md:gap-4 gap-2 items-center justify-between bg-blue-100 px-2 py-2 rounded-md shadow-md w-full md:max-w-[90%] ">
                <form.Field name="email">
                  {(field) => {
                    const isInvalid = errorState ? true : false;
                    return (
                      <>
                        <Field
                          data-invalid={isInvalid}
                          className="relative  focus:outline-none bg-transparent border-0  focus:ring-0  focus:border-0"
                        >
                          <input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => {
                              field.handleChange(e.target.value);
                              setErrorState("");
                            }}
                            aria-invalid={isInvalid}
                            placeholder={`${
                              responseData?.code === 200
                                ? "Subscribed successfully"
                                : "Enter your email"
                            }`}
                            autoComplete="off"
                            className={`${
                              responseData?.code === 200
                                ? " cursor-no-drop  pointer-events-none"
                                : ""
                            } w-full max-w-[90%] p-1 md:p-2 focus:outline-none bg-transparent border-0  focus:ring-0  focus:border-0`}
                          />
                          {isInvalid && (
                            <FieldError
                              className="absolute bottom-[-35px] left-0 text-red-600"
                              errors={[{ message: errorState ?? undefined }]}
                            />
                          )}
                        </Field>
                      </>
                    );
                  }}
                </form.Field>
                <button
                  onClick={(e) => handleSubmit(e)}
                  type="submit"
                  className={`${
                    responseData?.code === 200
                      ? "bg-green-600 hover:bg-green-600 disabled cursor-no-drop  pointer-events-none"
                      : "bg-blue-700 hover:bg-blue-600"
                  } font-semibold text-[12px] md:text-sm text-white px-2 py-2 rounded-sm  transition md:min-w-[150px] min-w-[110px]`}
                >
                  {isLoading
                    ? "Sending..."
                    : responseData?.code === 200
                    ? "Subscribed"
                    : "Subscribe Now"}
                </button>
              </div>
              {/* <div className="mt-2 min-h-[30px]"><p className={`${responseData?.code === 200 ? "text-green-600" : "text-red-600"}`}>{responseData?.message || null}</p></div> */}
            </form>
            {/* <Dialog>
                          <DialogTrigger asChild></DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle className="text-blue-500 w-full text-center text-4xl mb-5"> <div >Thankyou!</div></DialogTitle>
                                    <DialogDescription className="text-zinc-600 w-full text-center text-lg">
                                        someone from our team
                                        will reach you soon
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog> */}
          </div>
        </div>
        <div className="flex  items-center md:justify-between justify-center gap-1  md:gap-4  md:pt-4 pt-0 pb-4 w-full">
          <p className="text-white text-[10px] md:text-xs w-full text-center md:text-left md:max-w-[25%] whitespace-nowrap">
            © 2024 VenturEdu. All rights reserved.
          </p>
          <div className="col-span-2 flex items-center md:justify-end justify-center gap-4 w-full md:max-w-[75%]">
            <Link
              href="/terms-of-service"
              className="text-white text-[10px] md:text-xs font-medium hover:underline underline-offset-8 decoration-1 decoration-white cursor-pointer whitespace-nowrap"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className="text-white text-[10px] md:text-xs font-medium hover:underline underline-offset-8 decoration-1 decoration-white cursor-pointer whitespace-nowrap"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-700 h-[60px] fixed bottom-0 w-full left-0 z-50">
        <div className="container mx-auto h-full flex items-center justify-center gap-4 px-4 md:px-0">
          <p className="text-white text-sm font-medium hidden md:block">
            How our PGP helps you turn your idea into a funded venture? Find out
            in our live session
          </p>
          <p className="text-white text-xs font-medium block md:hidden">
            Join online session for PGP
          </p>
          <Link
            href="/contact"
            rel="noopener noreferrer"
            className="bg-white text-xs md:text-sm text-blue-700 px-2 md:px-4 py-2 rounded-md hover:bg-gray-200 transition"
          >
            <span
              className="font-semibold"
              style={{
                background: "linear-gradient(135deg, #54B4FF 0%, #0E5CE7 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              Save My Spot
            </span>
          </Link>
        </div>
      </div>

      {isValidRout && process.env.NEXT_PUBLIC_BUILD_TYPE === "production" ? (
        <GoogleTagManager
          gtmId={process.env.NEXT_PUBLIC_GOOGLE_GTM_ID || "GTM-M236BLWD"}
        />
      ) : (
        <></>
      )}
    </section>
  );
}

export { FooterSection };
