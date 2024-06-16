import React from 'react'

interface HeadingProps {
  title: string
  description: string
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}
interface ExtendedHeadingProps extends HeadingProps {
  testHeading: string
}

const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: HeadingProps) => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <h2 className={`text-left ${titleClassName}`}>{title}</h2>
      <p className={`text-left text-body ${descriptionClassName}`} dangerouslySetInnerHTML={{__html:description}}>
        {/* {description} */}
      </p>
    </div>
  )
}

const HeadingTest: React.FC<ExtendedHeadingProps> = ({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  testHeading,
}: ExtendedHeadingProps) => {
  return (
  <div className="flex flex-col items-start">
    <h2 className="text-left text-h5 font-bold text-primary uppercase">{testHeading}</h2>
    <Heading title={title} description={description} className={className} titleClassName={titleClassName} descriptionClassName={descriptionClassName} />
  </div>)
}

export { HeadingTest }

export default Heading
