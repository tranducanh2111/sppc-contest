import React, { Fragment } from 'react'
import Head from 'next/head'
// Components
import HeroSection from '@/page-sections/Location/HeroSection'
import VenueGeneral from '@/page-sections/Location/VenueGeneral'
import VenueDetail from '@/page-sections/Location/VenueDetail'

// Resources for this location page's components
import LocationHeroImage from '../../public/location-hero.png'

const Home: React.FC = () => {

  return (
    <Fragment>
        <Head>
            <title>SPPC Location</title>
        </Head>
        <div className="homepage relative bg-white">
            <HeroSection imageUrl={LocationHeroImage}/>
            <div className="max-w-[1170px] flex flex-col mx-auto mt-[80px] mb-20 gap-[80px] px-5">
                <VenueGeneral />
                <VenueDetail />
            </div>
        </div>
    </Fragment>
  )
}

export default Home