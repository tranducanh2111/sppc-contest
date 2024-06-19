// Card.js
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import ArrowSvg from '../../public/arrow-head.svg';


// Define the prop types for the Card component
type CardProps = {
    imageURL: StaticImageData | string;
    name: string;
    descriptions: string;
    testURL: string;
    buttonText: string;
};

const PrimaryCard: React.FC<CardProps> = ({ imageURL, name, descriptions, testURL, buttonText }) => {
  return (
    // <section className="h-[345px] sm:h-[460px] w-[255px] sm:w-[344px] rounded-[12px] bg-[#FBFDFF] shadow-lg">
    <section className="w-[80vw] aspect-[341/381] rounded-[12px] bg-[#FBFDFF] shadow-lg min-w-[241px] max-w-[330px] pb-[24px]">
        <figure className="relative w-[100%] h-[65%] mb-[12px] object-cover">
            <Image src={imageURL} alt={name} layout='fill' className='w-full h-full object-cover rounded-t-[12px]' />
        </figure>
        <article className='flex flex-col items-center px-[16px] sm:space-y-[12px] space-y-[9px]'>
            <h3 className='text-h3 text-primary font-semibold'>{name}</h3>
            <p className='overflow-y-hidden h-[44px] w-auto leading-[22px] text-grey text-body text-center'>{descriptions}</p>
            <Link href={testURL}>
                <Button
                    title={buttonText}
                    icon={ArrowSvg}
                    className='border border-solid text-[#FFFFFF] bg-secondary border-primary py-[6px] px-[15px] max-w-content'
                />
            </Link>
        </article>
    </section>
  );
};

export default PrimaryCard;