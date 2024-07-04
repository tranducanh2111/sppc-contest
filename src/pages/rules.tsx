import React, { Fragment } from 'react'
import Head from 'next/head'
// Components
import HeroSection from '@/page-sections/Rules/HeroSection'
import EligibilitySection from '@/page-sections/Rules/EligibilitySection'

const RulesPage: React.FC = () => {
    return (
        <Fragment>
            <Head>
                <title>SPPC Contest Rules</title>
            </Head>
            <div className="rules relative bg-white">
                <div className="max-w-[1170px] flex flex-col mx-auto mt-[1rem] md:mt-[2rem] mb-20 gap-[80px] px-5">
                    <HeroSection />
                </div>
                <EligibilitySection />
            </div>
        </Fragment>
    )
}

export default RulesPage