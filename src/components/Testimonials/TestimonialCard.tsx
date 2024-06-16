/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import { TestimonialProps } from './TestimonialProps'

// Single Testimonial Card
const TestimonialCard: React.FC<TestimonialProps> = ({ name, title, description, image }) => {
  return (
    <div className="flex p-[8px 16px] flex-col items-start gap-[4px]">
      <div className="w-[268px] self-stretch justify-start items-center gap-3 inline-flex">
        <Image
          className="w-[46px] h-[46px] bg-[#DEDEDE] bg-cover bg-center bg-no-repeat rounded-full"
          src={image}
          alt="card"
        />
        <div className="flex-col justify-center items-start inline-flex">
          <div className="text-[#000000D9] text-[16px] font-[700] font-Roboto leading-[24px]">
            {name}
          </div>
          <div className="text-[#000000D9] text-[12px] font-[400] font-Roboto leading-[20px]">
            {title}:
          </div>
        </div>
      </div>
      <div className="text-[#000000D9] text-[14px] font-[400] font-Roboto leading-[22px]">
        "{description}"
      </div>
    </div>
  )
}

export default TestimonialCard;
