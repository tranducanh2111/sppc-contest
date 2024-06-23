import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Button from '@/components/Button';
import ThinArrow from '../../public/thin-arrow.svg';

// Resources

interface SeconddaryCardProps {
    heading: string,
    paragraph: string,
    imageURL: string,
    imageLeft: boolean
}


const SecondaryCard : React.FC<SeconddaryCardProps>= (
    {
        heading,
        paragraph,
        imageURL,
        imageLeft
    }
) => {
    // Conditionally apply a class based on alignLeft prop
    const imageClass = imageLeft ? 'order-first lg:order-last' : 'order-first lg:order-first';

    return (
        <article className='flex flex-col lg:grid lg:grid-cols-2 gap-[1.75rem] lg:gap-[3rem]'>
            <div className='flex flex-col justify-center gap-[1rem] lg:gap-[1.5rem]'>
                <div className='flex flex-col gap-[0.5rem] lg:gap-[1rem]'>
                    <h3 className='text-h3'>{heading}</h3>
                    <p className='text-body'>{paragraph}</p>
                </div>
                <Button
                    title='View More'
                    className='text-primary font-medium w-fit'
                    style={{paddingLeft: 0, paddingRight: 0}}
                    icon={ThinArrow}/>
            </div>
            <img src={imageURL} alt="Venue Image" className={`rounded-[1rem] w-full h-full object-cover ${imageClass}`}/>
        </article>
    );
};

export default SecondaryCard;