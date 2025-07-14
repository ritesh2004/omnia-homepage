import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Lottie from "lottie-react";

export function ThreeDCard({ title, description, imageUrl }) {
    return (
        <CardContainer className="inter-var">
            <CardBody
                className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 text-center dark:text-white">
                    {title || "3D Card Title"}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    {description || "This is a description of the 3D card. It can be customized with your own text."}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Lottie
                        animationData={imageUrl}
                        loop={true}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                </CardItem>

            </CardBody>
        </CardContainer>
    );
}
