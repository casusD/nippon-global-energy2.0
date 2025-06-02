import Image from 'next/image'


export function Footer() {
    return (
        <section className='mt-15 px-10'>
            <div className={'flex items-center justify-between mx-auto lg:w-11/12'}>
                <div className={'mt-13 xl:mt-0'}>
                    <Image alt="loc" src={'/logo.png'} width={150} height={100} />
                    <div className={'flex mt-3 xl:hidden w-[150px]'}>
                        <Image alt="loc" src={'/facebook.svg'} width={50} height={50} />
                        <Image alt="loc" src={'/insta.svg'} width={50} height={50} />
                        <Image alt="loc" src={'/twitter.svg'} width={50} height={50} />
                    </div>
                </div>
                <div className={'mt-10 lg:w-[150px]'}>
                    <h1 className={'font-bold lg:text-[20px]'}>Company</h1>
                    <p className={'lg:text-[18px]'}>About</p>
                    <p className={'lg:text-[18px]'}>Careers</p>
                    <p className={'lg:text-[18px]'}>Mobile</p>
                </div>
                <div className={'mt-10 lg:w-[150px]'}>
                    <h1 className={'font-bold lg:text-[20px]'}>Contact</h1>
                    <p className={'lg:text-[18px]'}>Help/FAQ</p>
                    <p className={'lg:text-[18px]'}>Press</p>
                    <p className={'lg:text-[18px]'}>Affilates</p>
                </div>
                <div className={'mt-10 lg:w-[150px]'}>
                    <h1 className={'font-bold lg:text-[20px]'}>More</h1>
                    <p className={'lg:text-[18px]'}>Airlinefees</p>
                    <p className={'lg:text-[18px]'}>Airline</p>
                    <p className={'lg:text-[18px]'}>Low fare tips</p>
                </div>
                <div className={'hidden xl:flex w-[150px]'}>
                    <Image alt="loc" src={'/facebook.svg'} width={50} height={50}
                    />
                    <Image alt="loc" src={'/insta.svg'} width={50} height={50}
                    />
                    <Image alt="loc" src={'/twitter.svg'} width={50} height={50}
                    />
                </div>
            </div>
            <div className={'text-center my-10 lg:text-[16px]'}>All rights reserved@jadoo.co</div>
        </section>
    )
}