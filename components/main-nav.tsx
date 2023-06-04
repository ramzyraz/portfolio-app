"use client"

import Link from "next/link";
import { useState } from "react";
import { Icons } from "./icons";
import { siteData } from "@/data/site";
import { navData } from "@/data/nav";
import MobileNav from "./mobile-nav";

export default function MainNav() {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
    const [darkMode, setDarkMode] = useState<boolean>(false)
    
    return (
        <nav className="sticky top-0 z-40 border-b">
            <div className="h-16 px-8 flex justify-between items-center">
                <Link href="/#home" className="flex items-center space-x-3 px-4">
                    <Icons.monitor />
                    <span className="font-bold pt-0.3">{siteData.initials}</span>
                </Link>
                <ul className="hidden gap-6 font-normal md:flex">
                    {navData && navData.map((item, idx) => (
                        <Link 
                            key={idx}
                            href={`/#${item.idName}`} 
                        >
                            <li className="rounded-full px-3 py-1 hover:bg-gray-100 hover:text-teal-500 dark:hover:bg-zinc-600">
                                {item.title}
                            </li>
                        </Link>
                    ))}
                </ul>
                <div 
                    className="fixed bottom-10 right-10 w-10 h-10 cursor-pointer rounded-full flex justify-center items-center hover:bg-[#e4e4e7] hover:dark:bg-[#2D3748]"
                    onClick={() => setDarkMode(!darkMode)} 
                >
                    {
                        darkMode ?
                        <Icons.sun className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        : 
                        <Icons.moon className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    }
                </div>  
                <>
                    <button className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
                    </button>
                    {showMobileMenu && <MobileNav /> }
                </>
            </div>
        </nav>
    )
}