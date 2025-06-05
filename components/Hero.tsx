import Image from 'next/image';

export default function Hero() {
	return (
		<section
			id={'hero'}
			className='bg-gradient-to-br from-gray-50 to-white py-20 px-6 sm:px-12 lg:px-20'
		>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
					{/* Left Content */}
					<div className='space-y-8'>
						{/* Top Badge */}
						<div className='inline-block'>
							<span className='bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide'>
								Connecting Japan with the World – One Trade at a Time
							</span>
						</div>

						{/* Main Heading */}
						<div>
							<h1 className='text-3xl sm:text-4xl lg:text-2xl font-bold text-gray-900 leading-tight'>
								Welcome to{' '}
								<span className='text-red-600'>Nippon Global Energy</span>, a
								Tokyo-based international trading and logistics company that
								embodies the spirit of Japanese craftsmanship and global
								business acumen. We specialize in:
							</h1>
						</div>

						{/* Services List */}
						<div className='space-y-4'>
							<div className='flex items-start space-x-3'>
								<div className='w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0'></div>
								<p className='text-gray-700 text-lg'>
									Automotive Supplies – Engine Oil, Tires, Car Parts
								</p>
							</div>
							<div className='flex items-start space-x-3'>
								<div className='w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0'></div>
								<p className='text-gray-700 text-lg'>
									Logistics & Transport – Seamless movement of goods from Japan
									to Central Asia
								</p>
							</div>
							<div className='flex items-start space-x-3'>
								<div className='w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0'></div>
								<p className='text-gray-700 text-lg'>
									Oil & Gas Solutions – Supplying pipes, drilling and
									construction equipment for energy projects
								</p>
							</div>
						</div>

						{/* Bottom Description */}
						<div className='bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg'>
							<p className='text-gray-800 text-xl font-medium leading-relaxed'>
								We are more than just a trading house – we are your trusted
								business bridge between Japan and emerging markets, especially
								in Central Asia and the Middle East.
							</p>
						</div>
					</div>

					{/* Right Image */}
					<div className='flex justify-center lg:justify-end relative'>
						{/* Background pattern */}
						<div className='absolute inset-0 opacity-5'>
							<div className='absolute top-10 left-10 w-20 h-20 border-2 border-red-400 rounded-full'></div>
							<div className='absolute top-40 left-5 w-8 h-8 bg-orange-400 rounded-full'></div>
							<div className='absolute bottom-20 left-20 w-12 h-12 border border-red-300 rotate-45'></div>
							<div className='absolute top-20 right-10 w-6 h-6 bg-red-500 rotate-45'></div>
							<div className='absolute bottom-40 right-5 w-16 h-16 border-2 border-orange-300 rounded-full'></div>
						</div>

						{/* Main image container with enhanced decorations */}
						<div className='relative group z-10'>
							{/* Background gradient */}
							<div className='absolute -inset-6 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500'></div>

							{/* Main image container */}
							<div className='relative bg-white rounded-3xl p-2 shadow-2xl ring-1 ring-gray-200 group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500'>
								<div className='relative overflow-hidden rounded-2xl'>
									<Image
										src='/hero.jpg'
										alt='image'
										width={400}
										height={320}
										className='rounded-2xl object-cover w-full h-auto group-hover:scale-110 transition-transform duration-700'
									/>
									{/* Overlay gradient on hover */}
									<div className='absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl'></div>
								</div>
							</div>

							{/* Enhanced floating decorative elements */}
							<div className='absolute -top-12 -right-12 w-20 h-20 bg-gradient-to-br from-red-400 to-orange-400 rounded-full opacity-40 animate-pulse'></div>
							<div className='absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-30 animate-bounce'></div>
							<div className='absolute top-1/3 -right-6 w-8 h-8 bg-red-500 rounded-full opacity-50'></div>
							<div className='absolute bottom-1/4 -left-4 w-6 h-6 bg-orange-500 rotate-45 opacity-60'></div>

							{/* Additional geometric shapes */}
							<div className='absolute -top-6 left-1/4 w-4 h-4 border-2 border-red-400 rotate-45 opacity-70'></div>
							<div className='absolute -bottom-4 right-1/3 w-10 h-10 border border-orange-400 rounded-full opacity-50'></div>
							<div className='absolute top-1/2 -left-8 w-3 h-12 bg-gradient-to-b from-red-300 to-orange-300 rounded-full opacity-40'></div>
							<div className='absolute top-10 -right-4 w-12 h-3 bg-gradient-to-r from-orange-300 to-red-300 rounded-full opacity-40'></div>

							{/* Dotted pattern */}
							<div className='absolute -top-4 right-1/4'>
								<div className='flex space-x-1'>
									<div className='w-1 h-1 bg-red-400 rounded-full opacity-60'></div>
									<div className='w-1 h-1 bg-orange-400 rounded-full opacity-60'></div>
									<div className='w-1 h-1 bg-red-400 rounded-full opacity-60'></div>
								</div>
							</div>
							<div className='absolute -bottom-2 left-1/3'>
								<div className='flex space-x-1'>
									<div className='w-1 h-1 bg-orange-400 rounded-full opacity-60'></div>
									<div className='w-1 h-1 bg-red-400 rounded-full opacity-60'></div>
									<div className='w-1 h-1 bg-orange-400 rounded-full opacity-60'></div>
								</div>
							</div>
						</div>

						{/* Side decorative elements */}
						<div className='absolute top-0 right-0 w-32 h-32 opacity-10'>
							<div className='absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full'></div>
							<div className='absolute top-8 right-2 w-1 h-1 bg-orange-500 rounded-full'></div>
							<div className='absolute top-12 right-6 w-1.5 h-1.5 bg-red-400 rounded-full'></div>
							<div className='absolute top-16 right-8 w-1 h-1 bg-orange-400 rounded-full'></div>
						</div>
						<div className='absolute bottom-0 left-0 w-28 h-28 opacity-10'>
							<div className='absolute bottom-4 left-4 w-2 h-2 bg-orange-500 rounded-full'></div>
							<div className='absolute bottom-8 left-2 w-1 h-1 bg-red-500 rounded-full'></div>
							<div className='absolute bottom-12 left-6 w-1.5 h-1.5 bg-orange-400 rounded-full'></div>
							<div className='absolute bottom-16 left-8 w-1 h-1 bg-red-400 rounded-full'></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
