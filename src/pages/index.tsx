import React, { Fragment } from 'react'
import Head from 'next/head'
import HeroIllustraion from '../../public/hero-image.svg'
import HeroSection from '@/page-sections/HomePage/HeroSection'
import ContestStatistic from '@/page-sections/HomePage/ContestStatistic'
import SponsorList from '@/page-sections/HomePage/SponsorList'
import ContestOverview from '@/page-sections/HomePage/ContestOverview'
import PastChampion from '@/page-sections/HomePage/PastChampion'
import Register from '@/page-sections/HomePage/Register'

const Home: React.FC = () => {  
  return (
    <Fragment>
      <Head>
        <title>South Pacific Programming Contest</title>
      </Head>
      <div className="homepage relative bg-white">
        <div className="max-w-[1170px] flex flex-col mx-auto mt-[1rem] mb-20 gap-[80px] px-5">
          <HeroSection imageUrl={HeroIllustraion}/>
          <ContestStatistic/>
        </div>
        <SponsorList />
        <ContestOverview />
        <PastChampion />
        <div className="max-w-[1170px] flex flex-col mx-auto mt-20 px-5">
          <Register />
        </div>
      </div>
    </Fragment>
  )
}

export default Home