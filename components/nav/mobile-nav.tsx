import AnimationWrapper from "../animations/nav-animation-wrapper"
import NavItem from "./nav-item"
import { navData } from "@/data/nav"

export default function MobileNav() {    
    return (
        <AnimationWrapper>
            <div className="relative z-50 w-44 bg-inherit divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                <ul className="py-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                    {navData && navData.map((item, idx) => (
                        <NavItem key={idx} item={item}>
                            <li className="px-4 py-2 hover:text-teal-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-teal-300 font-medium">
                                {item.title}
                            </li>
                        </NavItem>
                    ))}

                </ul>
            </div>
        </AnimationWrapper>
    )
}
    