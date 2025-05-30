'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface CardProps {
    image: string;
    text: string;
}

const FlipStyledCard = ({image, text}: CardProps) => {
    const [flipped, setFlipped] = useState(false)

    return (
        <div
            className="relative w-[180px] h-[250px] lg:w-[228px] lg:h-[316px] perspective cursor-pointer"
            onClick={() => setFlipped(!flipped)}
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
                        Automotive Division
                    </p>
                    <span className="text-[12px] block text-center mt-3 text-red-400 lg:text-[15px]">
            More
          </span>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-white rounded-2xl shadow-xl shadow-black/6 flex flex-col justify-center items-center p-4 text-center">
                    <p className="text-[13px] lg:text-[15px] text-[#5E6282]">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FlipStyledCard
