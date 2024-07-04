import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import TestimonialCard from '@/components/Testimonials/TestimonialCard'
import { items } from '@/components/Testimonials/TestimonialItems'

const EligibilitySection: React.FC = () => {
  return (
    <div className="relative max-w-screen overflow-hidden h-[422px]">
        <div className="w-full h-[290px] bg-primary absolute " />

        <div className="max-w-[1160px] h-[302px] flex flex-col mx-auto mt-[60px] mb-10 px-5">
            <div className="max-w-[1160px] items-center w-full h-[302px] mx-auto flex flex-col inline-flex absolute top-[60px] xl:px-5">
                <div className="w-full">
                    <div className="w-full sm:w-[405px] h-[86px] flex flex-col items-start gap-[4px] inline-flex ">
                    <h2 className="text-[#FFFFFF] text-h2">Eligibility</h2>
                    <p className="text-[#FFFFFF] text-body tracking-[0.32px]">
                        Official teams must only have three students from the same institution. Most notably, each student must:
                    </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='mx-5 sm:mx-0'>
            <Swiper
                className="justify-start items-start gap-6 inline-flex bottom-[200px] h-[200px]"
                spaceBetween={24}
                slidesPerView="auto"
            >
            {items.map((item, index) => (
                <SwiperSlide
                    className="px-4 py-2 bg-[#FFFFFF] rounded-[12px] shadow-lg flex-col justify-start items-start gap-1 inline-flex"
                    key={index}
                    style={{ maxWidth: '300px', width: '100%', height: '176px' }}
                >
                    <TestimonialCard {...item} />
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </div>
  )
}

export default EligibilitySection