import React from 'react'

interface InputProps {
    placeHolder?: string;
    className?: string;
    type?: string
}

const Input: React.FC<InputProps> = ({
    placeHolder,
    className,
    type
}) => {
  
  return (
    <input type={type} placeholder={placeHolder} className={className}></input>
  )
}

export default Input
