import { useEffect, useRef } from 'react';
import Image from 'next/image';
import timelineData from '@/sample_data/timeline.json';
import RocketIcon from '../../../public/rocket.svg';
import FlagIcon from '../../../public/finish-flag.svg';

const Timeline = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heights = useRef<number[]>([]);

  useEffect(() => {
    // Calculate and store heights of each card
    cardRefs.current.forEach((card, index) => {
      if (card) {
        heights.current[index] = card.clientHeight;
      }
    });

    // Apply dynamic margin-top for cards with index >= 2
    cardRefs.current.forEach((card, index) => {
      if (card && index >= 1) {
        card.style.marginTop = `-${heights.current[index] / 2.5}px`;
      }
    });
  }, []);

  return (
    <section>
      <div className='mb-[6rem] flex flex-col gap-[0.75rem]'>
        <h2 className="text-center text-h2 text-primary font-semibold">Schedule</h2>
        <p className='text-body text-center mx-auto max-w-[800px]'>All participants are required to attend the Preliminary Contest scheduled for <span className='text-primary font-semibold'>August 31, 2024</span>. This contest will be conducted in a distributed manner, with live sites established at multiple universities throughout the region.</p>
      </div>

      <div className="relative">
        {/* Middle SVG Line with Rocket and Flag Icons */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full flex flex-col items-center z-50">
          <div className="relative h-full w-[64px]">
            <div className="absolute -top-7 transform -translate-y-1/2 z-10">
              <Image src={RocketIcon} alt="Rocket Icon" width={64} height={64} />
            </div>
            <svg height="calc(100%-64px)" width="2" className="absolute top-0 bottom-[0] left-1/2 transform -translate-x-1/2 z-0">
              <line x1="1" y1="0" x2="1" y2="100%" stroke="black" strokeWidth="2" />
            </svg>
            <div className="absolute -bottom-3 transform translate-y-1/2 z-10">
              <Image src={FlagIcon} alt="Flag Icon" width={64} height={64} />
            </div>
          </div>
        </div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`mb-12 relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            ref={el => (cardRefs.current[index] = el)}
            style={{ zIndex: 1 }}
          >
            {/* Connecting Line */}
            <div className={`absolute ${index % 2 === 1 ? 'left-[calc(50%-1px)]' : 'right-[calc(50%-1px)]'} top-1/2 transform -translate-y-1/2 w-[35%] h-0.5 bg-black z-0`} />

            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'text-left md:pr-16 lg:pr-32' : 'text-right md:pl-16 lg:pl-32'} z-50`}>
              <div className="flex flex-col items-center md:items-start text-center md:text-left rounded-[12px] bg-[#FBFDFF] shadow-lg">
                <figure className="relative w-[100%] h-[65%] object-cover rounded-t-[12px]">
                    <img src={item.image} alt={item.title} loading="lazy" className='w-full h-full object-cover rounded-t-[12px]' />
                </figure>
                <article className='flex flex-col items-center justify-center pt-[0.75rem] lg:pt-[1.5rem] pb-[1.25rem] lg:pb-[2rem] px-[1rem] lg:px-[2rem] sm:space-y-[1.5rem] space-y-[9px]'>
                  <span className='flex flex-col w-full gap-[0.5rem]'>
                    <h3 className='text-h3 text-primary font-semibold line-clamp-1'>{item.title}</h3>
                    <p className='overflow-y-hidden w-auto leading-[22px] text-grey text-bodyline-clamp-2'>{item.time}</p>
                  </span>
                  <span className='flex flex-col w-full gap-[0.5rem]'>
                    <p className='text-body underline font-bold'>Notes:</p>
                    <p className='overflow-y-hidden w-auto leading-[22px] text-grey text-body'>{item.note}</p>
                  </span>
                </article>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;