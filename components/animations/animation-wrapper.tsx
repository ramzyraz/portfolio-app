"use client"

import { useAnimate, usePresence } from "framer-motion"
import { useEffect } from "react"

export default function AnimationWrapper({ children } : { children: React.ReactNode}) {
    const [isPresent, safeToRemove] = usePresence()
    const [scope, animate] = useAnimate()

    useEffect(() => {
        if (isPresent) {
            const enterAnimation = async () => {
                await animate(
                    scope.current, 
                    { scale: [0, 1] }, 
                    { type: "spring", duration: 0.4, delay: 0.15 }
                )
            }
            enterAnimation()
        } else {
            const exitAnimation = async () => {
                await animate(scope.current, { scale: [1, 0] }, { delay: 0.15 })
                safeToRemove()
            }            
            exitAnimation()
        }
    }, [isPresent, scope, animate, safeToRemove])

    return (
        <div ref={scope} className="fixed top-11 right-1 p-6">
            {children}
        </div>
    )
}