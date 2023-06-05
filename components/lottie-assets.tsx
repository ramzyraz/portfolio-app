"use client"

import Lottie from "lottie-react";

// const style = {
//     width: "90%",
// };

export default function LottieAssets({ animationData } : { animationData: any }) {
    return <Lottie animationData={animationData} />
}