"use client"

import { Icons } from "@/components/shared/icons";

export default function ScrollTop() {
    return (
        <button
            className="hidden sm:inline-block relative bottom-4 left-8 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <Icons.chevronUp className="hidden sm:inline-block w-9 h-9 p-1.5 bg-clip-text text-teal-500"/>
        </button>
    )
}