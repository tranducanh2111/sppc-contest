import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface BlockItemProps {
  img: StaticImageData
  recColor: string
  name: string
  text: { line1: string; line2: string; line3: string }
  order: 'odd' | 'even'
}

export const BlockItem: React.FC<BlockItemProps> = ({
  img,
  recColor,
  name,
  text,
  order,
}: BlockItemProps) => {
  return (
    <div className="flex justify-between">
      <div
        className={`relative flex w-[50%] max-h-[209px] min-h-[78.4px] aspect-[388/209] h-[35%] md:h-max ${
          order === 'even' ? 'order-last justify-end' : 'sm:mr-[39px] mr-[6px]'
        }`}>
        <Image
          src={img}
          width={280}
          height={180}
          alt="image"
          className={`mb-[29px] w-[72%] h-[86%] ${
            order === 'odd' && 'mr-[108px]'
          }`}
        />
        <div
          className={`absolute w-[51%] h-[62%] ${recColor} opacity-50 bottom-0 ${
            order === 'odd' ? 'right-0' : 'left-0'
          }`}
        />
      </div>

      <div className="w-[388px] flex flex-col sm:gap-3 gap-[6px]">
        <p className="text-h5 font-bold">{name}</p>
        <ul className="grow pl-5 list-disc text-footnote w-[95%] sm:w-full">
          <li>{text.line1}</li>
          <li>{text.line2}</li>
          <li>{text.line3}</li>
        </ul>
      </div>
    </div>
  )
}
