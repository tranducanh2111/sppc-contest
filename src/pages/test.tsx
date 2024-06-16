import Heading, { HeadingTest } from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import Question from '@/components/Question'
import React, { useEffect, useState } from 'react'
import getAllTests from './api/getTest'
import getSectionByID from './api/getSectionByID'

interface Question {
  title: string
  answers: string[]
}

const Test: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [sectionHTML, setSectionHTML] = useState<string>('')
  const [userAnswer, setUserAnswer] = useState(new Array(5).fill(-1))

  const handleClickAnswer = (index: number, answer: number) => {
    const newAnswer = [...userAnswer]
    newAnswer[index] = answer
    setUserAnswer(newAnswer)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch questions
        const questionsData = await getAllTests()
        setQuestions(questionsData)

        // Fetch section data
        const sectionID = '61655961-7924-4e52-ad0a-b808318fb16d' // Replace with the actual section ID you want to fetch
        const sectionData = await getSectionByID(sectionID)
        if (sectionData && sectionData.passage) {
          setSectionHTML(sectionData.passage)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="w-[90%] mx-auto grid grid-cols-10 gap-x-4">
      <div className="flex flex-col col-span-10 md:col-span-6 md:mb-[240px] lg:mb-0">
        <HeadingTest
          title="Question 1-5"
          description="The housing officer takes some details from the girl. </br>Complete the following form with NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer."
          testHeading="part 1: question 1-..."
          titleClassName="text-h5 font-bold"
        />
        <Paragraph
          title="Title 1"
          description={sectionHTML}
          titleClassName="text-h5 uppercase font-bold mt-[16px]"
        />
      </div>
      <div className="col-span-10 mt-[10px] mb-[340px] sm:mb-[300px] md:mb-[120px] md:mt-0  md:col-span-3">
        <Heading
          title="Question 1-5"
          description="Choose the correct answer."
          titleClassName="text-h5 font-bold"
        />
        {questions.map((question, index) => (
          <Question
            key={index}
            title={`${index + 1}) ${question.title}`}
            answers={question.answers}
            id={index}
            value={userAnswer[index]}
            onClick={handleClickAnswer}
          />
        ))}
      </div>
    </div>
  )
}

export default Test
