import React, { useRef, useEffect } from 'react';
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
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        if (!scrollContainer) return;

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        const mouseDownHandler = (e : MouseEvent) => {
            isDown = true;
            scrollContainer.classList.add('active');
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        };

        const mouseLeaveHandler = () => {
            isDown = false;
            scrollContainer.classList.remove('active');
        };

        const mouseUpHandler = () => {
            isDown = false;
            scrollContainer.classList.remove('active');
        };

        const mouseMoveHandler = (e : MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2;
            scrollContainer.scrollLeft = scrollLeft - walk;
        };

        scrollContainer.addEventListener('mousedown', mouseDownHandler);
        scrollContainer.addEventListener('mouseleave', mouseLeaveHandler);
        scrollContainer.addEventListener('mouseup', mouseUpHandler);
        scrollContainer.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            scrollContainer.removeEventListener('mousedown', mouseDownHandler);
            scrollContainer.removeEventListener('mouseleave', mouseLeaveHandler);
            scrollContainer.removeEventListener('mouseup', mouseUpHandler);
            scrollContainer.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);

    return (
        <section className='max-w-[1170px] px-5 mx-auto mt-[80px] flex flex-col gap-[3rem]'>
            {/* Header */}
            <div className='block lg:grid lg:grid-cols-3 gap-x-[3rem]'>
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
            <div className="max-w-[1170px] w-full h-[400px] md:h-[420px] overflow-x-auto hide-scrollbar" ref={scrollContainerRef}>
                <div className="flex w-[200vw] md:w-full justify-between gap-x-[3rem] px-[0.5rem]">
                    {CardData.map((card, index) => (
                        <PrimaryCard
                            key={index}
                            name={card.name}
                            descriptions={card.descriptions}
                            testURL={card.testURL}
                            buttonText={card.buttonText}
                            imageURL={imageMap[card.name as CardName]}
                        />
                    ))}
                </div>
            </div>
        </section>
        
    );
};

export default ContestOverview;