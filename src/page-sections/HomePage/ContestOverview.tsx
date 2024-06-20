import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image, {StaticImageData} from 'next/image';
import Button from '@/components/Button';
import PrimaryCard from '@/components/PrimaryCard';
import LocationImage from '../../../public/homepage-venue.png';
import TimelineImage from '../../../public/homepage-timeline.png';
import CostImage from '../../../public/homepage-cost.png';
import GroupOfPeopleImage from '../../../public/group_of_people.png';
import CardData from '@/sample_data/contestCard.json'

// Define the type for the card names
type CardName = 'Location' | 'Timeline' | 'Cost';

const imageMap: Record<CardName, StaticImageData> = {
    Location: LocationImage,
    Timeline: TimelineImage,
    Cost: CostImage
};

const ContestOverview = () => {
    return (
        <section className='max-w-[1170px] mx-auto mt-[80px] flex flex-col gap-[3rem]'>
            {/* Header */}
            <div className='block lg:grid lg:grid-cols-3 gap-x-[3rem] px-5'>
                {/* Header Heading */}
                <div className='col-span-1 mb-[0.75rem] lg:mb-0'>
                    <p className='text-body text-primary font-semibold'>With SPPC</p>
                    <h3 className='text-h3'>Fostering talent, creativity, and collaboration in programming  contests.</h3>
                </div>
                {/* Main Card */}
                <div className='col-span-2 md:aspect-[680/195] lg:aspect-[603.4/195] md:flex md:justify-between shadow-lg rounded-[12px]'>
                    <figure className='md:aspect-[338.2/194.8] lg:aspect-[271.2/194.8] h-full'>
                        <Image src={GroupOfPeopleImage} alt={"Group of People"} className='object-cover h-full rounded-l-[12px] rounded-r-[12px] md:rounded-r-none' />
                    </figure>
                    <article className='flex flex-wrap flex-col items-center my-auto gap-y-[2rem] py-[1.5rem] md:py-0'>
                        <div className='w-[80%] flex flex-col gap-y-[12px]'>
                            <h4 className='text-h4 text-center'>Let’s  explore your talent!</h4>
                            <p className='text-body text-center'>Take the first step towards coding greatness and sign up now!</p>
                        </div>
                        <div className='flex flex-wrap gap-x-[3rem]'>
                            <Button title='Sign Up' className='bg-secondary text-white border border-solid border-primary'/>
                            <Button title='Form a team' className='border-primary border border-solid text-primary' />
                        </div>
                    </article>
                </div>
            </div>
            {/* Card Container */}
            <div className="max-w-[1170px] w-full h-[400px] md:h-[420px] overflow-x-auto hide-scrollbar md:px-5">
                <Swiper
                    className="md:w-full"
                    slidesPerView="auto"
                    loop={true}
                    breakpoints={{
                        1024: { centeredSlides: false, initialSlide: 1, spaceBetween: 64},
                        768: { centeredSlides: false, initialSlide: 1, spaceBetween: 24},
                        0: { centeredSlides: true, initialSlide: 2, spaceBetween: 16 },
                    }}
                >
                    {CardData.map((card, index) => (
                        <SwiperSlide key={index} className="aspect-[341/424] justify-center items-start" style={{ maxWidth: '330px', width: '80vw', display: "flex"}}>
                            <PrimaryCard
                                key={index}
                                name={card.name}
                                descriptions={card.descriptions}
                                testURL={card.testURL}
                                buttonText={card.buttonText}
                                imageURL={imageMap[card.name as CardName]}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
        
    );
};

export default ContestOverview;