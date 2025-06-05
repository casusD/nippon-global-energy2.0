'use client';

import Image from 'next/image';
import { useState } from 'react';

interface CardProps {
	image: string;
	textFront: string;
	textBack: string;
}

const FlipStyledCard = ({ image, textFront, textBack }: CardProps) => {
	const [flipped, setFlipped] = useState(false);

	return (
		<div className='relative w-[200px] h-[280px] lg:w-[250px] lg:h-[340px] perspective group'>
			{/* Background decorative elements */}
			<div className='absolute -inset-6 bg-gradient-to-r from-red-400/20 via-orange-400/20 to-red-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

			{/* Floating decorative elements */}
			<div className='absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full opacity-60 animate-pulse'></div>
			<div className='absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-40 animate-bounce'></div>
			<div className='absolute top-1/4 -right-2 w-3 h-3 bg-red-400 rounded-full opacity-50'></div>
			<div className='absolute bottom-1/3 -left-2 w-4 h-4 bg-orange-400 rotate-45 opacity-60'></div>

			<div
				className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
					flipped ? 'rotate-y-180' : ''
				} z-10`}
			>
				{/* Front Side */}
				<div className='absolute w-full h-full backface-hidden flex flex-col items-center justify-start bg-white rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl hover:scale-105 transition-all duration-500 overflow-hidden'>
					{/* Image container with gradient overlay */}
					<div className='relative w-full h-32 lg:h-40 overflow-hidden rounded-t-3xl'>
						<Image
							src={image}
							alt='Image'
							width={250}
							height={160}
							className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
						/>
						{/* Gradient overlay */}
						<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
					</div>

					{/* Content area */}
					<div className='flex-1 flex flex-col justify-between p-6 text-center'>
						<p className='text-sm text-gray-700 leading-relaxed lg:text-base font-medium'>
							{textFront}
						</p>

						{/* More button with enhanced styling */}
						<button
							onClick={() => setFlipped(!flipped)}
							className='group/btn relative mt-4 px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
						>
							<div className='absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300'></div>
							<span className='relative z-10 flex items-center justify-center gap-2'>
								More
								<svg
									className='w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9 5l7 7-7 7'
									/>
								</svg>
							</span>
						</button>
					</div>

					{/* Decorative corner elements */}
					<div className='absolute top-4 right-4 w-2 h-2 bg-red-400 rounded-full opacity-60'></div>
					<div className='absolute bottom-4 left-4 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-60'></div>
				</div>

				{/* Back Side */}
				<div className='absolute w-full h-full rotate-y-180 backface-hidden bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col justify-start items-start p-6 text-left overflow-hidden'>
					{/* Background pattern */}
					<div className='absolute inset-0 opacity-5'>
						<div className='absolute top-4 right-4 w-16 h-16 border border-red-300 rounded-full'></div>
						<div className='absolute bottom-8 left-4 w-8 h-8 bg-orange-300 rotate-45'></div>
						<div className='absolute top-1/2 right-8 w-4 h-4 bg-red-300 rounded-full'></div>
					</div>

					{/* Content area */}
					<div className='relative z-10 flex-1 overflow-y-auto scrollbar-hidden'>
						<p className='text-xs lg:text-sm text-gray-700 leading-relaxed whitespace-pre-line'>
							{textBack}
						</p>
					</div>

					{/* Back button */}
					<button
						onClick={() => setFlipped(!flipped)}
						className='relative mt-4 w-full px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-2xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group/back'
					>
						<div className='absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl opacity-0 group-hover/back:opacity-100 transition-opacity duration-300'></div>
						<span className='relative z-10 flex items-center justify-center gap-2'>
							<svg
								className='w-4 h-4 transition-transform duration-300 group-hover/back:-translate-x-1'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M15 19l-7-7 7-7'
								/>
							</svg>
							Back
						</span>
					</button>

					{/* Decorative elements for back side */}
					<div className='absolute top-6 right-6 w-1 h-8 bg-gradient-to-b from-red-300 to-orange-300 rounded-full opacity-40'></div>
					<div className='absolute bottom-20 right-4 w-6 h-1 bg-gradient-to-r from-orange-300 to-red-300 rounded-full opacity-40'></div>
				</div>
			</div>
		</div>
	);
};

export default FlipStyledCard;
