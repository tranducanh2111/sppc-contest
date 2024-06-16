import { useState } from 'react'
import Image from 'next/image'
import BookLib from 'public/book.svg'
import HomeIcon from 'public/home-icon.svg'
import DropdownIcon from 'public/dropdown.svg'
import ArrowHover from 'public/arrowhover.svg'
import Arrow from 'public/arrow.svg'

const Menu = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen)
  }

  const mockSubmenu = [
    { name: 'IELTS Exam', isHovered: false },
    { name: 'TOEIC Exam', isHovered: false },
  ]

  const handleHoverOn = (index: number) => {
    setHoveredIndex(index)
  }

  const handleHoverOff = () => {
    setHoveredIndex(-1)
  }

  return (
    <div className="w-full mt-2">
      <button
        className={`mb-[16px] hover:text-primary focus:outline-none flex items-center w-full text-left py-2 px-4 justify-between`}>
        <div className="flex">
          <Image src={HomeIcon} alt="Home" width={20} height={20} />
          <p className="ml-2 tracking-wide">Homepage</p>
        </div>
      </button>
      <button
        className={`text-${
          subMenuOpen ? 'primary' : 'black'
        } hover:text-primary focus:outline-none flex items-center w-full text-left py-2 px-4 justify-between`}
        onClick={toggleSubMenu}>
        <div className="flex">
          <Image src={BookLib} alt="Logo" width={20} height={20} />
          <p className="ml-2 tracking-wide">Exam Library</p>
        </div>
        <Image
          src={DropdownIcon}
          alt="Logo"
          width={20}
          height={20}
          className=""
        />
      </button>
      <div
        className={`overflow-hidden w-full transition-all duration-300 ${
          subMenuOpen ? 'h-auto' : 'h-0'
        }`}>
        <ul className="bg-white shadow-lg rounded">
          {mockSubmenu.map((item, index) => (
            <li key={index}>
              <a
                className={`flex px-4 pl-8 py-2 ${
                  item.isHovered
                    ? 'bg-primary text-white'
                    : 'hover:bg-primary hover:text-white'
                }`}
                href="collection"
                onClick={() => toggleSubMenu()}
                onMouseEnter={() => handleHoverOn(index)}
                onMouseLeave={() => handleHoverOff()}>
                <Image
                  src={index === hoveredIndex ? ArrowHover : Arrow}
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
    </div>
  )
}

export default Menu
