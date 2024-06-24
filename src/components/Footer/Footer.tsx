import React from 'react'
import Logo from 'public/Logo.svg'
import Image from 'next/image'
import Facebook from 'public/facebook.svg'
import Instagram from 'public/instagram.svg'
import Twitter from 'public/twitter.svg'
import Github from 'public/github.svg'
import Link from 'next/link'

const Footer: React.FC = () => {
    const socials = [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/',
          logo: Facebook,
        },
        {
          name: 'Instagram',
          link: 'https://www.instagram.com/',
          logo: Instagram,
        },
        {
          name: 'Twitter',
          link: 'https://twitter.com/',
          logo: Twitter,
        },
        {
          name: 'Github',
          link: 'https://github.com/',
          logo: Github,
        },
      ]

      // Contest Categories
      const contestCategories = [
        {
          name: 'Contest Rules',
          link: '/rules',
        },
        {
          name: 'Contest Location',
          link: '/location',
        },
        {
          name: 'Contest Timeline',
          link: '/timeline',
        },
        {
          name: 'Contest Fee',
          link: '/fee',
        },
      ]

      // About Categories
      const aboutCategories = [
        {
          name: 'About SPPC',
          link: '/about',
        },
        {
          name: 'Our Sponsors',
          link: '/sponsors',
        },
        {
          name: 'Meet Our Team',
          link: '/teams',
        },
        {
          name: 'Contact Us',
          link: '/terms-of-service',
        },
      ]

      // Support Us Categories
      const supportUsCategories = [
        {
          name: 'Donate',
          link: '/donate',
        },
        {
          name: 'Volunteer',
          link: '/volunteer',
        },
        {
          name: 'Host',
          link: '/host',
        },
        {
          name: 'Employers',
          link: '/terms-of-service',
        },
      ]

      // Resources Categories
      const resourcesCategories = [
        {
          name: 'News',
          link: '/news',
        },
        {
          name: 'Mentor & Mentee',
          link: '/mentor',
        },
        {
          name: 'Coding Tutorial',
          link: '/tutorial',
        },
        {
          name: 'Contest Champions',
          link: '/past-champion',
        },
      ]

    return (
        <section className="z-[39] relative">
          {/* Footer Main */}
          <div className='max-w-[1170px] px-5 mx-auto py-[3rem] flex flex-col md:justify-start lg:flex-row lg:justify-between gap-y-[3rem]'>
            {/* SPPC Logo Container */}
            <article className='flex flex-col items-between lg:items-start gap-[1.5rem]'>
              <Image src={Logo} alt="SPPC Logo" className='object-fit w-full max-w-[8rem]' />
              <span className='flex justify-start ml-[-8px]'>
                  {socials.map((social, index) => (
                    <div key={index} className="social_logo_item">
                      <Link href={social.link} target="_blank" rel="noreferrer">
                        <Image
                          src={social.logo}
                          alt={social.name}
                          width={20}
                          height={20}
                          className="mx-[8px]"
                        />
                      </Link>
                    </div>
                  ))}
              </span>
            </article>
            {/* Categories Container */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-x-[2rem] gap-y-[3rem]'>
              {/* Contest Categories */}
              <article className='flex flex-col gap-[0.5rem]'>
                <h3 className='text-primary text-h3 mb-[0.5rem]'>{new Date().getFullYear()} Contest</h3>
                { contestCategories.map((item, index) => (
                  <Link key={index} href={item.link} className='text-body'>
                    {item.name}
                  </Link>
                ))}
              </article>
              {/* About Categories */}
              <article className='flex flex-col gap-[0.5rem]'>
                <h3 className='text-primary text-h3 mb-[0.5rem]'>About Us</h3>
                { aboutCategories.map((item, index) => (
                  <Link key={index} href={item.link} className='text-body'>
                    {item.name}
                  </Link>
                ))}
              </article>
              {/* Support Us Categories */}
              <article className='flex flex-col gap-[0.5rem]'>
                <h3 className='text-primary text-h3 mb-[0.5rem]'>Support Us</h3>
                { supportUsCategories.map((item, index) => (
                  <Link key={index} href={item.link} className='text-body'>
                    {item.name}
                  </Link>
                ))}
              </article>
              {/* Resources Categories */}
              <article className='flex flex-col gap-[0.5rem]'>
                <h3 className='text-primary text-h3 mb-[0.5rem]'>Resources</h3>
                { resourcesCategories.map((item, index) => (
                  <Link key={index} href={item.link} className='text-body'>
                    {item.name}
                  </Link>
                ))}
              </article>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-secondary px-[30px] sm:px-[70px] py-[8px]">
            <div className="max-w-[1170px] mx-auto text-center sm:flex justify-between w-[100%] m-auto py-2 text-white">
              <p className="text-footnote">
                &copy; {new Date().getFullYear()} SPPC. All rights reserved.
              </p>
              <p className="text-footnote">
                Contact us:{' '}
                <a href="mailto:Jungtalents@gmail.com">tranducanh211103@gmail.com</a>
              </p>
            </div>
          </div>
        </section>
    )
}

export default Footer
