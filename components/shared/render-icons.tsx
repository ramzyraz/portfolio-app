"use client"

import { IconType } from "@/types"
import { Icons } from "./icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RenderIcons({ icon }: { icon: IconType }) { 
    const router = useRouter()   
    return (
        <>
            {
                icon && icon?.name === 'Gmail' ? (
                    <button
                        className="p-1.5 h-14 w-14 lg:h-14 lg:w-14 flex flex-col justify-center items-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700"
                        onClick={() => router.push(icon.iconLink) }
                    >
                        {renderIcons(icon.name, 'w-9 h-9 p-1.5 bg-clip-text text-teal-500')}
                    </button>
                ) : (
                    <Link
                        href={icon.iconLink} 
                        target="_blank"
                    >
                        <button className="p-1.5 h-14 w-14 lg:h-14 lg:w-14 flex flex-col justify-center items-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700">
                            {renderIcons(icon.name, 'w-9 h-9 p-1.5 bg-clip-text text-teal-500')}
                        </button>
                    </Link>
                )
            }
        </>
    )
}

const renderIcons = (name: string, style: string) => {
    switch (name) {
      case "LinkedIn":
        return <Icons.linkedin className={style} />
      case "Gmail":
        return <Icons.mail className={style} />
      case "Github":
        return <Icons.gitHub className={style} />
      default:
        return null;
    }
}