import {Businesses} from '@/components/Businesses'
import {Contact} from '@/components/Contact'
import Header from '@/components/Header'
import {Hero} from '@/components/Hero'
import {Partners} from '@/components/Partners'
import {Services} from '@/components/Services'
import {WhyChooseUs} from '@/components/WhyChooseUs'
import {Footer} from '@/components/Footer'
import Decore from '@/public/Decore.png'

export default function Home() {
	return (
		<div className='container mx-auto '>
			<div className={`bg-[length:350px_400px] bg-[url(${Decore})] bg-no-repeat bg-top-right 2xl:bg-[length:700px_550px] md:bg-[length:500px_500px]`}>
				<Header />
				<Hero />
			</div>
			<Services />
			<Businesses />
			<WhyChooseUs />
			<Partners />
			<Contact />
			<Footer />
		</div>
	);
}
