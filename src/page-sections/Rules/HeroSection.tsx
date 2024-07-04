import React from 'react'
import Image from 'next/image'
// Resources
import MainImage from 'public/rule-main-1.png'
import SubImage1 from 'public/rule-sub-1.png'
import SubImage2 from 'public/rule-sub-2.png'
import SubImage3 from 'public/rule-sub-3.png'

const HeroSection: React.FC = () => {
    return (
        <section className='flex flex-col lg:grid lg:grid-cols-2 gap-y-[1.5rem] gap-x-[2rem]'>
            <div className='flex flex-col flex-wrap gap-[1rem]'>
                <h2 className='text-h2'><span className='text-primary'>2024</span> SPPC</h2>
                <h1 className='text-h1 uppercase'>Contest Rule</h1>
                <div className='hidden lg:grid grid-cols-3 gap-[1.5rem] mt-[2rem]'>
                    <Image src={SubImage1} alt='Sub Image 1' className='object-cover rounded-[16px]'/>
                    <Image src={SubImage2} alt='Sub Image 2' className='object-cover rounded-[16px]'/>
                    <Image src={SubImage3} alt='Sub Image 3' className='object-cover rounded-[16px]'/>
                </div>
            </div>
            <Image src={MainImage} alt='Main Image' className='h-full object-cover rounded-[16px]'/>
        </section>
    )
}

export default HeroSection