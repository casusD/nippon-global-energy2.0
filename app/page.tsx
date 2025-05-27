import Header from '@/components/Header';
import { Hero } from '@/components/Hero';

export default function Home() {
	return (
		<div className='container p-5 mx-auto'>
			<Header />
			<Hero />
		</div>
	);
}
