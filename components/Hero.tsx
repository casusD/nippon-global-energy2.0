import Image from 'next/image';

export function Hero() {
	return (
		<section className='mt-15 flex'>
			<div className='w-1/2 flex flex-col justify-between  gap-5'>
				<h3 className='text-[10px] font-bold text-red-400'>
					Connecting Japan with the World – One Trade at a Time
				</h3>
				<h1 className='text-[16px] font-bold text-blue-950 '>
					Welcome to Nippon global energy, a Tokyo-based international trading
					and logistics company that embodies the spirit of Japanese
					craftsmanship and global business acumen. We specialize in:
				</h1>
				<ul className='text-[7.8px] list-disc text-[#5E6282]'>
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
				<p>
					We are more than just a trading house – we are your trusted business
					bridge between Japan and emerging markets, especially in Central Asia
					and the Middle East.
				</p>
			</div>

			<div>
				<Image src='/globalEnergy.png' alt='image' width={300} height={300} />
			</div>
		</section>
	);
}
