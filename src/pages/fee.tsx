import React, { Fragment } from 'react'
import Head from 'next/head'
// Components
import HeroSection from '@/page-sections/Fee/HeroSection'
import ContactCard from '@/components/ContactCard'

// Resources for this location page's components
import LocationHeroImage from '../../public/location-hero.png'
import EventDetail from '@/components/EventDetail'
import PricingList from '@/page-sections/Fee/PricingList'

// Resources for EventDetail Component
import LocationImage from '../../public/venue-general-1.png'
import CostImage from '../../public/cost.png'

const CardData = [
    {
        "name": "Location",
        "descriptions": "Step into our modern convention center, the perfect venue for thrilling competitions!",
        "testURL": "/location",
        "image": LocationImage
    },
    {
        "name": "Cost",
        "descriptions": "Experience our contest with budget-friendly fees, and the opportunity to win fantastic rewards!",
        "testURL": "/fee",
        "image": CostImage
    }

  // Add more entries as needed
]

const Location: React.FC = () => {

  return (
    <Fragment>
        <Head>
            <title>SPPC Location</title>
        </Head>
        <div className="homepage relative bg-white">
            <HeroSection imageUrl={LocationHeroImage}/>
            <div className="max-w-[1170px] flex flex-col mx-auto mt-[80px] mb-20 gap-[80px] px-5">
                <PricingList />
                <ContactCard />
            </div>
            <EventDetail cardData={CardData}/>
        </div>
    </Fragment>
  )
}

export default Location