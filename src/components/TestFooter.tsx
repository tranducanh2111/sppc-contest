import React from 'react'
// import { useRouter } from 'next/router'
import Button from './Button'
import RightArrow from '/public/arrowleftactive.svg'
import LeftArrow from '/public/arrowleftactive.svg'
import Clock from '/public/Clock.svg'
import Image from 'next/image'
import Countdown from './CountDown'
import SubmitIcon from '/public/submit_icon.svg'
import SolutionIcon from '/public/solution_icon.svg'
import ReviewIcon from '/public/review_icon.svg'
const TestFooter: React.FC = () => {
  // const router = useRouter();
  const [selectedSection, setSelectedSection] = React.useState(0)
  const [activeButton, setActiveButton] = React.useState(0)
  const sections = [
    {
      questionHaveDone: 4,
      questionTotal: 12,
      nameSection: 'Section 1',
    },
    {
      questionHaveDone: 4,
      questionTotal: 12,
      nameSection: 'Section 2',
    },
    {
      questionHaveDone: 4,
      questionTotal: 12,
      nameSection: 'Section 3',
    },
    {
      questionHaveDone: 4,
      questionTotal: 12,
      nameSection: 'Section 4',
    },
  ]

  const buttonAction = [
    {
      title: 'Submit',
      icon: SubmitIcon,
    },
    {
      title: 'Review',
      icon: ReviewIcon,
    },
    {
      title: 'Solution',
      icon: SolutionIcon,
    }
  ]

  // React.useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     if (url !== '/test') {
  //       console.log('App is changing to: ', url);
  //       localStorage.setItem('time',)
  //     }
  //   };

  //   router.events.on('routeChangeStart', handleRouteChange);

  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange);
  //   };
  // }, []);
  const now = new Date()
  const targetDate = new Date(now.getTime() + 40 * 60 * 1000).toISOString()
  return (
    <div className="footer fixed bottom-0 left-0 right-0 z-50 bg-white">
      <div className="w-[100%]">
        <div className="button m-auto flex items-center justify-between my-[4px] w-[80%] mx-auto">
          <Button
            title="Previous"
            icon={LeftArrow}
            className="flex items-center"
            classNameIcon="mr-[6px]"
            textColor="primary"
          />
          <Button
            title="Next"
            icon={RightArrow}
            className="flex items-center flex-row-reverse"
            classNameIcon="mx-[6px]"
            textColor="primary"
          />
        </div>
        <div className="time bg-[#F9F9F9]">
          <div className="w-[100%] xl:w-[80%] m-auto flex flex-col lg:flex-row items-center justify-between">
            <div className="section grid grid-cols-2 gap-4 sm:flex items-center justify-start py-[12px]">
              {sections.map((section, index) => (
                <button
                  className={`px-[8px] py-[4px] h-[60px] rounded-md transition duration-300 ease-in-out mx-[4px] border-[1px] ${
                    index == selectedSection
                      ? 'text-primary border-primary bg-[#FFEDE6]'
                      : 'border-[#00000073] text-[#00000073]'
                  }`}
                  key={index}
                  onClick={() => setSelectedSection(index)}>
                  <p className="text-body font-bold">
                    {section.questionHaveDone}/{section.questionTotal}
                  </p>
                  <p className="text-footnote w-[60px] h-[20px]">
                    {section.nameSection}
                  </p>
                </button>
              ))}
            </div>
            <div className="clock flex items-center my-[20px] md:my-0">
              <Image src={Clock} alt="Logo" width={36} height={36} />
              <Countdown targetDate={targetDate} />
            </div>
            <div className="btn_action flex justify-between items-center">
              {buttonAction.map((action, index) => (
                <Button
                  key={index}
                  title={action.title}
                  icon={action.icon}
                  className={`flex items-center border-[1px] py-[4px] px-[4px] sm:px-[15px] mx-[4px] rounded-md ${index==activeButton?'border-[#FF6D33] text-white':'border-[#00000073] text-[#00000073]'}`}
                  bgColor={index == activeButton ? 'primary' : ''}
                  classNameIcon="mx-[6px]"
                  onClick={() => setActiveButton(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestFooter
