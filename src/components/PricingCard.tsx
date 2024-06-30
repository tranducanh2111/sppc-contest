// Card.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

// Resource
import SeparateLineWhite from '../../public/separate_line_white.svg'
import SeparateLinePrimary from '../../public/separate_line_primary.svg'

// Define the prop types for the Card component
type CardProps = {
    cardName: string;
    price: number;
    forWho: string;
    note: string;
    description: string;
    highlight: boolean;
};

const PricingCard: React.FC<CardProps> = ({ cardName, price, forWho, note, description, highlight }) => {
  return (
    <article className={`flex flex-col gap-[1rem] p-[2.5rem] rounded-[16px] shadow-lg ${highlight ? 'bg-primary' : 'bg-white'}`}>
        <h4 className={`text-h4 ${highlight ? 'text-white' : 'text-primary'}`}>{cardName}</h4>
        {/* Fee */}
        <div className='flex gap-[0.5rem] items-center'>
            <p className={`text-[40px] font-bold w-fit ${highlight ? 'text-white' : 'text-primary'}`}>${price}</p>
            <div className='flex flex-col'>
                <p className={`text-body font-bold ${highlight ? 'text-white' : 'text-primary'}`}>{forWho}</p>
                <p className={`text-footnote ${highlight ? 'text-white' : 'text-primary'}`}>{note}</p>
            </div>
        </div>
        {highlight ?
            <Image src={SeparateLineWhite} alt='Separate Line White'/>
            :
            <Image src={SeparateLinePrimary} alt='Separate Line Primary'/>
        }
        <p className={`text-body h-[3rem] line-clamp-2 ${highlight ? 'text-white' : 'text-primary'}`}>{description}</p>
        <div className='flex flex-col flex-wrap gap-y-[1rem]'>
            <Link href="">
                <Button title='Register Now' className={`w-full font-semibold ${highlight ? 'text-primary bg-white' : 'text-white bg-primary'}`}/>
            </Link>
            <Link href="">
                <Button title='Learn More' className={`w-full font-semibold border border-solid ${highlight ? 'border-white text-white' : 'border-primary text-primary'}`}/>
            </Link>
        </div>
    </article>
  );
};

export default PricingCard;