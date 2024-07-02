import React from 'react'
import Image from 'next/image'

// Resources
import TeamIcon from 'public/team.svg'
import WorldIcon from 'public/world.svg'
import SponsorIcon from 'public/sponsor_small.svg'
import VisitorIcon from 'public/visitor.svg'
import PrizeIcon from 'public/prize.svg'
import InteractionIcon from 'public/interaction.svg'

const statisticObject = [
    {
        icon: TeamIcon,
        statistic: '500 teams',
        description: 'registered the contests'
    },
    {
        icon: WorldIcon,
        statistic: '30 countries',
        description: 'participated worldwide'
    },
    {
        icon: SponsorIcon,
        statistic: '10 sponsors',
        description: 'contribute $100k sponsorship'
    },
    {
        icon: VisitorIcon,
        statistic: '20k visitors',
        description: 'on the contest website'
    },
    {
        icon: PrizeIcon,
        statistic: '$50,000',
        description: 'cash prizes and scholarships'
    },
    {
        icon: InteractionIcon,
        statistic: '10k interactions',
        description: 'on social media platforms'
    }
]

const KeyStatistic = () => {
  return (
    <section className="grid grid-cols-auto-fit gap-[1.5rem]">
        {statisticObject.map((statistic, index) => (
            <article key={index} className='flex gap-[2rem]'>
                <Image src={statistic.icon} alt={statistic.description} />
                <div className='flex flex-col gap-[0.75rem]'>
                    <h3 className='text-h3 text-primary'>{statistic.statistic}</h3>
                    <p className='text-body'>{statistic.description}</p>
                </div>
            </article>
        ))}
    </section>
  )
}

export default KeyStatistic