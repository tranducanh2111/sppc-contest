import React, { Fragment } from 'react'
import Head from 'next/head'
// Components
import HeroSection from '@/page-sections/Location/HeroSection'
import VenueGeneral from '@/page-sections/Location/VenueGeneral'
import VenueDetail from '@/page-sections/Location/VenueDetail'
import ContactCard from '@/components/ContactCard'

// Resources for this location page's components
import LocationHeroImage from '../../public/location-hero.png'
import EventDetail from '@/components/EventDetail'

// Resources for EventDetail Component
import TimeLineImage from '../../public/timeline.png'
import CostImage from '../../public/cost.png'

const CardData = [
  {
    "name": "Timeline",
    "descriptions": "Embark on an exhilarating journey through our contest timeline, filled with exciting challenges!",
    "testURL": "/timeline",
    "image": TimeLineImage
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
        <div className="location relative bg-white">
            <HeroSection imageUrl={LocationHeroImage}/>
            <div className="max-w-[1170px] flex flex-col mx-auto mt-[80px] mb-20 gap-[80px] px-5">
                <VenueGeneral />
                <VenueDetail />
                <ContactCard />
            </div>
            <EventDetail cardData={CardData}/>
        </div>
    </Fragment>
  )
}

export default Location