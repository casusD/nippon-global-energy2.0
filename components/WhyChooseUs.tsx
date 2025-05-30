export function WhyChooseUs() {
	return (
		<section className='mt-20 mb-15 lg:px-5 mx-auto w-11/12 h-fit'>
			<div className='mx-auto md:w-10/12 pb-7 sm:bg-[url("/serviceBG.png")] bg-repeat-y bg-[position:95%_40%] lg:bg-none lg:flex lg:w-full gap-5 lg:justify-between xl:w-9/12'>
				<div>
					<h1 className='text-[25px] text-center font-bold mb-5 lg:text-start'>
						Why Choose Us?
					</h1>

					<div className='flex gap-3 box-border h-15 items-center'>
						<svg
							width='35'
							height='35'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle cx='12' cy='10' r='3' stroke='#4F46E5' strokeWidth='2' />
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

						<div>
							<p className='text-[#5E6282] text-[16px] font-bold'>
								Local access
							</p>
							<h2 className='text-[#5E6282] text-[12px]'>
								Tokyo-Based HQ: Access to Japan’s manufacturing network
							</h2>
						</div>
					</div>
					<div className='flex gap-3 box-border h-15 items-center'>
						<svg
							width='35'
							height='35'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
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

						<div>
							<p className='text-[#5E6282] text-[16px] font-bold'>
								Multilingual support
							</p>
							<h2 className='text-[#5E6282] text-[12px]'>
								Bilingual Team: English, Japanese, Russian, and Turkmen support
							</h2>
						</div>
					</div>
					<div className='flex gap-3  box-border h-15 items-center'>
						<svg
							width='35'
							height='35'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
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
						<div>
							<p className='text-[#5E6282] text-[16px] font-bold'>
								Regional Expertise
							</p>
							<h2 className='text-[#5E6282] text-[12px]'>
								Deep operational presence in Central Asia
							</h2>
						</div>
					</div>
					<div className='flex gap-3  box-border h-15 items-center'>
						<svg
							width='35'
							height='35'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
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

						<div>
							<p className='text-[#5E6282] text-[16px] font-bold'>
								Certified supplies
							</p>
							<h2 className='text-[#5E6282] text-[12px]'>
								Trusted Suppliers: OEM-certified products and equipment
							</h2>
						</div>
					</div>
					<div className='flex gap-3  box-border h-15 items-center'>
						<svg
							width='35'
							height='35'
							viewBox='0 0 64 64'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
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
								d='M22 36L29 43L42 30'
								stroke='#FBBF24'
								strokeWidth='4'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>

						<div>
							<p className='text-[#5E6282] text-[16px] font-bold'>
								Turnkey Solutions
							</p>
							<h2 className='text-[#5E6282] text-[12px]'>
								From sourcing to delivery, we manage everything
							</h2>
						</div>
					</div>
				</div>
				<video
					src='/work-with-us.mp4'
					autoPlay
					muted
					loop
					className='w-100 hidden lg:block 2xl:w-130 shadow-[0px_0px_15px] shadow-blue-500/15'
				></video>
			</div>
		</section>
	);
}
