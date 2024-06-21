import React from 'react'
import Image, { StaticImageData } from 'next/image'
import LocationIcon from '../../../public/location.svg'
import CalendarIcon from '../../../public/calendar.svg'
import Button from '@/components/Button'

interface BannerProps {
  imageUrl: string | StaticImageData
}

const Banner = ({ imageUrl }:BannerProps) => {
  return (
    <section className='flex flex-col md:gap-y-0 gap-y-[2rem]'>
      <section className="relative w-full md:grid md:grid-cols-2">
        {/* Main Content Container */}
        <div className='flex flex-col gap-[1rem] justify-center'>
            <h1 className='xl:text-h1 text-6xl font-bold uppercase'>Let's go! <span className='text-primary'>SPPC</span> is waiting for you</h1>
            <p className='lg:text-sub-heading text-grey text-body'>Join the coding frenzy and showcase your skills at SPPC - where innovation meets competition!</p>
        </div>
        <div className="md:block hidden">
            <Image
                src={imageUrl}
                alt="Banner Image"
                fill={false}
            />
        </div>
      </section>
      {/* Pill Shape Card */}
      <section className='shadow-2xl rounded-2xl md:px-[3rem] px-[1.25rem] md:py-[1.5rem] py-[1rem] lg:w-fit w-full lg:mx-0 mx-auto flex flex-wrap gap-x-[3rem] gap-y-[1rem]'>
        {/* Item 1 */}
        <div className='flex flex-wrap flex-col gap-[0.75rem] min-w-fit flex-1'>
          <p className='text-body text-grey font-semibold'>Destination</p>
          <div className='flex flex-wrap items-center gap-[0.5rem]'>
            <Image
              src={LocationIcon}
              alt="Location Icon"
            />
            <p className='text-body font-bold'>Sydney, NSW, Australia</p>
          </div>
        </div>
        {/* Line */}
        <div className="sm:block hidden border-l-2 border-gray-300"></div>
        {/* Item 2 */}
        <div className='flex flex-wrap flex-col gap-[0.75rem] min-w-fit flex-1'>
          <p className='text-body text-grey font-semibold'>Date</p>
          <div className='inline-flex items-center gap-[0.5rem]'>
            <Image
              src={CalendarIcon}
              alt="Location Icon"
            />
            <p className='text-body font-bold'>17 July 2024</p>
          </div>
        </div>
        {/* Button */}
        <Button title='Register' className='mx-auto text-white bg-primary lg:h-[4rem] h-[2.75rem] lg:w-[10rem] w-full'/>
      </section>
    </section>
  )
}

export default Banner
