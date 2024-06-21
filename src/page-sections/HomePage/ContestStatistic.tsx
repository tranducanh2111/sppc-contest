import React from 'react'
import Image from 'next/image'
import HeadingSection from '@/components/SectionHeader'
import StudentIcon from '../../../public/student.svg'
import UniversityIcon from '../../../public/university.svg'
import CountryIcon from '../../../public/country.svg'
import CompetitionIcon from '../../../public/competition.svg'
import ContestStatIllustration from '../../../public/contest-stat-illustration.svg'

const ContestStatistic = () => {
    return (
        <section className='flex flex-col'>
            {/* Header */}
            <HeadingSection
                headingText="About SPPC"
                paragraphText='The South Pacific Programming Contests annually unite coding enthusiasts. Participants register, submit solutions, and compete in challenges ranging from beginner to advanced. The website serves as a central hub for contest details, celebrating winners and volunteers. Sponsored by organizations, the contests promote talent and collaboration in programming.'
                viewMoreLink=''
                showFilterBar={false}
            />
            {/* Body */}
            <section className='flex flex-col lg:grid lg:grid-cols-homepage-contest-stat gap-[2rem]'>
                <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-1 gap-y-[1.25rem]'>
                    <h3 className='text-h3 xs:col-span-2 lg:col-span-1'>Ready to test your coding skills? Join SPPC for thrilling challenges, valuable learning opportunities, and win prestigious honors!</h3>
                    {/* Stat 1 */}
                    <article className='flex items-center gap-x-[1rem]'>
                        <Image
                            src={StudentIcon}
                            alt="Location Icon"
                            loading="lazy"
                        />
                        <div className='flex flex-col gap-y-[0.5rem]'>
                            <h4 className='text-h4'>50000</h4>
                            <p className='text-body'>students per year</p>
                        </div>
                    </article>
                    {/* Stat 2 */}
                    <article className='flex items-center gap-x-[1rem]'>
                        <Image
                            src={UniversityIcon}
                            alt="Location Icon"
                            loading="lazy"
                        />
                        <div className='flex flex-col gap-y-[0.5rem]'>
                            <h4 className='text-h4'>3000</h4>
                            <p className='text-body'>universities</p>
                        </div>
                    </article>
                    {/* Stat 3 */}
                    <article className='flex items-center gap-x-[1rem]'>
                        <Image
                            src={CountryIcon}
                            alt="Location Icon"
                            loading="lazy"
                        />
                        <div className='flex flex-col gap-y-[0.5rem]'>
                            <h4 className='text-h4'>111</h4>
                            <p className='text-body'>countries</p>
                        </div>
                    </article>
                    {/* Stat 4 */}
                    <article className='flex items-center gap-x-[1rem]'>
                        <Image
                            src={CompetitionIcon}
                            alt="Location Icon"
                            loading="lazy"
                        />
                        <div className='flex flex-col gap-y-[0.5rem]'>
                            <h4 className='text-h4'>400</h4>
                            <p className='text-body'>on-site competitions</p>
                        </div>
                    </article>
                </div>
                <div className='flex items-center'>
                    <Image
                        src={ContestStatIllustration}
                        alt="Location Icon"
                        loading="lazy"
                    />
                </div>
            </section>
        </section>
    )
}

export default ContestStatistic