// 'use client'
//
// import {useTranslations} from 'next-intl'
// import Link from 'next/link'
//
// export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
// 	const t = useTranslations()
//
// 	return (
// 		<main>
// 			<h1>{t('welcome')}</h1>
//
// 			<div style={{ marginTop: '20px' }}>
// 				<Link href={locale === 'en' ? '/ja' : '/en'}>
// 					{t('languageSwitcher')}
// 				</Link>
// 			</div>
// 		</main>
// 	)
// }
