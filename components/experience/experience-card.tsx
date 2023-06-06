import { ExperienceType } from "@/types";

export default function ExperienceCard({ experience }: {
    experience: ExperienceType
}) {
    return (
        <>        
            <li className="mb-5">
                <div className="flex group items-center">
                    <div className="bg-gray-800 group-hover:bg-teal-600 z-10 rounded-full border-4 border-black  h-5 w-5">
                        <div className="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                    </div>
                    <div className="flex-1 ml-4 z-10 font-medium">
                        <div className="order-1 space-y-2 dark:bg-zinc-800 bg-zinc-100 rounded-lg hover:shadow-lg shadow-only transition-ease px-6 py-4">
                            <h3 className="mb-3 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">{experience.company}</h3>
                            <div className="flex justify-between">
                                <p className="font-medium pb-4 text-sm">{experience.role}</p>
                                <p className="pb-4 text-sm ">{experience.date}</p>
                            </div>
                            <hr className="dark:bg-zinc-800 h-px my-8" />
                            { experience && experience?.details && <Details details={experience.details} /> }                        
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

const Details = ({ details }: { details: string[] }) => {
    return (
        <>
            <ul className="list-disc p-2 space-y-2">
                {
                    details && details?.length > 0 && details.map((desc, idx) => (
                        <li 
                            key={desc + idx}
                            className="text-sm font-normal leading-snug tracking-wide dark:text-gray-300 dark:text-opacity-100"
                        >
                            {desc}
                        </li>       
                    ))
                }
            </ul>
        </>
    )
}