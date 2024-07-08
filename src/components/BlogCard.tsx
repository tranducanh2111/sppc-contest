// Card.js
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import ThinArrow from "public/thin-arrow.svg"

// Define the prop types for the Card component
type CardProps = {
    imageURL: StaticImageData | string;
    category: string;
    name: string;
    descriptions: string;
    author: string;
    publishDate: string;
    testURL: string;
    buttonText: string;
};

const getFirstWord = (str: string): string => {
    if (!str) return '';
    return str.split(' ')[0];
};

const BlogCard: React.FC<CardProps> = ({ imageURL, category, name, descriptions, author, publishDate, testURL, buttonText }) => {
  return (
    <section className="w-full aspect-[341/381] rounded-[12px] bg-[#FBFDFF] shadow-lg pb-[8px]">
        <figure className="relative w-[100%] h-[65%] mb-[12px] object-cover rounded-t-[12px]">
            <Image src={imageURL} alt={name} loading="lazy" layout='fill' className='w-full h-full object-cover rounded-t-[12px]' />
        </figure>
        <article className='px-[16px]'>
            <h4 className='overflow-y-hidden text-footnote text-[0.875rem] text-secondary font-semibold line-clamp-1 mb-[0.25rem]'>{category}</h4>
            <h3 className='text-h3 text-primary font-semibold line-clamp-1 mb-[0.75rem]'>{name}</h3>
            <p className='max-h-[176px] overflow-y-hidden md:h-[44px] w-auto leading-[22px] text-body md:line-clamp-2 mb-[1.25rem]'>{descriptions}</p>
            <div className='flex items-center justify-between gap-[1.5rem]'>
                <Link href={testURL}>
                    <Button className='font-medium text-primary' icon={ThinArrow} title={buttonText} style={{padding: 0, margin: 0}}/>
                </Link>
                <span className='text-footnote text-grey'>By {getFirstWord(author)} | {publishDate}</span>
            </div>
            
        </article>
    </section>
  );
};

export default BlogCard;