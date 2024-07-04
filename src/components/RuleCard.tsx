// components/RuleCard.js
import React from 'react';

interface Detail
{
    heading: string;
    description: string;
}

interface RuleCardProps
{
    ruleNumber: number;
    title: string;
    details: Detail[];
}

const RuleCard: React.FC<RuleCardProps> = ({ ruleNumber, title, details }) => {
  return (
    <div className="relative flex flex-col lg:items-center lg:grid lg:grid-cols-3 bg-gray-100 gap-[1.5rem] py-[2rem] px-[4rem] rounded-[16px] shadow-lg mb-[0.75rem]">
        <p className="absolute -top-[84px] left-[50px] text-[96px] font-bold text-gray-200">
            RULE {ruleNumber}
        </p>
        <h2 className="text-h2 text-primary lg:col-span-1">{title}</h2>
        <div className='lg:col-span-2'>
            <ul className="flex flex-wrap gap-[0.5rem]">
                {details.map((detail, index) => (
                    <li key={index} className="inline">
                        <p className="text-gray-700"><span className='text-primary font-semibold'>{detail.heading}:</span> {detail.description}</p>
                    </li>
                ))}
            </ul>
        </div>

    </div>
  );
};

export default RuleCard;