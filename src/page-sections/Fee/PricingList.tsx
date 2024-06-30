import React from 'react'
// Component
import PricingCard from '@/components/PricingCard'
// Resources
import CardData from '@/sample_data/pricing.json'


const PricingList = () => {
    return (
        <section className='grid grid-cols-auto-fit box-border gap-[1.5rem]'>
            {CardData.map((card, index) => (
                <PricingCard
                    key={index}
                    cardName={card.name}
                    price={card.price}
                    forWho={card.forWho}
                    note={card.note}
                    description={card.description}
                    highlight={card.highlight}
              />
            ))}
        </section>
    )
}

export default PricingList