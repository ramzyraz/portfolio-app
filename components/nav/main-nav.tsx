"use client"

import { useState } from "react";
import { AnimatePresence } from 'framer-motion'
import { Icons } from "../shared/icons";
import { siteData } from "@/data/site";
import { navData } from "@/data/nav";
import MobileNav from "./mobile-nav";
import NavItem from "./nav-item";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import ScrollLink from "../shared/scroll-link";
import Link from "next/link";

export default function MainNav() {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
    const { activeTheme, setTheme } = useThemeSwitcher()
    
    return (
        <nav className="sticky top-0 z-40 border-b">
            <div className="h-16 px-8 flex justify-between items-center">
                <ScrollLink toLink="home" style="flex items-center space-x-3 px-4">
                    <Icons.monitor />
                    <span className="font-bold pt-0.3">{siteData.initials}</span>
                </ScrollLink>
                <ul className="hidden gap-6 font-normal md:flex">
                    {navData && navData.map((item, idx) => (
                        <NavItem key={idx} item={item}>
                            <li className="rounded-full px-3 py-1 hover:bg-gray-100 hover:text-teal-500 dark:hover:bg-zinc-600 dark:hover:text-teal-300">
                                {item.title}
                            </li>                            
                        </NavItem>
                    ))}
                </ul>
                <Link href='/RamezSalmanResume.pdf' target='_blank' className="flex justify-center items-center p-2 shadow-sm rounded-lg border border-teal-200 hover:bg-gray-100 hover:text-teal-500 dark:hover:bg-zinc-600 dark:hover:text-teal-300">
					<span className="text-sm">Download CV</span>
                </Link>
                <div 
                    className="fixed bottom-10 right-10 w-10 h-10 cursor-pointer rounded-full flex justify-center items-center hover:bg-[#e4e4e7] hover:dark:bg-[#2D3748]"
                    onClick={() => setTheme(activeTheme)} 
                >
                    {
                        activeTheme === 'dark' ?
                        <Icons.moon />
                        : 
                        <Icons.sun />
                    }
                </div>  
                <>
                    <button className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
                    </button>
                    <AnimatePresence mode="wait">
                        {showMobileMenu ? <MobileNav key="mobilemenu" /> : null }
                    </AnimatePresence>
                </>
            </div>
        </nav>
    )
}