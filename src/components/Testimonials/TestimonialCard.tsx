/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import { TestimonialProps } from './TestimonialProps'

// Single Testimonial Card
const TestimonialCard: React.FC<TestimonialProps> = ({ name, description, image }) => {
  return (
    <div className="flex p-[8px 16px] flex-col items-start gap-[0.75rem]">
      <div className="w-[268px] self-stretch justify-start items-center gap-3 inline-flex">
        <Image
          className="w-[46px] h-[46px] bg-[#DEDEDE] bg-cover bg-center bg-no-repeat rounded-full"
          src={image}
          alt="card"
        />
        <div className="flex-col justify-center items-start inline-flex">
          <h4 className="text-primary text-h4 font-[700] font-Roboto leading-[24px]">
            {name}
          </h4>
        </div>
      </div>
      <div className="text-[#000000D9] text-[14px] font-[400] font-Roboto leading-[22px]">
        "{description}"
      </div>
    </div>
  )
}

export default TestimonialCard;
