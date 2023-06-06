"use client"

import { useInView, useAnimate, stagger } from "framer-motion"
import { useEffect } from "react";

export default function AnimationWrapper({ children, style, staggerValue, onceCheck } : { 
    children: React.ReactNode,
    style: string,
    staggerValue: number,
    onceCheck: boolean
}) {
    const [scope, animate] = useAnimate<HTMLDivElement>()
    const isInView = useInView(scope, { once: onceCheck })

    useEffect(() => {
        if (isInView) {
            animate(scope.current, 
                { opacity: [0, 1], x: [-100, 0] },
                { duration: 2, delay: stagger(staggerValue), ease: "easeInOut" }
            )
        } 

  }, [isInView, scope, animate, staggerValue])

    return (
        <div ref={scope} className={style}>
            {children}
        </div>
    )
}