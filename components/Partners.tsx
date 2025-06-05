import Image from 'next/image';

export default function Partners() {
	return (
		<section
			id={'partnersBrands'}
			className='relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 px-6 sm:px-12 lg:px-20'
		>
			{/* Background decorative elements */}
			<div className='absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10'></div>
			<div className='absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-rose-400/10 to-amber-400/10 rounded-full blur-3xl -z-10'></div>
			<div className='absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-orange-400/10 to-red-400/10 rounded-full blur-3xl -z-10'></div>

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
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
					{/* Left Content */}
					<div className='space-y-8'>
						{/* Enhanced Header */}
						<div className='text-center lg:text-left'>
							<div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl mb-6 shadow-lg'>
								<span className='text-2xl text-white'>🤝</span>
							</div>
							<h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6'>
								We work with leading global and Japanese manufacturers, and are
								open to new partnerships in:
							</h1>
							<div className='w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 lg:mx-0 mx-auto rounded-full'></div>
						</div>

						{/* Partnership Categories */}
						<div className='space-y-4'>
							{/* Automotive Lubricants & Parts */}
							<div className='group bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300'>
								<div className='flex items-center gap-4'>
									<div className='relative'>
										<div className='absolute -inset-2 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
										<div className='relative bg-white rounded-xl p-2 shadow-lg'>
											<Image
												src='/firstPartners.png'
												alt='Partner 1'
												width={40}
												height={40}
												className='group-hover:scale-110 transition-transform duration-300'
											/>
										</div>
									</div>
									<p className='text-gray-800 font-medium group-hover:text-red-700 transition-colors duration-300'>
										Automotive Lubricants & Parts
									</p>
								</div>
							</div>

							{/* Oilfield Equipment */}
							<div className='group bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300'>
								<div className='flex items-center gap-4'>
									<div className='relative'>
										<div className='absolute -inset-2 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
										<div className='relative bg-white rounded-xl p-2 shadow-lg'>
											<Image
												src='/secondPartner.png'
												alt='Partner 1'
												width={40}
												height={40}
												className='group-hover:scale-110 transition-transform duration-300'
											/>
										</div>
									</div>
									<p className='text-gray-800 font-medium group-hover:text-amber-700 transition-colors duration-300'>
										Oilfield Equipment
									</p>
								</div>
							</div>

							{/* Japanese Industrial Tools */}
							<div className='group bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300'>
								<div className='flex items-center gap-4'>
									<div className='relative'>
										<div className='absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
										<div className='relative bg-white rounded-xl p-2 shadow-lg'>
											<Image
												src='/thirdPartner.png'
												alt='Partner 1'
												width={40}
												height={40}
												className='group-hover:scale-110 transition-transform duration-300'
											/>
										</div>
									</div>
									<p className='text-gray-800 font-medium group-hover:text-orange-700 transition-colors duration-300'>
										Japanese Industrial Tools
									</p>
								</div>
							</div>

							{/* Construction & Civil Equipment */}
							<div className='group bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300'>
								<div className='flex items-center gap-4'>
									<div className='relative'>
										<div className='absolute -inset-2 bg-gradient-to-r from-rose-400/20 to-pink-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
										<div className='relative bg-white rounded-xl p-2 shadow-lg'>
											<Image
												src='/fourthPartner.png'
												alt='Partner 1'
												width={40}
												height={40}
												className='group-hover:scale-110 transition-transform duration-300'
											/>
										</div>
									</div>
									<p className='text-gray-800 font-medium group-hover:text-rose-700 transition-colors duration-300'>
										Construction & Civil Equipment
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Image */}
					<div className='flex justify-center lg:justify-end'>
						<div className='relative group'>
							{/* Background decorative elements */}
							<div className='absolute -inset-8 bg-gradient-to-r from-red-400/20 via-orange-400/20 to-red-400/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500'></div>

							{/* Floating decorative elements */}
							<div className='absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full opacity-40 animate-pulse'></div>
							<div className='absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-60 animate-bounce'></div>
							<div className='absolute top-1/4 -right-4 w-6 h-6 bg-red-400 rounded-full opacity-50'></div>
							<div className='absolute bottom-1/3 -left-4 w-8 h-8 bg-orange-400 rotate-45 opacity-50'></div>

							{/* Image container */}
							<div className='relative bg-white rounded-3xl p-4 shadow-2xl border border-gray-100 group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500'>
								<div className='relative overflow-hidden rounded-2xl'>
									<Image
										src='/Slayd.png'
										alt='Partner'
										width={500}
										height={400}
										className='rounded-2xl object-cover w-full h-auto group-hover:scale-110 transition-transform duration-500'
									/>
									{/* Image overlay */}
									<div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl'></div>
								</div>
							</div>

							{/* Corner decorative elements */}
							<div className='absolute top-4 right-4 w-3 h-3 bg-red-400 rounded-full opacity-60'></div>
							<div className='absolute bottom-4 left-4 w-2 h-2 bg-orange-400 rounded-full opacity-60'></div>

							{/* Additional floating elements */}
							<div className='absolute top-1/2 -left-8 w-4 h-16 bg-gradient-to-b from-red-300 to-orange-300 rounded-full opacity-30'></div>
							<div className='absolute top-16 -right-8 w-16 h-4 bg-gradient-to-r from-orange-300 to-red-300 rounded-full opacity-30'></div>
						</div>
					</div>
				</div>

				{/* New Partnership Benefits Section */}
				<div className='mt-20 space-y-12'>
					{/* Partnership Benefits */}
					<div className='text-center'>
						<h2 className='text-3xl font-bold text-gray-900 mb-8'>
							Why Partner With Us?
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							{/* Global Reach */}
							<div className='group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl hover:scale-105 transition-all duration-300'>
								<div className='w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
									<span className='text-2xl text-white'>🌏</span>
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-3'>
									Global Network
								</h3>
								<p className='text-gray-600'>
									Access to international markets through our extensive global
									distribution network
								</p>
							</div>

							{/* Quality Assurance */}
							<div className='group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl hover:scale-105 transition-all duration-300'>
								<div className='w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
									<span className='text-2xl text-white'>⭐</span>
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-3'>
									Quality Standards
								</h3>
								<p className='text-gray-600'>
									Rigorous quality control and compliance with international
									standards
								</p>
							</div>

							{/* Long-term Partnership */}
							<div className='group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl hover:scale-105 transition-all duration-300'>
								<div className='w-16 h-16 bg-gradient-to-r from-amber-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
									<span className='text-2xl text-white'>🤝</span>
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-3'>
									Long-term Relations
								</h3>
								<p className='text-gray-600'>
									Building sustainable partnerships based on mutual trust and
									growth
								</p>
							</div>
						</div>
					</div>

					{/* Partnership Statistics */}
					<div className='bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 text-white'>
						<div className='text-center mb-8'>
							<h3 className='text-2xl font-bold mb-2'>
								Our Partnership Success
							</h3>
							<p className='text-red-100'>
								Building strong relationships across industries
							</p>
						</div>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
							<div className='text-center'>
								<div className='text-3xl font-bold mb-2'>50+</div>
								<div className='text-red-100 text-sm'>Global Partners</div>
							</div>
							<div className='text-center'>
								<div className='text-3xl font-bold mb-2'>15+</div>
								<div className='text-red-100 text-sm'>Years Experience</div>
							</div>
							<div className='text-center'>
								<div className='text-3xl font-bold mb-2'>25+</div>
								<div className='text-red-100 text-sm'>Countries Served</div>
							</div>
							<div className='text-center'>
								<div className='text-3xl font-bold mb-2'>100%</div>
								<div className='text-red-100 text-sm'>Quality Guarantee</div>
							</div>
						</div>
					</div>

					{/* Call to Action */}
					<div className='text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30'>
						<h3 className='text-2xl font-bold text-gray-900 mb-4'>
							Ready to Start a Partnership?
						</h3>
						<p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
							Join our network of successful partners and expand your business
							reach. We&apos;re always looking for reliable partners who share
							our commitment to excellence.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<button className='group bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2'>
								<span>Contact Us</span>
								<span className='group-hover:translate-x-1 transition-transform duration-300'>
									→
								</span>
							</button>
							<button className='group bg-white text-gray-700 border-2 border-gray-300 px-8 py-3 rounded-xl font-semibold hover:border-orange-400 hover:text-orange-600 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2'>
								<span>Learn More</span>
								<span className='group-hover:scale-110 transition-transform duration-300'>
									📋
								</span>
							</button>
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
