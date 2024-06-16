import React from 'react';
import SkillTestBox from '@/components/SkillTestBox';

type TestData = {
  test_name: string;
  skills: {
    skill_name: string;
    completedPart: number;
    totalPart: number;
    skillURL: string;
  }[];
};

interface SkillTestBoxListProps {
  testData: TestData;
}

const SkillTestBoxList: React.FC<SkillTestBoxListProps> = ({ testData }) => {
  return (
    <article className='w-full space-y-[12px]'>
      <h5 className='text-h5'>{testData.test_name}</h5>
      <div className='overflow-x-auto hide-scrollbar'>
        <div className='grid grid-cols-4 gap-[10px] sm:gap-[32px] sm:min-w-[608px]'>
          {testData.skills.map((skillData, skillIndex) => (
            <SkillTestBox
              key={skillIndex}
              skillName={skillData.skill_name}
              completedPart={skillData.completedPart}
              totalPart={skillData.totalPart}
              skillURL={skillData.skillURL}
              inProgress={skillData.completedPart > 0}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default SkillTestBoxList;
