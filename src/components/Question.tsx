import React from 'react'

interface QuestionProps {
  title: string
  answers: string[],
  id: number,
  value: number,
  // eslint-disable-next-line no-unused-vars
  onClick: (index: number, answer: number) => void
}

const Question: React.FC<QuestionProps> = ({ title, answers, id, value, onClick }) => {
  const getAnswerLetter = (index: number) => {
    const Answer = ['A', 'B', 'C', 'D']
    return Answer[index]
  }

  return (
    <div className="flex flex-col items-start my-[12px]">
      <h5 className="text-left text-body font-bold">{title}</h5>
      <div className="answers">
        {answers.map((answer, index) => (
          <div
            className="answer flex items-center my-[6px] justify-start"
            key={index}>
            <div className="answer-letter px-[6px] rounded-full bg-primary text-white text-body">
              {getAnswerLetter(index)}
            </div>
            <input
              type="radio"
              name={`answer_${id}`} // Use a unique name for radio buttons within the same group
              id={`answer_${id}_${index}`} // Make sure each radio button has a unique ID
              className="w-[16px] h-[16px] mx-[8px]"
              checked={index == value}
              onChange={()=>onClick(id,index)}
            />
            <label htmlFor={`answer_${id}_${index}`}  className="mx-[4px]">
              {answer}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Question
