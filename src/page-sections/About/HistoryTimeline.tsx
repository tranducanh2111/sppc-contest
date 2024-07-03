import React, { useState } from 'react'
import MemberCard from '@/components/MemberCard'

// Resource
import teamMembers from '@/sample_data/contestHistory.json'

const HistoryTimeline: React.FC = () => {
    const [openCard, setOpenCard] = useState(1)

    const handleCardClick = (cardId: number) => {
        if (cardId === openCard) {
        setOpenCard(0)
        } else {
        setOpenCard(cardId)
        }
    }

    return (
        <section className="flex lg:flex-row pb-[40px] flex-col justify-evenly gap-10 sm:mx-auto mx-5">
            <div className="flex flex-col items-start gap-[1.5rem]">
                <h2 className="text-left text-h2 font-bold">A brief history...</h2>
                <p className='text-body'>The contest started in 2010 with a simple idea: to create a fun challenge for students to learn coding. Over the years, it grew in popularity, attracting participants from around the world by 2015. To ensure inclusivity, organizers made it easier for students from diverse backgrounds to join. In 2020, the contest evolved further, incorporating new technologies like artificial intelligence and blockchain to keep participants engaged and learning. Throughout its journey, the contest has remained committed to inspiring and empowering student programmers worldwide.</p>
            </div>

            <div className="flrx flex-col space-y-10 ">
            {teamMembers.map((member, index) => (
                <MemberCard
                    id={member.id}
                    key={index}
                    name={member.name}
                    time={member.time}
                    description={member.description}
                    image={member.image}
                    isHidden={openCard === member.id}
                    onToggle={() => handleCardClick(member.id)}
                    cardClassName={`sm:w[50rem] md:w-[35rem] ${
                        openCard !== member.id ? 'border shadow-none' : null
                    }`}
                />
            ))}
            </div>
        </section>
    )
}

export default HistoryTimeline