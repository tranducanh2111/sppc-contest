import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
interface BannerProps {
  imageUrl: string | StaticImageData
}

const Banner = ({ imageUrl }:BannerProps) => {
  return (
    <div className="relative w-full h-[423px]">
      <Image
        src={imageUrl}
        alt="Banner Image"
        fill={true}
      />
    </div>
  )
}

export default Banner
