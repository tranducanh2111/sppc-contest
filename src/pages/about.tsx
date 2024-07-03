import React, { Fragment } from 'react'
import Head from 'next/head'
// Components
import HeroSection from '@/page-sections/About/HeroSection'
import KeyStatistic from '@/page-sections/About/KeyStatistic'
import HistoryTimeline from '@/page-sections/About/HistoryTimeline'

// Resources
import HeroImage from 'public/about-hero.png'
import Mission from '@/page-sections/About/Mission'

const AboutUs: React.FC = () => {

  return (
    <Fragment>
        <Head>
            <title>About SPPC</title>
        </Head>
        <div className="about relative bg-white">
            <div className="max-w-[1170px] flex flex-col mx-auto mb-20 gap-[80px] px-5">
              <HeroSection imageUrl={HeroImage} />
              <KeyStatistic />
              <HistoryTimeline />
              <Mission />
            </div>
        </div>
    </Fragment>
  )
}

export default AboutUs