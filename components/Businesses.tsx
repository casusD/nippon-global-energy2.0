import FlipStyledCard from '@/components/FlipCard';

export function Businesses() {
	return (
		<section className='relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 px-6 sm:px-12 lg:px-20'>
			{/* Background decorative elements */}
			<div className='absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10'></div>
			<div className='absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-rose-400/10 to-amber-400/10 rounded-full blur-3xl -z-10'></div>
			<div className='absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-orange-400/10 to-red-400/10 rounded-full blur-3xl -z-10'></div>
			<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-amber-400/5 to-orange-400/5 rounded-full blur-3xl -z-10'></div>

			{/* Additional geometric decorations */}
			<div className='absolute top-20 right-20 opacity-10'>
				<div className='w-20 h-20 border-2 border-red-400 rounded-full'></div>
				<div className='absolute top-6 left-6 w-8 h-8 bg-orange-400 rounded-full'></div>
			</div>
			<div className='absolute bottom-20 left-20 opacity-10'>
				<div className='w-16 h-16 border border-orange-400 rotate-45'></div>
				<div className='absolute top-2 left-2 w-12 h-12 border border-red-400 rotate-45'></div>
			</div>

			<div className='max-w-7xl mx-auto relative z-10'>
				{/* Enhanced Header */}
				<div className='text-center mb-16'>
					<div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl mb-6 shadow-lg'>
						<span className='text-2xl text-white'>🏢</span>
					</div>
					<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-orange-800 bg-clip-text text-transparent mb-6 tracking-tight'>
						Our Businesses
					</h1>
					<div className='w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded-full'></div>
					<p className='mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
						Discover our specialized divisions driving innovation across
						automotive, logistics, and energy sectors
					</p>
				</div>

				{/* Cards Container */}
				<div className='relative'>
					{/* Background pattern for cards area */}
					<div className='absolute inset-0 opacity-5'>
						<div className='absolute top-10 left-1/4 w-12 h-12 border border-red-300 rounded-full'></div>
						<div className='absolute bottom-10 right-1/4 w-8 h-8 bg-orange-300 rotate-45'></div>
						<div className='absolute top-1/2 left-10 w-6 h-6 bg-red-300 rounded-full'></div>
						<div className='absolute top-1/3 right-10 w-10 h-10 border border-orange-300 rounded-full'></div>
					</div>

					{/* Cards Grid */}
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center'>
						<div className='relative group'>
							{/* Card background decoration */}
							<div className='absolute -inset-8 bg-gradient-to-r from-red-400/10 via-orange-400/10 to-red-400/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

							{/* Floating elements around card */}
							<div className='absolute -top-6 -left-6 w-4 h-4 bg-red-400 rounded-full opacity-60 animate-pulse'></div>
							<div className='absolute -bottom-6 -right-6 w-3 h-3 bg-orange-400 rotate-45 opacity-60 animate-bounce'></div>

							<FlipStyledCard
								image={'/motor.png'}
								textFront='Automotive Division'
								textBack={
									`We specialize in the supply and export of:\n` +
									'\n' +
									`• Engine Oil (Synthetic, Semi-Synthetic, Mineral – passenger and commercial use)\n` +
									'\n' +
									`• Tires (TBR, PCR, OTR – All major brands & private labels)\n` +
									'\n' +
									`• Car Parts (OEM & aftermarket parts for Japanese, European, and Korean vehicles)\n` +
									'\n' +
									`Our products are distributed to wholesalers, service stations, and fleets across Turkmenistan, Uzbekistan, Kazakhstan, and beyond.`
								}
							/>
						</div>

						<div className='relative group'>
							{/* Card background decoration */}
							<div className='absolute -inset-8 bg-gradient-to-r from-amber-400/10 via-yellow-400/10 to-amber-400/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

							{/* Floating elements around card */}
							<div className='absolute -top-6 -right-6 w-5 h-5 bg-amber-400 rounded-full opacity-60 animate-pulse'></div>
							<div className='absolute -bottom-6 -left-6 w-3 h-3 bg-yellow-400 rotate-45 opacity-60 animate-bounce'></div>

							<FlipStyledCard
								image={'/Solutions.jpg'}
								textFront='Logistics & Freight Solutions'
								textBack={
									`We operate an integrated logistics system that ensures reliable delivery from Japan to Central Asia.\n` +
									'\n' +
									`• Multimodal Transport: Sea + Land freight to landlocked regions\n` +
									'\n' +
									`• Customs Clearance Assistance\n` +
									'\n' +
									`• Warehousing & Consolidation in Japan\n` +
									'\n' +
									`• End-to-End Supply Chain Management\n` +
									'\n' +
									`Whether you're moving one container or entire projects – we make it efficient, secure, and cost-effective.`
								}
							/>
						</div>

						<div className='relative group lg:col-span-1'>
							{/* Card background decoration */}
							<div className='absolute -inset-8 bg-gradient-to-r from-orange-400/10 via-red-400/10 to-orange-400/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

							{/* Floating elements around card */}
							<div className='absolute -top-6 -left-6 w-4 h-4 bg-orange-400 rounded-full opacity-60 animate-pulse'></div>
							<div className='absolute -bottom-6 -right-6 w-5 h-5 bg-red-400 rotate-45 opacity-60 animate-bounce'></div>

							<FlipStyledCard
								image={'/Gas Division.webp'}
								textFront='Oil & Gas Division'
								textBack={
									`We serve major oil and gas players in Turkmenistan and Central Asia with:\n` +
									'\n' +
									`• Oilfield Equipment: Drilling rigs, pumps, valves, and tools\n` +
									'\n' +
									`• Pipes & Tubular Products: API 5L, OCTG, seamless and welded\n` +
									'\n' +
									`• Construction Equipment: Cranes, compressors, graders, and support machinery\n` +
									'\n' +
									`• Procurement & Tender Management: We handle government tenders and EPC project sourcing\n` +
									'\n' +
									`We have built strong local partnerships to support infrastructure and energy development projects across the region.`
								}
							/>
						</div>
					</div>
				</div>

				{/* Bottom decorative section */}
				<div className='mt-16 text-center'>
					<div className='flex justify-center space-x-4'>
						<div className='w-2 h-2 bg-red-400 rounded-full animate-pulse'></div>
						<div className='w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-100'></div>
						<div className='w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-200'></div>
					</div>
				</div>
			</div>
		</section>
	);
}
