import React, { Fragment } from 'react'
import Head from 'next/head'
import HeroSection from '@/page-sections/Location/HeroSection'
import LocationHeroImage from '../../public/location-hero.png'

const Home: React.FC = () => {

  return (
    <Fragment>
        <Head>
            <title>SPPC Location</title>
        </Head>
        <div className="homepage relative bg-white">
            <HeroSection imageUrl={LocationHeroImage}/>
            <div className="max-w-[1170px] flex flex-col mx-auto mt-[2rem] mb-20 gap-[80px] px-5">
                
            </div>
        </div>
    </Fragment>
  )
}

export default Home