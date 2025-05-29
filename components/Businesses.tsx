import Image from 'next/image';

export function Businesses() {
	return (
		<section className='mt-15 mb-15 lg:px-5 mx-auto w-11/12 h-fit lg:bg-[url("/businessesB.svg")] bg-[position:97.7%_90%] xl:bg-[position:89%_87%] 2xl:bg-[position:82.5%_87%] xl:bg-[length:80px_200px] bg-no-repeat'>
			<div className=''>
				<h1 className='text-[25px] text-center font-bold p-5 mb-10'>
					Our Businesses
				</h1>

				<div className='flex justify-around gap-2 xl:w-4xl mx-auto'>
					<div className='w-45 h-63 rounded-2xl shadow-xl shadow-black/6 bg-white lg:w-57 lg:h-79 hover:translate-x-1 hover:-translate-y-1 transition-all duration-400'>
						<Image
							src='/motor.png'
							alt='Image'
							width={100}
							height={100}
							className='w-full rounded-t-2xl'
						/>
						<p className='text-[11px] text-center mt-3  text-[#5E6282] lg:text-[14px] lg:mt-5'>
							Automotive Division
						</p>
						<span className='text-[12px] block text-center mt-3 text-red-400 lg:text-[15px] '>
							More
						</span>
					</div>
					<div className=' w-45 h-63 rounded-2xl shadow-xl shadow-black/6 bg-white lg:w-57 lg:h-79 hover:translate-x-1 hover:-translate-y-1 transition-all duration-400'>
						<Image
							src='/Solutions.jpg'
							alt='Image'
							width={100}
							height={100}
							className='w-full rounded-t-2xl'
						/>
						<p className='text-[11px] text-center mt-3  text-[#5E6282] lg:text-[14px] lg:mt-5'>
							Logistics & Freight Solutions
						</p>
						<span className='text-[12px] block text-center mt-3 text-red-400 lg:text-[15px]'>
							More
						</span>
					</div>
					<div className=' w-45 h-63 rounded-2xl shadow-xl shadow-black/6 bg-white lg:w-57 lg:h-79 hover:translate-x-1 hover:-translate-y-1 transition-all duration-400'>
						<Image
							src='/Gas Division.webp'
							alt='Image'
							width={100}
							height={100}
							className='w-full rounded-t-2xl'
						/>
						<p className='text-[11px] text-center mt-3  text-[#5E6282] lg:text-[14px] lg:mt-5'>
							Oil & Gas Division
						</p>
						<span className='text-[12px] block text-center mt-3 text-red-400 lg:text-[15px]'>
							More
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
