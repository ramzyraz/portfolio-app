import Link from "next/link";
import LottieAssets from "./lottie-assets";
import animationData from '../assets/lottiefiles/developer-yoga.json'
import { Icons } from "./icons";
import { bioData } from "@/data/bio";
import { iconData } from "@/data/icons";

export default function HeroSection() {
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
        <section id="home">
            <div className="flex flex-col items-center text-center mt-6 mb-16 px-2 gap-5 sm:gap-10 sm:mt-28 lg:h-4/6 lg:mt-36 lg:px-16">
                <div className="w-52 h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-3 rounded-full flex place-content-center dark:bg-zinc-800 bg-zinc-50 shadow-sm">
                    <LottieAssets animationData={animationData}/>
                </div>
                <h2 className="text-4xl font-normal text-center lg:text-5xl ">
                    {bioData.initial}{" "}
                    <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
                        Ramez
                    </span>
                </h2>
                <p className="px-5 text-center leading-11 font-light text-base md:text-lg lg:max-w-[90rem]">
                    {bioData.bio}
                </p>
                <div className="flex items-center gap-5">
                    {iconData.map((icon, idx) => (
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
                </div>
                <div className="flex justify-center rounded-full shadow-sm px-4 py-3 bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600">
                    <Link href="/#projects">
                        <div className="flex items-center justify-center gap-3 font-normal text-base uppercase">
                            Check out my Work!
                            <Icons.chevronDown className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full w-5 h-5 py-0.5 text-white text-center" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}