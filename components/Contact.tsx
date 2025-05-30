import Image from 'next/image';

export function Contact() {
	return (
		<section>
			<div className='bg-[#dfd7f94f] h-100 w-9/12 mx-auto xl:rounded-tl-[150px] rounded-tr-4xl rounded-b-4xl rounded-tl-4xl pt-10 text-[#5E6282] relative'>
				<h1 className='text-xl text-center font-bold'>
					Let’s build something great together
				</h1>
				<div className='text-center mt-6 font-bold'>
					<p className='mb-2'>📍 Head Office: Tokyo, Japan</p>
					<p className='mb-2'>📞 Phone: [+81-XXX-XXX-XXXX]</p>
					<p className='mb-2'>📧 Email: [info@yourcompany.com]</p>
				</div>
				<input
					type='email'
					placeholder='Your email'
					className='rounded-xl block mx-auto py-3 px-10 text-black bg-white placeholder:text-black mt-10'
				/>
				<Image
					src='/email.svg'
					alt='img'
					width={20}
					height={10}
					className='absolute left-28 bottom-37 focus:border focus:border-solid focus:border-black'
				/>
				<button>Subscribe</button>
			</div>
		</section>
	);
}
