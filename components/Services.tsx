import Image from 'next/image'

export function Services() {
	return (
		<section id={'ourServices'} className={`mt-15 mb-15 px-5 mx-auto w-11/12 h-fit bg-[url('/serviceBG.png')] bg-no-repeat bg-right-top`}>
			<h1 className='text-[25px] text-center font-bold p-5'>Our Services</h1>
			<div className='mx-auto w-11/12 mt-10 grid grid-cols-3 grid-rows-2 lg:gap-y-10 text-center bg-white rounded-2xl lg:bg-[length:70px_70px]'>
				<div className='h-57 lg:h-67 xl:h-72 flex flex-col lg:gap-3  items-center rounded-2xl bg-white hover:shadow-xl shadow-black/4 transition-all duration-400 ease-in-out hover:translate-x-1 hover:-translate-y-1'>
					<Image
						src={'/Product Sourcing & Trading.webp'}
						alt='image'
						width={120}
						height={140}
						className='rounded-2xl mb-5 lg:w-40 xl:w-50'
					/>
					<h2 className='text-[14px] lg:text-[16px] w-9/12'>
						Product Sourcing & Trading
					</h2>
				</div>
				<div className='h-57 lg:h-67 xl:h-72 flex flex-col lg:gap-3  items-center rounded-2xl bg-white hover:shadow-xl shadow-black/4 transition-all duration-400 ease-in-out hover:translate-x-1 hover:-translate-y-1'>
					<Image
						src={'/Logistics & Freight Forwarding.png'}
						alt='image'
						width={140}
						height={140}
						className='rounded-2xl h-30 lg:h-40 mb-5 lg:w-50 xl:w-65 xl:h-50'
					/>
					<h2 className='text-[14px] lg:text-[16px] w-9/12'>
						Logistics & Freight Forwarding
					</h2>
				</div>
				<div className='h-57 lg:h-67 xl:h-72 flex flex-col lg:gap-3  items-center rounded-2xl bg-white hover:shadow-xl shadow-black/4 transition-all duration-400 ease-in-out hover:translate-x-1 hover:-translate-y-1'>
					<Image
						src={'/The-Tendering-Process.jpg'}
						alt='image'
						width={120}
						height={140}
						className='rounded-2xl mb-5 lg:w-40 xl:w-50'
					/>
					<h2 className='text-[14px] lg:text-[16px] w-9/12'>
						Tender & Procurement Support
					</h2>
				</div>
				<div className='h-57 lg:h-67 xl:h-72 flex flex-col lg:gap-3  items-center rounded-2xl bg-white hover:shadow-xl shadow-black/4 transition-all duration-400 ease-in-out hover:translate-x-1 hover:-translate-y-1'>
					<Image
						src={'/branding.webp'}
						alt='image'
						width={120}
						height={140}
						className='rounded-2xl mb-5 lg:w-40 xl:w-50'
					/>
					<h2 className='text-[14px] lg:text-[16px] w-9/12'>
						Custom Product Branding (Private Labeling)
					</h2>
				</div>
				<div className='h-57 lg:h-67 xl:h-72 flex flex-col lg:gap-3  items-center rounded-2xl bg-white hover:shadow-xl shadow-black/4 transition-all duration-400 ease-in-out hover:translate-x-1 hover:-translate-y-1'>
					<Image
						src={'/Consulting.jpg'}
						alt='image'
						width={120}
						height={140}
						className='rounded-2xl mb-5 lg:w-40 xl:w-50'
					/>
					<h2 className='text-[14px] lg:text-[16px]  w-9/12'>
						Consulting for Japanese Companies entering Central Asia
					</h2>
				</div>
			</div>
		</section>
	);
}
