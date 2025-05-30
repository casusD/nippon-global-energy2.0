import Image from 'next/image';

const textList = [
	{ name: 'Automotive Lubricants & Parts', img: '/firstPartners.png' },
	{ name: 'Oilfield Equipment', img: '/secondPartner.png' },
	{ name: 'Japanese Industrial Tools', img: '/thirdPartner.png' },
	{ name: 'Construction & Civil Equipment', img: '/fourthPartner.png' },
];

export function Partners() {
	return (
		<section className='mt-25 mb-15 px-5 mx-auto w-11/12'>
			<div className=' justify-between xl:w-9/12 2xl:w-9/12 mx-auto'>
				<h1 className='text-2xl w-150 font-bold'>
					We work with leading global and Japanese manufacturers, and are open
					to new partnerships in:
				</h1>
				<div className='w-8/12 mx-auto mt-10 md:full md:mx-0'>
					{textList.map((text, index) => (
						<div key={index} className='flex gap-3 items-center my-4 2xl:my-5'>
							<Image src={text.img} alt='Image' width={35} height={35} />
							<p className='text-[18px]'>{text.name}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
