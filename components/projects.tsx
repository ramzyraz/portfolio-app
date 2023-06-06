import Link from "next/link";
import { projectData } from "@/data/project";
import { Icons } from "./icons";
import Projectcard from "./project.card";

export default function Projects() {
    return (
        <section id="projects">
            <div className="px-6 mt-0 mb-0 last:mb-32 sm:mt-10 sm:last:mb-16 lg:mt-20 lg:px-16">
                <h2 className="text-4xl font-normal leading-loose mb-6 flex gap-1 place-items-center lg:text-5xl lg:mb-12">
                    Projects
                </h2>
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">                      
                    {projectData.map((project, idx) => 
                        <Projectcard key={project.title + idx} project={project} idx={idx} />
                    )}
                </div>
            </div>
        </section>
    )
}