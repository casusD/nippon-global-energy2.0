import Image from 'next/image';

export function Services() {
	return (
		<section
			id={'ourServices'}
			className='relative bg-gradient-to-br from-gray-50 via-white to-orange-50 py-20 px-6 sm:px-12 lg:px-20'
		>
			{/* Background decorative elements */}
			<div className='absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10'></div>
			<div className='absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-rose-400/10 to-amber-400/10 rounded-full blur-3xl -z-10'></div>
			<div className='absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-orange-400/10 to-red-400/10 rounded-full blur-3xl -z-10'></div>

			<div className='max-w-7xl mx-auto relative z-10'>
				{/* Enhanced Header */}
				<div className='text-center mb-16'>
					<div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl mb-6 shadow-lg'>
						<span className='text-2xl text-white'>🛠️</span>
					</div>
					<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-orange-800 bg-clip-text text-transparent mb-6 tracking-tight'>
						Our Services
					</h1>
					<div className='w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded-full'></div>
				</div>

				{/* Services Grid - Fixed Layout */}
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
					{/* Service Card 1 */}
					<div className='group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 text-center h-full'>
						<div className='relative mb-6'>
							<div className='absolute -inset-4 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
							<div className='relative bg-gray-50 rounded-2xl p-4 shadow-lg'>
								<Image
									src={'/Product Sourcing & Trading.webp'}
									alt='image'
									width={160}
									height={160}
									className='rounded-2xl mx-auto object-cover w-40 h-40 group-hover:scale-110 transition-transform duration-500'
								/>
							</div>
						</div>
						<h2 className='text-lg font-bold text-gray-800 group-hover:text-red-700 transition-colors duration-300'>
							Product Sourcing & Trading
						</h2>
					</div>

					{/* Service Card 2 */}
					<div className='group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 text-center h-full'>
						<div className='relative mb-6'>
							<div className='absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
							<div className='relative bg-gray-50 rounded-2xl p-4 shadow-lg'>
								<Image
									src={'/Logistics & Freight Forwarding.png'}
									alt='image'
									width={160}
									height={160}
									className='rounded-2xl mx-auto object-cover w-40 h-40 group-hover:scale-110 transition-transform duration-500'
								/>
							</div>
						</div>
						<h2 className='text-lg font-bold text-gray-800 group-hover:text-amber-700 transition-colors duration-300'>
							Logistics & Freight Forwarding
						</h2>
					</div>

					{/* Service Card 3 */}
					<div className='group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 text-center h-full'>
						<div className='relative mb-6'>
							<div className='absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
							<div className='relative bg-gray-50 rounded-2xl p-4 shadow-lg'>
								<Image
									src={'/The-Tendering-Process.jpg'}
									alt='image'
									width={160}
									height={160}
									className='rounded-2xl mx-auto object-cover w-40 h-40 group-hover:scale-110 transition-transform duration-500'
								/>
							</div>
						</div>
						<h2 className='text-lg font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-300'>
							Tender & Procurement Support
						</h2>
					</div>

					{/* Service Card 4 */}
					<div className='group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 text-center h-full'>
						<div className='relative mb-6'>
							<div className='absolute -inset-4 bg-gradient-to-r from-rose-400/20 to-pink-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
							<div className='relative bg-gray-50 rounded-2xl p-4 shadow-lg'>
								<Image
									src={'/branding.webp'}
									alt='image'
									width={160}
									height={160}
									className='rounded-2xl mx-auto object-cover w-40 h-40 group-hover:scale-110 transition-transform duration-500'
								/>
							</div>
						</div>
						<h2 className='text-lg font-bold text-gray-800 group-hover:text-rose-700 transition-colors duration-300'>
							Custom Product Branding (Private Labeling)
						</h2>
					</div>

					{/* Service Card 5 */}
					<div className='group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 text-center h-full md:col-span-2 xl:col-span-1'>
						<div className='relative mb-6'>
							<div className='absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
							<div className='relative bg-gray-50 rounded-2xl p-4 shadow-lg'>
								<Image
									src={'/Consulting.jpg'}
									alt='image'
									width={160}
									height={160}
									className='rounded-2xl mx-auto object-cover w-40 h-40 group-hover:scale-110 transition-transform duration-500'
								/>
							</div>
						</div>
						<h2 className='text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300'>
							Consulting for Japanese Companies entering Central Asia
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
}
