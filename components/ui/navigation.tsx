"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Image from 'next/legacy/image';
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { IconChevronRight, IconX } from "@tabler/icons-react";
function NavigationMenu() {
    const pathname = usePathname();
    return (
        <section className="w-full border-b  fixed  top-0 left-0 md:h-[80px] h-[60px]   z-50 flex items-center justify-center shadow-sm bg-white">
            <div className={" flex items-center justify-between w-full container mx-auto px-4 lg:py-4 py-2 "} >
                <Link href={"/"} className="flex items-center ">
                    <Image
                        className="dark:invert"
                        src="/logo.svg"
                        alt="logo"
                        width={43}
                        height={48}
                        priority
                    />
                </Link>
                <div className="items-center hidden lg:flex  ">
                    <ul className="flex items-center ju gap-12 text-lg font-semibold text-zinc-600 ">
                        <li className={`hover:underline underline-offset-8 decoration-2 decoration-primary cursor-pointer ${pathname === "/" && "underline underline-offset-8 decoration-2 decoration-primary"}`}><Link href="/">Home</Link></li>
                        <li className={`hover:underline underline-offset-8 decoration-2 decoration-primary cursor-pointer ${pathname === "/about" && "underline underline-offset-8 decoration-2 decoration-primary"}`}><Link href="/about">About Us</Link></li>
                        <li className={`hover:[&_ul]:flex hover:underline underline-offset-8 decoration-2 decoration-primary cursor-pointer ${(pathname === "/programs" || pathname === "/programs/bootcamp" || pathname === "/programs/pgp") && "underline underline-offset-8 decoration-2 decoration-primary"} relative`}>Programs
                            <ul className="text-sm font-semibold text-zinc-600 flex-col gap-2 items-start justify-start hidden absolute top-7 bg-white rounded-b-md pt-6  shadow-md min-w-[200px] z-10" >
                                <li className="cursor-pointer hover:text-primary  px-5 py-2 border-b border-zinc-300 w-full " ><Link className="cursor-pointer " href="/programs/bootcamp">Bootcamp</Link></li>
                                <li className="cursor-pointer hover:text-primary  px-5 py-2 w-full"><Link className="cursor-pointer " href="/programs/pgp">PGP</Link></li>
                            </ul>
                        </li>
                        <li className={`hover:underline underline-offset-8 decoration-2 decoration-primary cursor-pointer ${pathname === "/events" && "underline underline-offset-8 decoration-2 decoration-primary"}`}><Link href="/events">Events</Link></li>
                        {/* <li className={`hover:underline underline-offset-8 decoration-2 decoration-primary cursor-pointer ${pathname === "/blog" && "underline underline-offset-8 decoration-2 decoration-primary"}`}><Link href="/blog">Blog</Link></li> */}
                    </ul>
                </div>
                <div className="hidden lg:flex items-center gap-4">
                    <Button className="btn btn-primary cursor-pointer rounded-sm" variant="outline"><Link href="https://www.linkedin.com/company/venturedu/" target="_blank" rel="noopener noreferrer">Follow Us</Link></Button>
                    <Button className="btn btn-primary cursor-pointer rounded-sm"><Link href="/contact" >Enquire Now</Link></Button>
                </div>
                <div className="block lg:hidden">
                    <Drawer direction="right" >
                        <DrawerTrigger>
                            <div className="lg:hidden flex items-center">
                                <Image className="dark:invert" src="/menu.svg" alt="logo" width={32} height={32} priority />
                            </div>
                        </DrawerTrigger>

                        <DrawerContent >
                            <DrawerHeader className="flex items-center justify-between border-b border-zinc-300 p-0">
                                <div className="flex items-center justify-between w-full bg-blue-100  py-2 px-4">
                                    <Image
                                        className="dark:invert"
                                        src="/logo.svg"
                                        alt="logo"
                                        width={43}
                                        height={48}
                                        priority
                                    />
                                    <div className="text-lg font-semibold text-zinc-600">Ventur Edu</div>
                                    <DrawerClose className="flex items-center gap-4"><IconX stroke={1} /></DrawerClose>
                                </div>
                            </DrawerHeader>
                            <DrawerDescription>
                                <div className=" w-full flex flex-col items-start justify-start text-lg font-normal text-zinc-600 [&_li]:cursor-pointer ">
                                    <Link href="/" className={`px-5 py-3 w-full border-b border-zinc-300 ${pathname === "/" && "text-primary"}`}><DrawerClose>Home</DrawerClose></Link> 
                                    <Link href="/about" className={`px-5 py-3 w-full border-b border-zinc-300 ${pathname === "/about" && "text-primary"}`}><DrawerClose>About Us</DrawerClose></Link>
                                    <div className={` py-3 w-full border-b border-zinc-300  ${(pathname === "/programs" || pathname === "/programs/bootcamp" || pathname === "/programs/pgp") && "text-primary"}`}>
                                        <Link className="cursor-pointer flex px-5 pb-3 w-full " href="/programs/pgp"><DrawerClose>Programs</DrawerClose></Link>
                                        <div className="text-sm font-semibold text-zinc-600 flex-col items-start justify-start  list-none list-inside   " >
                                            <div className={`cursor-pointer px-5 py-2  w-full ${(pathname === "/programs" || pathname === "/programs/bootcamp") && "text-blue-950"}`}><Link className="cursor-pointer flex " href="/programs/bootcamp"><IconChevronRight stroke={1} /><DrawerClose>Bootcamp</DrawerClose></Link></div>
                                            <div className={`cursor-pointer px-5 py-2 w-full ${(pathname === "/programs" || pathname === "/programs/pgp") && "text-blue-950"}`} ><Link className="cursor-pointer flex" href="/programs/pgp"><IconChevronRight stroke={1} /><DrawerClose>PGP</DrawerClose></Link></div>
                                        </div>
                                    </div>
                                    <Link href="/events" className={`px-5 py-2 w-full border-b border-zinc-300 ${pathname === "/events" && "underline underline-offset-8 decoration-2 decoration-primary"}`}><DrawerClose>Events</DrawerClose></Link>
                                    {/*<Link href="/blog" className={`px-5 py-2 w-full  ${pathname === "/blog" && "underline underline-offset-8 decoration-2 decoration-primary"}`}><DrawerClose>Blog</DrawerClose></Link>*/}
                                </div>
                            </DrawerDescription>
                            <DrawerFooter className="w-full flex items-center justify-between border-t border-zinc-300 py-4">
                                <div className="flex items-center gap-4">
                                    <Button className="btn btn-primary cursor-pointer rounded-sm" variant="outline"><Link href="https://www.linkedin.com/company/venturedu/" target="_blank" rel="noopener noreferrer">Follow Us</Link></Button>
                                    <Button className="btn btn-primary cursor-pointer rounded-sm"><Link href="/contact" >Enquire Now</Link></Button>
                                </div>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </section>
    )
}

export { NavigationMenu }