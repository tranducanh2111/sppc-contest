import React from 'react';
// Component
import SecondaryCard from '@/components/SecondaryCard';

// Resources
import VenueData from '@/sample_data/venueData.json'

const VenueDetail = () => {
    return (
        <section className='flex flex-col gap-[3rem]'>
             {VenueData.map((venue) => (
            <SecondaryCard
                key={venue.id}
                heading={venue.heading}
                paragraph={venue.paragraph}
                imageURL={venue.imageURL}
                imageLeft={venue.id % 2 === 0}
            />
        ))}
        </section>
    );
};

export default VenueDetail;