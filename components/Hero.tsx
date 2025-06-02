import Image from 'next/image'
import hero from '@/public/hero.jpg'
import underline from '@/public/underline.png'

export function Hero() {
	return (
		<section className='mt-10 px-5 flex gap-10 lg:gap-15 lg:w-11/12 mx-auto justify-between xl:w-11/12 2xl:w-11/12'>
			<div className='w-1/2 flex flex-col justify-between gap-5 2xl:gap-5'>
				<h3 className='text-[10px] font-bold text-red-400 md:text-[12px] lg:text-[14px] xl:text-[18px]'>
					Connecting Japan with the World – One Trade at a Time
				</h3>
				<h1 className={`bg-[url(${underline})] bg-[position:0%_50%] bg-no-repeat 2xl:bg-center 2xl:bg-[length:350px_7px] bg-[length:150px_3px] xl:bg-[position:110%_40%] lg:bg-[position:110%_40%] lg:bg-[length:220px_5px] md:bg-[length:150px_3px] md:bg-[position:100%_40%] text-[16px] font-bold text-blue-950 lg:text-[20px] xl:text-[24px]`}>
					Welcome to Nippon global energy, a Tokyo-based international trading
					and logistics company that embodies the spirit of Japanese
					craftsmanship and global business acumen. We specialize in:
				</h1>
				<ul className='text-[10px] list-disc text-[#5E6282]  md:text-[14px]  2xl:text-[16px]'>
					<li>Automotive Supplies – Engine Oil, Tires, Car Parts</li>
					<li>
						Logistics & Transport – Seamless movement of goods from Japan to
						Central Asia
					</li>
					<li>
						Oil & Gas Solutions – Supplying pipes, drilling and construction
						equipment for energy projects
					</li>
				</ul>
				<p className='w-xl text-[13px] md:text-[16xp] lg:text-[20px] lg:w-4xl xl:text-[24px] xl:w-6xl 2xl:w-3xl'>
					We are more than just a trading house – we are your trusted business
					bridge between Japan and emerging markets, especially in Central Asia
					and the Middle East.
				</p>
			</div>

			<div className='w-1/2 h-60 flex items-center justify-center md:h-70 2xl:h-110'>
				<Image
					src={hero}
					alt='image'
					width={250}
					style={{ height: 'auto' }}
					className='rounded-2xl md:scale-130 lg:scale-150 xl:scale-170 2xl:scale-200'
				/>
			</div>
		</section>
	);
}
