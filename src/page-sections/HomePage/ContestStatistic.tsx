import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import HeadingSection from '@/components/SectionHeader'

const ContestStatistic = () => {
    return (
        <section className='flex flex-col gap-y-[4rem]'>
            {/* Header */}
            <HeadingSection
                headingText="About SPPC"
                paragraphText='The South Pacific Programming Contests annually unite coding enthusiasts. Participants register, submit solutions, and compete in challenges ranging from beginner to advanced. The website serves as a central hub for contest details, celebrating winners and volunteers. Sponsored by organizations, the contests promote talent and collaboration in programming.'
                viewMoreLink=''
                showFilterBar={false}
            />
            {/* Body */}
            <section className='grid grid-cols-homepage-contest-stat'>

            </section>
        </section>
    )
}

export default ContestStatistic