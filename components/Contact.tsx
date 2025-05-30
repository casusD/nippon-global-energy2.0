import Image from 'next/image';

export function Contact() {
	return (
		<section>
			<div className='bg-[url("/contactB.svg")] bg-no-repeat bg-contain bg-[position:0%_100%] 2xl:bg-[position:100%_100%] bg-[#dfd7f94f] h-90 w-9/12 mx-auto lg:rounded-tl-[150px] rounded-tr-4xl rounded-b-4xl rounded-tl-4xl pt-10 text-[#5E6282] relative'>
				<h1 className='text-xl text-center font-bold lg:text-[26px]'>
					Let’s build something great together
				</h1>
				<div className='text-center mt-6 font-bold'>
					<p className='mb-3 lg:text-[18px]'>📍 Head Office: Tokyo, Japan</p>
					<p className='mb-3 lg:text-[18px]'>📞 Phone: [+81-XXX-XXX-XXXX]</p>
					<p className='mb-3 lg:text-[18px]'>📧 Email: [info@yourcompany.com]</p>
				</div>
				<form action='#' className='lg:flex justify-around items-center lg:w-7/12 mx-auto'>
					<input
						type='email'
						placeholder='Your email'
						className='rounded-xl block mx-auto py-3 px-10 xl:w-8/12
						 text-black bg-white placeholder:text-black mt-10'
					/>
					<Image
						src='/email.svg'
						alt='img'
						width={20}
						height={10}
						className='absolute left-25 bottom-25 md:left-37 lg:left-44 lg:bottom-[71px] xl:left-54 focus:border focus:border-solid focus:border-black 2xl:left-66'
					/>
					<button className='block mt-5 lg:mt-10 mx-auto bg-gradient-to-r xl:text-[18px] from-[#FF946D] to-[#FF7D68] text-white h-12 py-3 px-10 rounded-lg'>Subscribe</button>
				</form>
			</div>
		</section>
	);
}
