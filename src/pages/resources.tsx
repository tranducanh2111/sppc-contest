import React, { Fragment } from 'react'
import Head from 'next/head'
// Components
import BannerSection from '@/page-sections/Resources/BannerSection'
import Workshop from '@/page-sections/Resources/Workshop'

// Resource
import Banner1 from 'public/banner-1.jpg'
import Banner3 from 'public/banner-3.jpg'
import Banner4 from 'public/banner-4.jpg'
import Banner5 from 'public/banner-5.jpg'
import Banner6 from 'public/banner-6.jpg'

const ResourcesPage: React.FC = () => {
    const imageList = [Banner1, Banner3, Banner4, Banner5, Banner6]

    return (
        <Fragment>
            <Head>
                <title>SPPC Resources</title>
            </Head>
            <div className="rules relative bg-white">
                <BannerSection imageList={imageList}/>
                <div className="max-w-[1170px] flex flex-col mx-auto mt-20 mb-20 gap-[80px] px-5">
                    <Workshop />
                </div>
            </div>
        </Fragment>
    )
}

export default ResourcesPage