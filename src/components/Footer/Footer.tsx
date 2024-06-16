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

  const links = [
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Career',
      link: '/career',
    },
    {
      name: 'Support',
      link: '/support',
    },
    {
      name: 'Testimonials',
      link: '/testimonials',
    },
    {
      name: 'Terms of Service',
      link: '/terms-of-service',
    },
    {
      name: 'Privacy Policy',
      link: '/privacy-policy',
    },
    {
      name: 'Cookie Policy',
      link: '/cookie-policy',
    },
  ]
  return (
    <div className="z-[39] relative">
      <div className="w-[100%] px-[20px] sm:px-[70px] py-[40px] flex flex-row justify-between border-2">
        <div className="social max-w-[150px] sm:max-w-[300px]">
          <Link href={'/'}>
            <div className="logo">
              <Image
                src={Logo}
                alt="Logo"
                width={100}
                height={100}
                className="ml-[-16px]"
              />
            </div>
          </Link>
          <div className="description my-[12px]">
            <p className="text-body">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="social_logo flex justify-start ml-[-8px]">
            {socials.map((social, index) => (
              <div key={index} className="social_logo_item">
                <a href={social.link} target="_blank" rel="noreferrer">
                  <Image
                    src={social.logo}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="mx-[8px]"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="fast__link sm:mt-[20px] sm:mt-0">
          <h4 className="text-[#FF5A1A] text-body font-semibold text-left mb-[10px] sm:text-left sm:mb-0">
            Company
          </h4>
          <div className="flex flex-col justify-between">
            {links.map((link, index) => (
              <div key={index} className="fast__link_item">
                <Link href={link.link}>
                  <p className="text-body my-[5px] hover:text-primary">{link.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-secondary px-[30px] sm:px-[70px] py-[8px]">
        <div className="text-center sm:flex justify-between w-[100%] m-auto py-2 text-gray-600">
          <p className="text-footnote">
            &copy; {new Date().getFullYear()} Jung Talents. All rights reserved.
          </p>
          <p className="text-footnote">
            Contact us:{' '}
            <a href="mailto:Jungtalents@gmail.com">Jungtalents@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
