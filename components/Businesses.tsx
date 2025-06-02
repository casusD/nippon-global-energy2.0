import FlipStyledCard from '@/components/FlipCard'

export function Businesses() {
	return (
		<section className={`mt-15 mb-15 lg:px-5 mx-auto w-11/12 h-fit lg:bg-[url('/businessesB.svg')] bg-[position:97.7%_90%] xl:bg-[position:89%_87%] 2xl:bg-[position:82.5%_87%] xl:bg-[length:80px_200px] bg-no-repeat`}>
			<div className=''>
				<h1 className='text-[25px] text-center font-bold p-5 mb-10'>
					Our Businesses
				</h1>


				<div className='flex justify-around gap-2 xl:w-4xl mx-auto'>
					<FlipStyledCard image={'/motor.png'} textFront={'Automotive Division'} textBack={'We specialize in the supply and export of:\n' + '\n' +
						' • Engine Oil (Synthetic, Semi-Synthetic, Mineral – passenger and commercial use)\n' + '\n' +
						' • Tires (TBR, PCR, OTR – All major brands & private labels)\n' + '\n' +
						' • Car Parts (OEM & aftermarket parts for Japanese, European, and Korean vehicles)'} />

					<FlipStyledCard image={'/Solutions.jpg'} textFront={'Logistics & Freight Solutions'} textBack={'We operate an integrated logistics system that ensures reliable delivery from Japan to Central Asia.\n' + '\n' +
						'• Multimodal Transport: Sea + Land freight to landlocked regions\n' + '\n' +
						'• Customs Clearance Assistance\n' + '\n' +
						"• Warehousing & Consolidation in Japan\n" + '\n' +
						'• End-to-End Supply Chain Management\n' + '\n' +

						'Whether you’re moving one container or entire projects – we make it efficient, secure, and cost-effective.'} />

					<FlipStyledCard image={'/Gas Division.webp'} textFront={'Oil & Gas Division'} textBack={'We serve major oil and gas players in Turkmenistan and Central Asia with:\n' + '\n' +
						' • Oilfield Equipment: Drilling rigs, pumps, valves, and tools\n' + '\n' +
						' • Pipes & Tubular Products: API 5L, OCTG, seamless and welded\n' + '\n' +
						' • Construction Equipment: Cranes, compressors, graders, and support machinery\n' + '\n' +
						' • Procurement & Tender Management: We handle government tenders and EPC project sourcing\n' +
						'\n' + 'We have built strong local partnerships to support infrastructure and energy development projects across the region.'} />
				</div>
			</div>
		</section>
	);
}
