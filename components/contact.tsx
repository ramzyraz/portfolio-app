import { iconData } from "@/data/icons";
import RenderIcons from "./shared/render-icons";

export default function Contacts() {
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
                                <RenderIcons key={icon.name + idx} icon={icon} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}