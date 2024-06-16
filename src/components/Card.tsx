import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'
import Heading from './Heading'
import Button from './Button'
import IconTakeTest from 'public/arrow-right.svg'
import Link from 'next/link'

export interface CardProps {
  title: string
  description: string
  imageSrc: StaticImageData
  url: string
}
const Card: React.FC<CardProps> = ({ title, description, url, imageSrc }) => {
  
  return (
    <div className="relative rounded-[12px] pb-[4px] shadow-lg max-w-[280px]">
      <div className="image">
        <Image
          src={imageSrc}
          alt="test"
          width={400}
          height={200}
          className="rounded-t-[12px] max-w-[280px] max-h-[200px]"
        />
      </div>

      <div className="text-center mx-[16px] mt-[8px]">
        <Heading
          title={title}
          description={description}
          titleClassName="text-h3 font-normal"
          descriptionClassName="text-[#00000073]"
        />
        <Link href={url}>
            <Button
              title="Take test here"
              icon={IconTakeTest}
              className="flex items-center my-[8px] text-primary px-0 flex-row-reverse"
              classNameIcon="ml-[4px]"
            />
        </Link>
      </div>
    </div>
  )
}
export default Card
