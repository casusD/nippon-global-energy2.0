import Image from 'next/image'
import firstPartners from '@/public/firstPartners.png'
import secondPartner from '@/public/secondPartner.png'
import thirdPartner from '@/public/thirdPartner.png'
import fourthPartner from '@/public/fourthPartner.png'
import Slayd from '@/public/Slayd.png'


const textList = [
	{ name: 'Automotive Lubricants & Parts', img: firstPartners },
	{ name: 'Oilfield Equipment', img: secondPartner },
	{ name: 'Japanese Industrial Tools', img: thirdPartner },
	{ name: 'Construction & Civil Equipment', img: fourthPartner },
];

export function Partners() {
	return (
		<section className='mt-25 mb-25 px-5 mx-auto w-11/12'>
			<div className='justify-between xl:w-10/12 2xl:w-9/12 mx-auto'>

				<h1 className='text-2xl w-140 font-bold'>
					We work with leading global and Japanese manufacturers, and are open
					to new partnerships in:
				</h1>
				<div className={'lg:flex w-full'}>
					<div className=' w-8/12 mx-auto mt-10 md:full md:mx-0'>
						{textList.map((text, index) => (
							<div key={index} className='flex gap-3 items-center my-4 2xl:my-5'>
								<Image src={text.img} alt='Image' width={35} style={{ height: 'auto' }} />
								<p className='text-[18px]'>{text.name}</p>
							</div>
						))}
					</div>
					<Image src={Slayd} alt={'Image'} width={500} style={{ height: 'auto' }} className={'rounded-2xl block mx-auto sm:mt-15 lg:mt-10'} />
				</div>
				
			</div>
		</section>
	);
}
