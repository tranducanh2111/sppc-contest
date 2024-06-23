import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import {StaticImageData} from 'next/image';
import PrimaryCard from '@/components/PrimaryCard';
import PastChampData from '@/sample_data/PastChamp.json';
import Champ1Image from '../../../public/champ1.jpg';
import Champ2Image from '../../../public/champ2.jpg';
import Champ3Image from '../../../public/champ3.jpg';
import Champ4Image from '../../../public/champ4.jpg';
import Champ5Image from '../../../public/champ5.jpg';

// Define the type for the card names
type CardName = '2023' | '2022' | '2021' | '2020' | '2019';

const imageMap: Record<CardName, StaticImageData> = {
    2023: Champ1Image,
    2022: Champ2Image,
    2021: Champ3Image,
    2020: Champ5Image,
    2019: Champ4Image
};

const PastChampion = () => {
    return (
        <section className='max-w-[1170px] pb-[0.75rem] mx-auto mt-[80px] md:gap-[1.5rem] gap-[2rem] flex flex-col items-center lg:grid lg:grid-cols-3'>
            {/* Heading Container */}
            <div className='flex flex-col gap-[1.5rem] md:gap-[2rem] lg:col-span-1 px-5'>
                <div className='flex flex-col gap-[0.75rem]'>
                    <p className='text-body text-primary font-semibold'>SPPC Elite Champions</p>
                    <h3 className="text-h3">Honoring SPPC Past Contest Victors with Inspiring Success Stories</h3>
                </div>
                <p className='text-body'>Step into the captivating world of our past contest champions, where determination, skill, and passion converge to create inspiring success stories waiting to be explored</p>
            </div>
            <div className="lg:col-span-2 max-w-[1170px] w-full h-[410px] md:h-[420px] overflow-x-auto hide-scrollbar sm:px-5">
                <Swiper
                    modules={[Autoplay]}
                    className="md:w-full"
                    slidesPerView="auto"
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false
                    }}
                    speed={2500}
                    breakpoints={{
                        1024: { centeredSlides: false, initialSlide: 0, spaceBetween: 64},
                        768: { centeredSlides: false, initialSlide: 0, spaceBetween: 24},
                        0: { centeredSlides: true, initialSlide: 1, spaceBetween: 16 },
                    }}
                    style={{paddingLeft: 6, paddingRight: 6}}
                >
                    {PastChampData.map((card, index) => (
                        <SwiperSlide key={index} className="aspect-[341/424] justify-center items-start" style={{ maxWidth: '330px', width: '80vw', display: "flex"}}>
                            <PrimaryCard
                                key={index}
                                name={card.year}
                                descriptions={card.champion}
                                testURL={card.testURL}
                                buttonText={card.buttonText}
                                imageURL={imageMap[card.year as CardName]}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PastChampion;