import React, { Fragment } from 'react'
import Head from 'next/head'
import HeroIllustraion from '../../public/hero-image.svg'
// import CoursesSection from '@/page-sections/HomePage/CoursesSection'
import HeroSection from '@/page-sections/HomePage/HeroSection'
import ContestStatistic from '@/page-sections/HomePage/ContestStatistic'
import SponsorList from '@/page-sections/HomePage/SponsorList'
// import ContactSection from '@/page-sections/HomePage/ContactSection'
// import TestimonialsSection from '@/page-sections/HomePage/TestimonialsSection'
// import WorkshopSection from '@/page-sections/HomePage/WorkshopSection'
// import BookTest from 'public/Test.png'
// import CambridgeIelts16 from '../../public/cambridge16.png'
// import CambridgeIelts17 from '../../public/cambridge17.png'
// import BlocksSection from '@/page-sections/HomePage/BlocksSection'
// import ArticlesSection from '@/page-sections/HomePage/ArticlesSection'

const Home: React.FC = () => {
  // const imageList = [Banner, Banner,Banner,Banner]
  
  return (
    <Fragment>
      <Head>
        <title>South Pacific Programming Contest</title>
      </Head>
      <div className="homepage relative bg-white">
        <div className="max-w-[1170px] flex flex-col mx-auto mt-[2rem] mb-10 gap-[80px] px-5">
          <HeroSection imageUrl={HeroIllustraion}/>
          <ContestStatistic/>
          {/* <CoursesSection collectionList={collectionList}/>
          <WorkshopSection />
          <BlocksSection /> */}
        </div>
        <SponsorList />
        {/* <TestimonialsSection />
        <ArticlesSection/>
        <ContactSection/> */}
      </div>
    </Fragment>
  )
}

export default Home
