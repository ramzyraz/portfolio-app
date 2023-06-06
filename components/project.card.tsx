import Link from "next/link";
import { Icons } from "./icons";
import { ProjectType } from "@/types";

export default function Projectcard({ project, idx }: {
    project: ProjectType,
    idx: number
}) {
    return (
        <div>
            <div className="p-8 bg-zinc-100 shadow-sm dark:bg-zinc-800 hover:shadow-lg rounded-md border-r-4" >
                <div>
                    <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
                        0{idx+1}
                    </div> 
                    <h3 className="flex place-content-between text-xl font-medium leading-loose">
                        {project.title}
                        <span className="flex gap-1 mt-.5">
                            <Link 
                                href={project.github}
                                target="_blank" 
                                className={project.github === "" ? 'cursor-not-allowed opacity-25 dark:opacity-40' : ''}
                            >
                                <Icons.gitHub className="w-6 h-6 bg-clip-text text-teal-500" />
                            </Link>
                            <Link 
                                href={project.demo}
                                target="_blank" 
                                className={project.demo === "" ? 'cursor-not-allowed opacity-25 dark:opacity-40' : ''}
                            >
                                <Icons.external className="w-6 h-6 bg-clip-text text-teal-500" />
                            </Link>
                        </span>
                    </h3>
                </div>
                <p className="text-base leading-7 tracking-wide mt-4 mb-2">
                    {project.desc} 
                </p>
                <Tags tags={project.tags} />
            </ div>
        </div>
    )
}

const Tags = ({ tags }: { tags: string[] }) => {
    return (
        <>
            <ul className="text-base flex gap-3 opacity-60">
                {tags && tags?.length > 0 && tags.map((tag, idx) => <li key={tag + idx}>{tag}</li>)}
            </ul>
        </>
    )
}