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
      <h2 className="text-center text-3xl font-semibold mb-8">Schedule</h2>
      <div className="relative">
        {/* Middle SVG Line with Rocket and Flag Icons */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full flex flex-col items-center z-10">
          <div className="relative h-full w-[64px]">
            <div className="absolute top-0 transform -translate-y-1/2 z-20">
              <Image src={RocketIcon} alt="Rocket Icon" width={64} height={64} />
            </div>
            <svg height="100%" width="2" className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 z-0">
              {/* Adjusted line to span the height correctly */}
              <line y1="30px" y2="calc(100% - 13px)" stroke="black" strokeWidth="2" />
            </svg>
            <div className="absolute bottom-0 transform translate-y-1/2 z-20">
              <Image src={FlagIcon} alt="Flag Icon" width={64} height={64} />
            </div>
          </div>
        </div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`mb-12 relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            ref={el => (cardRefs.current[index] = el)}
            style={{ zIndex: 5 }} // Adjust the zIndex as needed for your layout
          >
            <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'text-left lg:pr-32' : 'text-right lg:pl-32'}`}>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left rounded-[12px] bg-[#FBFDFF] shadow-lg">
                {/* Ensure each Image component has width and height properties */}
                <figure className="relative w-[100%] h-[65%] object-cover rounded-t-[12px]">
                    <img src={item.image} alt={item.title} loading="lazy" className='w-full h-full object-cover rounded-t-[12px]' />
                </figure>
                <article className='flex flex-col items-center justify-center pt-[1.5rem] pb-[2rem] px-[16px] sm:space-y-[1.5rem] space-y-[9px]'>
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
