import React from 'react'
import * as Slide from 'swiper/react'
import Banner from '@/components/Banner'
import { StaticImageData } from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'

interface SwiperProps {
    imageList: string[] | StaticImageData[]
}
const NavigateButton = ({imageList,isHover}:{imageList:any,isHover: number}) => {
    const swiper = Slide.useSwiper()
    return (
        <div className="absolute bottom-0 left-[20%] sm:left-[50%] sm:translate-x-[-50%] z-[99] text-red">
        {imageList.map((img: any,index:number) => (
            <div
            onClick={() => swiper.slideTo(index)}
            key={index}
            className={`w-[48px] h-[6px] px-[24px] py-[3px] ${
                isHover == index ? 'bg-[#FFFFFF]' : 'bg-grey opacity-[0.5]'
            } rounded-[2px] inline-block mx-1`}></div>
        ))}
        </div>
    )
}

const BannerSection: React.FC<SwiperProps> = ({ imageList }) => {
    const { Swiper, SwiperSlide } = Slide
    const [isHover, setIsHover] = React.useState(0)
    return (
        <div className="relative">
        <Swiper
            className="my-swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            loop={true}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}>
            {imageList.map((imageUrl, index) => (
            <SwiperSlide key={index}>
                {({ isActive }) => {
                isActive && setIsHover(index)
                return <Banner imageUrl={imageUrl} />
                }}
            </SwiperSlide>
            ))}
            <NavigateButton imageList={imageList} isHover={isHover} />
        </Swiper>
        </div>
    )
}

export default BannerSection