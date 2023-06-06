import Link from "next/link";
import { iconData } from "@/data/icons";
import { Icons } from "./icons";

export default function Contacts() {
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
    };
    return (
        <section id="contact">
            <div className="mx-auto">
                <div className="pt-10 mt-15 border-t-2">
                    <div className="flex flex-col justify-center items-center mb-12">
                        <p className="text-3xl mb-7">
                            Contact me:
                        </p>
                        <ul className="flex gap-4 sm:gap-8 mt-5">
                            {iconData && iconData.map((icon, idx) => (
                                <Link
                                    key={idx}
                                    href={`${icon.iconLink}`} 
                                    target="_blank">
                                    <button
                                        className="p-1.5 h-14 w-14 lg:h-14 lg:w-14 flex flex-col justify-center items-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700"
                                    >
                                        {renderIcons(icon.name, 'w-9 h-9 p-1.5 bg-clip-text text-teal-500')}
                                    </button>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}