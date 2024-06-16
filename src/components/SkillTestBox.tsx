import React from 'react'
import Button from '@/components/Button';
import Link from 'next/link';
import ArrowRightWhite from "../../public/arrow-right-white.svg"
import ArrowRightGrey from "../../public/arrow-right-grey.svg"

type SkillTestBoxProps = {
    skillName: string;
    completedPart: number;
    totalPart: number;
    skillURL: string;
    inProgress: boolean;
  };

const SkillTestBox : React.FC<SkillTestBoxProps> = ({ 
    skillName,
    completedPart,
    totalPart,
    skillURL,
    inProgress,
    }) => {

    return (
        <article className={`min-w-[80px] max-w-[128px] flex flex-col items-center rounded-[8px] space-y-[5px] sm:space-y-[8px] p-[5px] sm:p-[8px] ${inProgress ? 'border-[2.5px] sm:border-[4px] bg-[#FF5A1A] border-[#FFC8B3]' : 'border-[0.6px] sm:border-[1px] border-[#00000040]'}`}>
            <h4 className={`text-h4 ${inProgress ? 'text-[#FFFFFF]' : 'text-[#000000]'}`}>{completedPart}/{totalPart}</h4>
            <p className={`text-footnote ${inProgress ? 'text-[#FFFFFF]' : 'text-[#000000]'}`}>{skillName}</p>
            <Link href={skillURL}>
                <Button
                    title={"Start test"}
                    icon={inProgress ? ArrowRightWhite : ArrowRightGrey}
                    className={`w-full ${inProgress ? 'text-[#FFFFFF] bg-[#FF7F4D]' : 'text-[#000000] border-[#000000] border-[1px] opacity-25'}`}
                    classNameIcon='w-[10px] h-[10px] sm:w-[14px] sm:h-[14px]'
                />
            </Link>
        </article>
    )
}
export default SkillTestBox