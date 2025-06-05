'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Header() {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const handleVisible = () => {
		setIsVisible(prev => !prev);
	};

	return (
		<div className='relative'>
			{/* Background with gradient */}
			<div className='absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white'></div>
			<div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/30'></div>

			<header className='relative z-10 w-full max-w-7xl mx-auto px-6 py-4 sm:px-12 lg:px-20'>
				<div className='flex justify-between items-center'>
					{/* Logo */}
					<div className='relative group'>
						<div className='absolute -inset-2 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
						<div className='relative bg-white/80 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-white/20'>
							<Image
								src={'/logo.png'}
								alt='Logo'
								width={180}
								height={180}
								className='transition-transform duration-300 group-hover:scale-105'
							/>
						</div>
					</div>

					{/* Mobile menu button */}
					<div className='lg:hidden'>
						<button
							onClick={handleVisible}
							className='relative p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 hover:bg-red-50 transition-all duration-300 group'
						>
							<div className='relative z-10'>
								{isVisible ? (
									<X className='w-6 h-6 text-red-600 transition-transform duration-300 group-hover:rotate-90' />
								) : (
									<Menu className='w-6 h-6 text-red-600 transition-transform duration-300 group-hover:scale-110' />
								)}
							</div>
						</button>
					</div>

					{/* Desktop Navigation */}
					<nav className='hidden lg:flex items-center space-x-1'>
						<div className='bg-white/60 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/20'>
							<div className='flex items-center space-x-1'>
								{[
									{ href: '/#hero', text: 'Home' },
									{ href: '/#aboutUs', text: 'About Us' },
									{ href: '/#ourServices', text: 'Our Services' },
									{ href: '/#partnersBrands', text: 'Partners & Brands' },
									{ href: '/#contactUs', text: 'Contact Us' },
								].map((item, index) => (
									<Link
										key={index}
										href={item.href}
										className='relative px-4 py-2 text-gray-700 font-medium rounded-xl hover:text-red-600 transition-all duration-300 group'
									>
										<div className='absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
										<div className='absolute inset-0 bg-red-500/5 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300'></div>
										<span className='relative z-10'>{item.text}</span>
									</Link>
								))}
							</div>
						</div>
					</nav>
				</div>

				{/* Mobile Navigation Menu */}
				<div
					className={`lg:hidden transition-all duration-500 ease-in-out ${
						isVisible
							? 'opacity-100 translate-y-0 pointer-events-auto'
							: 'opacity-0 -translate-y-4 pointer-events-none'
					}`}
				>
					<div className='absolute top-full left-6 right-6 mt-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-50'>
						{/* Mobile menu background gradient */}
						<div className='absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/50'></div>

						<div className='relative z-10 py-4'>
							{[
								{ href: '/#hero', text: 'Home' },
								{ href: '/#aboutUs', text: 'About Us' },
								{ href: '/#ourServices', text: 'Our Services' },
								{ href: '/#partnersBrands', text: 'Partners & Brands' },
								{ href: '/#contactUs', text: 'Contact Us' },
							].map((item, index) => (
								<Link
									key={index}
									href={item.href}
									onClick={() => setIsVisible(false)}
									className='block px-6 py-3 text-gray-700 font-medium hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all duration-300 border-b border-gray-100 last:border-b-0'
								>
									<div className='flex items-center space-x-3'>
										<div className='w-2 h-2 bg-red-500 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
										<span>{item.text}</span>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;
