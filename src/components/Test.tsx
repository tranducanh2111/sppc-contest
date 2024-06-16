import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'
import Heading from './Heading'
import Button from './Button'
import IconTakeTest from 'public/icon-take-test.svg'

export interface TestProps {
  title: string
  description: string
  imageSrc: StaticImageData
  url: string
}
const Test: React.FC<TestProps> = ({ title, description, url, imageSrc }) => {
  const handleClick = () => {
    console.log(url) // eslint-disable-line no-console
    //handle to redirect to url
  }
  return (
    <div className="relative rounded-b-lg shadow-lg">
      <div className='image'>
          <Image src={imageSrc} alt="test" width={500} height={150} className='rounded-t-lg' />
      </div>
      <div className='rounded-b-lg border-[1px]'>
          <div className='text-center mb-[10px] mx-[16px] mt-[16px]'>
              <Heading title={title} description={description} titleClassName='text-h5 font-bold' descriptionClassName='text-[#00000073]' />
              <Button title="Take test" onClick={handleClick} icon={IconTakeTest} className='flex items-center my-[8px] bg-[#FFEDE6] text-[#FF5A1A] py-[6.4px] px-[15px] border-[#FFA380] border-[1px]' classNameIcon='mr-[4px]'/>
          </div>
      </div>
    </div>
  )
}
export default Test
