import React from 'react'
import SkillTestBoxList from "@/components/SkillTestBoxList"
import HeadingSection from '@/components/SectionHeader'

const BookTest = () => {
    const dummyData = [
        {
            "testName": "IELTS Test",
            "testSkills": [
                {
                "skill": "Reading",
                "completedQuestion": 20,
                "totalQuestions": 40,
                "testURL": "/ielts/reading",
                },
                {
                "skill": "Listening",
                "completedQuestion": 15,
                "totalQuestions": 30,
                "testURL": "/ielts/listening"
                },
                {
                "skill": "Writing",
                "completedQuestion": 8,
                "totalQuestions": 10,
                "testURL": "/ielts/writing"
                },
                {
                "skill": "Speaking",
                "completedQuestion": 10,
                "totalQuestions": 15,
                "testURL": "/ielts/speaking"
                }
            ]
        },
        {
            "testName": "TOEFL Test",
            "testSkills": [
                {
                "skill": "Reading",
                "completedQuestion": 25,
                "totalQuestions": 50,
                "testURL": "/toefl/reading"
                },
                {
                "skill": "Listening",
                "completedQuestion": 18,
                "totalQuestions": 35,
                "testURL": "/toefl/listening"
                },
                {
                "skill": "Writing",
                "completedQuestion": 9,
                "totalQuestions": 12,
                "testURL": "/toefl/writing"
                },
                {
                "skill": "Speaking",
                "completedQuestion": 12,
                "totalQuestions": 20,
                "testURL": "/toefl/speaking"
                }
            ]
        }
    ]
      
  return (
    <section className='w-full sm:w-[1070px]'>
        <HeadingSection
            headingText='Book 1'
            paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            showFilterBar={false}
        />
        <div className='space-y-[20px] sm:space-y-[40px]'>
            {dummyData.map((data, index) => (
                <SkillTestBoxList testData={data} key={index}/>
            ))}
        </div>
    </section>
  )
}

export default BookTest