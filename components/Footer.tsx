import Image from 'next/image';

export function Footer() {
	return (
		<footer className='relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden'>
			{/* Background decorative elements */}
			<div className='absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/10 to-amber-900/20'></div>
			<div className='absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-600/10 to-orange-600/10 rounded-full blur-3xl'></div>
			<div className='absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-orange-600/10 to-red-600/10 rounded-full blur-3xl'></div>

			{/* Additional geometric decorations */}
			<div className='absolute top-10 right-20 opacity-20'>
				<div className='w-16 h-16 border border-red-400 rounded-full'></div>
				<div className='absolute top-4 left-4 w-8 h-8 bg-orange-400 rounded-full'></div>
			</div>
			<div className='absolute bottom-10 left-20 opacity-20'>
				<div className='w-12 h-12 border border-orange-400 rotate-45'></div>
				<div className='absolute top-2 left-2 w-8 h-8 border border-red-400 rotate-45'></div>
			</div>

			<div className='relative z-10 px-6 sm:px-12 lg:px-20 py-16'>
				<div className='max-w-7xl mx-auto'>
					{/* Main Footer Content */}
					<div className='grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-12'>
						{/* Logo and Social Media Section */}
						<div className='lg:col-span-2 space-y-6'>
							<div className='group'>
								<div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10'>
									<Image
										alt='logo'
										src={'/whiteLogo.png'}
										width={150}
										height={100}
										className='group-hover:scale-105 transition-transform duration-300'
									/>
									<div className='mt-6'>
										<p className='text-gray-300 text-sm leading-relaxed'>
											Leading global energy trading company connecting Japan
											with the world through innovative partnerships and
											sustainable solutions.
										</p>
									</div>
								</div>
							</div>

							{/* Social Media */}
							<div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10'>
								<h3 className='text-lg font-semibold mb-4 text-white'>
									Follow Us
								</h3>
								<div className='flex space-x-4'>
									<div className='group relative'>
										<div className='absolute -inset-2 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
										<div className='relative bg-white/20 backdrop-blur-sm rounded-xl p-3 hover:bg-white/30 transition-all duration-300 group-hover:scale-110'>
											<Image
												alt='facebook'
												src={'/facebook.svg'}
												width={24}
												height={24}
											/>
										</div>
									</div>
									<div className='group relative'>
										<div className='absolute -inset-2 bg-gradient-to-r from-orange-600/20 to-amber-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
										<div className='relative bg-white/20 backdrop-blur-sm rounded-xl p-3 hover:bg-white/30 transition-all duration-300 group-hover:scale-110'>
											<Image
												alt='instagram'
												src={'/insta.svg'}
												width={24}
												height={24}
											/>
										</div>
									</div>
									<div className='group relative'>
										<div className='absolute -inset-2 bg-gradient-to-r from-amber-600/20 to-red-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
										<div className='relative bg-white/20 backdrop-blur-sm rounded-xl p-3 hover:bg-white/30 transition-all duration-300 group-hover:scale-110'>
											<Image
												alt='twitter'
												src={'/twitter.svg'}
												width={24}
												height={24}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Company Section */}
						<div className='space-y-4'>
							<div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300'>
								<h2 className='text-xl font-bold mb-6 text-white flex items-center gap-2'>
									<span className='w-2 h-2 bg-red-400 rounded-full'></span>
									Company
								</h2>
								<div className='space-y-3'>
									<a
										href='#'
										className='group flex items-center text-gray-300 hover:text-white transition-colors duration-300'
									>
										<span className='w-1 h-1 bg-orange-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
										About
									</a>
									<a
										href='#'
										className='group flex items-center text-gray-300 hover:text-white transition-colors duration-300'
									>
										<span className='w-1 h-1 bg-orange-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
										Careers
									</a>
									<a
										href='#'
										className='group flex items-center text-gray-300 hover:text-white transition-colors duration-300'
									>
										<span className='w-1 h-1 bg-orange-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
										Mobile
									</a>
								</div>
							</div>
						</div>

						{/* Contact Section */}
						<div className='space-y-4'>
							<div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300'>
								<h2 className='text-xl font-bold mb-6 text-white flex items-center gap-2'>
									<span className='w-2 h-2 bg-orange-400 rounded-full'></span>
									Contact
								</h2>
								<div className='space-y-3'>
									<a
										href='#'
										className='group flex items-center text-gray-300 hover:text-white transition-colors duration-300'
									>
										<span className='w-1 h-1 bg-amber-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
										Help/FAQ
									</a>
									<a
										href='#'
										className='group flex items-center text-gray-300 hover:text-white transition-colors duration-300'
									>
										<span className='w-1 h-1 bg-amber-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
										Press
									</a>
									<a
										href='#'
										className='group flex items-center text-gray-300 hover:text-white transition-colors duration-300'
									>
										<span className='w-1 h-1 bg-amber-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
										Affiliates
									</a>
								</div>
							</div>
						</div>

						{/* More Section */}
						<div className='space-y-4'>
							<div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300'>
								<h2 className='text-xl font-bold mb-6 text-white flex items-center gap-2'>
									<span className='w-2 h-2 bg-amber-400 rounded-full'></span>
									More
								</h2>
								<div className='space-y-3'>
									<a
										href='#'
										className='group flex items-center text-gray-300 hover:text-white transition-colors duration-300'
									>
										<span className='w-1 h-1 bg-red-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
										Services
									</a>
									<a
										href='#'
										className='group flex items-center text-gray-300 hover:text-white transition-colors duration-300'
									>
										<span className='w-1 h-1 bg-red-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
										Partners
									</a>
									<a
										href='#'
										className='group flex items-center text-gray-300 hover:text-white transition-colors duration-300'
									>
										<span className='w-1 h-1 bg-red-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
										Support
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom Section - Copyright */}
					<div className='border-t border-white/20 pt-8'>
						<div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10'>
							<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
								<div className='text-center md:text-left'>
									<p className='text-gray-300 text-sm'>
										© 2024 Nippon Global Energy. All rights reserved.
									</p>
								</div>
								<div className='flex items-center space-x-4'>
									<div className='w-2 h-2 bg-red-400 rounded-full animate-pulse'></div>
									<div className='w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-100'></div>
									<div className='w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-200'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom decorative wave */}
			<div className='absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500'></div>
		</footer>
	);
}
