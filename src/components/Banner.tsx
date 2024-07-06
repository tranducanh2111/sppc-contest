import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'

interface BannerProps {
  imageUrl: string | StaticImageData
}

const Banner = ({ imageUrl }:BannerProps) => {
  return (
    <div className="relative w-full">
      <Image
        src={imageUrl}
        alt="Banner Image"
        className='max-h-[480px] object-cover'
        width={1920}
        height={423}
      />
    </div>
  )
}

export default Banner