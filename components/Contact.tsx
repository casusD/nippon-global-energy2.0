import Image from 'next/image';

export function Contact() {
	return (
		<section id={'contactUs'} className='relative py-20 px-6 sm:px-12 lg:px-20'>
			{/* Background decorative elements */}
			<div className='absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50 -z-20'></div>
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

			<div className='max-w-4xl mx-auto relative z-10'>
				{/* Enhanced Contact Section */}
				<div className='relative bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 overflow-hidden'>
					{/* Background pattern overlay */}
					<div className='absolute inset-0 bg-[url("/contactB.svg")] bg-no-repeat bg-contain bg-[position:0%_100%] 2xl:bg-[position:100%_100%] opacity-20'></div>

					{/* Gradient overlay */}
					<div className='absolute inset-0 bg-gradient-to-br from-red-50/30 via-transparent to-orange-50/30'></div>

					{/* Content */}
					<div className='relative p-8 sm:p-12 lg:p-16'>
						{/* Header Section */}
						<div className='text-center mb-12'>
							<div className='inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl mb-6 shadow-lg'>
								<span className='text-3xl text-white'>📞</span>
							</div>
							<h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
								Contact Us
							</h1>
							<div className='w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded-full'></div>
						</div>

						{/* Contact Information */}
						<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
							{/* Head Office */}
							<div className='group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center'>
								<div className='w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
									<span className='text-xl text-white'>🏢</span>
								</div>
								<p className='text-gray-800 font-bold text-lg group-hover:text-red-700 transition-colors duration-300'>
									Head Office: Tokyo, Japan
								</p>
							</div>

							{/* Phone */}
							<div className='group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center'>
								<div className='w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
									<span className='text-xl text-white'>📱</span>
								</div>
								<p className='text-gray-800 font-bold text-lg group-hover:text-orange-700 transition-colors duration-300'>
									Phone: +81-XXX-XXX-XXXX
								</p>
							</div>

							{/* Email */}
							<div className='group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center'>
								<div className='w-12 h-12 bg-gradient-to-r from-amber-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
									<span className='text-xl text-white'>✉️</span>
								</div>
								<p className='text-gray-800 font-bold text-sm sm:text-base lg:text-lg group-hover:text-amber-700 transition-colors duration-300 break-words'>
									Email: info@nipponglobalenergy.com
								</p>
							</div>
						</div>

						{/* Enhanced Subscription Form */}
						<div className='bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 shadow-2xl'>
							<div className='text-center mb-6'>
								<h3 className='text-2xl font-bold text-white mb-2'>
									Stay Connected
								</h3>
								<p className='text-red-100'>
									Subscribe to receive updates and industry insights
								</p>
							</div>

							<form
								action='#'
								className='flex flex-col lg:flex-row gap-4 items-center justify-center max-w-2xl mx-auto'
							>
								<div className='relative flex-1 w-full lg:w-auto'>
									<div className='absolute left-4 top-1/2 transform -translate-y-1/2 z-10'>
										<Image
											src={'/email.svg'}
											alt='email icon'
											width={20}
											height={20}
											className='opacity-60'
										/>
									</div>
									<input
										type='email'
										placeholder='Enter your email'
										className='w-full pl-12 pr-4 py-4 rounded-xl text-gray-800 bg-white/95 backdrop-blur-sm placeholder:text-gray-500 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent shadow-lg transition-all duration-300 hover:bg-white'
									/>
								</div>
								<button
									type='submit'
									className='group bg-white text-red-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 whitespace-nowrap'
								>
									<span>Subscribe</span>
									<span className='group-hover:translate-x-1 transition-transform duration-300'>
										→
									</span>
								</button>
							</form>
						</div>
					</div>

					{/* Corner decorative elements */}
					<div className='absolute top-6 right-6 w-3 h-3 bg-red-400 rounded-full opacity-60'></div>
					<div className='absolute bottom-6 left-6 w-2 h-2 bg-orange-400 rounded-full opacity-60'></div>
					<div className='absolute top-1/4 right-4 w-4 h-4 bg-amber-400 rotate-45 opacity-40'></div>
					<div className='absolute bottom-1/4 left-4 w-6 h-6 border border-red-400 rounded-full opacity-30'></div>
				</div>

				{/* Bottom decorative elements */}
				<div className='mt-12 text-center'>
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
