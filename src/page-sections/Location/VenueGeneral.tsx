import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

// Resources
import ThinArrow from '../../../public/thin-arrow.svg';
import VenueGeneralImage1 from '../../../public/venue-general-1.png'

const VenueGeneral = () => {
    return (
        <section className='flex flex-col lg:grid lg:grid-cols-3 gap-[2rem]'>
            <div className="flex flex-col justify-center items-center lg:items-start gap-[1.5rem]">
                <h2 className='text-h2'>Location</h2>
                <p className='text-body text-center lg:text-left'>Experience world-class events and unparalleled sophistication at the International Convention Centre Sydney.</p>
                <Button title='Explore ICCS' icon={ThinArrow} className='text-primary w-fit' style={{padding: 0}}/>
            </div>
            <div className='col-span-2 flex flex-col sm:grid sm:grid-cols-2 gap-[2rem]'>
                <Image src={VenueGeneralImage1} alt='Venue Image 1' className='aspect-square'/>
                {/* Embed Google Map for venue location */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5719615639305!2d151.19893500420844!3d-33.87492052692471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae38ab9a3ff3%3A0x19fc67061ce45a9!2sICC%20Sydney!5e0!3m2!1sen!2sau!4v1718951527776!5m2!1sen!2sau"
                    width="100%"
                    loading="lazy"
                    style={{ borderRadius: 16, aspectRatio: 1/1}}
                    allowFullScreen={true}
                    aria-hidden="false"
                    tabIndex={0}
                ></iframe>
            </div>
        </section>
    );
};

export default VenueGeneral;