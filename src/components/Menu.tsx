import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomeIcon from 'public/home-icon.svg';
import DropdownIcon from 'public/dropdown.svg';
import ContestIcon from 'public/contest.svg';
import PeopleIcon from 'public/people.svg';
import SponsorIcon from 'public/sponsor.svg';
import ResourceIcon from 'public/resource.svg';
import ContactIcon from 'public/contact.svg';
import BlogIcon from 'public/blog.svg';
import ArrowHover from 'public/arrowhover.svg';
import Arrow from 'public/arrow.svg';

const Menu = () => {
  const [contestSubMenuOpen, setContestSubMenuOpen] = useState(false);
  const [resourceSubMenuOpen, setResourceSubMenuOpen] = useState(false);
  const [contestHoveredIndex, setContestHoveredIndex] = useState(-1);
  const [resourceHoveredIndex, setResourceHoveredIndex] = useState(-1);

  const toggleContestSubMenu = () => {
    setContestSubMenuOpen(!contestSubMenuOpen);
    if (!contestSubMenuOpen) {
      setResourceSubMenuOpen(false); // Close resource submenu when opening contest submenu
    }
  };

  const toggleResourceSubMenu = () => {
    setResourceSubMenuOpen(!resourceSubMenuOpen);
    if (!resourceSubMenuOpen) {
      setContestSubMenuOpen(false); // Close contest submenu when opening resource submenu
    }
  };

  const contestDetailMenu = [
    { name: 'Rules', isHovered: false, page: 'rules'},
    { name: 'Location', isHovered: false, page: 'location'},
    { name: 'Timeline', isHovered: false, page: 'timeline'},
    { name: 'Fee', isHovered: false, page: 'fee'},
  ];
  
  const resourceMenu = [
    { name: 'News', isHovered: false, page: 'news'},
    { name: 'Programming Tips', isHovered: false, page: 'programTip'},
    { name: 'Tutorial', isHovered: false, page: 'tutorial'},
  ];

  const handleContestHoverOn = (index: number) => {
    setContestHoveredIndex(index);
  };

  const handleContestHoverOff = () => {
    setContestHoveredIndex(-1);
  };

  const handleResourceHoverOn = (index: number) => {
    setResourceHoveredIndex(index);
  };

  const handleResourceHoverOff = () => {
    setResourceHoveredIndex(-1);
  };

  return (
    <div className="w-[232px] mt-2">
      {/* Homepage */}
      <button className="mb-[16px] hover:text-primary focus:outline-none flex items-center w-full text-left py-2 justify-between">
        <Link href="/">
          <div className="flex">
            <Image src={HomeIcon} alt="Home" width={20} height={20} />
            <p className="ml-2 tracking-wide">Homepage</p>
          </div>
        </Link>
      </button>
      {/* Contest Detail Group */}
      <button
        className={`text-${contestSubMenuOpen ? 'primary' : 'black mb-[16px]'}  hover:text-primary focus:outline-none flex items-center w-full text-left py-2 justify-between`}
        onClick={toggleContestSubMenu}
      >
        <div className="flex">
          <Image src={ContestIcon} alt="Logo" width={20} height={20} />
          <p className="ml-2 tracking-wide">Contest Details</p>
        </div>
        <Image src={DropdownIcon} alt="Logo" width={20} height={20} className="" />
      </button>
      {/* Contest Detail Categories */}
      <div
        className={`overflow-hidden w-full transition-all duration-300 ${
          contestSubMenuOpen ? 'h-auto' : 'h-0'
        }`}
      >
        <ul className="bg-white shadow-lg rounded">
          {contestDetailMenu.map((item, index) => (
            <li key={index}>
              <a
                className={`flex px-4 pl-8 py-2 ${
                  item.isHovered
                    ? 'bg-primary text-white'
                    : 'hover:bg-primary hover:text-white'
                }`}
                href={item.page}
                onMouseEnter={() => handleContestHoverOn(index)}
                onMouseLeave={handleContestHoverOff}
              >
                <Image
                  src={index === contestHoveredIndex ? ArrowHover : Arrow}
                  alt="Logo"
                  width={14}
                  height={14}
                  className="mr-2"
                />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* About Us */}
      <button className="mb-[16px] hover:text-primary focus:outline-none flex items-center w-full text-left py-2 justify-between">
        <Link href="/about">
          <div className="flex">
            <Image src={PeopleIcon} alt="About Us" width={20} height={20} />
            <p className="ml-2 tracking-wide">About Us</p>
          </div>
        </Link>
      </button>
      {/* Sponsor */}
      <button className="mb-[16px] hover:text-primary focus:outline-none flex items-center w-full text-left py-2 justify-between">
        <Link href="/sponsor">
          <div className="flex">
            <Image src={SponsorIcon} alt="Sponsors" width={20} height={20} />
            <p className="ml-2 tracking-wide">Sponsors</p>
          </div>
        </Link>
      </button>
      {/* Resources */}
      <button
        className={`text-${resourceSubMenuOpen ? 'primary' : 'black mb-[16px]'} hover:text-primary focus:outline-none flex items-center w-full text-left py-2 justify-between`}
        onClick={toggleResourceSubMenu}
      >
        <div className="flex">
          <Image src={ResourceIcon} alt="Logo" width={20} height={20} />
          <p className="ml-2 tracking-wide">Resources</p>
        </div>
        <Image src={DropdownIcon} alt="Logo" width={20} height={20} className="" />
      </button>
      {/* Resources Categories */}
      <div
        className={`overflow-hidden w-full transition-all duration-300 ${
          resourceSubMenuOpen ? 'h-auto' : 'h-0'
        }`}
      >
        <ul className="bg-white shadow-lg rounded">
          {resourceMenu.map((item, index) => (
            <li key={index}>
              <a
                className={`flex px-4 pl-8 py-2 ${
                  item.isHovered
                    ? 'bg-primary text-white'
                    : 'hover:bg-primary hover:text-white'
                }`}
                href={item.page}
                onMouseEnter={() => handleResourceHoverOn(index)}
                onMouseLeave={handleResourceHoverOff}
              >
                <Image
                  src={index === resourceHoveredIndex ? ArrowHover : Arrow}
                  alt="Logo"
                  width={14}
                  height={14}
                  className="mr-2"
                />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Contact Us */}
      <button className="mb-[16px] hover:text-primary focus:outline-none flex items-center w-full text-left py-2 justify-between">
        <Link href="/contact">
          <div className="flex">
            <Image src={ContactIcon} alt="Sponsors" width={20} height={20} />
            <p className="ml-2 tracking-wide">Contact Us</p>
          </div>
        </Link>
      </button>
      {/* Blog */}
      <button className="mb-[16px] hover:text-primary focus:outline-none flex items-center w-full text-left py-2 justify-between">
        <Link href="/blog">
          <div className="flex">
            <Image src={BlogIcon} alt="Blog" width={20} height={20} />
            <p className="ml-2 tracking-wide">Blog</p>
          </div>
        </Link>
      </button>
    </div>
  );
};

export default Menu;
