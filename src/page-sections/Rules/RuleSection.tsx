import React from 'react'
import RuleCard from '@/components/RuleCard'
import cardData from '@/sample_data/contestRule.json'

const RuleSection: React.FC = () => {
    return (
        <section className="">
            <h2 className='text-h2 text-center'>Contest Rule</h2>
            <div className='mt-[80px] flex flex-col gap-y-[80px]'>
                {cardData.map((card, index) => (
                    <RuleCard key={index} ruleNumber={index + 1} title={card.title} details={card.details} />
                ))}
            </div>
        </section>
    )
}

export default RuleSection