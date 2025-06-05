export function WhyChooseUs() {
	return (
		<section className='relative bg-gradient-to-br from-gray-50 via-white to-orange-50 py-20 px-6 sm:px-12 lg:px-20'>
			{/* Background decorative elements */}
			<div className='absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10'></div>
			<div className='absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-rose-400/10 to-amber-400/10 rounded-full blur-3xl -z-10'></div>
			<div className='absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-orange-400/10 to-red-400/10 rounded-full blur-3xl -z-10'></div>

			{/* Additional geometric decorations */}
			<div className='absolute top-20 left-20 opacity-10'>
				<div className='w-16 h-16 border-2 border-red-400 rounded-full'></div>
				<div className='absolute top-4 left-4 w-8 h-8 bg-orange-400 rounded-full'></div>
			</div>
			<div className='absolute bottom-20 right-20 opacity-10'>
				<div className='w-12 h-12 border border-orange-400 rotate-45'></div>
				<div className='absolute top-2 left-2 w-8 h-8 border border-red-400 rotate-45'></div>
			</div>

			<div className='max-w-7xl mx-auto relative z-10'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
					{/* Left Content */}
					<div className='space-y-8'>
						{/* Enhanced Header */}
						<div className='text-center lg:text-left'>
							<div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl mb-6 shadow-lg'>
								<span className='text-2xl text-white'>✨</span>
							</div>
							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-orange-800 bg-clip-text text-transparent mb-6 tracking-tight'>
								Why Choose Us?
							</h1>
							<div className='w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 lg:mx-0 mx-auto rounded-full'></div>
						</div>

						{/* Features List */}
						<div className='space-y-6'>
							{/* Tokyo-Based HQ */}
							<div className='group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300'>
								<div className='flex items-center gap-4'>
									<div className='relative'>
										<div className='absolute -inset-2 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
										<div className='relative bg-white rounded-xl p-2 shadow-lg'>
											<svg
												width='35'
												height='35'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
												className='group-hover:scale-110 transition-transform duration-300'
											>
												<circle
													cx='12'
													cy='10'
													r='3'
													stroke='#4F46E5'
													strokeWidth='2'
												/>
												<path
													d='M12 2C7.03 2 3 6.03 3 11C3 16.25 9 22 12 22C15 22 21 16.25 21 11C21 6.03 16.97 2 12 2Z'
													stroke='#4F46E5'
													strokeWidth='2'
												/>
												<path
													d='M12 13V16'
													stroke='#4F46E5'
													strokeWidth='2'
													strokeLinecap='round'
												/>
											</svg>
										</div>
									</div>
									<div>
										<p className='text-gray-800 text-lg font-bold group-hover:text-indigo-700 transition-colors duration-300'>
											Tokyo-Based HQ
										</p>
										<h2 className='text-gray-600 text-sm mt-1'>
											Access to Japan&apos;s manufacturing network
										</h2>
									</div>
								</div>
							</div>

							{/* Bilingual Team */}
							<div className='group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300'>
								<div className='flex items-center gap-4'>
									<div className='relative'>
										<div className='absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-orange-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
										<div className='relative bg-white rounded-xl p-2 shadow-lg'>
											<svg
												width='35'
												height='35'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
												className='group-hover:scale-110 transition-transform duration-300'
											>
												<circle cx='7' cy='12' r='5' fill='#A855F7' />
												<text
													x='7'
													y='15'
													textAnchor='middle'
													fontSize='10'
													fill='white'
													fontFamily='sans-serif'
												>
													A
												</text>
												<circle cx='17' cy='12' r='5' fill='#F97316' />
												<text
													x='17'
													y='15'
													textAnchor='middle'
													fontSize='10'
													fill='white'
													fontFamily='sans-serif'
												>
													文
												</text>
											</svg>
										</div>
									</div>
									<div>
										<p className='text-gray-800 text-lg font-bold group-hover:text-purple-700 transition-colors duration-300'>
											Bilingual Team
										</p>
										<h2 className='text-gray-600 text-sm mt-1'>
											English, Japanese, Russian, and Turkmen support
										</h2>
									</div>
								</div>
							</div>

							{/* Regional Expertise */}
							<div className='group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300'>
								<div className='flex items-center gap-4'>
									<div className='relative'>
										<div className='absolute -inset-2 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
										<div className='relative bg-white rounded-xl p-2 shadow-lg'>
											<svg
												width='35'
												height='35'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
												className='group-hover:scale-110 transition-transform duration-300'
											>
												<path
													d='M3 7L7 5L10 8L14 6L18 9L21 7V17L17 19L14 16L10 18L6 16L3 17V7Z'
													fill='#22C55E'
													stroke='#166534'
													strokeWidth='1.5'
												/>
												<circle
													cx='12'
													cy='12'
													r='2'
													fill='#F59E0B'
													stroke='#B45309'
													strokeWidth='1'
												/>
											</svg>
										</div>
									</div>
									<div>
										<p className='text-gray-800 text-lg font-bold group-hover:text-green-700 transition-colors duration-300'>
											Regional Expertise
										</p>
										<h2 className='text-gray-600 text-sm mt-1'>
											Deep operational presence in Central Asia
										</h2>
									</div>
								</div>
							</div>

							{/* Trusted Suppliers */}
							<div className='group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300'>
								<div className='flex items-center gap-4'>
									<div className='relative'>
										<div className='absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
										<div className='relative bg-white rounded-xl p-2 shadow-lg'>
											<svg
												width='35'
												height='35'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
												className='group-hover:scale-110 transition-transform duration-300'
											>
												<circle
													cx='12'
													cy='10'
													r='6'
													fill='#3B82F6'
													stroke='#2563EB'
													strokeWidth='1.5'
												/>
												<path
													d='M6 16L8 22L12 20L16 22L18 16'
													fill='#FBBF24'
													stroke='#B45309'
													strokeWidth='1.5'
												/>
												<path
													d='M9 10L11 13L15 9'
													stroke='white'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</div>
									</div>
									<div>
										<p className='text-gray-800 text-lg font-bold group-hover:text-blue-700 transition-colors duration-300'>
											Trusted Suppliers
										</p>
										<h2 className='text-gray-600 text-sm mt-1'>
											OEM-certified products and equipment
										</h2>
									</div>
								</div>
							</div>

							{/* Turnkey Solutions */}
							<div className='group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300'>
								<div className='flex items-center gap-4'>
									<div className='relative'>
										<div className='absolute -inset-2 bg-gradient-to-r from-teal-400/20 to-purple-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
										<div className='relative bg-white rounded-xl p-2 shadow-lg'>
											<svg
												width='35'
												height='35'
												viewBox='0 0 64 64'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
												className='group-hover:scale-110 transition-transform duration-300'
											>
												<defs>
													<linearGradient
														id='boxGradient'
														x1='12'
														y1='10'
														x2='52'
														y2='44'
														gradientUnits='userSpaceOnUse'
													>
														<stop stopColor='#5EEAD4' />
														<stop offset='1' stopColor='#8B5CF6' />
													</linearGradient>
												</defs>
												<path
													d='M12 22L32 10L52 22V42C52 43.1046 51.1046 44 50 44H14C12.8954 44 12 43.1046 12 42V22Z'
													fill='url(#boxGradient)'
													stroke='#7C3AED'
													strokeWidth='2'
													strokeLinejoin='round'
												/>
												<path
													d='M12 22L32 34L52 22'
													fill='url(#boxGradient)'
													stroke='#7C3AED'
													strokeWidth='2'
													strokeLinejoin='round'
												/>
												<path
													d='M32 34V54'
													stroke='#7C3AED'
													strokeWidth='2'
													strokeLinecap='round'
												/>
											</svg>
										</div>
									</div>
									<div>
										<p className='text-gray-800 text-lg font-bold group-hover:text-purple-700 transition-colors duration-300'>
											Turnkey Solutions
										</p>
										<h2 className='text-gray-600 text-sm mt-1'>
											From sourcing to delivery, we manage everything
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right Video */}
					<div className='hidden lg:flex justify-center items-center'>
						<div className='relative group'>
							{/* Background decorative elements */}
							<div className='absolute -inset-8 bg-gradient-to-r from-red-400/20 via-orange-400/20 to-red-400/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500'></div>

							{/* Floating decorative elements */}
							<div className='absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full opacity-40 animate-pulse'></div>
							<div className='absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-60 animate-bounce'></div>
							<div className='absolute top-1/4 -right-4 w-6 h-6 bg-red-400 rounded-full opacity-50'></div>
							<div className='absolute bottom-1/3 -left-4 w-8 h-8 bg-orange-400 rotate-45 opacity-50'></div>

							{/* Video container */}
							<div className='relative bg-white rounded-3xl p-3 shadow-2xl border border-gray-100 group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500'>
								<video
									src='/video/video.mp4'
									autoPlay
									muted
									loop
									className='rounded-2xl w-full max-w-md object-cover group-hover:scale-105 transition-transform duration-500'
								/>
								{/* Video overlay */}
								<div className='absolute inset-3 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none'></div>
							</div>

							{/* Corner decorative elements */}
							<div className='absolute top-4 right-4 w-3 h-3 bg-red-400 rounded-full opacity-60'></div>
							<div className='absolute bottom-4 left-4 w-2 h-2 bg-orange-400 rounded-full opacity-60'></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
