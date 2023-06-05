import Link from "next/link"
import AnimationWrapper from "./animations/animation-wrapper"
import { navData } from "@/data/nav"

export default function MobileNav() {    
    return (
        <AnimationWrapper>
            <div className="relative z-50 w-44 bg-inherit divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                <ul className="py-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                    {navData && navData.map((item, idx) => (
                        <Link 
                        key={idx}
                        href={`/#${item.idName}`} 
                        >
                            <li className="px-4 py-2 hover:text-teal-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-medium">
                                {item.title}
                            </li>
                        </Link>
                    ))}

                </ul>
            </div>
        </AnimationWrapper>
    )
}
    