import { StaticImageData } from 'next/image'
import React, { forwardRef } from 'react'
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

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  title,
  onClick,
  icon,
  className,
  classNameIcon,
  style,
  disabled = false,
}, ref) => {
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
      ref={ref}
    >
      {icon && !title ? (
        <span className='flex items-center justify-center'>
          <Image
            src={icon}
            alt="Logo"
            width={14}
            height={14}
            className={classNameIcon}
          />
        </span>
      ) : icon && title ? (
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
      ) : (
        title
      )}
    </button>
  )
})

Button.displayName = 'Button'

export default Button