const AboutUs = () => {
	return (
		<section
			id={'aboutUs'}
			className='relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-24 px-6 sm:px-12 lg:px-20 overflow-hidden'
		>
			{/* Background decoration */}
			<div className='absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10'></div>
			<div className='absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-gradient-to-br from-rose-400/20 to-amber-400/20 rounded-full blur-3xl -z-10'></div>
			<div className='absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-gradient-to-tr from-orange-400/20 to-red-400/20 rounded-full blur-3xl -z-10'></div>

			<div className='max-w-7xl mx-auto relative z-10'>
				{/* Enhanced Header */}
				<div className='text-center mb-20'>
					<div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl mb-6 shadow-lg'>
						<span className='text-2xl text-white'>🏢</span>
					</div>
					<h2 className='text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-orange-800 bg-clip-text text-transparent mb-6 tracking-tight leading-tight'>
						About Us: The Spirit Behind Our Company
					</h2>
					<div className='w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded-full'></div>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10'>
					{/* Who We Are - Enhanced Card */}
					<div className='group'>
						<div className='bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 h-full'>
							<div className='flex items-center mb-8'>
								<div className='flex items-center justify-center w-14 h-14 bg-gradient-to-r from-red-500 to-rose-500 rounded-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300'>
									<span className='text-2xl text-white'>📌</span>
								</div>
								<h3 className='text-2xl font-bold text-gray-800 group-hover:text-red-700 transition-colors duration-300'>
									Who We Are
								</h3>
							</div>
							<div className='space-y-4'>
								<p className='text-gray-700 leading-relaxed text-lg'>
									Founded in the heart of Tokyo,{' '}
									<span className='font-bold text-transparent bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text'>
										Nippon Global Energy
									</span>{' '}
									is a new-age trading company deeply rooted in traditional
									Japanese values.
								</p>
								<div className='bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-4 border-l-4 border-gradient-to-b from-red-500 to-orange-500'>
									<p className='text-gray-800 font-bold text-lg'>
										Sincerity (Makoto), Harmony (Wa), Discipline (Shitsuke), and
										Kaizen (Continuous Improvement).
									</p>
								</div>
								<p className='text-gray-700 leading-relaxed text-lg'>
									Our mission is to connect high-quality Japanese products and
									services with the growing demands of global markets,
									especially in Central Asia and the Caspian Region.
								</p>
							</div>
						</div>
					</div>

					{/* Our Vision - Enhanced Card */}
					<div className='group'>
						<div className='bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 h-full'>
							<div className='flex items-center mb-8'>
								<div className='flex items-center justify-center w-14 h-14 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300'>
									<span className='text-2xl text-white'>🌏</span>
								</div>
								<h3 className='text-2xl font-bold text-gray-800 group-hover:text-amber-700 transition-colors duration-300'>
									Our Vision
								</h3>
							</div>
							<div className='bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-100'>
								<p className='text-gray-700 leading-relaxed text-lg font-medium'>
									To be a reliable and innovative bridge between Japan and the
									world, facilitating commerce that creates mutual value and
									long-term prosperity.
								</p>
							</div>
						</div>
					</div>

					{/* Our Values - Enhanced Card */}
					<div className='group'>
						<div className='bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 h-full'>
							<div className='flex items-center mb-8'>
								<div className='flex items-center justify-center w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300'>
									<span className='text-2xl text-white'>🎌</span>
								</div>
								<h3 className='text-2xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-300'>
									Our Values
								</h3>
							</div>
							<div className='space-y-4'>
								{[
									{
										title: 'Integrity',
										desc: 'We do what is right, not what is easy.',
										color: 'from-red-500 to-rose-500',
									},
									{
										title: 'Excellence',
										desc: 'Every product and service reflects the precision and quality of Japanese standards.',
										color: 'from-amber-500 to-yellow-500',
									},
									{
										title: 'Respect',
										desc: 'We believe in building long-term, respectful relationships with partners.',
										color: 'from-orange-500 to-red-500',
									},
									{
										title: 'Speed with Precision',
										desc: 'Fast delivery without compromising quality or accuracy.',
										color: 'from-rose-500 to-pink-500',
									},
								].map((value, index) => (
									<div
										key={index}
										className='flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50/50 transition-colors duration-200'
									>
										<div
											className={`w-2 h-2 rounded-full bg-gradient-to-r ${value.color} mt-3 flex-shrink-0`}
										></div>
										<div>
											<span className='font-bold text-gray-800 text-lg'>
												{value.title}:
											</span>
											<span className='text-gray-700 ml-2 text-lg'>
												{value.desc}
											</span>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
