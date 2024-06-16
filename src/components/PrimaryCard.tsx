// Card.js
import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import ArrowSvg from '../../public/arrow-head.svg';

// Define the prop types for the Card component
type CardProps = {
    imageURL: string;
    name: string;
    descriptions: string;
    testURL: string;
};

const PrimaryCard: React.FC<CardProps> = ({ imageURL, name, descriptions, testURL }) => {
  return (
    // <section className="h-[345px] sm:h-[460px] w-[255px] sm:w-[344px] rounded-[12px] bg-[#FBFDFF] shadow-lg">
    <section className="h-[460px] w-[65vw]  sm:max-w-[340px] sm:w-[23.6vw] aspect-[341/381] rounded-[12px] bg-[#FBFDFF] shadow-lg">
        <figure className="relative w-[100%] h-[65%] mb-[12px] object-cover">
            <Image src={imageURL} alt={name} layout='fill' className='w-full h-full object-cover rounded-t-[12px]' />
        </figure>
        <article className='px-[16px] sm:space-y-[12px] space-y-[9px]'>
            <h3 className='text-h3'>{name}</h3>
            <p className='overflow-y-hidden h-[44px] w-auto leading-[22px] text-grey text-body'>{descriptions}</p>
            <Button
                title="Take test"
                icon={ArrowSvg}
                textColor="#FFFFFF"
                bgColor="#FF6D33"
                className='border border-solid border-[#FFA380] py-[6px] px-[15px] max-w-content'
            />
        </article>
    </section>
  );
};

export default PrimaryCard;