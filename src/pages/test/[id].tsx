import Heading, { HeadingTest } from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import Question from '@/components/Question'
import React, { useState } from 'react'
import getReadingQuestionByQuestionGroupID from '../api/getReadingQuestion'
import getSectionByGroupID from '../api/getSectionByGroupID'
import getAllQuestionGroupID from '../api/getGroup'
import { GetStaticPropsContext } from 'next'

interface Question {
  title: string
  answers: string[]
}

const Test: React.FC = ({passage,questions}:any) => {
  const [userAnswer, setUserAnswer] = useState(new Array(5).fill(-1))

  const handleClickAnswer = (index: number, answer: number) => {
    const newAnswer = [...userAnswer]
    newAnswer[index] = answer
    setUserAnswer(newAnswer)
  }

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
          title=""
          description={passage}
          titleClassName="text-h5 uppercase font-bold mt-[16px]"
        />
      </div>
      <div className="col-span-10 mt-[10px] mb-[340px] sm:mb-[300px] md:mb-[120px] md:mt-0  md:col-span-3">
        <Heading
          title="Question 1-5"
          description="Choose the correct answer."
          titleClassName="text-h5 font-bold"
        />
        {questions && questions.map((question: any, index: number) => (
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

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context
  const questions = await getReadingQuestionByQuestionGroupID(params?.id as string);
  const data = await getSectionByGroupID(params?.id as string);
  return {
    props: {
      passage: data.passage,
      questions: questions,
    },
  }
}

export async function getStaticPaths() {
  const data = await getAllQuestionGroupID()
  return {
    paths: data,
    fallback: true,
  }
}
export default Test
