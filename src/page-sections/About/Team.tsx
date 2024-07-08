import React from 'react'

// Components
import SectionHeader from '@/components/SectionHeader'
import { PeopleCard } from '@/components/PeopleCard'

// Resources
import peopleList from '@/sample_data/peopleList.json'

const Team = () => {
    return (
        <div>
            <div className="flex flex-col xs:flex-row items-center justify-between">
                <SectionHeader 
                    headingText={'Meet Our Team!'}
                    paragraphText={"Discover the awesome people behind our mission - they're the ones making magic happen!"}
                    viewMoreLink={'/'}
                    showFilterBar={false}
                />
            </div>

            <div className="max-w-[791px] flex flex-col mx-auto sm:mt-[1rem] gap-[2rem]">
                {peopleList.map((person, index) => (
                    <PeopleCard
                        key={index}
                        img={person.img}
                        name={person.name}
                        position={person.position}
                        description={person.description}
                        order={index % 2 === 0 ? 'odd' : 'even'}
                    />
                ))}
            </div>
        </div>
    )
}

export default Team