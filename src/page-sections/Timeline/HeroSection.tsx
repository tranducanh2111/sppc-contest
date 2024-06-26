import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface BannerProps {
  imageUrl: string | StaticImageData
}

const HeroSection = ({ imageUrl } : BannerProps) => {
  return (
    <section className='lg:grid lg:grid-cols-2 flex flex-col gap-[1rem] lg:gap-[2rem]'>
        {/* Text Container */}
        <div className='flex flex-col gap-y-[1.5rem] lg:gap-y-[3rem] pl-5 pr-5 lg:pr-0 justify-center'>
            <div className='flex flex-col gap-y-[0.5rem] lg:gap-y-[0.75rem]'>
                <h2 className='xl:text-3xl text-2xl text-primary font-semibold'>2024</h2>
                <h1 className='xl:text-6xl md:text-5xl text-4xl font-bold'>South Pacific Programming Contest</h1>
            </div>
            <h2 className='xl:text-3xl text-2xl font-semibold text-primary'>Timeline</h2>
        </div>
        <Image src={imageUrl} alt='Location Image' className='px-5 lg:px-0'/>
    </section>
  )
}

export default HeroSection