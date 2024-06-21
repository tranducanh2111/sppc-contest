import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image'
import Button from '@/components/Button'

// Import sponsor logos
import DeloitteLogo from '../../../public/deloitte.svg';
import TeslaLogo from '../../../public/tesla.svg';
import FacebookLogo from '../../../public/facebook-sponsor.svg';
import AWSLogo from '../../../public/aws.svg';
import TiktokLogo from '../../../public/tiktok.svg';
import GoogleLogo from '../../../public/google.svg';
import AccentureLogo from '../../../public/accenture.svg';
import XeroLogo from '../../../public/xero.svg';
import AppleLogo from '../../../public/apple.svg';
import CanvaLogo from '../../../public/canva.svg';
import OracleLogo from '../../../public/oracle.svg';
import SalesforceLogo from '../../../public/salesforce.svg';
import AdobeLogo from '../../../public/adobe.svg';
import CapgeminiLogo from '../../../public/capgemini.svg';
import EnvatoLogo from '../../../public/envato.svg';
import HeadingSection from '@/components/SectionHeader';
import ThinArrow from '../../../public/thin-arrow.svg';

const SponsorList = () => {
    const sponsors = [
        { src: DeloitteLogo, alt: "Deloitte" },
        { src: TeslaLogo, alt: "Tesla" },
        { src: XeroLogo, alt: "Xero" },
        { src: FacebookLogo, alt: "Facebook" },
        { src: TiktokLogo, alt: "Tiktok" },
        { src: GoogleLogo, alt: "Google" },
        { src: CanvaLogo, alt: "Canva" },
        { src: AccentureLogo, alt: "Accenture" },
        { src: AppleLogo, alt: "Apple" },
        { src: OracleLogo, alt: "Oracle" },
        { src: SalesforceLogo, alt: "Salesforce" },
        { src: AdobeLogo, alt: "Adobe" },
        { src: CapgeminiLogo, alt: "Capgemini" },
        { src: EnvatoLogo, alt: "Envato" },
        { src: AWSLogo, alt: "AWS" },
    ];

    return (
        <section className="max-w-screen overflow-hidden flex flex-col flex-wrap items-center gap-[2rem] md:gap-[3rem]">
            <div className='flex flex-col items-center flex-wrap px-5 gap-y-[0.75rem] md:gap-y-[1rem] max-w-[650px] mx-auto'>
                <h3 className='text-h3 font-semibold text-center'>Join our esteemed sponsors in empowering aspiring programmers and exposure to a diverse audience</h3>
                <Button title='Be our sponsors' icon={ThinArrow} className='text-primary'/>
            </div>
            <Swiper
                modules={[Pagination, Autoplay]}
                className="justify-start items-start gap-6 inline-flex h-[128px] mask-gradient"
                spaceBetween={12}
                slidesPerView="auto"
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false
                }}
                speed={2500}
                breakpoints={{
                    768:
                    {   centeredSlides: false,
                        spaceBetween: 12,
                    },
                    0:
                    {
                        centeredSlides: true,
                        spaceBetween: 8,
                    },
                }}
            >
                {sponsors.map((sponsor, index) => (
                    <SwiperSlide key={index} className="justify-center items-center gap-1" style={{ maxWidth: '200px', width: '100%', height: '128px', display: 'flex' }}>
                        <Image src={sponsor.src} alt={sponsor.alt} width={128} height={128} loading="lazy"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default SponsorList