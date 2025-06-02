'use client'

import React, {useState} from 'react'
import Image, {StaticImageData} from 'next/image'

interface CardProps {
    image:  StaticImageData;
    textFront: string;
    textBack: string;
}

const FlipStyledCard = ({image, textFront, textBack}: CardProps) => {
    const [flipped, setFlipped] = useState(false)

    return (
        <div
            className="relative w-[180px] h-[250px] lg:w-[228px] lg:h-[316px] perspective "
        >
            <div
                className={`w-full h-full transition-transform duration-700 transform-style preserve-3d ${
                    flipped ? 'rotate-y-180' : ''
                }`}
            >
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-start bg-white rounded-2xl shadow-xl shadow-black/6 hover:translate-x-1 hover:-translate-y-1 transition-all duration-400">
                    <Image
                        src={image}
                        alt="Image"
                        width={100}
                        height={100}
                        className="w-full rounded-t-2xl"
                    />
                    <p className="text-[11px] text-center mt-3 text-[#5E6282] lg:text-[14px] lg:mt-5">
                        {textFront}
                    </p>
                    <span onClick={() => setFlipped(!flipped)} className="cursor-pointer text-[12px] block text-center mt-3 text-red-400 lg:text-[15px]">
                      More
                    </span>
                </div>

                {/* Back Side */}
                <div onClick={() => setFlipped(!flipped)} className="scrollbar-hidden cursor-pointer overflow-y-auto absolute w-full h-full rotate-y-180 backface-hidden bg-white rounded-2xl shadow-xl shadow-black/10 flex flex-col justify-start items-start p-4 text-left">
                    <p className="text-[8px] lg:text-[15px] whitespace-pre-line">
                        {textBack}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FlipStyledCard

