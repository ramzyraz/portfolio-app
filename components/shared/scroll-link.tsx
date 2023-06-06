"use client"

import { Link } from "react-scroll";

export default function ScrollLink({ children, toLink, style }: { 
    children: React.ReactNode,
    toLink: string,
    style?: string | undefined
}) {
    return (
        <Link 
            to={toLink} 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className={`${style} cursor-pointer`}
        >
            {children}
        </Link>
    )
}