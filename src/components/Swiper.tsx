import React from 'react'
import * as Slide from 'swiper/react'
import Banner from './Banner'
import { StaticImageData } from 'next/image'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules'

interface SwiperProps {
  imageList: string[] | StaticImageData[]
}
const Swiper: React.FC<SwiperProps> = ({ imageList }) => {
  const { Swiper, SwiperSlide } = Slide
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      {
        imageList.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <Banner imageUrl={imageUrl} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Swiper
