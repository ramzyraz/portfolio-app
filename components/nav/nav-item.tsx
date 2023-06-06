import { NavItem } from "@/types"
import Link from "next/link"
import ScrollLink from "../shared/scroll-link"

export default function NavItem({ children, item }: {
    children: React.ReactNode,
    item: NavItem,
}) {
    return (
        <>
            {
                item.title === "Download CV" ? <Link href={item.idName} target='_blank'>{children}</Link> : <ScrollLink toLink={item.idName}>{children}</ScrollLink>
            }
        </>
    )
}