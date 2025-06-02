'use client';

import '@/public/locales/i18n'
import {Menu} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import {useTranslation} from 'react-i18next'

function Header() {
	const { t } = useTranslation();
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const handleVisible = () => {
		setIsVisible(prev => !prev);
	};

	return (
		<div>
			<header className='w-full p-5 mx-auto flex justify-between items-center relative lg:w-full px-5 xl:w-11/12 2xl:w-11/12'>
				<Image src={'/logo.png'} alt='Logo' width={200} height={200} />
				<span onClick={handleVisible} className='lg:hidden'>
					<Menu />
				</span>
				{/* <div
					className={
						isVisible
							? 'block absolute top-15 right-0 w-1/2 h-1/2'
							: 'hidden' + `w-full h-1/2 md:block`
					}
				> */}
				<div
					className={
						isVisible
							? `flex flex-col gap-4 justify-between items-center border border-solid border-black rounded-2xl p-5 absolute top-15 right-0 w-1/2 z-99 bg-white`
							: 'hidden lg:border-none lg:static lg:w-2xl lg:flex justify-between'
					}
				>
					<Link href='/#hero'>{t('header.home')}</Link>
					<Link href='/#aboutUs'>{t('header.aboutUs')}</Link>
					{/* <Link href='#'>{t('header.ourBusinesses')}</Link> */}
					<Link href='/#ourServices'>{t('header.ourServices')}</Link>
					{/* <Link href='#'>{t('header.whyChooseUs')}</Link> */}
					<Link href='/#partnersBrands'>{t('header.partnersBrands')}</Link>
					<Link href='/#contactUs'>{t('header.contactUs')}</Link>
				</div>
				{/* </div> */}
			</header>
		</div>
	);
}

export default Header;
