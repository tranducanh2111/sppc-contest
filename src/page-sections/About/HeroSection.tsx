import React from 'react'
import Image, { StaticImageData } from 'next/image'

// Resource


interface BannerProps {
  imageUrl: string | StaticImageData
}

const HeroSection = ({ imageUrl } : BannerProps) => {
    return (
        <section className='flex flex-col lg:grid lg:grid-cols-2 gap-[3rem]'>
            <div className='flex flex-col gap-[1.5rem]'>
                <div className="flex flex-col gap-[0.75rem] justify-center">
                    <p className='text-body text-primary font-bold'>Hello, we are SPPC</p>
                    <h1 className='sm:text-h1 text-5xl font-bold uppercase'>Discover our story</h1>
                </div>
                <p className='text-body'>Welcome to our digital hub, where every click unveils a chapter of our compelling journey. From humble beginnings to achievements, explore how our vision has shaped the landscape of student programmers. Join us to discover the heart and soul behind our contest, and the countless moments that define who we are today.</p>
            </div>
            <Image src={imageUrl} alt='Hero Image' className='w-full h-full object-cover'/>
        </section>
    )
}

export default HeroSection