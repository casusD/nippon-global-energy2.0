// components/AboutUs.tsx
import React from 'react'

const AboutUs = () => {
	return (
		<section className="bg-white py-20 px-6 sm:px-12 lg:px-20">
			<div className="max-w-6xl mx-auto">
				{/* Заголовок секции */}
				<h2 className="text-center text-4xl sm:text-2xl font-extrabold text-gray-900 mb-16 tracking-tight">
					About Us: The Spirit Behind Our Company
				</h2>
				
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-16">
					{/* Who We Are */}
					<div className="flex flex-col">
						<div className="flex items-center mb-6">
							<div className="text-3xl mr-3">📌</div>
							<h3 className="text-2xl font-semibold text-gray-800">Who We Are</h3>
						</div>
						<p className="text-gray-700 leading-relaxed mb-4">
							Founded in the heart of Tokyo,{" "}
							<span className="font-semibold text-gray-900">[Your Company Name]</span> is a new-age trading company deeply rooted in traditional Japanese values:
						</p>
						<p className="text-gray-800 font-semibold mb-6">
							Sincerity (Makoto), Harmony (Wa), Discipline (Shitsuke), and Kaizen (Continuous Improvement).
						</p>
						<p className="text-gray-700 leading-relaxed">
							Our mission is to connect high-quality Japanese products and services with the growing demands of global markets, especially in Central Asia and the Caspian Region.
						</p>
					</div>
					
					{/* Our Vision */}
					<div className="flex flex-col border-t md:border-t-0 md:border-l border-gray-200 pt-12 md:pt-0 md:pl-12">
						<div className="flex items-center mb-6">
							<div className="text-3xl mr-3">🌏</div>
							<h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
						</div>
						<p className="text-gray-700 leading-relaxed">
							To be a reliable and innovative bridge between Japan and the world, facilitating commerce that creates mutual value and long-term prosperity.
						</p>
					</div>
					
					{/* Our Values */}
					<div className="flex flex-col border-t md:border-t-0 md:border-l border-gray-200 pt-12 md:pt-0 md:pl-12">
						<div className="flex items-center mb-6">
							<div className="text-3xl mr-3">🎌</div>
							<h3 className="text-2xl font-semibold text-gray-800">Our Values</h3>
						</div>
						<ul className="list-disc list-inside space-y-4 text-gray-700">
							<li>
								<strong>Integrity:</strong> We do what is right, not what is easy.
							</li>
							<li>
								<strong>Excellence:</strong> Every product and service reflects the precision and quality of Japanese standards.
							</li>
							<li>
								<strong>Respect:</strong> We believe in building long-term, respectful relationships with partners.
							</li>
							<li>
								<strong>Speed with Precision:</strong> Fast delivery without compromising quality or accuracy.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
