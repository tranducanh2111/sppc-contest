import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface PeopleCardProps {
  img: StaticImageData | string
  recColor: string
  name: string
  position: string
  description: string[]
  order: 'odd' | 'even'
}

export const PeopleCard: React.FC<PeopleCardProps> = ({
  img,
  recColor,
  name,
  position,
  description,
  order,
}: PeopleCardProps) => {
  return (
    <div className="flex justify-between">
        <div
            className={`relative flex w-[50%] max-h-[209px] min-h-[78.4px] aspect-[388/209] h-[35%] md:h-max
            ${order === 'even' ? 'order-last justify-end' : 'sm:mr-[39px] mr-[6px]'}`}
        >
            <Image
                src={img}
                width={280}
                height={180}
                alt="image"
                className={`mb-[29px] w-[72%] h-[86%] object-cover ${
                    order === 'odd' && 'mr-[108px]'
                }`}
            />
            <div
                className={`absolute w-[51%] h-[62%] ${recColor} opacity-50 bottom-0 ${
                    order === 'odd' ? 'right-0' : 'left-0'
                }`}
            />
        </div>

        <div className="w-[388px] flex flex-col sm:gap-[2rem] gap-[6px]">
            <div className='flex justify-between items-center'>
                <h4 className="text-h4 text-primary font-bold">{name}</h4>
                <p className='text-body text-grey'>{position}</p>
            </div>
            <ul className="grow pl-5 list-disc text-body w-[95%] sm:w-full">
                {description.map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}