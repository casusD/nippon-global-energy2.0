import Image from 'next/image';

export function Services() {
	return (
		<section className='mt-15 mb-15 px-5 mx-auto w-11/12 h-fit bg-[url("/serviceBG.png")] bg-no-repeat bg-right-top'>
			<h1 className='text-[24px] text-center font-bold'>Our Services</h1>
			<div className='mx-auto w-11/12 mt-10 grid grid-cols-3 grid-rows-2 gap-y-10 text-center bg-white rounded-2xl bg-[url("/serviceBG2.png")] bg-no-repeat bg-[position:33%_43%] lg:bg-[length:70px_70px]'>
				<div className='h-57 lg:h-63 flex flex-col gap-3 items-center rounded-2xl'>
					<Image
						src='/Product Sourcing & Trading.png'
						alt='image'
						width={120}
						height={100}
						className='rounded-2xl mb-5 lg:w-40'
					/>
					<h2 className='text-[14px] lg:text-[16px] w-9/12'>
						Product Sourcing & Trading
					</h2>
				</div>
				<div className='h-57 lg:h-63 flex flex-col gap-3 items-center rounded-2xl bg-white shadow-xl shadow-black/4'>
					<Image
						src='/Logistics & Freight Forwarding.png'
						alt='image'
						width={120}
						height={100}
						className='rounded-2xl mb-5 lg:w-40'
					/>
					<h2 className='text-[14px] lg:text-[16px] w-9/12'>
						Logistics & Freight Forwarding
					</h2>
				</div>
				<div className='h-57 lg:h-63 flex flex-col gap-3 items-center rounded-2xl'>
					<Image
						src='/Product Sourcing & Trading.png'
						alt='image'
						width={120}
						height={100}
						className='rounded-2xl mb-5 lg:w-40'
					/>
					<h2 className='text-[14px] lg:text-[16px] w-9/12'>
						Tender & Procurement Support
					</h2>
				</div>
				<div className='h-57 lg:h-63 flex flex-col gap-3 items-center rounded-2xl'>
					<Image
						src='/Product Sourcing & Trading.png'
						alt='image'
						width={120}
						height={100}
						className='rounded-2xl mb-5 lg:w-40'
					/>
					<h2 className='text-[14px] lg:text-[16px] w-9/12'>
						Custom Product Branding (Private Labeling)
					</h2>
				</div>
				<div className='h-57 lg:h-63 flex flex-col gap-3 items-center rounded-2xl'>
					<Image
						src='/Product Sourcing & Trading.png'
						alt='image'
						width={120}
						height={100}
						className='rounded-2xl mb-5 lg:w-40'
					/>
					<h2 className='text-[14px] lg:text-[16px] w-9/12'>
						Consulting for Japanese Companies entering Central Asia
					</h2>
				</div>
			</div>
		</section>
	);
}
