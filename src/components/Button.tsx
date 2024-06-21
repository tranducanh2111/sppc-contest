import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'

interface ButtonProps {
  title?: string
  onClick?: () => void
  icon?: StaticImageData
  className?: string
  classNameIcon?: string
  style?: React.CSSProperties;
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  icon,
  className,
  classNameIcon,
  style,
  disabled = false,
}: ButtonProps) => {
  // Manually concatenate class strings
  const buttonClasses = `flex items-center justify-center text-body px-[9px] sm:px-[15px] py-[8px] h-[36px] rounded-md transition duration-300 ease-in-out ${
    className || ''
  }`

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={title}
      style={style}
    >
      {icon ? (
          <span className='flex items-center justify-center gap-x-[0.5rem]'>
            <Image
              src={icon}
              alt="Logo"
              width={14}
              height={14}
              className={classNameIcon}
            />
            <span className='max-w-content text-body'>{title}</span>
          </span>
      )
      :(
        title
      )}
    </button>
  )
}

export default Button