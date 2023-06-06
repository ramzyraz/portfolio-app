import LottieAssets from "./lottie-assets";
import animationData from '../../assets/lottiefiles/developer-yoga.json'
import { Icons } from "../shared/icons";
import { bioData } from "@/data/bio";
import { iconData } from "@/data/icons";
import RenderIcons from "../shared/render-icons";
import AnimationWrapper from "../animations/hero-animation-wrapper";
import ScrollLink from "../shared/scroll-link";

export default function HeroSection() {
    return (
        <section id="home">
            <AnimationWrapper>
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
                        <RenderIcons key={icon.name + idx} icon={icon} />                         
                    ))}
                </div>
                <div className="flex justify-center rounded-full shadow-sm px-4 py-3 bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600">
                    <ScrollLink toLink="projects">
                        <div className="flex items-center justify-center gap-3 font-normal text-base uppercase">
                            Check out my Work!
                            <Icons.chevronDown className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full w-5 h-5 py-0.5 text-white text-center" />
                        </div>
                    </ScrollLink>
                </div>
            </AnimationWrapper>
        </section>
    )
}