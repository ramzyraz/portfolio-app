"use client"

import { AnimatePresence, motion } from "framer-motion"

const heroVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        ease: "easeInOut",
        duration: 2,
        delay: 0.45
      }
    },
    exit: {
      opacity: 0,
      x: 0,
      y: -100,
      transition: {
        staggerChildren: 0.5
      }
    }
};

export default function AnimationWrapper({ children } : { children: React.ReactNode}) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="flex flex-col items-center text-center mt-6 mb-16 px-2 gap-5 sm:gap-10 sm:mt-28 lg:h-4/6 lg:mt-36 lg:px-16"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    )
}