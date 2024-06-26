import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import PrimaryCard from '@/components/PrimaryCard';
import { StaticImageData } from 'next/image';

interface Card {
  name: string;
  descriptions: string;
  testURL: string;
  image: StaticImageData;
}

interface EventDetailProps {
  cardData: Card[];
}

const EventDetail: React.FC<EventDetailProps> = ({ cardData }) => {
  return (
    <section className='max-w-[1170px] pb-[0.75rem] mx-auto mt-[80px] md:gap-[1.5rem] gap-[2rem] flex flex-col items-center lg:grid lg:grid-cols-3'>
            {/* Heading Container */}
            <div className='w-full flex flex-col gap-[0.75rem] lg:col-span-1 px-5'>
                <p className='text-body text-primary font-semibold'>You may want to know</p>
                <h2 className="text-h2">Event Details</h2>
            </div>
            <div className="lg:col-span-2 max-w-[1170px] w-full h-[410px] md:h-[420px] overflow-x-auto hide-scrollbar sm:px-5">
                <Swiper
                    modules={[Autoplay]}
                    className="md:w-full"
                    slidesPerView="auto"
                    breakpoints={{
                        1024: { spaceBetween: 64},
                        640: { centeredSlides: false, initialSlide: 0, spaceBetween: 24},
                        0: { centeredSlides: true, initialSlide: 1, spaceBetween: 16 },
                    }}
                    style={{paddingLeft: 6, paddingRight: 6}}
                >
                    {cardData.map((card, index) => (
                        <SwiperSlide key={index} className="aspect-[341/424] justify-center items-start" style={{ maxWidth: '330px', width: '80vw', display: "flex"}}>
                            <PrimaryCard
                                key={index}
                                name={card.name}
                                descriptions={card.descriptions}
                                testURL={card.testURL}
                                buttonText={"Explore"}
                                imageURL={card.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
  );
};

export default EventDetail;
