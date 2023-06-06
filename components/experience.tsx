import { experienceData } from "@/data/experience";
import ExperienceCard from "./experience-card";

export default function Experience() {
    return (
        <section id="experience">
            <div className="py-10 container mx-auto px-5">
                <h2 className="text-4xl font-normal leading-loose mb-6 flex gap-1 place-items-center">
                    Experience
                </h2>
                <div className="relative">
                    <div className="rounded-sm border-r-4 dark:border-zinc-800 border-zinc-200 absolute h-full top-0" style={{ 'left': '9px' }}></div>
                    <ul className="list-none m-0 p-0">
                        {
                            experienceData && experienceData.map((experience, idx) => (
                                <ExperienceCard key={idx} experience={experience} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}