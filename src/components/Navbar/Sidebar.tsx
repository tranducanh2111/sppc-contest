import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Search from './Search';
import SideLogo from 'public/Sidebar.svg';
import HomeIcon from 'public/home-icon.svg';
import ContestIcon from 'public/contest.svg';
import PeopleIcon from 'public/people.svg';
import SponsorIcon from 'public/sponsor.svg';
import ResourceIcon from 'public/resource.svg';
import ContactIcon from 'public/contact.svg';
import BlogIcon from 'public/blog.svg';
import Menu from '../Menu';

export interface SidebarModalProps {
  isOpen: boolean;
  closeSidebar: () => void;
  openSidebar: () => void;
}

const categories = [
  { href: '/', src: HomeIcon, alt: 'Home' },
  { href: '/rules', src: ContestIcon, alt: 'Contest Rules' },
  { href: '/about', src: PeopleIcon, alt: 'About Us' },
  { href: '/sponsor', src: SponsorIcon, alt: 'Sponsors' },
  { href: '/resources', src: ResourceIcon, alt: 'Resources' },
  { href: '/contact', src: ContactIcon, alt: 'Contact Us' },
  { href: '/blog', src: BlogIcon, alt: 'Blog' },
];

const SidebarModal = ({ isOpen, closeSidebar, openSidebar }: SidebarModalProps) => {
  return (
    <>
      <div className={`fixed inset-0 z-50 sm:z-0 ${isOpen ? 'block bg-black opacity-50 sm:opacity-0' : 'hidden'}`} onClick={closeSidebar}></div>

      {/* Extended sidebar */}
      <div className={`sm:relative fixed inset-y-0 right-0 sm:left-0 top-0 z-50 sm:z-0 bg-white mr-0 ${isOpen ? 'w-[260px]' : 'w-[70px] invisible sm:visible duration-0'} duration-100`}>
        <div className='fixed'>
          <div className={`px-4 justify-between flex items-center w-full mb-[24px] ${!isOpen && 'hidden'}`}>
            <div className="hidden sm:block">
              <h2 className="text-xl font-semibold">Dashboard</h2>
            </div>
            <button className="pl-[104px] hidden sm:block" onClick={closeSidebar}>
              <Image src={SideLogo} alt="Logo" width={20} height={20} />
            </button>
          </div>
          <div className={`fixed ${!isOpen && 'hidden'} px-4 pt-2`}>
            <div className='w-[230px] md:hidden block'>
              <Search />
            </div>
            <Menu />
          </div>
        </div>
      </div>

      {/* Small sidebar */}
      <div className={`bg-[#EEEEEE] hidden sm:block w-[70px] fixed z-50 sm:z-0 top-21 ${isOpen ? 'invisible' : 'visible'} duration-50`}>
        <div className="p-[8px] flex flex-col justify-items-stretch justify-start bg-white items-center">
          <div className="menu_bar mb-[50px] cursor-pointer" onClick={openSidebar}>
            <Image src={SideLogo} alt="Logo" width={20} height={20} />
          </div>
          {/* Render categories dynamically */}
          {categories.map((category, index) => (
            <Link key={index} href={category.href}>
              <div className="menu_bar mb-[36px] cursor-pointer">
                <Image src={category.src} alt={category.alt} width={20} height={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SidebarModal;